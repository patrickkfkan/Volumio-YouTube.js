import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message youtube.VisitorData
 */
export interface VisitorData {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: int32 timestamp = 5;
     */
    timestamp: number;
}
/**
 * @generated from protobuf message youtube.ChannelAnalytics
 */
export interface ChannelAnalytics {
    /**
     * @generated from protobuf field: youtube.ChannelAnalytics.Params params = 32;
     */
    params?: ChannelAnalytics_Params;
}
/**
 * @generated from protobuf message youtube.ChannelAnalytics.Params
 */
export interface ChannelAnalytics_Params {
    /**
     * @generated from protobuf field: string channel_id = 1001;
     */
    channelId: string;
}
/**
 * @generated from protobuf message youtube.InnertubePayload
 */
export interface InnertubePayload {
    /**
     * @generated from protobuf field: youtube.InnertubePayload.Context context = 1;
     */
    context?: InnertubePayload_Context;
    /**
     * This can be either a target id or a video id.
     *
     * @generated from protobuf field: optional string target = 2;
     */
    target?: string;
    /**
     * @generated from protobuf field: optional youtube.InnertubePayload.VideoSettings video_settings = 20;
     */
    videoSettings?: InnertubePayload_VideoSettings;
}
/**
 * @generated from protobuf message youtube.InnertubePayload.Context
 */
export interface InnertubePayload_Context {
    /**
     * @generated from protobuf field: youtube.InnertubePayload.Context.Client client = 1;
     */
    client?: InnertubePayload_Context_Client;
}
/**
 * @generated from protobuf message youtube.InnertubePayload.Context.Client
 */
export interface InnertubePayload_Context_Client {
    /**
     * @generated from protobuf field: int32 unkparam = 16;
     */
    unkparam: number;
    /**
     * @generated from protobuf field: string client_version = 17;
     */
    clientVersion: string;
    /**
     * @generated from protobuf field: string client_name = 18;
     */
    clientName: string;
}
/**
 * Note: I'm not entirely sure this message is only used for video settings
 *
 * @generated from protobuf message youtube.InnertubePayload.VideoSettings
 */
export interface InnertubePayload_VideoSettings {
    /**
     * @generated from protobuf field: int32 type = 1;
     */
    type: number;
    /**
     * @generated from protobuf field: youtube.InnertubePayload.VideoSettings.Thumbnail thumbnail = 3;
     */
    thumbnail?: InnertubePayload_VideoSettings_Thumbnail;
}
/**
 * @generated from protobuf message youtube.InnertubePayload.VideoSettings.Thumbnail
 */
export interface InnertubePayload_VideoSettings_Thumbnail {
    /**
     * @generated from protobuf field: bytes image_data = 1;
     */
    imageData: Uint8Array;
}
/**
 * @generated from protobuf message youtube.SoundInfoParams
 */
export interface SoundInfoParams {
    /**
     * @generated from protobuf field: youtube.SoundInfoParams.Sound sound = 94;
     */
    sound?: SoundInfoParams_Sound;
}
/**
 * @generated from protobuf message youtube.SoundInfoParams.Sound
 */
export interface SoundInfoParams_Sound {
    /**
     * @generated from protobuf field: youtube.SoundInfoParams.Sound.Params params = 1;
     */
    params?: SoundInfoParams_Sound_Params;
}
/**
 * @generated from protobuf message youtube.SoundInfoParams.Sound.Params
 */
export interface SoundInfoParams_Sound_Params {
    /**
     * @generated from protobuf field: youtube.SoundInfoParams.Sound.Params.Ids ids = 2;
     */
    ids?: SoundInfoParams_Sound_Params_Ids;
}
/**
 * @generated from protobuf message youtube.SoundInfoParams.Sound.Params.Ids
 */
export interface SoundInfoParams_Sound_Params_Ids {
    /**
     * @generated from protobuf field: string id_1 = 1;
     */
    id1: string;
    /**
     * @generated from protobuf field: string id_2 = 2;
     */
    id2: string;
    /**
     * @generated from protobuf field: string id_3 = 3;
     */
    id3: string;
}
/**
 * @generated from protobuf message youtube.NotificationPreferences
 */
