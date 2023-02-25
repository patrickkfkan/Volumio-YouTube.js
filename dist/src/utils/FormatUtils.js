var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var _a, _FormatUtils_el, _FormatUtils_generateAdaptationSet, _FormatUtils_generateRepresentationVideo, _FormatUtils_generateRepresentationAudio;
import { Constants } from './index.js';
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
                    if ((chunk_end >= format.content_length) || options.range) {
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
                                for (var _e = true, _f = __asyncValues(streamToIterable(body)), _g; _g = yield _f.next(), _b = _g.done, !_b;) {
                                    _d = _g.value;
                                    _e = false;
                                    try {
                                        const chunk = _d;
                                        controller.enqueue(chunk);
                                    }
                                    finally {
                                        _e = true;
                                    }
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
    static toDash(streaming_data, url_transformer = (url) => url, format_filter, cpn, player) {
        if (!streaming_data)
            throw new InnertubeError('Streaming data not available');
        let filtered_streaming_data;
        if (format_filter) {
            filtered_streaming_data = {
                formats: streaming_data.formats.filter((fmt) => !(format_filter(fmt))),
                adaptive_formats: streaming_data.adaptive_formats.filter((fmt) => !(format_filter(fmt))),
                expires: streaming_data.expires,
                dash_manifest_url: streaming_data.dash_manifest_url,
                hls_manifest_url: streaming_data.hls_manifest_url
            };
        }
        else {
            filtered_streaming_data = streaming_data;
        }
        const { adaptive_formats } = filtered_streaming_data;
        if (!adaptive_formats.length)
            throw new InnertubeError('No adaptive formats found');
        const length = adaptive_formats[0].approx_duration_ms / 1000;
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
        __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateAdaptationSet).call(this, document, period, adaptive_formats, url_transformer, cpn, player);
        return Platform.shim.serializeDOM(document);
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
}, _FormatUtils_generateAdaptationSet = function _FormatUtils_generateAdaptationSet(document, period, formats, url_transformer, cpn, player) {
    const mime_types = [];
    const mime_objects = [[]];
    formats.forEach((video_format) => {
        if (!video_format.index_range || !video_format.init_range) {
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
        // When the video has multiple different audio tracks/langues we want to include the extra information in the manifest
        if (mime_objects[i][0].has_audio && mime_objects[i][0].language) {
            const languages = [];
            const language_objects = [[]];
            mime_objects[i].forEach((format) => {
                const language_index = languages.indexOf(format.language);
                if (language_index > -1) {
                    language_objects[language_index].push(format);
                }
                else {
                    languages.push(format.language);
                    language_objects.push([]);
                    language_objects[languages.length - 1].push(format);
                }
            });
            // The lang attribute has to go on the AdaptationSet element, so we need a separate adaptation set for each language
            for (let j = 0; j < languages.length; j++) {
                const first_format = language_objects[j][0];
                const children = [];
                if (first_format.audio_track) {
                    let role;
                    if (first_format.audio_track.audio_is_default) {
                        role = 'main';
                    }
                    else if (first_format.is_dubbed) {
                        role = 'dub';
                    }
                    else {
                        role = 'alternate';
                    }
                    children.push(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'Role', {
                        schemeIdUri: 'urn:mpeg:dash:role:2011',
                        value: role
                    }));
                }
                const set = __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'AdaptationSet', {
                    id: `${set_id++}`,
                    mimeType: mime_types[i].split(';')[0],
                    startWithSAP: '1',
                    subsegmentAlignment: 'true',
                    lang: languages[j]
                }, children);
                period.appendChild(set);
                language_objects[j].forEach((format) => {
                    __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateRepresentationAudio).call(this, document, set, format, url_transformer, cpn, player);
                });
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
            mime_objects[i].forEach((format) => {
                if (format.has_video) {
                    __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateRepresentationVideo).call(this, document, set, format, url_transformer, cpn, player);
                }
                else {
                    __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateRepresentationAudio).call(this, document, set, format, url_transformer, cpn, player);
                }
            });
        }
    }
}, _FormatUtils_generateRepresentationVideo = function _FormatUtils_generateRepresentationVideo(document, set, format, url_transformer, cpn, player) {
    var _b, _c, _d, _e, _f, _g;
    const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');
    if (!format.index_range || !format.init_range)
        throw new InnertubeError('Index and init ranges not available', { format });
    const url = new URL(format.decipher(player));
    url.searchParams.set('cpn', cpn || '');
    set.appendChild(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'Representation', {
        id: (_b = format.itag) === null || _b === void 0 ? void 0 : _b.toString(),
        codecs,
        bandwidth: (_c = format.bitrate) === null || _c === void 0 ? void 0 : _c.toString(),
        width: (_d = format.width) === null || _d === void 0 ? void 0 : _d.toString(),
        height: (_e = format.height) === null || _e === void 0 ? void 0 : _e.toString(),
        maxPlayoutRate: '1',
        frameRate: (_f = format.fps) === null || _f === void 0 ? void 0 : _f.toString()
    }, [
        __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'BaseURL', {}, [
            document.createTextNode((_g = url_transformer(url)) === null || _g === void 0 ? void 0 : _g.toString())
        ]),
        __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'SegmentBase', {
            indexRange: `${format.index_range.start}-${format.index_range.end}`
        }, [
            __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'Initialization', {
                range: `${format.init_range.start}-${format.init_range.end}`
            })
        ])
    ]));
}, _FormatUtils_generateRepresentationAudio = function _FormatUtils_generateRepresentationAudio(document, set, format, url_transformer, cpn, player) {
    var _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function* () {
        const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');
        if (!format.index_range || !format.init_range)
            throw new InnertubeError('Index and init ranges not available', { format });
        const url = new URL(format.decipher(player));
        url.searchParams.set('cpn', cpn || '');
        set.appendChild(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'Representation', {
            id: (_b = format.itag) === null || _b === void 0 ? void 0 : _b.toString(),
            codecs,
            bandwidth: (_c = format.bitrate) === null || _c === void 0 ? void 0 : _c.toString(),
            audioSamplingRate: (_d = format.audio_sample_rate) === null || _d === void 0 ? void 0 : _d.toString()
        }, [
            __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'AudioChannelConfiguration', {
                schemeIdUri: 'urn:mpeg:dash:23003:3:audio_channel_configuration:2011',
                value: ((_e = format.audio_channels) === null || _e === void 0 ? void 0 : _e.toString()) || '2'
            }),
            __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'BaseURL', {}, [
                document.createTextNode((_f = url_transformer(url)) === null || _f === void 0 ? void 0 : _f.toString())
            ]),
            __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'SegmentBase', {
                indexRange: `${format.index_range.start}-${format.index_range.end}`
            }, [
                __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, 'Initialization', {
                    range: `${format.init_range.start}-${format.init_range.end}`
                })
            ])
        ]));
    });
};
export default FormatUtils;
//# sourceMappingURL=FormatUtils.js.map