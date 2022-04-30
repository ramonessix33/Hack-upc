define("metaserver/static/js/modules/clean/flux/flux_store",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FluxStore=void 0;t.FluxStore=class{constructor(e){this._listeners=[],this._dispatcher=e,this._dispatchToken=this._dispatcher.register(this.__invokeOnDispatch.bind(this)),this.__hasChanged=!1}teardown(){this._dispatcher.unregister(this._dispatchToken)}getDispatcher(){return this._dispatcher}getDispatchToken(){return this._dispatchToken}addListener(e){return this._listeners.push(e),()=>this._listeners=Array.from(this._listeners).filter(t=>t!==e)}hasChanged(){return this.__hasChanged}__emitChange(){this.__hasChanged=!0}__invokeOnDispatch(e){if(this.__hasChanged=!1,this.__onDispatch(e),this.__hasChanged)return Array.from(this._listeners).map(e=>e())}}})),define("metaserver/static/js/modules/clean/photos/thumb_loading/generic_thumb_store",["require","exports","metaserver/static/js/modules/clean/photos/thumb_loading/http2_thumb_loader","metaserver/static/js/modules/core/assert"],(function(e,t,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GenericThumbStore=void 0;t.GenericThumbStore=class{constructor(e,t){this.loaderBatches=!1,this.thumbUrlToData={},this.callbackByRequestId={},this.loaderBatches=!!t,this.thumbLoader=e||new a.Http2ThumbLoader}is_batching(){return this.loaderBatches}bind_url(e,t){if(s.assert(!!t.onSuccess,"missing onSuccess handler"),this.thumbUrlToData[e])return t.onRequest&&t.onRequest(!0),t.onSuccess(!0),null;const a=this.thumbLoader.get_request_id();this.callbackByRequestId[a]=t;return this.thumbLoader.load_image(e,a,()=>{const e=this.callbackByRequestId[a];e&&e.onRequest&&e.onRequest(!1)},t=>{this.thumbUrlToData[e]=t;const s=this.callbackByRequestId[a];s&&s.onSuccess(!1)},()=>{const e=this.callbackByRequestId[a];e&&e.onError&&e.onError()},()=>this.callbackByRequestId.hasOwnProperty(a)),a}unbind_url(e){e&&(delete this.callbackByRequestId[e],this.thumbLoader.cancel_thumb(e))}get_thumb(e){return this.thumbUrlToData[e]?this.thumbUrlToData[e]:null}}})),define("metaserver/static/js/modules/clean/photos/thumb_loading/http2_thumb_loader",["require","exports","metaserver/static/js/modules/clean/photos/thumb_loading/utils"],(function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Http2ThumbLoader=void 0;t.Http2ThumbLoader=class{constructor(){this.http2RequestId=0}get_request_id(){return this.http2RequestId+=1,this.http2RequestId.toString()}load_image(e,t,s,r,i,o){s(),a.load_individual_image(e,1,r,i,o)}cancel_thumb(e){}}})),define("metaserver/static/js/modules/clean/photos/thumb_loading/utils",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.load_individual_image=void 0,t.load_individual_image=function(e,t,a,s,r){const i=new Image;i.onload=()=>a(e),i.onerror=()=>{t>0&&r()?(t-=1,i.src=e):s()},i.src=e}})),define("metaserver/static/js/modules/clean/react/maestro/layout/search",["require","exports","tslib","classnames","react","spectrum/media_table_skeleton/index","metaserver/static/js/modules/clean/react/async/loadable","metaserver/static/js/modules/clean/react/maestro/layout/chrome","metaserver/static/js/modules/core/i18n"],(function(e,t,a,s,r,i,o,n,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SearchChrome=t.AsyncMaestroSearchView=t.AsyncSearchRightRail=void 0,s=a.__importDefault(s),r=a.__importDefault(r);const d=o.Loadable({loader:()=>a.__awaiter(void 0,void 0,void 0,(function*(){const{SearchRightRail:t}=yield new Promise((t,a)=>{e(["metaserver/static/js/modules/clean/search/single_page/search_right_rail/search_right_rail"],t,a)}).then(a.__importStar);return t}))});t.AsyncSearchRightRail=e=>r.default.createElement("div",{className:"search-right-rail-wrapper"},r.default.createElement(d,Object.assign({},e))),t.AsyncSearchRightRail.displayName="AsyncSearchRightRail",t.AsyncMaestroSearchView=o.Loadable({loader:()=>a.__awaiter(void 0,void 0,void 0,(function*(){const[{SearchView:t}]=yield Promise.all([new Promise((t,a)=>{e(["metaserver/static/js/modules/clean/search/single_page/view"],t,a)}).then(a.__importStar)]);return t})),loading:({inputBox:e})=>e.current&&e.current.value?r.default.createElement(i.MediaTableSkeleton,{numRows:15}):null,loadError:()=>r.default.createElement("div",null,l.intl.formatMessage({id:"V2lejD",defaultMessage:"Something went wrong. Please reload the page."}))});class c extends r.default.PureComponent{constructor(e){super(e),this.handleSearchExit=()=>{this.setState({isSearching:!1})},this.handleSearchEnter=()=>{this.setState({isSearching:!0})},this.renderSearchSidebar=e=>r.default.createElement(t.AsyncSearchRightRail,{responsive:e}),this.renderEmbeddedApp=e=>[this.inSearchMode?r.default.createElement(t.AsyncMaestroSearchView,{key:"search",user:this.props.user,responsive:e,inputBox:this.state.inputBox}):null,r.default.createElement("div",{style:{display:this.inSearchMode?"none":void 0},key:"app"},"function"==typeof this.props.embeddedAppRegion?this.props.embeddedAppRegion(e,!this.inSearchMode):this.props.embeddedAppRegion)],this.state={isSearching:e.searchBarProps&&e.searchBarProps.isSearching||!1,inputBox:r.default.createRef()}}get inSearchMode(){return this.props.searchBarProps&&"full-page"===this.props.searchBarProps.searchVariant&&this.props.user&&this.state.isSearching}render(){const{actionSidebarRegion:e,searchBarProps:t,titleRegion:a,useRightRailOutsideSearch:i,wideSecondarySidebar:o}=this.props,l=this.inSearchMode||i,d=s.default({"maestro-chrome--search":!0,"maestro-chrome--search-active":this.inSearchMode,"exp-details-pane-variants":this.inSearchMode&&o,"maestro-chrome--right-rail":l},this.props.chromeClass);return r.default.createElement(n.MaestroChrome,Object.assign({},this.props,{actionSidebarRegion:this.inSearchMode?this.renderSearchSidebar:e,titleRegion:a,searchBarProps:Object.assign(Object.assign({},t||{}),{isSearching:this.state.isSearching,onSearchExit:this.handleSearchExit,onSearchEnter:this.handleSearchEnter,inputBoxRef:this.state.inputBox}),useRightRail:l,embeddedAppRegion:this.renderEmbeddedApp,titleClass:"page-header__title--search",chromeClass:d}))}}t.SearchChrome=c,c.displayName="SearchChrome"})),define("metaserver/static/js/modules/clean/react/file_uploader/file_uploader",["require","exports","tslib","react","metaserver/static/js/modules/core/exception","metaserver/static/js/modules/constants/global_file_upload"],(function(e,t,a,s,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FileUploaderController=void 0;const o=(s=a.__importDefault(s)).default.lazy(()=>a.__awaiter(void 0,void 0,void 0,(function*(){const{FileUploaderFC:t}=yield new Promise((t,a)=>{e(["metaserver/static/js/modules/clean/react/file_uploader/clean/uploader_main"],t,a)}).then(a.__importStar);return{default:t}})));let n=null;class l extends s.default.Component{constructor(e){super(e),this.handleAllFileUploadsComplete=e=>{e.find(e=>!!this.state.uploadErrorTypes&&e.errorType===this.state.uploadErrorTypes.OVER_QUOTA_ERROR)&&!this.isPaidTeamViewer()&&l.showModal("out-of-quota"),this.props.onAllFileUploadsComplete&&this.props.onAllFileUploadsComplete(e)},this.path=this.props.initialPath?this.props.initialPath:"/",this.hasPermissionToUploadToFolder=!!this.props.initialPermission,this.state={fileUploader:void 0,uploaderStore:void 0,uploaderActions:void 0,oqModalTypes:void 0,viewer:void 0,uploadErrorTypes:void 0},this.props.loadOnRender&&l.requireFileUploader({}),n?r.reportStack("Only one FileUploader component may be rendered to the page at any time.You have tried to instantiate multiple uploaders.",{severity:r.SEVERITY.CRITICAL}):n=this,e.shouldInitialize&&l.initialized()}static showModal(e){n&&(n.refs.fileUploader?e&&"regular"!==e?"out-of-quota"===e&&n.state.oqModalTypes?n.refs.fileUploader.showOQModal({context:n.state.oqModalTypes.WENT_OQ_DURING_UPLOAD}):"team-onboarding"===e&&n.refs.fileUploader.showModalWithTeamOnboarding():n.refs.fileUploader.showModal():(e=e||"regular",l.requireFileUploader({modalType:e})))}static requireFileUploader({modalType:t,handleUploadButtonClick:s,folderUpload:r,source:i}){const o=([{FileUploader:e},{uploaderStore:a},{UploaderActions:o},{UploaderOverQuotaModalContexts:d},{Viewer:c},{UploadErrorType:u}])=>{n&&(n.setAsyncRequiredUploaderModules(e,o,a,d,c,u),l.onInitialized.then(()=>{t&&l.showModal(t),s&&l.handleUploadButtonClick(!!r,i)}))};o.perfName="file_uploader",Promise.all([new Promise((t,a)=>{e(["metaserver/static/js/modules/clean/react/file_uploader/uploader_new"],t,a)}).then(a.__importStar),new Promise((t,a)=>{e(["metaserver/static/js/modules/clean/react/file_uploader/store"],t,a)}).then(a.__importStar),new Promise((t,a)=>{e(["metaserver/static/js/modules/clean/react/file_uploader/actions"],t,a)}).then(a.__importStar),new Promise((t,a)=>{e(["metaserver/static/js/modules/clean/react/file_uploader/oq_drag_drop_modal_types"],t,a)}).then(a.__importStar),new Promise((t,a)=>{e(["metaserver/static/js/modules/clean/viewer"],t,a)}).then(a.__importStar),new Promise((t,a)=>{e(["metaserver/static/js/modules/clean/react/file_uploader/constants"],t,a)}).then(a.__importStar)]).then(o),new Promise((t,a)=>{e(["metaserver/static/js/modules/clean/react/file_uploader/clean/actions"],t,a)}).then(a.__importStar).then(({UploaderActions:e})=>{this.reduxUploaderActions=e})}componentDidUpdate(e){!e.shouldInitialize&&this.props.shouldInitialize&&l.initialized()}componentWillUnmount(){n=null}static loadCoreComponent(){n&&n.state.fileUploader||l.requireFileUploader({})}static isCoreComponentDefined(){return!!n&&!!n.state.fileUploader}static setPathAndPermissions(e){i.FILE_UPLOAD_USE_REDUX?l.reduxUploaderActions.setPath(e):n&&n.state.uploaderActions&&n.state.uploaderActions.setPath(e)}static setPath(e){i.FILE_UPLOAD_USE_REDUX?l.reduxUploaderActions.setPath({path:e}):n&&(n.state.uploaderActions?n.state.uploaderActions.setPath({path:e}):(e||(e="/"),n.path=e))}static setUser(e){i.FILE_UPLOAD_USE_REDUX||n&&(n.state.uploaderActions?n.state.uploaderActions.setUser({user:e}):n.user=e||void 0)}setAsyncRequiredUploaderModules(e,t,a,s,r,i){this.setState({fileUploader:e,uploaderStore:a,uploaderActions:t,oqModalTypes:s,viewer:r,uploadErrorTypes:i}),this.props.needToSetStoreValues&&(void 0!==this.user&&t.setUser({user:this.user}),t.setPath({path:this.path,hasPermissionToUploadToFolder:this.hasPermissionToUploadToFolder}))}static handleUploadButtonClick(e,t,a){i.FILE_UPLOAD_USE_REDUX&&n?l.reduxUploaderActions.handleUploadButtonClick(e,n.props.uploadConsumerInterface,t,a):n&&(n.refs.fileUploader?n.refs.fileUploader.handleUploadButtonClick(e,t,a):l.requireFileUploader({handleUploadButtonClick:!0,folderUpload:e,source:t}))}static isDraggingFilesHelper(e){if(!n)return!1;if(!n.state.uploaderStore)return!1;const t=n.state.uploaderStore;return!!t.numDraggingFiles()&&(e?t.isInternalTransfer():!t.isInternalTransfer())}static isDraggingInternalFiles(){return l.isDraggingFilesHelper(!0)}static isDraggingExternalFiles(){return l.isDraggingFilesHelper(!1)}static isUploadModalOpen(){if(!n)return!1;if(!n.state.uploaderStore)return!1;return n.state.uploaderStore.isUploadModalOpen()}isPaidTeamViewer(){return!(!this.user||!this.state.viewer||!this.user.is_team||this.state.viewer.get_viewer().team_is_limited)}render(){const{autoTeamGroupId:e,isContentManager:t,isCollectionsPage:a,getCMUriForFqPath:r,getBrowseContext:n,ajaxInterceptor:l,onFileUploadComplete:d,onModalDismissed:c,dragAndDropEnabled:u,shouldShowDestinationLink:p,uploaderPostTTIExperiments:h,chooseDestination:m,rootNSIDForCM:_,handleClickNewFolder:f,uploadConsumerInterface:g,shouldInitialize:v,isFirstTask:b,hideInlineSnackbar:y}=this.props;if(i.FILE_UPLOAD_USE_REDUX)return s.default.createElement(s.default.Suspense,{fallback:null},s.default.createElement(o,{key:"file-uploader-redux",autoTeamGroupId:e,isContentManager:t,getCMUriForFqPath:r,getBrowseContext:n,ajaxInterceptor:l,onFileUploadComplete:d,onAllFileUploadsComplete:this.handleAllFileUploadsComplete,onModalDismissed:c,dragAndDropEnabled:u,shouldShowDestinationLink:p,uploaderPostTTIExperiments:h,chooseDestination:m,rootNSIDForCM:_,handleClickNewFolder:f,uploadConsumerInterface:g,useUploadKit:!t||i.FILE_UPLOAD_CM_USE_UPLOADKIT,isFirstTask:b,"data-testid":"file-uploader",hideInlineSnackbar:y}));if(!this.state.fileUploader||!v)return s.default.createElement("div",null);const S=this.state.fileUploader;return s.default.createElement(S,{ref:"fileUploader",key:1,autoTeamGroupId:e,isContentManager:t,isCollectionsPage:a,getCMUriForFqPath:r,getBrowseContext:n,ajaxInterceptor:l,onFileUploadComplete:d,onAllFileUploadsComplete:this.handleAllFileUploadsComplete,onModalDismissed:c,dragAndDropEnabled:u,shouldShowDestinationLink:p,uploaderPostTTIExperiments:h,chooseDestination:m,rootNSIDForCM:_,handleClickNewFolder:f,uploadConsumerInterface:g,useUploadKit:!t||i.FILE_UPLOAD_CM_USE_UPLOADKIT,isFirstTask:b,"data-testid":"file-uploader",hideInlineSnackbar:y})}}t.FileUploaderController=l,l.onInitialized=new Promise(e=>{l.initialized=()=>{e()}}),l.defaultProps={shouldInitialize:!0},l.displayName="FileUploaderController"}));var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,s){void 0===s&&(s=a),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,s){void 0===s&&(s=a),e[s]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t};define("metaserver/static/js/modules/clean/sharing/wizard/async_wizard_modals",["require","exports"],(function(e,t){"use strict";function a(t){new Promise((t,a)=>{e(["metaserver/static/js/modules/clean/sharing/wizard/wizard_modals"],t,a)}).then(__importStar).then(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.asyncShowShareAFolderWizardModal=t.asyncShareExistingFolder=void 0,t.asyncShareExistingFolder=function(e,t,s,r){a(a=>{a.shareExistingFolder(e,t,s,r)})},t.asyncShowShareAFolderWizardModal=function(e,t){a(a=>{const s=a.showShareAFolderWizardModal(e);t&&t(s)})}})),define("metaserver/static/js/modules/clean/react/actions_menu/view",["require","exports","tslib","classnames","react","dig-components/badges","dig-components/buttons","dig-components/icons","dig-components/icons/src","dig-components/menu","dig-components/tooltips","dig-components/typography","metaserver/static/js/modules/clean/react/badge","metaserver/static/js/modules/clean/react/components/css","metaserver/static/js/modules/clean/user_education/react/user_education_effect"],(function(e,t,a,s,r,i,o,n,l,d,c,u,p,h,m){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ActionsMenu=void 0,s=a.__importDefault(s),r=a.__importStar(r);const _=(e,t,a)=>()=>{a&&a()},f=({tooltip:e,placement:t})=>r.default.createElement(c.Tooltip,{title:e,placement:t||"left"},r.default.createElement(u.Text,{color:"faint",className:"actions_menu__tooltip"},r.default.createElement(n.UIIcon,{src:l.InfoLine})));f.displayName="ActionTooltip";const g=e=>{var t,a;return r.default.createElement("nav",{className:"actions_menu"},e.primaryMenuItems&&e.primaryMenuItems.length?r.default.createElement("div",{className:"actions_menu__primary"},null===(t=e.primaryMenuItems)||void 0===t?void 0:t.map(e=>"function"==typeof e?e():r.default.createElement(r.default.Fragment,{key:e.key||e.displayName},r.default.createElement(o.Button,{variant:e.buttonVariant&&"secondary"===e.buttonVariant?"opacity":"primary",disabled:e.disabled,onClick:_(0,0,e.handleClick),className:e.className},r.default.createElement(m.UserEducationEffect,{containerName:"AppActionsView",name:"PrimaryButtonText",useSpan:!0},e.displayName)),e.tooltip&&r.default.createElement(f,{tooltip:e.tooltip,placement:e.tooltipPlacement}))),e.shouldCollapseActions&&r.default.createElement(S,Object.assign({},e,{primaryMenuItems:void 0,className:"actions_menu__overflow"}))):null,e.primarySubnode,!e.shouldCollapseActions&&r.default.createElement("ul",null,null===(a=e.secondaryMenuItems)||void 0===a?void 0:a.map(e=>"function"==typeof e?e():r.default.createElement("li",{key:e.key||e.displayName},r.default.createElement(o.Button,{variant:"transparent",disabled:e.disabled,hasNoUnderline:!0,"aria-label":e.ariaLabel,className:s.default("actions_menu__button",e.className),withIconLeft:e.icon&&r.default.createElement(n.UIIcon,{src:e.icon}),onClick:_(0,e.iconName,e.handleClick)},r.default.createElement(m.UserEducationEffect,{containerName:"AppActionsView",name:`SecondaryActionMenu-text-${e.iconName}`,useSpan:!0},e.displayName,e.badge&&r.default.createElement(i.AccessoryBadge,{className:"actions_menu__badge"},p.badgeVariantToText[e.badge.variant]))),e.tooltip?r.default.createElement(f,{tooltip:e.tooltip,placement:e.tooltipPlacement}):null))))};g.displayName="ActionsMenuList";const v=e=>r.default.createElement(d.Menu.ActionItem,{disabled:e.disabled,value:e,"aria-label":e.ariaLabel,"aria-pressed":e.ariaPressed,className:e.className,withLeftAccessory:e.icon&&r.default.createElement(n.UIIcon,{src:e.icon}),withRightAccessory:"badge"in e&&e.badge?r.default.createElement(i.AccessoryBadge,null,p.badgeVariantToText[e.badge.variant]):e.tooltip&&r.default.createElement(f,{tooltip:e.tooltip,placement:e.tooltipPlacement})},r.default.createElement(m.UserEducationEffect,{containerName:"AppActionsView",name:`SecondaryActionMenu-text-${e.iconName}`,useSpan:!0},e.displayName));v.displayName="ActionItem";const b=e=>{_(0,e.iconName,e.handleClick)()},y=({item:e})=>"function"==typeof e?null:r.default.createElement(v,Object.assign({},e));y.displayName="MenuItem";const S=e=>{var t,a;return 0===(null===(t=e.primaryMenuItems)||void 0===t?void 0:t.length)&&0===(null===(a=e.secondaryMenuItems)||void 0===a?void 0:a.length)?null:r.default.createElement(d.Menu.Wrapper,{onSelection:b,className:e.className},({getContentProps:t,getTriggerProps:a})=>{var s,i;return r.default.createElement(r.default.Fragment,null,r.default.createElement(m.UserEducationEffect,{containerName:"AppActionsPopover",name:"OverflowButton",useSpan:!0},r.default.createElement(o.IconButton,Object.assign({variant:"transparent"},a({onClick:e.onContextMenuClick}),{"aria-label":e.popoverTriggerLabel,"data-testid":"actions-menu-button"}),r.default.createElement(n.UIIcon,{src:l.MoreHorizontalLine}))),r.default.createElement(d.Menu.Content,Object.assign({},t(),{placement:"bottom-end"}),r.default.createElement(d.Menu.Segment,null,null===(s=e.primaryMenuItems)||void 0===s?void 0:s.map((e,t)=>r.default.createElement(y,{item:e,key:t})),null===(i=e.secondaryMenuItems)||void 0===i?void 0:i.map((e,t)=>r.default.createElement(y,{item:e,key:t})))))})};S.displayName="ActionsMenuDropdown";const E=e=>{const{handleComponentTTI:t}=e;return r.useEffect(()=>{t&&t("AppActionsView")},[t]),e.responsive&&e.responsive.isResponsive&&!e.responsive.isMatchedLarge?r.default.createElement(S,Object.assign({},e)):r.default.createElement(g,Object.assign({},e))};E.displayName="ActionsMenuComponent",t.ActionsMenu=h.requireCssWithComponent(E,["/static/css/dig-components/index.web-vfl0pq0Fh.css","/static/css/react/actions_menu-vflfT1FOW.css"])}));
//# sourceMappingURL=pkg-browse-core.min.js-vfleEetJW.map