export interface NotificationPreferences {
    /**
     * @generated from protobuf field: string channel_id = 1;
     */
    channelId: string;
    /**
     * @generated from protobuf field: youtube.NotificationPreferences.Preference pref_id = 2;
     */
    prefId?: NotificationPreferences_Preference;
    /**
     * @generated from protobuf field: optional int32 number_0 = 3;
     */
    number0?: number;
    /**
     * @generated from protobuf field: optional int32 number_1 = 4;
     */
    number1?: number;
}
/**
 * @generated from protobuf message youtube.NotificationPreferences.Preference
 */
export interface NotificationPreferences_Preference {
    /**
     * @generated from protobuf field: int32 index = 1;
     */
    index: number;
}
/**
 * @generated from protobuf message youtube.LiveMessageParams
 */
export interface LiveMessageParams {
    /**
     * @generated from protobuf field: youtube.LiveMessageParams.Params params = 1;
     */
    params?: LiveMessageParams_Params;
    /**
     * @generated from protobuf field: optional int32 number_0 = 2;
     */
    number0?: number;
    /**
     * @generated from protobuf field: optional int32 number_1 = 3;
     */
    number1?: number;
}
/**
 * @generated from protobuf message youtube.LiveMessageParams.Params
 */
export interface LiveMessageParams_Params {
    /**
     * @generated from protobuf field: youtube.LiveMessageParams.Params.Ids ids = 5;
     */
    ids?: LiveMessageParams_Params_Ids;
}
/**
 * @generated from protobuf message youtube.LiveMessageParams.Params.Ids
 */
export interface LiveMessageParams_Params_Ids {
    /**
     * @generated from protobuf field: string channel_id = 1;
     */
    channelId: string;
    /**
     * @generated from protobuf field: string video_id = 2;
     */
    videoId: string;
}
/**
 * @generated from protobuf message youtube.GetCommentsSectionParams
 */
export interface GetCommentsSectionParams {
    /**
     * @generated from protobuf field: youtube.GetCommentsSectionParams.Context ctx = 2;
     */
    ctx?: GetCommentsSectionParams_Context;
    /**
     * @generated from protobuf field: int32 unk_param = 3;
     */
    unkParam: number;
    /**
     * @generated from protobuf field: youtube.GetCommentsSectionParams.Params params = 6;
     */
    params?: GetCommentsSectionParams_Params;
}
/**
 * @generated from protobuf message youtube.GetCommentsSectionParams.Context
 */
export interface GetCommentsSectionParams_Context {
    /**
     * @generated from protobuf field: string video_id = 2;
     */
    videoId: string;
}
/**
 * @generated from protobuf message youtube.GetCommentsSectionParams.Params
 */
export interface GetCommentsSectionParams_Params {
    /**
     * @generated from protobuf field: optional string unk_token = 1;
     */
    unkToken?: string;
    /**
     * @generated from protobuf field: optional youtube.GetCommentsSectionParams.Params.Options opts = 4;
     */
    opts?: GetCommentsSectionParams_Params_Options;
    /**
     * @generated from protobuf field: optional youtube.GetCommentsSectionParams.Params.RepliesOptions replies_opts = 3;
     */
    repliesOpts?: GetCommentsSectionParams_Params_RepliesOptions;
    /**
     * @generated from protobuf field: optional int32 page = 5;
     */
    page?: number;
    /**
     * @generated from protobuf field: string target = 8;
     */
    target: string;
}
/**
 * @generated from protobuf message youtube.GetCommentsSectionParams.Params.Options
 */
export interface GetCommentsSectionParams_Params_Options {
    /**
     * @generated from protobuf field: string video_id = 4;
     */
    videoId: string;
    /**
     * @generated from protobuf field: int32 sort_by = 6;
     */
    sortBy: number;
    /**
     * @generated from protobuf field: int32 type = 15;
     */
    type: number;
}
/**
 * @generated from protobuf message youtube.GetCommentsSectionParams.Params.RepliesOptions
 */
