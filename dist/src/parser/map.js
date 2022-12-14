"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YTNodes = void 0;
const AccountChannel_1 = __importDefault(require("./classes/AccountChannel"));
const AccountItemSection_1 = __importDefault(require("./classes/AccountItemSection"));
const AccountItemSectionHeader_1 = __importDefault(require("./classes/AccountItemSectionHeader"));
const AccountSectionList_1 = __importDefault(require("./classes/AccountSectionList"));
const AppendContinuationItemsAction_1 = __importDefault(require("./classes/actions/AppendContinuationItemsAction"));
const OpenPopupAction_1 = __importDefault(require("./classes/actions/OpenPopupAction"));
const AnalyticsMainAppKeyMetrics_1 = __importDefault(require("./classes/analytics/AnalyticsMainAppKeyMetrics"));
const AnalyticsRoot_1 = __importDefault(require("./classes/analytics/AnalyticsRoot"));
const AnalyticsShortsCarouselCard_1 = __importDefault(require("./classes/analytics/AnalyticsShortsCarouselCard"));
const AnalyticsVideo_1 = __importDefault(require("./classes/analytics/AnalyticsVideo"));
const AnalyticsVodCarouselCard_1 = __importDefault(require("./classes/analytics/AnalyticsVodCarouselCard"));
const CtaGoToCreatorStudio_1 = __importDefault(require("./classes/analytics/CtaGoToCreatorStudio"));
const DataModelSection_1 = __importDefault(require("./classes/analytics/DataModelSection"));
const StatRow_1 = __importDefault(require("./classes/analytics/StatRow"));
const AudioOnlyPlayability_1 = __importDefault(require("./classes/AudioOnlyPlayability"));
const AutomixPreviewVideo_1 = __importDefault(require("./classes/AutomixPreviewVideo"));
const BackstageImage_1 = __importDefault(require("./classes/BackstageImage"));
const BackstagePost_1 = __importDefault(require("./classes/BackstagePost"));
const BackstagePostThread_1 = __importDefault(require("./classes/BackstagePostThread"));
const BrowseFeedActions_1 = __importDefault(require("./classes/BrowseFeedActions"));
const BrowserMediaSession_1 = __importDefault(require("./classes/BrowserMediaSession"));
const Button_1 = __importDefault(require("./classes/Button"));
const C4TabbedHeader_1 = __importDefault(require("./classes/C4TabbedHeader"));
const CallToActionButton_1 = __importDefault(require("./classes/CallToActionButton"));
const Card_1 = __importDefault(require("./classes/Card"));
const CardCollection_1 = __importDefault(require("./classes/CardCollection"));
const Channel_1 = __importDefault(require("./classes/Channel"));
const ChannelAboutFullMetadata_1 = __importDefault(require("./classes/ChannelAboutFullMetadata"));
const ChannelFeaturedContent_1 = __importDefault(require("./classes/ChannelFeaturedContent"));
const ChannelHeaderLinks_1 = __importDefault(require("./classes/ChannelHeaderLinks"));
const ChannelMetadata_1 = __importDefault(require("./classes/ChannelMetadata"));
const ChannelMobileHeader_1 = __importDefault(require("./classes/ChannelMobileHeader"));
const ChannelOptions_1 = __importDefault(require("./classes/ChannelOptions"));
const ChannelThumbnailWithLink_1 = __importDefault(require("./classes/ChannelThumbnailWithLink"));
const ChannelVideoPlayer_1 = __importDefault(require("./classes/ChannelVideoPlayer"));
const ChildVideo_1 = __importDefault(require("./classes/ChildVideo"));
const ChipCloud_1 = __importDefault(require("./classes/ChipCloud"));
const ChipCloudChip_1 = __importDefault(require("./classes/ChipCloudChip"));
const CollaboratorInfoCardContent_1 = __importDefault(require("./classes/CollaboratorInfoCardContent"));
const CollageHeroImage_1 = __importDefault(require("./classes/CollageHeroImage"));
const AuthorCommentBadge_1 = __importDefault(require("./classes/comments/AuthorCommentBadge"));
const Comment_1 = __importDefault(require("./classes/comments/Comment"));
const CommentActionButtons_1 = __importDefault(require("./classes/comments/CommentActionButtons"));
const CommentReplies_1 = __importDefault(require("./classes/comments/CommentReplies"));
const CommentReplyDialog_1 = __importDefault(require("./classes/comments/CommentReplyDialog"));
const CommentsEntryPointHeader_1 = __importDefault(require("./classes/comments/CommentsEntryPointHeader"));
const CommentsHeader_1 = __importDefault(require("./classes/comments/CommentsHeader"));
const CommentSimplebox_1 = __importDefault(require("./classes/comments/CommentSimplebox"));
const CommentThread_1 = __importDefault(require("./classes/comments/CommentThread"));
const CompactLink_1 = __importDefault(require("./classes/CompactLink"));
const CompactMix_1 = __importDefault(require("./classes/CompactMix"));
const CompactPlaylist_1 = __importDefault(require("./classes/CompactPlaylist"));
const CompactVideo_1 = __importDefault(require("./classes/CompactVideo"));
const ContinuationItem_1 = __importDefault(require("./classes/ContinuationItem"));
const CopyLink_1 = __importDefault(require("./classes/CopyLink"));
const CreatePlaylistDialog_1 = __importDefault(require("./classes/CreatePlaylistDialog"));
const DidYouMean_1 = __importDefault(require("./classes/DidYouMean"));
const DownloadButton_1 = __importDefault(require("./classes/DownloadButton"));
const Dropdown_1 = __importDefault(require("./classes/Dropdown"));
const DropdownItem_1 = __importDefault(require("./classes/DropdownItem"));
const Element_1 = __importDefault(require("./classes/Element"));
const EmergencyOnebox_1 = __importDefault(require("./classes/EmergencyOnebox"));
const Endscreen_1 = __importDefault(require("./classes/Endscreen"));
const EndscreenElement_1 = __importDefault(require("./classes/EndscreenElement"));
const EndScreenPlaylist_1 = __importDefault(require("./classes/EndScreenPlaylist"));
const EndScreenVideo_1 = __importDefault(require("./classes/EndScreenVideo"));
const ExpandableTab_1 = __importDefault(require("./classes/ExpandableTab"));
const ExpandedShelfContents_1 = __importDefault(require("./classes/ExpandedShelfContents"));
const FeedFilterChipBar_1 = __importDefault(require("./classes/FeedFilterChipBar"));
const FeedTabbedHeader_1 = __importDefault(require("./classes/FeedTabbedHeader"));
const Grid_1 = __importDefault(require("./classes/Grid"));
const GridChannel_1 = __importDefault(require("./classes/GridChannel"));
const GridHeader_1 = __importDefault(require("./classes/GridHeader"));
const GridPlaylist_1 = __importDefault(require("./classes/GridPlaylist"));
const GridVideo_1 = __importDefault(require("./classes/GridVideo"));
const HighlightsCarousel_1 = __importDefault(require("./classes/HighlightsCarousel"));
const HistorySuggestion_1 = __importDefault(require("./classes/HistorySuggestion"));
const HorizontalCardList_1 = __importDefault(require("./classes/HorizontalCardList"));
const HorizontalList_1 = __importDefault(require("./classes/HorizontalList"));
const IconLink_1 = __importDefault(require("./classes/IconLink"));
const ItemSection_1 = __importDefault(require("./classes/ItemSection"));
const ItemSectionHeader_1 = __importDefault(require("./classes/ItemSectionHeader"));
const ItemSectionTab_1 = __importDefault(require("./classes/ItemSectionTab"));
const ItemSectionTabbedHeader_1 = __importDefault(require("./classes/ItemSectionTabbedHeader"));
const LikeButton_1 = __importDefault(require("./classes/LikeButton"));
const LiveChat_1 = __importDefault(require("./classes/LiveChat"));
const AddBannerToLiveChatCommand_1 = __importDefault(require("./classes/livechat/AddBannerToLiveChatCommand"));
const AddChatItemAction_1 = __importDefault(require("./classes/livechat/AddChatItemAction"));
const AddLiveChatTickerItemAction_1 = __importDefault(require("./classes/livechat/AddLiveChatTickerItemAction"));
const LiveChatAutoModMessage_1 = __importDefault(require("./classes/livechat/items/LiveChatAutoModMessage"));
const LiveChatBanner_1 = __importDefault(require("./classes/livechat/items/LiveChatBanner"));
const LiveChatBannerHeader_1 = __importDefault(require("./classes/livechat/items/LiveChatBannerHeader"));
const LiveChatBannerPoll_1 = __importDefault(require("./classes/livechat/items/LiveChatBannerPoll"));
const LiveChatMembershipItem_1 = __importDefault(require("./classes/livechat/items/LiveChatMembershipItem"));
const LiveChatPaidMessage_1 = __importDefault(require("./classes/livechat/items/LiveChatPaidMessage"));
const LiveChatPaidSticker_1 = __importDefault(require("./classes/livechat/items/LiveChatPaidSticker"));
const LiveChatPlaceholderItem_1 = __importDefault(require("./classes/livechat/items/LiveChatPlaceholderItem"));
const LiveChatProductItem_1 = __importDefault(require("./classes/livechat/items/LiveChatProductItem"));
const LiveChatTextMessage_1 = __importDefault(require("./classes/livechat/items/LiveChatTextMessage"));
const LiveChatTickerPaidMessageItem_1 = __importDefault(require("./classes/livechat/items/LiveChatTickerPaidMessageItem"));
const LiveChatTickerSponsorItem_1 = __importDefault(require("./classes/livechat/items/LiveChatTickerSponsorItem"));
const LiveChatViewerEngagementMessage_1 = __importDefault(require("./classes/livechat/items/LiveChatViewerEngagementMessage"));
const PollHeader_1 = __importDefault(require("./classes/livechat/items/PollHeader"));
const LiveChatActionPanel_1 = __importDefault(require("./classes/livechat/LiveChatActionPanel"));
const MarkChatItemAsDeletedAction_1 = __importDefault(require("./classes/livechat/MarkChatItemAsDeletedAction"));
const MarkChatItemsByAuthorAsDeletedAction_1 = __importDefault(require("./classes/livechat/MarkChatItemsByAuthorAsDeletedAction"));
const RemoveBannerForLiveChatCommand_1 = __importDefault(require("./classes/livechat/RemoveBannerForLiveChatCommand"));
const ReplaceChatItemAction_1 = __importDefault(require("./classes/livechat/ReplaceChatItemAction"));
const ReplayChatItemAction_1 = __importDefault(require("./classes/livechat/ReplayChatItemAction"));
const ShowLiveChatActionPanelAction_1 = __importDefault(require("./classes/livechat/ShowLiveChatActionPanelAction"));
const ShowLiveChatTooltipCommand_1 = __importDefault(require("./classes/livechat/ShowLiveChatTooltipCommand"));
const UpdateDateTextAction_1 = __importDefault(require("./classes/livechat/UpdateDateTextAction"));
const UpdateDescriptionAction_1 = __importDefault(require("./classes/livechat/UpdateDescriptionAction"));
const UpdateLiveChatPollAction_1 = __importDefault(require("./classes/livechat/UpdateLiveChatPollAction"));
const UpdateTitleAction_1 = __importDefault(require("./classes/livechat/UpdateTitleAction"));
const UpdateToggleButtonTextAction_1 = __importDefault(require("./classes/livechat/UpdateToggleButtonTextAction"));
const UpdateViewershipAction_1 = __importDefault(require("./classes/livechat/UpdateViewershipAction"));
const LiveChatAuthorBadge_1 = __importDefault(require("./classes/LiveChatAuthorBadge"));
const LiveChatDialog_1 = __importDefault(require("./classes/LiveChatDialog"));
const LiveChatHeader_1 = __importDefault(require("./classes/LiveChatHeader"));
const LiveChatItemList_1 = __importDefault(require("./classes/LiveChatItemList"));
const LiveChatMessageInput_1 = __importDefault(require("./classes/LiveChatMessageInput"));
const LiveChatParticipant_1 = __importDefault(require("./classes/LiveChatParticipant"));
const LiveChatParticipantsList_1 = __importDefault(require("./classes/LiveChatParticipantsList"));
const Menu_1 = __importDefault(require("./classes/menus/Menu"));
const MenuNavigationItem_1 = __importDefault(require("./classes/menus/MenuNavigationItem"));
const MenuServiceItem_1 = __importDefault(require("./classes/menus/MenuServiceItem"));
const MenuServiceItemDownload_1 = __importDefault(require("./classes/menus/MenuServiceItemDownload"));
const MultiPageMenu_1 = __importDefault(require("./classes/menus/MultiPageMenu"));
const MultiPageMenuNotificationSection_1 = __importDefault(require("./classes/menus/MultiPageMenuNotificationSection"));
const MusicMenuItemDivider_1 = __importDefault(require("./classes/menus/MusicMenuItemDivider"));
const MusicMultiSelectMenu_1 = __importDefault(require("./classes/menus/MusicMultiSelectMenu"));
const MusicMultiSelectMenuItem_1 = __importDefault(require("./classes/menus/MusicMultiSelectMenuItem"));
const SimpleMenuHeader_1 = __importDefault(require("./classes/menus/SimpleMenuHeader"));
const MerchandiseItem_1 = __importDefault(require("./classes/MerchandiseItem"));
const MerchandiseShelf_1 = __importDefault(require("./classes/MerchandiseShelf"));
const Message_1 = __importDefault(require("./classes/Message"));
const MetadataBadge_1 = __importDefault(require("./classes/MetadataBadge"));
const MetadataRow_1 = __importDefault(require("./classes/MetadataRow"));
const MetadataRowContainer_1 = __importDefault(require("./classes/MetadataRowContainer"));
const MetadataRowHeader_1 = __importDefault(require("./classes/MetadataRowHeader"));
const MicroformatData_1 = __importDefault(require("./classes/MicroformatData"));
const Mix_1 = __importDefault(require("./classes/Mix"));
const Movie_1 = __importDefault(require("./classes/Movie"));
const MovingThumbnail_1 = __importDefault(require("./classes/MovingThumbnail"));
const MusicCarouselShelf_1 = __importDefault(require("./classes/MusicCarouselShelf"));
const MusicCarouselShelfBasicHeader_1 = __importDefault(require("./classes/MusicCarouselShelfBasicHeader"));
const MusicDescriptionShelf_1 = __importDefault(require("./classes/MusicDescriptionShelf"));
const MusicDetailHeader_1 = __importDefault(require("./classes/MusicDetailHeader"));
const MusicDownloadStateBadge_1 = __importDefault(require("./classes/MusicDownloadStateBadge"));
const MusicEditablePlaylistDetailHeader_1 = __importDefault(require("./classes/MusicEditablePlaylistDetailHeader"));
const MusicElementHeader_1 = __importDefault(require("./classes/MusicElementHeader"));
const MusicHeader_1 = __importDefault(require("./classes/MusicHeader"));
const MusicImmersiveHeader_1 = __importDefault(require("./classes/MusicImmersiveHeader"));
const MusicInlineBadge_1 = __importDefault(require("./classes/MusicInlineBadge"));
const MusicItemThumbnailOverlay_1 = __importDefault(require("./classes/MusicItemThumbnailOverlay"));
const MusicLargeCardItemCarousel_1 = __importDefault(require("./classes/MusicLargeCardItemCarousel"));
const MusicNavigationButton_1 = __importDefault(require("./classes/MusicNavigationButton"));
const MusicPlayButton_1 = __importDefault(require("./classes/MusicPlayButton"));
const MusicPlaylistShelf_1 = __importDefault(require("./classes/MusicPlaylistShelf"));
const MusicQueue_1 = __importDefault(require("./classes/MusicQueue"));
const MusicResponsiveListItem_1 = __importDefault(require("./classes/MusicResponsiveListItem"));
const MusicResponsiveListItemFixedColumn_1 = __importDefault(require("./classes/MusicResponsiveListItemFixedColumn"));
const MusicResponsiveListItemFlexColumn_1 = __importDefault(require("./classes/MusicResponsiveListItemFlexColumn"));
const MusicShelf_1 = __importDefault(require("./classes/MusicShelf"));
const MusicSideAlignedItem_1 = __importDefault(require("./classes/MusicSideAlignedItem"));
const MusicSortFilterButton_1 = __importDefault(require("./classes/MusicSortFilterButton"));
const MusicThumbnail_1 = __importDefault(require("./classes/MusicThumbnail"));
const MusicTwoRowItem_1 = __importDefault(require("./classes/MusicTwoRowItem"));
const MusicVisualHeader_1 = __importDefault(require("./classes/MusicVisualHeader"));
const NavigationEndpoint_1 = __importDefault(require("./classes/NavigationEndpoint"));
const Notification_1 = __importDefault(require("./classes/Notification"));
const PageIntroduction_1 = __importDefault(require("./classes/PageIntroduction"));
const PlayerAnnotationsExpanded_1 = __importDefault(require("./classes/PlayerAnnotationsExpanded"));
const PlayerCaptionsTracklist_1 = __importDefault(require("./classes/PlayerCaptionsTracklist"));
const PlayerErrorMessage_1 = __importDefault(require("./classes/PlayerErrorMessage"));
const PlayerLiveStoryboardSpec_1 = __importDefault(require("./classes/PlayerLiveStoryboardSpec"));
const PlayerMicroformat_1 = __importDefault(require("./classes/PlayerMicroformat"));
const PlayerOverlay_1 = __importDefault(require("./classes/PlayerOverlay"));
const PlayerOverlayAutoplay_1 = __importDefault(require("./classes/PlayerOverlayAutoplay"));
const PlayerStoryboardSpec_1 = __importDefault(require("./classes/PlayerStoryboardSpec"));
const Playlist_1 = __importDefault(require("./classes/Playlist"));
const PlaylistHeader_1 = __importDefault(require("./classes/PlaylistHeader"));
const PlaylistInfoCardContent_1 = __importDefault(require("./classes/PlaylistInfoCardContent"));
const PlaylistMetadata_1 = __importDefault(require("./classes/PlaylistMetadata"));
const PlaylistPanel_1 = __importDefault(require("./classes/PlaylistPanel"));
const PlaylistPanelVideo_1 = __importDefault(require("./classes/PlaylistPanelVideo"));
const PlaylistPanelVideoWrapper_1 = __importDefault(require("./classes/PlaylistPanelVideoWrapper"));
const PlaylistSidebar_1 = __importDefault(require("./classes/PlaylistSidebar"));
const PlaylistSidebarPrimaryInfo_1 = __importDefault(require("./classes/PlaylistSidebarPrimaryInfo"));
const PlaylistSidebarSecondaryInfo_1 = __importDefault(require("./classes/PlaylistSidebarSecondaryInfo"));
const PlaylistVideo_1 = __importDefault(require("./classes/PlaylistVideo"));
const PlaylistVideoList_1 = __importDefault(require("./classes/PlaylistVideoList"));
const PlaylistVideoThumbnail_1 = __importDefault(require("./classes/PlaylistVideoThumbnail"));
const Poll_1 = __importDefault(require("./classes/Poll"));
const Post_1 = __importDefault(require("./classes/Post"));
const ProfileColumn_1 = __importDefault(require("./classes/ProfileColumn"));
const ProfileColumnStats_1 = __importDefault(require("./classes/ProfileColumnStats"));
const ProfileColumnStatsEntry_1 = __importDefault(require("./classes/ProfileColumnStatsEntry"));
const ProfileColumnUserInfo_1 = __importDefault(require("./classes/ProfileColumnUserInfo"));
const ReelItem_1 = __importDefault(require("./classes/ReelItem"));
const ReelShelf_1 = __importDefault(require("./classes/ReelShelf"));
const RelatedChipCloud_1 = __importDefault(require("./classes/RelatedChipCloud"));
const RichGrid_1 = __importDefault(require("./classes/RichGrid"));
const RichItem_1 = __importDefault(require("./classes/RichItem"));
const RichListHeader_1 = __importDefault(require("./classes/RichListHeader"));
const RichSection_1 = __importDefault(require("./classes/RichSection"));
const RichShelf_1 = __importDefault(require("./classes/RichShelf"));
const SearchBox_1 = __importDefault(require("./classes/SearchBox"));
const SearchRefinementCard_1 = __importDefault(require("./classes/SearchRefinementCard"));
const SearchSuggestion_1 = __importDefault(require("./classes/SearchSuggestion"));
const SearchSuggestionsSection_1 = __importDefault(require("./classes/SearchSuggestionsSection"));
const SecondarySearchContainer_1 = __importDefault(require("./classes/SecondarySearchContainer"));
const SectionList_1 = __importDefault(require("./classes/SectionList"));
const SegmentedLikeDislikeButton_1 = __importDefault(require("./classes/SegmentedLikeDislikeButton"));
const SettingBoolean_1 = __importDefault(require("./classes/SettingBoolean"));
const SettingsCheckbox_1 = __importDefault(require("./classes/SettingsCheckbox"));
const SettingsOptions_1 = __importDefault(require("./classes/SettingsOptions"));
const SettingsSidebar_1 = __importDefault(require("./classes/SettingsSidebar"));
const SettingsSwitch_1 = __importDefault(require("./classes/SettingsSwitch"));
const Shelf_1 = __importDefault(require("./classes/Shelf"));
const ShowingResultsFor_1 = __importDefault(require("./classes/ShowingResultsFor"));
const SimpleCardContent_1 = __importDefault(require("./classes/SimpleCardContent"));
const SimpleCardTeaser_1 = __importDefault(require("./classes/SimpleCardTeaser"));
const SimpleTextSection_1 = __importDefault(require("./classes/SimpleTextSection"));
const SingleActionEmergencySupport_1 = __importDefault(require("./classes/SingleActionEmergencySupport"));
const SingleColumnBrowseResults_1 = __importDefault(require("./classes/SingleColumnBrowseResults"));
const SingleColumnMusicWatchNextResults_1 = __importDefault(require("./classes/SingleColumnMusicWatchNextResults"));
const SingleHeroImage_1 = __importDefault(require("./classes/SingleHeroImage"));
const SortFilterSubMenu_1 = __importDefault(require("./classes/SortFilterSubMenu"));
const SubFeedOption_1 = __importDefault(require("./classes/SubFeedOption"));
const SubFeedSelector_1 = __importDefault(require("./classes/SubFeedSelector"));
const SubscribeButton_1 = __importDefault(require("./classes/SubscribeButton"));
const SubscriptionNotificationToggleButton_1 = __importDefault(require("./classes/SubscriptionNotificationToggleButton"));
const Tab_1 = __importDefault(require("./classes/Tab"));
const Tabbed_1 = __importDefault(require("./classes/Tabbed"));
const TabbedSearchResults_1 = __importDefault(require("./classes/TabbedSearchResults"));
const TextHeader_1 = __importDefault(require("./classes/TextHeader"));
const ThumbnailOverlayBottomPanel_1 = __importDefault(require("./classes/ThumbnailOverlayBottomPanel"));
const ThumbnailOverlayEndorsement_1 = __importDefault(require("./classes/ThumbnailOverlayEndorsement"));
const ThumbnailOverlayHoverText_1 = __importDefault(require("./classes/ThumbnailOverlayHoverText"));
const ThumbnailOverlayInlineUnplayable_1 = __importDefault(require("./classes/ThumbnailOverlayInlineUnplayable"));
const ThumbnailOverlayLoadingPreview_1 = __importDefault(require("./classes/ThumbnailOverlayLoadingPreview"));
const ThumbnailOverlayNowPlaying_1 = __importDefault(require("./classes/ThumbnailOverlayNowPlaying"));
const ThumbnailOverlayPinking_1 = __importDefault(require("./classes/ThumbnailOverlayPinking"));
const ThumbnailOverlayPlaybackStatus_1 = __importDefault(require("./classes/ThumbnailOverlayPlaybackStatus"));
const ThumbnailOverlayResumePlayback_1 = __importDefault(require("./classes/ThumbnailOverlayResumePlayback"));
const ThumbnailOverlaySidePanel_1 = __importDefault(require("./classes/ThumbnailOverlaySidePanel"));
const ThumbnailOverlayTimeStatus_1 = __importDefault(require("./classes/ThumbnailOverlayTimeStatus"));
const ThumbnailOverlayToggleButton_1 = __importDefault(require("./classes/ThumbnailOverlayToggleButton"));
const TitleAndButtonListHeader_1 = __importDefault(require("./classes/TitleAndButtonListHeader"));
const ToggleButton_1 = __importDefault(require("./classes/ToggleButton"));
const ToggleMenuServiceItem_1 = __importDefault(require("./classes/ToggleMenuServiceItem"));
const Tooltip_1 = __importDefault(require("./classes/Tooltip"));
const TwoColumnBrowseResults_1 = __importDefault(require("./classes/TwoColumnBrowseResults"));
const TwoColumnSearchResults_1 = __importDefault(require("./classes/TwoColumnSearchResults"));
const TwoColumnWatchNextResults_1 = __importDefault(require("./classes/TwoColumnWatchNextResults"));
const UniversalWatchCard_1 = __importDefault(require("./classes/UniversalWatchCard"));
const VerticalList_1 = __importDefault(require("./classes/VerticalList"));
const VerticalWatchCardList_1 = __importDefault(require("./classes/VerticalWatchCardList"));
const Video_1 = __importDefault(require("./classes/Video"));
const VideoInfoCardContent_1 = __importDefault(require("./classes/VideoInfoCardContent"));
const VideoOwner_1 = __importDefault(require("./classes/VideoOwner"));
const VideoPrimaryInfo_1 = __importDefault(require("./classes/VideoPrimaryInfo"));
const VideoSecondaryInfo_1 = __importDefault(require("./classes/VideoSecondaryInfo"));
const WatchCardCompactVideo_1 = __importDefault(require("./classes/WatchCardCompactVideo"));
const WatchCardHeroVideo_1 = __importDefault(require("./classes/WatchCardHeroVideo"));
const WatchCardRichHeader_1 = __importDefault(require("./classes/WatchCardRichHeader"));
const WatchCardSectionSequence_1 = __importDefault(require("./classes/WatchCardSectionSequence"));
const WatchNextEndScreen_1 = __importDefault(require("./classes/WatchNextEndScreen"));
const WatchNextTabbedResults_1 = __importDefault(require("./classes/WatchNextTabbedResults"));
const map = {
    AccountChannel: AccountChannel_1.default,
    AccountItemSection: AccountItemSection_1.default,
    AccountItemSectionHeader: AccountItemSectionHeader_1.default,
    AccountSectionList: AccountSectionList_1.default,
    AppendContinuationItemsAction: AppendContinuationItemsAction_1.default,
    OpenPopupAction: OpenPopupAction_1.default,
    AnalyticsMainAppKeyMetrics: AnalyticsMainAppKeyMetrics_1.default,
    AnalyticsRoot: AnalyticsRoot_1.default,
    AnalyticsShortsCarouselCard: AnalyticsShortsCarouselCard_1.default,
    AnalyticsVideo: AnalyticsVideo_1.default,
    AnalyticsVodCarouselCard: AnalyticsVodCarouselCard_1.default,
    CtaGoToCreatorStudio: CtaGoToCreatorStudio_1.default,
    DataModelSection: DataModelSection_1.default,
    StatRow: StatRow_1.default,
    AudioOnlyPlayability: AudioOnlyPlayability_1.default,
    AutomixPreviewVideo: AutomixPreviewVideo_1.default,
    BackstageImage: BackstageImage_1.default,
    BackstagePost: BackstagePost_1.default,
    BackstagePostThread: BackstagePostThread_1.default,
    BrowseFeedActions: BrowseFeedActions_1.default,
    BrowserMediaSession: BrowserMediaSession_1.default,
    Button: Button_1.default,
    C4TabbedHeader: C4TabbedHeader_1.default,
    CallToActionButton: CallToActionButton_1.default,
    Card: Card_1.default,
    CardCollection: CardCollection_1.default,
    Channel: Channel_1.default,
    ChannelAboutFullMetadata: ChannelAboutFullMetadata_1.default,
    ChannelFeaturedContent: ChannelFeaturedContent_1.default,
    ChannelHeaderLinks: ChannelHeaderLinks_1.default,
    ChannelMetadata: ChannelMetadata_1.default,
    ChannelMobileHeader: ChannelMobileHeader_1.default,
    ChannelOptions: ChannelOptions_1.default,
    ChannelThumbnailWithLink: ChannelThumbnailWithLink_1.default,
    ChannelVideoPlayer: ChannelVideoPlayer_1.default,
    ChildVideo: ChildVideo_1.default,
    ChipCloud: ChipCloud_1.default,
    ChipCloudChip: ChipCloudChip_1.default,
    CollaboratorInfoCardContent: CollaboratorInfoCardContent_1.default,
    CollageHeroImage: CollageHeroImage_1.default,
    AuthorCommentBadge: AuthorCommentBadge_1.default,
    Comment: Comment_1.default,
    CommentActionButtons: CommentActionButtons_1.default,
    CommentReplies: CommentReplies_1.default,
    CommentReplyDialog: CommentReplyDialog_1.default,
    CommentsEntryPointHeader: CommentsEntryPointHeader_1.default,
    CommentsHeader: CommentsHeader_1.default,
    CommentSimplebox: CommentSimplebox_1.default,
    CommentThread: CommentThread_1.default,
    CompactLink: CompactLink_1.default,
    CompactMix: CompactMix_1.default,
    CompactPlaylist: CompactPlaylist_1.default,
    CompactVideo: CompactVideo_1.default,
    ContinuationItem: ContinuationItem_1.default,
    CopyLink: CopyLink_1.default,
    CreatePlaylistDialog: CreatePlaylistDialog_1.default,
    DidYouMean: DidYouMean_1.default,
    DownloadButton: DownloadButton_1.default,
    Dropdown: Dropdown_1.default,
    DropdownItem: DropdownItem_1.default,
    Element: Element_1.default,
    EmergencyOnebox: EmergencyOnebox_1.default,
    Endscreen: Endscreen_1.default,
    EndscreenElement: EndscreenElement_1.default,
    EndScreenPlaylist: EndScreenPlaylist_1.default,
    EndScreenVideo: EndScreenVideo_1.default,
    ExpandableTab: ExpandableTab_1.default,
    ExpandedShelfContents: ExpandedShelfContents_1.default,
    FeedFilterChipBar: FeedFilterChipBar_1.default,
    FeedTabbedHeader: FeedTabbedHeader_1.default,
    Grid: Grid_1.default,
    GridChannel: GridChannel_1.default,
    GridHeader: GridHeader_1.default,
    GridPlaylist: GridPlaylist_1.default,
    GridVideo: GridVideo_1.default,
    HighlightsCarousel: HighlightsCarousel_1.default,
    HistorySuggestion: HistorySuggestion_1.default,
    HorizontalCardList: HorizontalCardList_1.default,
    HorizontalList: HorizontalList_1.default,
    IconLink: IconLink_1.default,
    ItemSection: ItemSection_1.default,
    ItemSectionHeader: ItemSectionHeader_1.default,
    ItemSectionTab: ItemSectionTab_1.default,
    ItemSectionTabbedHeader: ItemSectionTabbedHeader_1.default,
    LikeButton: LikeButton_1.default,
    LiveChat: LiveChat_1.default,
    AddBannerToLiveChatCommand: AddBannerToLiveChatCommand_1.default,
    AddChatItemAction: AddChatItemAction_1.default,
    AddLiveChatTickerItemAction: AddLiveChatTickerItemAction_1.default,
    LiveChatAutoModMessage: LiveChatAutoModMessage_1.default,
    LiveChatBanner: LiveChatBanner_1.default,
    LiveChatBannerHeader: LiveChatBannerHeader_1.default,
    LiveChatBannerPoll: LiveChatBannerPoll_1.default,
    LiveChatMembershipItem: LiveChatMembershipItem_1.default,
    LiveChatPaidMessage: LiveChatPaidMessage_1.default,
    LiveChatPaidSticker: LiveChatPaidSticker_1.default,
    LiveChatPlaceholderItem: LiveChatPlaceholderItem_1.default,
    LiveChatProductItem: LiveChatProductItem_1.default,
    LiveChatTextMessage: LiveChatTextMessage_1.default,
    LiveChatTickerPaidMessageItem: LiveChatTickerPaidMessageItem_1.default,
    LiveChatTickerSponsorItem: LiveChatTickerSponsorItem_1.default,
    LiveChatViewerEngagementMessage: LiveChatViewerEngagementMessage_1.default,
    PollHeader: PollHeader_1.default,
    LiveChatActionPanel: LiveChatActionPanel_1.default,
    MarkChatItemAsDeletedAction: MarkChatItemAsDeletedAction_1.default,
    MarkChatItemsByAuthorAsDeletedAction: MarkChatItemsByAuthorAsDeletedAction_1.default,
    RemoveBannerForLiveChatCommand: RemoveBannerForLiveChatCommand_1.default,
    ReplaceChatItemAction: ReplaceChatItemAction_1.default,
    ReplayChatItemAction: ReplayChatItemAction_1.default,
    ShowLiveChatActionPanelAction: ShowLiveChatActionPanelAction_1.default,
    ShowLiveChatTooltipCommand: ShowLiveChatTooltipCommand_1.default,
    UpdateDateTextAction: UpdateDateTextAction_1.default,
    UpdateDescriptionAction: UpdateDescriptionAction_1.default,
    UpdateLiveChatPollAction: UpdateLiveChatPollAction_1.default,
    UpdateTitleAction: UpdateTitleAction_1.default,
    UpdateToggleButtonTextAction: UpdateToggleButtonTextAction_1.default,
    UpdateViewershipAction: UpdateViewershipAction_1.default,
    LiveChatAuthorBadge: LiveChatAuthorBadge_1.default,
    LiveChatDialog: LiveChatDialog_1.default,
    LiveChatHeader: LiveChatHeader_1.default,
    LiveChatItemList: LiveChatItemList_1.default,
    LiveChatMessageInput: LiveChatMessageInput_1.default,
    LiveChatParticipant: LiveChatParticipant_1.default,
    LiveChatParticipantsList: LiveChatParticipantsList_1.default,
    Menu: Menu_1.default,
    MenuNavigationItem: MenuNavigationItem_1.default,
    MenuServiceItem: MenuServiceItem_1.default,
    MenuServiceItemDownload: MenuServiceItemDownload_1.default,
    MultiPageMenu: MultiPageMenu_1.default,
    MultiPageMenuNotificationSection: MultiPageMenuNotificationSection_1.default,
    MusicMenuItemDivider: MusicMenuItemDivider_1.default,
    MusicMultiSelectMenu: MusicMultiSelectMenu_1.default,
    MusicMultiSelectMenuItem: MusicMultiSelectMenuItem_1.default,
    SimpleMenuHeader: SimpleMenuHeader_1.default,
    MerchandiseItem: MerchandiseItem_1.default,
    MerchandiseShelf: MerchandiseShelf_1.default,
    Message: Message_1.default,
    MetadataBadge: MetadataBadge_1.default,
    MetadataRow: MetadataRow_1.default,
    MetadataRowContainer: MetadataRowContainer_1.default,
    MetadataRowHeader: MetadataRowHeader_1.default,
    MicroformatData: MicroformatData_1.default,
    Mix: Mix_1.default,
    Movie: Movie_1.default,
    MovingThumbnail: MovingThumbnail_1.default,
    MusicCarouselShelf: MusicCarouselShelf_1.default,
    MusicCarouselShelfBasicHeader: MusicCarouselShelfBasicHeader_1.default,
    MusicDescriptionShelf: MusicDescriptionShelf_1.default,
    MusicDetailHeader: MusicDetailHeader_1.default,
    MusicDownloadStateBadge: MusicDownloadStateBadge_1.default,
    MusicEditablePlaylistDetailHeader: MusicEditablePlaylistDetailHeader_1.default,
    MusicElementHeader: MusicElementHeader_1.default,
    MusicHeader: MusicHeader_1.default,
    MusicImmersiveHeader: MusicImmersiveHeader_1.default,
    MusicInlineBadge: MusicInlineBadge_1.default,
    MusicItemThumbnailOverlay: MusicItemThumbnailOverlay_1.default,
    MusicLargeCardItemCarousel: MusicLargeCardItemCarousel_1.default,
    MusicNavigationButton: MusicNavigationButton_1.default,
    MusicPlayButton: MusicPlayButton_1.default,
    MusicPlaylistShelf: MusicPlaylistShelf_1.default,
    MusicQueue: MusicQueue_1.default,
    MusicResponsiveListItem: MusicResponsiveListItem_1.default,
    MusicResponsiveListItemFixedColumn: MusicResponsiveListItemFixedColumn_1.default,
    MusicResponsiveListItemFlexColumn: MusicResponsiveListItemFlexColumn_1.default,
    MusicShelf: MusicShelf_1.default,
    MusicSideAlignedItem: MusicSideAlignedItem_1.default,
    MusicSortFilterButton: MusicSortFilterButton_1.default,
    MusicThumbnail: MusicThumbnail_1.default,
    MusicTwoRowItem: MusicTwoRowItem_1.default,
    MusicVisualHeader: MusicVisualHeader_1.default,
    NavigationEndpoint: NavigationEndpoint_1.default,
    Notification: Notification_1.default,
    PageIntroduction: PageIntroduction_1.default,
    PlayerAnnotationsExpanded: PlayerAnnotationsExpanded_1.default,
    PlayerCaptionsTracklist: PlayerCaptionsTracklist_1.default,
    PlayerErrorMessage: PlayerErrorMessage_1.default,
    PlayerLiveStoryboardSpec: PlayerLiveStoryboardSpec_1.default,
    PlayerMicroformat: PlayerMicroformat_1.default,
    PlayerOverlay: PlayerOverlay_1.default,
    PlayerOverlayAutoplay: PlayerOverlayAutoplay_1.default,
    PlayerStoryboardSpec: PlayerStoryboardSpec_1.default,
    Playlist: Playlist_1.default,
    PlaylistHeader: PlaylistHeader_1.default,
    PlaylistInfoCardContent: PlaylistInfoCardContent_1.default,
    PlaylistMetadata: PlaylistMetadata_1.default,
    PlaylistPanel: PlaylistPanel_1.default,
    PlaylistPanelVideo: PlaylistPanelVideo_1.default,
    PlaylistPanelVideoWrapper: PlaylistPanelVideoWrapper_1.default,
    PlaylistSidebar: PlaylistSidebar_1.default,
    PlaylistSidebarPrimaryInfo: PlaylistSidebarPrimaryInfo_1.default,
    PlaylistSidebarSecondaryInfo: PlaylistSidebarSecondaryInfo_1.default,
    PlaylistVideo: PlaylistVideo_1.default,
    PlaylistVideoList: PlaylistVideoList_1.default,
    PlaylistVideoThumbnail: PlaylistVideoThumbnail_1.default,
    Poll: Poll_1.default,
    Post: Post_1.default,
    ProfileColumn: ProfileColumn_1.default,
    ProfileColumnStats: ProfileColumnStats_1.default,
    ProfileColumnStatsEntry: ProfileColumnStatsEntry_1.default,
    ProfileColumnUserInfo: ProfileColumnUserInfo_1.default,
    ReelItem: ReelItem_1.default,
    ReelShelf: ReelShelf_1.default,
    RelatedChipCloud: RelatedChipCloud_1.default,
    RichGrid: RichGrid_1.default,
    RichItem: RichItem_1.default,
    RichListHeader: RichListHeader_1.default,
    RichSection: RichSection_1.default,
    RichShelf: RichShelf_1.default,
    SearchBox: SearchBox_1.default,
    SearchRefinementCard: SearchRefinementCard_1.default,
    SearchSuggestion: SearchSuggestion_1.default,
    SearchSuggestionsSection: SearchSuggestionsSection_1.default,
    SecondarySearchContainer: SecondarySearchContainer_1.default,
    SectionList: SectionList_1.default,
    SegmentedLikeDislikeButton: SegmentedLikeDislikeButton_1.default,
    SettingBoolean: SettingBoolean_1.default,
    SettingsCheckbox: SettingsCheckbox_1.default,
    SettingsOptions: SettingsOptions_1.default,
    SettingsSidebar: SettingsSidebar_1.default,
    SettingsSwitch: SettingsSwitch_1.default,
    Shelf: Shelf_1.default,
    ShowingResultsFor: ShowingResultsFor_1.default,
    SimpleCardContent: SimpleCardContent_1.default,
    SimpleCardTeaser: SimpleCardTeaser_1.default,
    SimpleTextSection: SimpleTextSection_1.default,
    SingleActionEmergencySupport: SingleActionEmergencySupport_1.default,
    SingleColumnBrowseResults: SingleColumnBrowseResults_1.default,
    SingleColumnMusicWatchNextResults: SingleColumnMusicWatchNextResults_1.default,
    SingleHeroImage: SingleHeroImage_1.default,
    SortFilterSubMenu: SortFilterSubMenu_1.default,
    SubFeedOption: SubFeedOption_1.default,
    SubFeedSelector: SubFeedSelector_1.default,
    SubscribeButton: SubscribeButton_1.default,
    SubscriptionNotificationToggleButton: SubscriptionNotificationToggleButton_1.default,
    Tab: Tab_1.default,
    Tabbed: Tabbed_1.default,
    TabbedSearchResults: TabbedSearchResults_1.default,
    TextHeader: TextHeader_1.default,
    ThumbnailOverlayBottomPanel: ThumbnailOverlayBottomPanel_1.default,
    ThumbnailOverlayEndorsement: ThumbnailOverlayEndorsement_1.default,
    ThumbnailOverlayHoverText: ThumbnailOverlayHoverText_1.default,
    ThumbnailOverlayInlineUnplayable: ThumbnailOverlayInlineUnplayable_1.default,
    ThumbnailOverlayLoadingPreview: ThumbnailOverlayLoadingPreview_1.default,
    ThumbnailOverlayNowPlaying: ThumbnailOverlayNowPlaying_1.default,
    ThumbnailOverlayPinking: ThumbnailOverlayPinking_1.default,
    ThumbnailOverlayPlaybackStatus: ThumbnailOverlayPlaybackStatus_1.default,
    ThumbnailOverlayResumePlayback: ThumbnailOverlayResumePlayback_1.default,
    ThumbnailOverlaySidePanel: ThumbnailOverlaySidePanel_1.default,
    ThumbnailOverlayTimeStatus: ThumbnailOverlayTimeStatus_1.default,
    ThumbnailOverlayToggleButton: ThumbnailOverlayToggleButton_1.default,
    TitleAndButtonListHeader: TitleAndButtonListHeader_1.default,
    ToggleButton: ToggleButton_1.default,
    ToggleMenuServiceItem: ToggleMenuServiceItem_1.default,
    Tooltip: Tooltip_1.default,
    TwoColumnBrowseResults: TwoColumnBrowseResults_1.default,
    TwoColumnSearchResults: TwoColumnSearchResults_1.default,
    TwoColumnWatchNextResults: TwoColumnWatchNextResults_1.default,
    UniversalWatchCard: UniversalWatchCard_1.default,
    VerticalList: VerticalList_1.default,
    VerticalWatchCardList: VerticalWatchCardList_1.default,
    Video: Video_1.default,
    VideoInfoCardContent: VideoInfoCardContent_1.default,
    VideoOwner: VideoOwner_1.default,
    VideoPrimaryInfo: VideoPrimaryInfo_1.default,
    VideoSecondaryInfo: VideoSecondaryInfo_1.default,
    WatchCardCompactVideo: WatchCardCompactVideo_1.default,
    WatchCardHeroVideo: WatchCardHeroVideo_1.default,
    WatchCardRichHeader: WatchCardRichHeader_1.default,
    WatchCardSectionSequence: WatchCardSectionSequence_1.default,
    WatchNextEndScreen: WatchNextEndScreen_1.default,
    WatchNextTabbedResults: WatchNextTabbedResults_1.default
};
exports.YTNodes = map;
/**
 * @param name - Name of the node to be parsed
 */
function GetParserByName(name) {
    const ParserConstructor = map[name];
    if (!ParserConstructor) {
        const error = new Error(`Module not found: ${name}`);
        error.code = 'MODULE_NOT_FOUND';
        throw error;
    }
    return ParserConstructor;
}
exports.default = GetParserByName;
//# sourceMappingURL=map.js.map