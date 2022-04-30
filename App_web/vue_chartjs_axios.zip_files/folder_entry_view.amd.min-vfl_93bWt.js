define(["require","exports","tslib","react","react-intl","dig-components/typography","typescript/libraries/file-viewer/src/css/preview-archive.module.css","spectrum/icon_content/index","typescript/libraries/file-viewer/src/preview_archive/utils","typescript/component_libraries/files_components/src/table/columns/file_name_column","typescript/component_libraries/files_components/src/table/columns/size_column","dig-experimental/managed_table/index","typescript/libraries/file-viewer/src/preview_archive/extract_all_button","typescript/libraries/file-viewer/src/preview_archive/archive_snack_bar","typescript/libraries/file-viewer/src/core/data/preview_key","typescript/libraries/file-viewer/src/core/data/selectors"],(function(e,t,i,r,l,a,n,s,c,o,d,u,p,m,v,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FolderEntryView=void 0,r=i.__importStar(r),n=i.__importStar(n);const f=[Object.assign(Object.assign({},o.FileNameColumn),{minWidth:360,width:360}),Object.assign(Object.assign({},d.FileSizeColumn),{minWidth:140,width:140})],w=u.createManagedTable(u.useFlexLayout,u.useSortBy,u.useSortableHeaders,u.useKeyboarding,u.useColumnCollapsing,u.useLinkBehavior);t.FolderEntryView=e=>{var t;const{dispatch:i,rootPreviewKey:a,fileViewerId:s,intl:o,rootEntry:d,entry:u,config:_,rootFileInfo:y,archiveFiles:b,height:E,account:F,currentPath:P,filePreviewUiData:x}=e,S=r.useRef(null),A=r.useRef(null);r.useEffect(()=>{if(S.current!==u&&y.file_id&&u.children&&!d.isPasswordProtected){const e=y.file_id,t=c.getFiles(u.children);if(t.length&&P){const r=v.getPreviewKeyForNestedArchiveFile(e,v.getSubpath([...P,t[0].name]));h.getArchiveFilesPreviewMetadata(b,r)||("loaded"===F.state?c.getArchiveFiles(P,t,y,i,e,F.data):A.current=r=>{c.getArchiveFiles(P,t,y,i,e,r)})}}S.current=u},[u,a,d,P,b,y,i,F]),"loaded"===F.state&&A.current&&(A.current(F.data),A.current=null);const I=_.preview_page_revamp,M=r.useMemo(()=>{var e;return c.transformArchiveEntriesToFiles(null!==(e=u.children)&&void 0!==e?e:[],i,P,s,a)},[u.children,i,s,a,P]);let j;return j=(null===(t=u.children)||void 0===t?void 0:t.length)?r.createElement("div",{className:n.folderTable,style:{height:E}},r.createElement(l.RawIntlProvider,{value:o},r.createElement(w,{isSelectable:!0,data:M,columns:f}))):r.createElement(g,{intl:o}),r.createElement(r.Fragment,null,!I&&r.createElement(p.ExtractAllButton,{previewKey:a,fileViewerId:s,filePreviewUiData:x,intl:o,dispatch:i}),j,!I&&r.createElement(m.ArchiveSnackBar,{filePreviewUiData:x,intl:o,previewKey:a,fileViewerId:s,dispatch:i}))};const g=e=>r.createElement("div",{className:n.emptyFolder},r.createElement(s.IconContent,{name:"folder-small"}),r.createElement(a.Text,{size:"large"},e.intl.formatMessage({id:"3+GzpU",defaultMessage:"This folder is empty"})))}));
//# sourceMappingURL=folder_entry_view.amd.min.js-vflY-bdMw.map