export interface GetCommentsSectionParams_Params_RepliesOptions {
    /**
     * @generated from protobuf field: string comment_id = 2;
     */
    commentId: string;
    /**
     * @generated from protobuf field: youtube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts unkopts = 4;
     */
    unkopts?: GetCommentsSectionParams_Params_RepliesOptions_UnkOpts;
    /**
     * @generated from protobuf field: optional string channel_id = 5;
     */
    channelId?: string;
    /**
     * @generated from protobuf field: string video_id = 6;
     */
    videoId: string;
    /**
     * @generated from protobuf field: int32 unk_param_1 = 8;
     */
    unkParam1: number;
    /**
     * @generated from protobuf field: int32 unk_param_2 = 9;
     */
    unkParam2: number;
}
/**
 * @generated from protobuf message youtube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts
 */
export interface GetCommentsSectionParams_Params_RepliesOptions_UnkOpts {
    /**
     * @generated from protobuf field: int32 unk_param = 1;
     */
    unkParam: number;
}
/**
 * @generated from protobuf message youtube.CreateCommentParams
 */
export interface CreateCommentParams {
    /**
     * @generated from protobuf field: string video_id = 2;
     */
    videoId: string;
    /**
     * @generated from protobuf field: youtube.CreateCommentParams.Params params = 5;
     */
    params?: CreateCommentParams_Params;
    /**
     * @generated from protobuf field: int32 number = 10;
     */
    number: number;
}
/**
 * @generated from protobuf message youtube.CreateCommentParams.Params
 */
export interface CreateCommentParams_Params {
    /**
     * @generated from protobuf field: int32 index = 1;
     */
    index: number;
}
/**
 * @generated from protobuf message youtube.CreateCommentReplyParams
 */
export interface CreateCommentReplyParams {
    /**
     * @generated from protobuf field: string video_id = 2;
     */
    videoId: string;
    /**
     * @generated from protobuf field: string comment_id = 4;
     */
    commentId: string;
    /**
     * @generated from protobuf field: youtube.CreateCommentReplyParams.UnknownParams params = 5;
     */
    params?: CreateCommentReplyParams_UnknownParams;
    /**
     * @generated from protobuf field: optional int32 unk_num = 10;
     */
    unkNum?: number;
}
/**
 * @generated from protobuf message youtube.CreateCommentReplyParams.UnknownParams
 */
export interface CreateCommentReplyParams_UnknownParams {
    /**
     * @generated from protobuf field: int32 unk_num = 1;
     */
    unkNum: number;
}
/**
 * @generated from protobuf message youtube.PeformCommentActionParams
 */
export interface PeformCommentActionParams {
    /**
     * @generated from protobuf field: int32 type = 1;
     */
    type: number;
    /**
     * @generated from protobuf field: string comment_id = 3;
     */
    commentId: string;
    /**
     * @generated from protobuf field: string video_id = 5;
     */
    videoId: string;
    /**
     * @generated from protobuf field: optional int32 unk_num = 2;
     */
    unkNum?: number;
    /**
     * @generated from protobuf field: optional string channel_id = 23;
     */
    channelId?: string;
    /**
     * @generated from protobuf field: optional youtube.PeformCommentActionParams.TranslateCommentParams translate_comment_params = 31;
     */
    translateCommentParams?: PeformCommentActionParams_TranslateCommentParams;
}
/**
 * @generated from protobuf message youtube.PeformCommentActionParams.TranslateCommentParams
 */
export interface PeformCommentActionParams_TranslateCommentParams {
    /**
     * @generated from protobuf field: youtube.PeformCommentActionParams.TranslateCommentParams.Params params = 3;
     */
    params?: PeformCommentActionParams_TranslateCommentParams_Params;
    /**
     * @generated from protobuf field: string comment_id = 2;
     */
    commentId: string;
    /**
     * @generated from protobuf field: string target_language = 4;
     */
    targetLanguage: string;
}
/**
 * @generated from protobuf message youtube.PeformCommentActionParams.TranslateCommentParams.Params
 */
export interface PeformCommentActionParams_TranslateCommentParams_Params {
    /**
     * @generated from protobuf field: youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment comment = 1;
     */
    comment?: PeformCommentActionParams_TranslateCommentParams_Params_Comment;
}
/**
 * @generated from protobuf message youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment
 */
