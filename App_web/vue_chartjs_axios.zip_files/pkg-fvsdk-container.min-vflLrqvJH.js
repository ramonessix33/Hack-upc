define("metaserver/static/js/modules/clean/react/file_viewer/container",["require","exports","tslib","prop-types","react","metaserver/static/js/modules/clean/history","metaserver/static/js/modules/clean/cloud_docs/types","metaserver/static/js/modules/clean/open_in_app/actions","metaserver/static/js/modules/clean/sharing/async_share_modal_util","metaserver/static/js/modules/clean/react/snackbar_manager","metaserver/static/js/modules/clean/react/snackbar","metaserver/static/js/modules/clean/viewer","metaserver/static/js/modules/clean/web_timing_logger","metaserver/static/js/modules/clean/react/extensions/data/store","metaserver/static/js/modules/clean/integrations/zoom_share_dialog/async_modal","metaserver/static/js/modules/core/browser","metaserver/static/js/modules/clean/react/file_viewer/sdk_file_viewer/utils","metaserver/static/js/modules/clean/react/file_viewer/utils","typescript/libraries/file-viewer/src/core/config","metaserver/static/js/modules/clean/auth/login_or_register/types","metaserver/static/js/modules/constants/python","metaserver/static/js/modules/clean/react/action_bar/file_actions/portable/save_as_copy/save_as_copy","metaserver/static/js/modules/clean/file_store/utils","metaserver/static/js/modules/clean/react/file_viewer/sdk_file_viewer/action_plugins/utils","metaserver/static/js/modules/clean/sharing/clean/util/link_util/parser","metaserver/static/js/modules/clean/react/error_boundary","metaserver/static/js/modules/core/exception","metaserver/static/js/modules/clean/react/previews/constants","metaserver/static/js/modules/clean/react/file_viewer/sdk_file_viewer/experiments","metaserver/static/js/modules/clean/sync_everything/constants","metaserver/static/js/modules/clean/react/file_viewer/sdk_file_viewer/file_viewer"],(function(e,t,i,s,r,a,n,o,l,c,d,u,p,m,h,_,f,w,v,g,S,y,E,P,O,b,C,I,j,k,D){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FileViewerContainerTestOnly=t.FileViewerContainer=void 0,s=i.__importDefault(s),r=i.__importDefault(r),a=i.__importDefault(a),_=i.__importStar(_),O=i.__importStar(O);const V=({children:e})=>{const t=r.default.useRef(null),i=r.default.useRef(null);return r.default.useEffect(()=>{d.Snackbar.manager=d.Snackbar.manager?d.Snackbar.manager:t.current},[]),r.default.createElement("div",{ref:i},e,r.default.createElement(c.SnackbarManager,{ref:t,getParentElement:()=>i.current,useDigSnackbars:!0}))};V.displayName="SnackbarManagerContainer";class F extends r.default.Component{constructor(e){super(e),this.onFileChanged=(e,t)=>{if(e.revision_id===this.state.file.revision_id&&E.isBrowseFile(this.state.file))if(t){const e=Object.assign(Object.assign({},this.state.file),{file_id:t.file_id,revision_id:t.revision_id,fq_path:t.fq_path});this.setState({file:e}),this.updateNamespaceAndExtensionsBasedOnFile(e,this.state.user)}else this.closeViewer()},this.closeViewer=()=>{const{onCloseUrl:e,redirectOnClose:t}=this.props;if(e)if(t)_.redirect(e);else{const{path:t,qargs:i}=a.default.deconstruct_url(e);a.default.push_state(t,i)}};const t=u.Viewer.get_viewer(),i=e.userId?t.get_user_by_id(e.userId):t.work_user||t.personal_user;this.state={user:i,isCapture:!1,file:e.file},p.log_js_modules_application_code_start();const{file:s}=e;this.updateNamespaceAndExtensionsBasedOnFile(s,i)}updateNamespaceAndExtensionsBasedOnFile(e,t){t&&m.initializeStore(t,[e])}componentDidMount(){const{shareEmail:t,shareModalVariant:s,shareToken:r}=this.props,{file:a}=this.state,c=new URLSearchParams(_.get_uri()).get("capture");if(new URLSearchParams(window.location.search).has("copy_to_dropbox")&&a&&this.state.user&&r){const t=new URL(window.location.href);y.portableSaveAsCopy({fileName:E.getFilename(a),user:this.state.user,shareToken:r},{onNetworkRequest:()=>{new Promise((t,i)=>{e(["metaserver/static/js/modules/clean/react/action_bar/file_actions/portable/save_as_copy/snackbars"],t,i)}).then(i.__importStar).then(({saveCopySnackBarInProgress:e})=>{e(P.PREVIEWS_SNACKBAR_ID)})}}),t.searchParams.delete("copy_to_dropbox"),window.history.replaceState(t.href,"",t.href)}if(c&&this.setState({isCapture:!0}),t||s&&s!==n.ShareModalVariant.closed&&this.state.user?new Promise((t,i)=>{e(["metaserver/static/js/modules/clean/react/browse/models"],t,i)}).then(i.__importStar).then(({File:e})=>{const i=t?t.split(","):[];l.asyncShowPrefilledShareModal({user:this.state.user,sharePrefillEmails:i,content:new e(a)})}):this.props.authModalKind!==g.LoginOrRegisterKind.IMMEDIATE||this.state.user||this.state.isCapture?this.props.presentInZoom&&this.state.user&&h.asyncShowModal(this.state.user.id,a.file_id,"file-viewer-modal-overlay","desktop"):w.showAuthModal({mode:v.AuthMode.REGISTER,kind:v.LoginOrRegisterKind.IMMEDIATE,encryptionOptions:this.props.encryptionOptions,loggingExtra:{source:"file_preview_initial_load"}}),this.props.openImmediatelyInApp){const e=a;o.openImmediately(e.open_in_app_data)}_.get_uri().getQuery().sync_from_docsend&&w.showDocSendSnackbar(this.state.user)}isInbandExperimentEnabled(){return j.fileViewerFeatureExperiments.inbandFvsdkLinks}launchHelloSignDeepIntegration(){new Promise((t,i)=>{e(["metaserver/static/js/modules/clean/integrations/hellosign_deep_integration/launcher"],t,i)}).then(i.__importStar).then(({getLauncher:e})=>{const t=e();return t.init({entryPoint:"file_preview_side_bar",file:this.props.file,user:this.state.user,source:this.props.openInHelloSignSrc}),t}).then(e=>(e.launch(),e))}render(){const{fileViewerProps:e,isEmbedded:t,brandingInfo:i,encryptionOptions:s,openInHelloSign:a,sharedLinkInfo:n,shareToken:o,sharePermission:l,authModalKind:c,copyLinkButtonOOBPreviewsVariant:d,shareModalOnEditPreviewsVariant:u,folderPreviewPostDownloadModal:p}=this.props,{user:m,file:h}=this.state,_=void 0!==m&&e.fileViewOrigin===S.FileViewOriginType.SHARE_PAGE&&!t,w=e.fileViewOrigin===S.FileViewOriginType.SHARED_LINK_PAGE&&!t,v=e.fileViewOrigin===S.FileViewOriginType.PAPER&&t,g=e.initialPreviewSourceContext===I.PreviewSourceContext.FileLocking,y=O.parseLink(window.location.href),E=_||w||v?r.default.createElement(V,null,r.default.createElement(D.FileViewer,{closeFile:this.props.onCloseUrl?this.closeViewer:void 0,file:h,previewContentOnly:e.hidePageChrome,showCloudDocPreview:e.showCloudDocPreview,sharedLinkInfo:n,sharePermission:l,shareToken:o,brandingInfo:i,user:m,encryptionOptions:s,previewSurface:_?f.SDKPreviewSurface.INBAND_SHARE:v?f.SDKPreviewSurface.SHARED_LINK_EMBED:f.SDKPreviewSurface.SHARED_LINK,canShowFileFlippers:!1,hideOpenInAppInterstitial:!!e.appDownloadInterstitialDismissed,authModalKind:c,copyLinkButtonOOBPreviewsVariant:d,shareModalOnEditPreviewsVariant:u,parsedSharedCopyLink:y,usePreloadedMetadata:!0,initialSourceAction:e.initialPreviewSourceAction,fileViewOrigin:e.fileViewOrigin,folderPreviewPostDownloadModal:p})):r.default.createElement(V,null,r.default.createElement(D.FileViewer,{closeFile:this.props.onCloseUrl?this.closeViewer:void 0,file:h,previewContentOnly:e.hidePageChrome,showCloudDocPreview:e.showCloudDocPreview,user:m,brandingInfo:i,encryptionOptions:s,previewSurface:k.isBackupBrowse()?f.SDKPreviewSurface.BACKUP:g?f.SDKPreviewSurface.FILE_LOCKING:f.SDKPreviewSurface.STANDALONE_PREVIEW,canShowFileFlippers:!1,hideOpenInAppInterstitial:!!e.appDownloadInterstitialDismissed,authModalKind:c,onFileChanged:this.onFileChanged,fileViewOrigin:e.fileViewOrigin,usePreloadedMetadata:!0}));return a&&this.launchHelloSignDeepIntegration(),t?r.default.createElement("div",{className:"embedded"},E):E}getChildContext(){return{authModalKind:this.props.authModalKind}}}t.FileViewerContainerTestOnly=F,F.childContextTypes={authModalKind:s.default.oneOf(["download","immediate",null])},F.displayName="FileViewerContainer";t.FileViewerContainer=e=>r.default.createElement(b.ErrorBoundary,{onCatch:e=>C.reportException({err:e,tags:["file-viewer-container"],severity:"critical"})},r.default.createElement(F,Object.assign({},e)))}));
//# sourceMappingURL=pkg-fvsdk-container.min.js-vflklni3K.map