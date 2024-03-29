var _a, _FormatUtils_el, _FormatUtils_generateAdaptationSet, _FormatUtils_generateRepresentationVideo, _FormatUtils_generateRepresentationAudio, _FormatUtils_generateSegmentInformation, _FormatUtils_getOTFSegmentInformation;
import { __asyncValues, __awaiter, __classPrivateFieldGet } from "tslib";
import * as Constants from './Constants.js';
import { getStringBetweenStrings, InnertubeError, Platform, streamToIterable } from './Utils.js';
class FormatUtils {
    static download(options, actions, playability_status, streaming_data, player, cpn) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((playability_status === null || playability_status === void 0 ? void 0 : playability_status.status) === 'UNPLAYABLE')
                throw new InnertubeError('Video is unplayable', { error_type: 'UNPLAYABLE' });
            if ((playability_status === null || playability_status === void 0 ? void 0 : playability_status.status) === 'LOGIN_REQUIRED')
                throw new InnertubeError('Video is login required', { error_type: 'LOGIN_REQUIRED' });
            if (!streaming_data)
                throw new InnertubeError('Streaming data not available.', { error_type: 'NO_STREAMING_DATA' });
            const opts = Object.assign({ quality: '360p', type: 'video+audio', format: 'mp4', range: undefined }, options);
            const format = this.chooseFormat(opts, streaming_data);
            const format_url = format.decipher(player);
            // If we're not downloading the video in chunks, we just use fetch once.
            if (opts.type === 'video+audio' && !options.range) {
                const response = yield actions.session.http.fetch_function(`${format_url}&cpn=${cpn}`, {
                    method: 'GET',
                    headers: Constants.STREAM_HEADERS,
                    redirect: 'follow'
                });
                // Throw if the response is not 2xx
                if (!response.ok)
                    throw new InnertubeError('The server responded with a non 2xx status code', { error_type: 'FETCH_FAILED', response });
                const body = response.body;
                if (!body)
                    throw new InnertubeError('Could not get ReadableStream from fetch Response.', { error_type: 'FETCH_FAILED', response });
                return body;
            }
            // We need to download in chunks.
            const chunk_size = 1048576 * 10; // 10MB
            let chunk_start = (options.range ? options.range.start : 0);
            let chunk_end = (options.range ? options.range.end : chunk_size);
            let must_end = false;
            let cancel;
            const readable_stream = new Platform.shim.ReadableStream({
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                start() { },
                pull: (controller) => __awaiter(this, void 0, void 0, function* () {
                    if (must_end) {
                        controller.close();
                        return;
                    }
                    if ((chunk_end >= (format.content_length ? format.content_length : 0)) || options.range) {
                        must_end = true;
                    }
                    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                        var _b, e_1, _c, _d;
                        try {
                            cancel = new AbortController();
                            const response = yield actions.session.http.fetch_function(`${format_url}&cpn=${cpn}&range=${chunk_start}-${chunk_end || ''}`, {
                                method: 'GET',
                                headers: Object.assign({}, Constants.STREAM_HEADERS
                                // XXX: use YouTube's range parameter instead of a Range header.
                                // Range: `bytes=${chunk_start}-${chunk_end}`
                                ),
                                signal: cancel.signal
                            });
                            const body = response.body;
                            if (!body)
                                throw new InnertubeError('Could not get ReadableStream from fetch Response.', { video: this, error_type: 'FETCH_FAILED', response });
                            try {
                                for (var _e = true, _f = __asyncValues(streamToIterable(body)), _g; _g = yield _f.next(), _b = _g.done, !_b; _e = true) {
                                    _d = _g.value;
                                    _e = false;
                                    const chunk = _d;
                                    controller.enqueue(chunk);
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (!_e && !_b && (_c = _f.return)) yield _c.call(_f);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                            chunk_start = chunk_end + 1;
                            chunk_end += chunk_size;
                            resolve();
                            return;
                        }
                        catch (e) {
                            reject(e);
                        }
                    }));
                }),
                cancel(reason) {
                    return __awaiter(this, void 0, void 0, function* () {
                        cancel.abort(reason);
                    });
                }
            }, {
                highWaterMark: 1,
                size(chunk) {
                    return chunk.byteLength;
                }
            });
            return readable_stream;
        });
    }
    /**
     * Selects the format that best matches the given options.
     * @param options - Options
     * @param streaming_data - Streaming data
     */
    static chooseFormat(options, streaming_data) {
        if (!streaming_data)
            throw new InnertubeError('Streaming data not available');
        const formats = [
            ...(streaming_data.formats || []),
            ...(streaming_data.adaptive_formats || [])
        ];
        const requires_audio = options.type ? options.type.includes('audio') : true;
        const requires_video = options.type ? options.type.includes('video') : true;
        const language = options.language || 'original';
        const quality = options.quality || 'best';
        let best_width = -1;
        const is_best = ['best', 'bestefficiency'].includes(quality);
        const use_most_efficient = quality !== 'best';
        let candidates = formats.filter((format) => {
            if (requires_audio && !format.has_audio)
                return false;
            if (requires_video && !format.has_video)
                return false;
            if (options.format !== 'any' && !format.mime_type.includes(options.format || 'mp4'))
                return false;
            if (!is_best && format.quality_label !== quality)
                return false;
            if (best_width < format.width)
                best_width = format.width;
            return true;
        });
        if (!candidates.length)
            throw new InnertubeError('No matching formats found', { options });
        if (is_best && requires_video)
            candidates = candidates.filter((format) => format.width === best_width);
        if (requires_audio && !requires_video) {
            const audio_only = candidates.filter((format) => {
                if (language !== 'original') {
                    return !format.has_video && format.language === language;
                }
                return !format.has_video && format.is_original;
            });
            if (audio_only.length > 0) {
                candidates = audio_only;
            }
        }
        if (use_most_efficient) {
            // Sort by bitrate (lower is better)
            candidates.sort((a, b) => a.bitrate - b.bitrate);
        }
        else {
            // Sort by bitrate (higher is better)
            candidates.sort((a, b) => b.bitrate - a.bitrate);
        }
        return candidates[0];
    }
    static toDash(streaming_data, url_transformer = (url) => url, format_filter, cpn, player, actions) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!streaming_data)
                throw new InnertubeError('Streaming data not available');
            let adaptive_formats;
            if (format_filter) {
                adaptive_formats = streaming_data.adaptive_formats.filter((fmt) => !(format_filter(fmt)));
            }
            else {
                adaptive_formats = streaming_data.adaptive_formats;
            }
            if (!adaptive_formats.length)
                throw new InnertubeError('No adaptive formats found');
            const length = adaptive_formats[0].approx_duration_ms / 1000;
            // DASH spec: https://standards.iso.org/ittf/PubliclyAvailableStandards/c083314_ISO_IEC%2023009-1_2022(en).zip
            const document = new Platform.shim.DOMParser().parseFromString('<?xml version="1.0" encoding="utf-8"?><MPD />', 'application/xml');
            const mpd = document.querySelector('MPD');
            const period = document.createElement('Period');
            mpd.replaceWith(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'MPD', {
                xmlns: 'urn:mpeg:dash:schema:mpd:2011',
                minBufferTime: 'PT1.500S',
                profiles: 'urn:mpeg:dash:profile:isoff-main:2011',
                type: 'static',
                mediaPresentationDuration: `PT${length}S`,
                'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                'xsi:schemaLocation': 'urn:mpeg:dash:schema:mpd:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd'
            }, [
                period
            ]));
            yield __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateAdaptationSet).call(this, document, period, adaptive_formats, url_transformer, cpn, player, actions);
            return Platform.shim.serializeDOM(document);
        });
    }
}
_a = FormatUtils, _FormatUtils_el = function _FormatUtils_el(document, tag, attrs, children = []) {
    const el = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
        value && el.setAttribute(key, value);
    }
    for (const child of children) {
        if (typeof child === 'undefined')
            continue;
        el.appendChild(child);
    }
    return el;
}, _FormatUtils_generateAdaptationSet = function _FormatUtils_generateAdaptationSet(document, period, formats, url_transformer, cpn, player, actions) {
    var _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const mime_types = [];
        const mime_objects = [[]];
        formats.forEach((video_format) => {
            if ((!video_format.index_range || !video_format.init_range) && !video_format.is_type_otf) {
                return;
            }
            const mime_type = video_format.mime_type;
            const mime_type_index = mime_types.indexOf(mime_type);
            if (mime_type_index > -1) {
                mime_objects[mime_type_index].push(video_format);
            }
            else {
                mime_types.push(mime_type);
                mime_objects.push([]);
                mime_objects[mime_types.length - 1].push(video_format);
            }
        });
        let set_id = 0;
        for (let i = 0; i < mime_types.length; i++) {
            // When the video has multiple different audio tracks we want to include the extra information in the manifest
            if (mime_objects[i][0].has_audio && mime_objects[i][0].audio_track) {
                const track_ids = [];
                const track_objects = [[]];
                mime_objects[i].forEach((format) => {
                    var _b, _c;
                    const id_index = track_ids.indexOf((_b = format.audio_track) === null || _b === void 0 ? void 0 : _b.id);
                    if (id_index > -1) {
                        track_objects[id_index].push(format);
                    }
                    else {
                        track_ids.push((_c = format.audio_track) === null || _c === void 0 ? void 0 : _c.id);
                        track_objects.push([]);
                        track_objects[track_ids.length - 1].push(format);
                    }
                });
                // The lang attribute has to go on the AdaptationSet element and the Role element goes inside the AdaptationSet too, so we need a separate adaptation set for each language and role
                for (let j = 0; j < track_ids.length; j++) {
                    const first_format = track_objects[j][0];
                    const children = [];
                    let role;
                    if ((_b = first_format.audio_track) === null || _b === void 0 ? void 0 : _b.audio_is_default) {
                        role = 'main';
                    }
                    else if (first_format.is_dubbed) {
                        role = 'dub';
                    }
                    else if (first_format.is_descriptive) {
                        role = 'description';
                    }
                    else {
                        role = 'alternate';
                    }
                    children.push(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'Role', {
                        schemeIdUri: 'urn:mpeg:dash:role:2011',
                        value: role
                    }), __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'Label', {
                        id: set_id.toString()
                    }, [
                        document.createTextNode((_c = first_format.audio_track) === null || _c === void 0 ? void 0 : _c.display_name)
                    ]));
                    const set = __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'AdaptationSet', {
                        id: `${set_id++}`,
                        mimeType: mime_types[i].split(';')[0],
                        startWithSAP: '1',
                        subsegmentAlignment: 'true',
                        lang: first_format.language,
                        // Non-standard attribute used by shaka instead of the standard Label element
                        label: (_d = first_format.audio_track) === null || _d === void 0 ? void 0 : _d.display_name
                    }, children);
                    period.appendChild(set);
                    for (const format of track_objects[j]) {
                        yield __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateRepresentationAudio).call(this, document, set, format, url_transformer, cpn, player, actions);
                    }
                }
            }
            else {
                const set = __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'AdaptationSet', {
                    id: `${set_id++}`,
                    mimeType: mime_types[i].split(';')[0],
                    startWithSAP: '1',
                    subsegmentAlignment: 'true'
                });
                period.appendChild(set);
                for (const format of mime_objects[i]) {
                    if (format.has_video) {
                        yield __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateRepresentationVideo).call(this, document, set, format, url_transformer, cpn, player, actions);
                    }
                    else {
                        yield __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateRepresentationAudio).call(this, document, set, format, url_transformer, cpn, player, actions);
                    }
                }
            }
        }
    });
}, _FormatUtils_generateRepresentationVideo = function _FormatUtils_generateRepresentationVideo(document, set, format, url_transformer, cpn, player, actions) {
    var _b, _c, _d, _e, _f, _g;
    return __awaiter(this, void 0, void 0, function* () {
        const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');
        const url = new URL(format.decipher(player));
        url.searchParams.set('cpn', cpn || '');
        const representation = __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'Representation', {
            id: (_b = format.itag) === null || _b === void 0 ? void 0 : _b.toString(),
            codecs,
            bandwidth: (_c = format.bitrate) === null || _c === void 0 ? void 0 : _c.toString(),
            width: (_d = format.width) === null || _d === void 0 ? void 0 : _d.toString(),
            height: (_e = format.height) === null || _e === void 0 ? void 0 : _e.toString(),
            maxPlayoutRate: '1',
            frameRate: (_f = format.fps) === null || _f === void 0 ? void 0 : _f.toString()
        });
        set.appendChild(representation);
        yield __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateSegmentInformation).call(this, document, representation, format, (_g = url_transformer(url)) === null || _g === void 0 ? void 0 : _g.toString(), actions);
    });
}, _FormatUtils_generateRepresentationAudio = function _FormatUtils_generateRepresentationAudio(document, set, format, url_transformer, cpn, player, actions) {
    var _b, _c, _d, _e, _f, _g;
    return __awaiter(this, void 0, void 0, function* () {
        const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');
        const url = new URL(format.decipher(player));
        url.searchParams.set('cpn', cpn || '');
        let id;
        if (format.audio_track) {
            id = `${(_b = format.itag) === null || _b === void 0 ? void 0 : _b.toString()}-${format.audio_track.id}`;
        }
        else {
            id = (_c = format.itag) === null || _c === void 0 ? void 0 : _c.toString();
        }
        const representation = __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'Representation', {
            id,
            codecs,
            bandwidth: (_d = format.bitrate) === null || _d === void 0 ? void 0 : _d.toString(),
            audioSamplingRate: (_e = format.audio_sample_rate) === null || _e === void 0 ? void 0 : _e.toString()
        }, [
            __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'AudioChannelConfiguration', {
                schemeIdUri: 'urn:mpeg:dash:23003:3:audio_channel_configuration:2011',
                value: ((_f = format.audio_channels) === null || _f === void 0 ? void 0 : _f.toString()) || '2'
            })
        ]);
        set.appendChild(representation);
        yield __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateSegmentInformation).call(this, document, representation, format, (_g = url_transformer(url)) === null || _g === void 0 ? void 0 : _g.toString(), actions);
    });
}, _FormatUtils_generateSegmentInformation = function _FormatUtils_generateSegmentInformation(document, representation, format, url, actions) {
    return __awaiter(this, void 0, void 0, function* () {
        if (format.is_type_otf) {
            if (!actions) {
                throw new InnertubeError('Unable to get segment durations for this OTF stream without an Actions instance', { format });
            }
            const { resolved_url, segment_durations } = yield __classPrivateFieldGet(this, _a, "m", _FormatUtils_getOTFSegmentInformation).call(this, url, actions);
            const segment_elements = [];
            for (const segment_duration of segment_durations) {
                let attributes;
                if (typeof segment_duration.repeat_count === 'undefined') {
                    attributes = {
                        d: segment_duration.duration.toString()
                    };
                }
                else {
                    attributes = {
                        d: segment_duration.duration.toString(),
                        r: segment_duration.repeat_count.toString()
                    };
                }
                segment_elements.push(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'S', attributes));
            }
            representation.appendChild(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'SegmentTemplate', {
                startNumber: '1',
                timescale: '1000',
                initialization: `${resolved_url}&sq=0`,
                media: `${resolved_url}&sq=$Number$`
            }, [
                __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'SegmentTimeline', {}, segment_elements)
            ]));
        }
        else {
            if (!format.index_range || !format.init_range)
                throw new InnertubeError('Index and init ranges not available', { format });
            representation.appendChild(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'BaseURL', {}, [
                document.createTextNode(url)
            ]));
            representation.appendChild(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'SegmentBase', {
                indexRange: `${format.index_range.start}-${format.index_range.end}`
            }, [
                __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'Initialization', {
                    range: `${format.init_range.start}-${format.init_range.end}`
                })
            ]));
        }
    });
}, _FormatUtils_getOTFSegmentInformation = function _FormatUtils_getOTFSegmentInformation(url, actions) {
    var _b;
    return __awaiter(this, void 0, void 0, function* () {
        // Fetch the first segment as it contains the segment durations which we need to generate the manifest
        const response = yield actions.session.http.fetch_function(`${url}&rn=0&sq=0`, {
            method: 'GET',
            headers: Constants.STREAM_HEADERS,
            redirect: 'follow'
        });
        // Example OTF video: https://www.youtube.com/watch?v=DJ8GQUNUXGM
        // There might have been redirects, if there were we want to write the resolved URL to the manifest
        // So that the player doesn't have to follow the redirects every time it requests a segment
        const resolved_url = response.url.replace('&rn=0', '').replace('&sq=0', '');
        // In this function we only need the segment durations and how often the durations are repeated
        // The segment count could be useful for other stuff though
        // The response body contains a lot of junk but the useful stuff looks like this:
        // Segment-Count: 922\r\n' +
        //   'Segment-Durations-Ms: 5120(r=920),3600,\r\n'
        const response_text = yield response.text();
        const segment_duration_strings = (_b = getStringBetweenStrings(response_text, 'Segment-Durations-Ms:', '\r\n')) === null || _b === void 0 ? void 0 : _b.split(',');
        if (!segment_duration_strings) {
            throw new InnertubeError('Failed to extract the segment durations from this OTF stream', { url });
        }
        const segment_durations = [];
        for (const segment_duration_string of segment_duration_strings) {
            const trimmed_segment_duration = segment_duration_string.trim();
            if (trimmed_segment_duration.length === 0) {
                continue;
            }
            let repeat_count;
            const repeat_count_string = getStringBetweenStrings(trimmed_segment_duration, '(r=', ')');
            if (repeat_count_string) {
                repeat_count = parseInt(repeat_count_string);
            }
            segment_durations.push({
                duration: parseInt(trimmed_segment_duration),
                repeat_count
            });
        }
        return {
            resolved_url,
            segment_durations
        };
    });
};
export default FormatUtils;
//# sourceMappingURL=FormatUtils.js.map