export interface PeformCommentActionParams_TranslateCommentParams_Params_Comment {
    /**
     * @generated from protobuf field: string text = 1;
     */
    text: string;
}
/**
 * @generated from protobuf message youtube.MusicSearchFilter
 */
export interface MusicSearchFilter {
    /**
     * @generated from protobuf field: optional youtube.MusicSearchFilter.Filters filters = 2;
     */
    filters?: MusicSearchFilter_Filters;
}
/**
 * @generated from protobuf message youtube.MusicSearchFilter.Filters
 */
export interface MusicSearchFilter_Filters {
    /**
     * @generated from protobuf field: optional youtube.MusicSearchFilter.Filters.Type type = 17;
     */
    type?: MusicSearchFilter_Filters_Type;
}
/**
 * @generated from protobuf message youtube.MusicSearchFilter.Filters.Type
 */
export interface MusicSearchFilter_Filters_Type {
    /**
     * TODO: protoc doesn't allow zero index: optional int32 all = 0;
     *
     * @generated from protobuf field: optional int32 song = 1;
     */
    song?: number;
    /**
     * @generated from protobuf field: optional int32 video = 2;
     */
    video?: number;
    /**
     * @generated from protobuf field: optional int32 album = 3;
     */
    album?: number;
    /**
     * @generated from protobuf field: optional int32 artist = 4;
     */
    artist?: number;
    /**
     * @generated from protobuf field: optional int32 playlist = 5;
     */
    playlist?: number;
}
/**
 * @generated from protobuf message youtube.SearchFilter
 */
export interface SearchFilter {
    /**
     * @generated from protobuf field: optional int32 sort_by = 1;
     */
    sortBy?: number;
    /**
     * @generated from protobuf field: optional int32 no_filter = 19;
     */
    noFilter?: number;
    /**
     * @generated from protobuf field: optional youtube.SearchFilter.Filters filters = 2;
     */
    filters?: SearchFilter_Filters;
}
/**
 * @generated from protobuf message youtube.SearchFilter.Filters
 */
