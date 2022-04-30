define(["require","exports","tslib","react","typescript/libraries/file-viewer/src/preview_archive/folder_entry_view","typescript/libraries/file-viewer/src/preview_archive/utils","typescript/libraries/file-viewer/src/preview_archive/file_entry_view","typescript/libraries/file-viewer/src/preview_error/index","ts-keycode-enum","typescript/libraries/file-viewer/src/keyboard/keyboard_connector","spectrum/media_table_skeleton/index","typescript/libraries/file-viewer/src/core/logging/actions","typescript/libraries/file-viewer/src/css/preview-archive.module.css","typescript/libraries/file-viewer/src/core/data/utils","typescript/libraries/file-viewer/src/core/data/selectors","typescript/libraries/file-viewer/src/toolbar/toolbar_v2","typescript/libraries/file-viewer/src/plugins/types","typescript/libraries/file-viewer/src/core/data/actions","typescript/libraries/file-viewer/src/core/errors"],(function(e,r,i,t,a,n,l,o,c,s,d,v,u,f,w,p,h,y,P){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.PreviewArchive=void 0,t=i.__importStar(t),u=i.__importStar(u),r.PreviewArchive=e=>{const{rivieraData:r,filePreviewUiData:i,dispatch:g,fileMetadata:b,fileViewerId:m,fileInfo:E,intl:F,onRenderFailed:_,onRenderSucceeded:A,sharedLinkInfo:k,height:I,config:D,previewKey:V,archiveFiles:C,fullFilePreviewUi:M,fullRivieraData:K,loggingSession:R,account:S,coreFileViewerUiData:U,fileConfig:T,toolbarPlugins:N,snackbarManagerPluginInstance:B,width:j,responsiveSize:x}=e,{currentPath:O}=i,z=t.useRef("initial"),q=t.useRef(null),L=t.useMemo(()=>{if("loaded"===(null==r?void 0:r.rootEntry.state)&&i.currentPath)return f.getArchiveEntryAtPath(r.rootEntry.data,i.currentPath,m,V,g)},[r,i.currentPath,g,m,V]),W=null==r?void 0:r.rootEntry.state,G=null==E?void 0:E.file_id;t.useEffect(()=>{if(W&&W!==z.current){switch(W){case"errored":_();break;case"loaded":A(),g(v.logTTV(m)),g(v.logTTI(m));const e="loaded"===(null==r?void 0:r.rootEntry.state)&&r.rootEntry.data.isPasswordProtected;if(L&&E&&G&&!e){const{entry:e,parent:r}=L;if(!e.isDir&&r&&r.children&&i.currentPath){const e=i.currentPath.slice(0,i.currentPath.length-1),t=n.getFiles(r.children);"loaded"===S.state?n.getArchiveFiles(e,t,E,g,G,S.data):q.current=r=>{n.getArchiveFiles(e,t,E,g,G,r)}}}}z.current=W}},[m,W,g,_,A,k,L,E,V,r,G,i,S]),"loaded"===S.state&&q.current&&(q.current(S.data),q.current=null);const H=null==b?void 0:b.file_name,J=D.preview_page_revamp&&t.createElement(p.ConfigurableToolbarV2,{featureConfig:D,fileConfig:T,previewKey:V,rootArchiveFileInformation:{fileName:H,previewKey:V},fileViewerId:m,intl:F,fileRivieraData:r,fileViewerUi:U,fileMetadata:b,filePreviewUi:i,previewType:h.PreviewType.Archive,plugins:N,snackbarManagerPluginInstance:B,previewWidth:j,responsiveSize:x}),Q=t.useMemo(()=>[{keyboardEventCriteria:{keyCode:c.Key.Escape},callback:()=>{i.currentPath&&i.currentPath.length>0&&g(y.updateArchiveFileCurrentPath({currentPath:[...i.currentPath.slice(0,i.currentPath.length-1)],fileViewerId:m,previewKey:V,isDir:!0}))}}],[i.currentPath,m,V,g]);if("loaded"!==(null==r?void 0:r.rootEntry.state)||!L||!G||!E)return"errored"===(null==r?void 0:r.rootEntry.state)?t.createElement(o.PreviewRenderError,Object.assign({},e,{rivieraData:void 0,error:new P.FVError(P.FVErrorCode.Unknown)})):t.createElement(t.Fragment,null,t.createElement("div",{className:u.loadingScreen},t.createElement(d.MediaTableSkeleton,{numRows:10})),J);if(void 0===O)throw new Error("filePreviewUiData.currentPath is not defined");if(void 0===b)throw new Error("fileMetadata is not defined");const{entry:X}=L;return X.isDir?t.createElement(t.Fragment,null,t.createElement(a.FolderEntryView,{rootEntry:r.rootEntry.data,entry:X,currentPath:O,filePreviewUiData:i,fileViewerId:m,rootPreviewKey:V,dispatch:g,intl:F,height:I,config:D,rootFileInfo:E,archiveFiles:C,fullFilePreviewUi:M,fullRivieraData:K,loggingSession:R,account:S}),J,t.createElement(s.KeyboardBindingConnector,{keyboardBindings:Q})):r.rootEntry.data.isPasswordProtected||w.getArchiveFilesFetchedPreviewMetadata(C,G)?t.createElement(t.Fragment,null,t.createElement(l.FileEntryView,Object.assign({},e,{currentPath:O,rootArchiveFileInformation:{fileName:b.file_name,previewKey:V},isArchiveFilePasswordProtected:r.rootEntry.data.isPasswordProtected,rootFileId:G,entry:X})),t.createElement(s.KeyboardBindingConnector,{keyboardBindings:Q})):null},r.PreviewArchive.displayName="PreviewArchive",r.PreviewArchive.displayName="PreviewArchive"}));
//# sourceMappingURL=preview_archive.amd.min.js-vflgcgxSq.map