export interface SearchFilter_Filters {
    /**
     * @generated from protobuf field: optional int32 upload_date = 1;
     */
    uploadDate?: number;
    /**
     * @generated from protobuf field: optional int32 type = 2;
     */
    type?: number;
    /**
     * @generated from protobuf field: optional int32 duration = 3;
     */
    duration?: number;
}
declare class VisitorData$Type extends MessageType<VisitorData> {
    constructor();
    create(value?: PartialMessage<VisitorData>): VisitorData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VisitorData): VisitorData;
    internalBinaryWrite(message: VisitorData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.VisitorData
 */
export declare const VisitorData: VisitorData$Type;
declare class ChannelAnalytics$Type extends MessageType<ChannelAnalytics> {
    constructor();
    create(value?: PartialMessage<ChannelAnalytics>): ChannelAnalytics;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChannelAnalytics): ChannelAnalytics;
    internalBinaryWrite(message: ChannelAnalytics, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.ChannelAnalytics
 */
export declare const ChannelAnalytics: ChannelAnalytics$Type;
declare class ChannelAnalytics_Params$Type extends MessageType<ChannelAnalytics_Params> {
    constructor();
    create(value?: PartialMessage<ChannelAnalytics_Params>): ChannelAnalytics_Params;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChannelAnalytics_Params): ChannelAnalytics_Params;
    internalBinaryWrite(message: ChannelAnalytics_Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.ChannelAnalytics.Params
 */
export declare const ChannelAnalytics_Params: ChannelAnalytics_Params$Type;
declare class InnertubePayload$Type extends MessageType<InnertubePayload> {
    constructor();
    create(value?: PartialMessage<InnertubePayload>): InnertubePayload;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InnertubePayload): InnertubePayload;
    internalBinaryWrite(message: InnertubePayload, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload
 */
export declare const InnertubePayload: InnertubePayload$Type;
declare class InnertubePayload_Context$Type extends MessageType<InnertubePayload_Context> {
    constructor();
    create(value?: PartialMessage<InnertubePayload_Context>): InnertubePayload_Context;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InnertubePayload_Context): InnertubePayload_Context;
    internalBinaryWrite(message: InnertubePayload_Context, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.Context
 */
export declare const InnertubePayload_Context: InnertubePayload_Context$Type;
declare class InnertubePayload_Context_Client$Type extends MessageType<InnertubePayload_Context_Client> {
    constructor();
    create(value?: PartialMessage<InnertubePayload_Context_Client>): InnertubePayload_Context_Client;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InnertubePayload_Context_Client): InnertubePayload_Context_Client;
    internalBinaryWrite(message: InnertubePayload_Context_Client, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.Context.Client
 */
export declare const InnertubePayload_Context_Client: InnertubePayload_Context_Client$Type;
declare class InnertubePayload_VideoSettings$Type extends MessageType<InnertubePayload_VideoSettings> {
    constructor();
    create(value?: PartialMessage<InnertubePayload_VideoSettings>): InnertubePayload_VideoSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InnertubePayload_VideoSettings): InnertubePayload_VideoSettings;
    internalBinaryWrite(message: InnertubePayload_VideoSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.VideoSettings
 */
export declare const InnertubePayload_VideoSettings: InnertubePayload_VideoSettings$Type;
declare class InnertubePayload_VideoSettings_Thumbnail$Type extends MessageType<InnertubePayload_VideoSettings_Thumbnail> {
    constructor();
    create(value?: PartialMessage<InnertubePayload_VideoSettings_Thumbnail>): InnertubePayload_VideoSettings_Thumbnail;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InnertubePayload_VideoSettings_Thumbnail): InnertubePayload_VideoSettings_Thumbnail;
    internalBinaryWrite(message: InnertubePayload_VideoSettings_Thumbnail, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.InnertubePayload.VideoSettings.Thumbnail
 */
export declare const InnertubePayload_VideoSettings_Thumbnail: InnertubePayload_VideoSettings_Thumbnail$Type;
declare class SoundInfoParams$Type extends MessageType<SoundInfoParams> {
    constructor();
    create(value?: PartialMessage<SoundInfoParams>): SoundInfoParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SoundInfoParams): SoundInfoParams;
    internalBinaryWrite(message: SoundInfoParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.SoundInfoParams
 */
export declare const SoundInfoParams: SoundInfoParams$Type;
declare class SoundInfoParams_Sound$Type extends MessageType<SoundInfoParams_Sound> {
    constructor();
    create(value?: PartialMessage<SoundInfoParams_Sound>): SoundInfoParams_Sound;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SoundInfoParams_Sound): SoundInfoParams_Sound;
    internalBinaryWrite(message: SoundInfoParams_Sound, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.SoundInfoParams.Sound
 */
export declare const SoundInfoParams_Sound: SoundInfoParams_Sound$Type;
declare class SoundInfoParams_Sound_Params$Type extends MessageType<SoundInfoParams_Sound_Params> {
    constructor();
    create(value?: PartialMessage<SoundInfoParams_Sound_Params>): SoundInfoParams_Sound_Params;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SoundInfoParams_Sound_Params): SoundInfoParams_Sound_Params;
    internalBinaryWrite(message: SoundInfoParams_Sound_Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.SoundInfoParams.Sound.Params
 */
export declare const SoundInfoParams_Sound_Params: SoundInfoParams_Sound_Params$Type;
declare class SoundInfoParams_Sound_Params_Ids$Type extends MessageType<SoundInfoParams_Sound_Params_Ids> {
    constructor();
    create(value?: PartialMessage<SoundInfoParams_Sound_Params_Ids>): SoundInfoParams_Sound_Params_Ids;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SoundInfoParams_Sound_Params_Ids): SoundInfoParams_Sound_Params_Ids;
    internalBinaryWrite(message: SoundInfoParams_Sound_Params_Ids, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.SoundInfoParams.Sound.Params.Ids
 */
export declare const SoundInfoParams_Sound_Params_Ids: SoundInfoParams_Sound_Params_Ids$Type;
declare class NotificationPreferences$Type extends MessageType<NotificationPreferences> {
    constructor();
    create(value?: PartialMessage<NotificationPreferences>): NotificationPreferences;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NotificationPreferences): NotificationPreferences;
    internalBinaryWrite(message: NotificationPreferences, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.NotificationPreferences
 */
export declare const NotificationPreferences: NotificationPreferences$Type;
declare class NotificationPreferences_Preference$Type extends MessageType<NotificationPreferences_Preference> {
    constructor();
    create(value?: PartialMessage<NotificationPreferences_Preference>): NotificationPreferences_Preference;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NotificationPreferences_Preference): NotificationPreferences_Preference;
    internalBinaryWrite(message: NotificationPreferences_Preference, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.NotificationPreferences.Preference
 */
export declare const NotificationPreferences_Preference: NotificationPreferences_Preference$Type;
declare class LiveMessageParams$Type extends MessageType<LiveMessageParams> {
    constructor();
    create(value?: PartialMessage<LiveMessageParams>): LiveMessageParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LiveMessageParams): LiveMessageParams;
    internalBinaryWrite(message: LiveMessageParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.LiveMessageParams
 */
export declare const LiveMessageParams: LiveMessageParams$Type;
declare class LiveMessageParams_Params$Type extends MessageType<LiveMessageParams_Params> {
    constructor();
    create(value?: PartialMessage<LiveMessageParams_Params>): LiveMessageParams_Params;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LiveMessageParams_Params): LiveMessageParams_Params;
    internalBinaryWrite(message: LiveMessageParams_Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.LiveMessageParams.Params
 */
export declare const LiveMessageParams_Params: LiveMessageParams_Params$Type;
declare class LiveMessageParams_Params_Ids$Type extends MessageType<LiveMessageParams_Params_Ids> {
    constructor();
    create(value?: PartialMessage<LiveMessageParams_Params_Ids>): LiveMessageParams_Params_Ids;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LiveMessageParams_Params_Ids): LiveMessageParams_Params_Ids;
    internalBinaryWrite(message: LiveMessageParams_Params_Ids, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.LiveMessageParams.Params.Ids
 */
export declare const LiveMessageParams_Params_Ids: LiveMessageParams_Params_Ids$Type;
declare class GetCommentsSectionParams$Type extends MessageType<GetCommentsSectionParams> {
    constructor();
    create(value?: PartialMessage<GetCommentsSectionParams>): GetCommentsSectionParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCommentsSectionParams): GetCommentsSectionParams;
    internalBinaryWrite(message: GetCommentsSectionParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.GetCommentsSectionParams
 */
export declare const GetCommentsSectionParams: GetCommentsSectionParams$Type;
declare class GetCommentsSectionParams_Context$Type extends MessageType<GetCommentsSectionParams_Context> {
    constructor();
    create(value?: PartialMessage<GetCommentsSectionParams_Context>): GetCommentsSectionParams_Context;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCommentsSectionParams_Context): GetCommentsSectionParams_Context;
    internalBinaryWrite(message: GetCommentsSectionParams_Context, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.GetCommentsSectionParams.Context
 */
export declare const GetCommentsSectionParams_Context: GetCommentsSectionParams_Context$Type;
declare class GetCommentsSectionParams_Params$Type extends MessageType<GetCommentsSectionParams_Params> {
    constructor();
    create(value?: PartialMessage<GetCommentsSectionParams_Params>): GetCommentsSectionParams_Params;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCommentsSectionParams_Params): GetCommentsSectionParams_Params;
    internalBinaryWrite(message: GetCommentsSectionParams_Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.GetCommentsSectionParams.Params
 */
export declare const GetCommentsSectionParams_Params: GetCommentsSectionParams_Params$Type;
declare class GetCommentsSectionParams_Params_Options$Type extends MessageType<GetCommentsSectionParams_Params_Options> {
    constructor();
    create(value?: PartialMessage<GetCommentsSectionParams_Params_Options>): GetCommentsSectionParams_Params_Options;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCommentsSectionParams_Params_Options): GetCommentsSectionParams_Params_Options;
    internalBinaryWrite(message: GetCommentsSectionParams_Params_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.GetCommentsSectionParams.Params.Options
 */
export declare const GetCommentsSectionParams_Params_Options: GetCommentsSectionParams_Params_Options$Type;
declare class GetCommentsSectionParams_Params_RepliesOptions$Type extends MessageType<GetCommentsSectionParams_Params_RepliesOptions> {
    constructor();
    create(value?: PartialMessage<GetCommentsSectionParams_Params_RepliesOptions>): GetCommentsSectionParams_Params_RepliesOptions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCommentsSectionParams_Params_RepliesOptions): GetCommentsSectionParams_Params_RepliesOptions;
    internalBinaryWrite(message: GetCommentsSectionParams_Params_RepliesOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.GetCommentsSectionParams.Params.RepliesOptions
 */
export declare const GetCommentsSectionParams_Params_RepliesOptions: GetCommentsSectionParams_Params_RepliesOptions$Type;
declare class GetCommentsSectionParams_Params_RepliesOptions_UnkOpts$Type extends MessageType<GetCommentsSectionParams_Params_RepliesOptions_UnkOpts> {
    constructor();
    create(value?: PartialMessage<GetCommentsSectionParams_Params_RepliesOptions_UnkOpts>): GetCommentsSectionParams_Params_RepliesOptions_UnkOpts;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCommentsSectionParams_Params_RepliesOptions_UnkOpts): GetCommentsSectionParams_Params_RepliesOptions_UnkOpts;
    internalBinaryWrite(message: GetCommentsSectionParams_Params_RepliesOptions_UnkOpts, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts
 */
export declare const GetCommentsSectionParams_Params_RepliesOptions_UnkOpts: GetCommentsSectionParams_Params_RepliesOptions_UnkOpts$Type;
declare class CreateCommentParams$Type extends MessageType<CreateCommentParams> {
    constructor();
    create(value?: PartialMessage<CreateCommentParams>): CreateCommentParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateCommentParams): CreateCommentParams;
    internalBinaryWrite(message: CreateCommentParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.CreateCommentParams
 */
export declare const CreateCommentParams: CreateCommentParams$Type;
declare class CreateCommentParams_Params$Type extends MessageType<CreateCommentParams_Params> {
    constructor();
    create(value?: PartialMessage<CreateCommentParams_Params>): CreateCommentParams_Params;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateCommentParams_Params): CreateCommentParams_Params;
    internalBinaryWrite(message: CreateCommentParams_Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.CreateCommentParams.Params
 */
export declare const CreateCommentParams_Params: CreateCommentParams_Params$Type;
declare class CreateCommentReplyParams$Type extends MessageType<CreateCommentReplyParams> {
    constructor();
    create(value?: PartialMessage<CreateCommentReplyParams>): CreateCommentReplyParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateCommentReplyParams): CreateCommentReplyParams;
    internalBinaryWrite(message: CreateCommentReplyParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.CreateCommentReplyParams
 */
export declare const CreateCommentReplyParams: CreateCommentReplyParams$Type;
declare class CreateCommentReplyParams_UnknownParams$Type extends MessageType<CreateCommentReplyParams_UnknownParams> {
    constructor();
    create(value?: PartialMessage<CreateCommentReplyParams_UnknownParams>): CreateCommentReplyParams_UnknownParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateCommentReplyParams_UnknownParams): CreateCommentReplyParams_UnknownParams;
    internalBinaryWrite(message: CreateCommentReplyParams_UnknownParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.CreateCommentReplyParams.UnknownParams
 */
export declare const CreateCommentReplyParams_UnknownParams: CreateCommentReplyParams_UnknownParams$Type;
declare class PeformCommentActionParams$Type extends MessageType<PeformCommentActionParams> {
    constructor();
    create(value?: PartialMessage<PeformCommentActionParams>): PeformCommentActionParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PeformCommentActionParams): PeformCommentActionParams;
    internalBinaryWrite(message: PeformCommentActionParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.PeformCommentActionParams
 */
export declare const PeformCommentActionParams: PeformCommentActionParams$Type;
declare class PeformCommentActionParams_TranslateCommentParams$Type extends MessageType<PeformCommentActionParams_TranslateCommentParams> {
    constructor();
    create(value?: PartialMessage<PeformCommentActionParams_TranslateCommentParams>): PeformCommentActionParams_TranslateCommentParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PeformCommentActionParams_TranslateCommentParams): PeformCommentActionParams_TranslateCommentParams;
    internalBinaryWrite(message: PeformCommentActionParams_TranslateCommentParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.PeformCommentActionParams.TranslateCommentParams
 */
export declare const PeformCommentActionParams_TranslateCommentParams: PeformCommentActionParams_TranslateCommentParams$Type;
declare class PeformCommentActionParams_TranslateCommentParams_Params$Type extends MessageType<PeformCommentActionParams_TranslateCommentParams_Params> {
    constructor();
    create(value?: PartialMessage<PeformCommentActionParams_TranslateCommentParams_Params>): PeformCommentActionParams_TranslateCommentParams_Params;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PeformCommentActionParams_TranslateCommentParams_Params): PeformCommentActionParams_TranslateCommentParams_Params;
    internalBinaryWrite(message: PeformCommentActionParams_TranslateCommentParams_Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.PeformCommentActionParams.TranslateCommentParams.Params
 */
export declare const PeformCommentActionParams_TranslateCommentParams_Params: PeformCommentActionParams_TranslateCommentParams_Params$Type;
declare class PeformCommentActionParams_TranslateCommentParams_Params_Comment$Type extends MessageType<PeformCommentActionParams_TranslateCommentParams_Params_Comment> {
    constructor();
    create(value?: PartialMessage<PeformCommentActionParams_TranslateCommentParams_Params_Comment>): PeformCommentActionParams_TranslateCommentParams_Params_Comment;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PeformCommentActionParams_TranslateCommentParams_Params_Comment): PeformCommentActionParams_TranslateCommentParams_Params_Comment;
    internalBinaryWrite(message: PeformCommentActionParams_TranslateCommentParams_Params_Comment, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment
 */
export declare const PeformCommentActionParams_TranslateCommentParams_Params_Comment: PeformCommentActionParams_TranslateCommentParams_Params_Comment$Type;
declare class MusicSearchFilter$Type extends MessageType<MusicSearchFilter> {
    constructor();
    create(value?: PartialMessage<MusicSearchFilter>): MusicSearchFilter;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MusicSearchFilter): MusicSearchFilter;
    internalBinaryWrite(message: MusicSearchFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.MusicSearchFilter
 */
export declare const MusicSearchFilter: MusicSearchFilter$Type;
declare class MusicSearchFilter_Filters$Type extends MessageType<MusicSearchFilter_Filters> {
    constructor();
    create(value?: PartialMessage<MusicSearchFilter_Filters>): MusicSearchFilter_Filters;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MusicSearchFilter_Filters): MusicSearchFilter_Filters;
    internalBinaryWrite(message: MusicSearchFilter_Filters, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.MusicSearchFilter.Filters
 */
export declare const MusicSearchFilter_Filters: MusicSearchFilter_Filters$Type;
declare class MusicSearchFilter_Filters_Type$Type extends MessageType<MusicSearchFilter_Filters_Type> {
    constructor();
    create(value?: PartialMessage<MusicSearchFilter_Filters_Type>): MusicSearchFilter_Filters_Type;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MusicSearchFilter_Filters_Type): MusicSearchFilter_Filters_Type;
    internalBinaryWrite(message: MusicSearchFilter_Filters_Type, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.MusicSearchFilter.Filters.Type
 */
export declare const MusicSearchFilter_Filters_Type: MusicSearchFilter_Filters_Type$Type;
declare class SearchFilter$Type extends MessageType<SearchFilter> {
    constructor();
    create(value?: PartialMessage<SearchFilter>): SearchFilter;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SearchFilter): SearchFilter;
    internalBinaryWrite(message: SearchFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.SearchFilter
 */
export declare const SearchFilter: SearchFilter$Type;
declare class SearchFilter_Filters$Type extends MessageType<SearchFilter_Filters> {
    constructor();
    create(value?: PartialMessage<SearchFilter_Filters>): SearchFilter_Filters;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SearchFilter_Filters): SearchFilter_Filters;
    internalBinaryWrite(message: SearchFilter_Filters, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message youtube.SearchFilter.Filters
 */
export declare const SearchFilter_Filters: SearchFilter_Filters$Type;
export {};
