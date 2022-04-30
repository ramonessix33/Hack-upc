define("metaserver/static/js/modules/clean/react/selectable_list",["require","exports","tslib","immutable","keymaster","react","lodash","react-dom","metaserver/static/js/modules/core/browser_detection"],(function(e,t,n,i,o,s,r,l,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectableList=t.findSelectionRange=t.findNeighboringItem=t.SelectOptions=t.SelectDirection=t.SelectableListActionSource=t.SELECTABLE_TILE_GRID_KEY_SCOPE=t.SELECTABLE_LIST_KEY_SCOPE=void 0,i=n.__importStar(i),o=n.__importDefault(o),s=n.__importDefault(s),r=n.__importStar(r),l=n.__importStar(l),a=n.__importStar(a),t.SELECTABLE_LIST_KEY_SCOPE="SelectableList",t.SELECTABLE_TILE_GRID_KEY_SCOPE="SelectableTileGrid";let c="";var d,u,h;function p(e,t,n,i,o,s){switch(e){case u.PREV:return Math.max(0,t-1);case u.NEXT:return Math.min(n-1,t+1);case u.PREV_ROW:case u.NEXT_ROW:return(function(e,t,n,i,o,s=!1){if(t<0||t>=n)return 0;o&&0!==o.length||(o=[0]);const l=r.sortedIndex(o,t),a=o[l]===t?l:l-1,c=o[a],d=(t-c)%i;switch(e){case u.NEXT_ROW:{const e=o.length;if(a===e-1&&t+i>=n){const e=(n-c)%i;if((t-c)%i<e||0===e)return s?n-1:t}const r=a+1,l=r<o.length?o[r]:n;if(t+i-(i-((l-c)%i||i))<l){const e=l-1;return Math.min(t+i,e)}const u=r+1<e?o[r+1]-1:n-1;return Math.min(l+d,u)}case u.PREV_ROW:{if(0===a&&t-i<0)return s?0:t;if(t-i>=c)return t-i;const e=o[a-1],n=c-1,r=c-e,l=e+r-(r%i||i);return Math.min(l+d,n)}}})(e,t,n,i,o,s)}}function f(e,t,n,i,o,s,r,l,a){switch(e){case u.PREV:case u.PREV_ROW:{if(0===t)return r;const c=p(e,t,l.length,n,a,!0),d=Math.min(t,i)-c,u=t-Math.max(c,i);for(let e=s;e>s-u;e--){const t=r.indexOf(l[e]);r.splice(t,1)}for(let e=o-1;e>=o-d;e--)r.push(l[e]);break}case u.NEXT:case u.NEXT_ROW:{if(t===l.length)return r;const c=p(e,t,l.length,n,a,!0),d=Math.min(c,i)-o,u=c-Math.max(t,i);for(let e=o;e<o+d;e++){const t=r.indexOf(l[e]);r.splice(t,1)}for(let e=s+1;e<=s+u;e++)r.push(l[e]);break}}return r}(function(e){e.KEYBOARD="keyboard",e.DRAG_TO_SELECT="drag_to_select"})(d=t.SelectableListActionSource||(t.SelectableListActionSource={})),(function(e){e[e.PREV=0]="PREV",e[e.NEXT=1]="NEXT",e[e.PREV_ROW=2]="PREV_ROW",e[e.NEXT_ROW=3]="NEXT_ROW"})(u=t.SelectDirection||(t.SelectDirection={})),(function(e){e.DEFAULT="DEFAULT",e.EXTEND="EXTEND",e.ONLY="ONLY"})(h=t.SelectOptions||(t.SelectOptions={})),t.findNeighboringItem=p,t.findSelectionRange=f;class m extends s.default.PureComponent{constructor(e){super(e),this.isFocused=!1,this.updateSelection=(e,t,n=!1)=>{const{selection:o}=this.props,s=n?e.length?e[0]:this.props.itemIds[0]:o.anchor,r=o.merge({selected:i.OrderedSet(e),anchor:s});this.props.onSelectionChange(r,t)},this.handleSelectPrevious=e=>{this.isGlobalEvent(e)&&(e.preventDefault(),this.selectNeighboringItem(u.PREV,d.KEYBOARD))},this.handleSelectPreviousRow=e=>{this.isGlobalEvent(e)&&(e.preventDefault(),this.selectNeighboringItem(u.PREV_ROW,d.KEYBOARD))},this.handleExtendSelectionToPrevious=e=>{this.isGlobalEvent(e)&&(e.preventDefault(),this.extendSelectionRange(u.PREV,d.KEYBOARD))},this.handleExtendSelectionToPreviousRow=e=>{this.isGlobalEvent(e)&&(e.preventDefault(),this.extendSelectionRange(u.PREV_ROW,d.KEYBOARD))},this.handleSelectNext=e=>{this.isGlobalEvent(e)&&(e.preventDefault(),this.selectNeighboringItem(u.NEXT,d.KEYBOARD))},this.handleSelectNextRow=e=>{this.isGlobalEvent(e)&&(e.preventDefault(),this.selectNeighboringItem(u.NEXT_ROW,d.KEYBOARD))},this.handleExtendSelectionToNext=e=>{this.isGlobalEvent(e)&&(e.preventDefault(),this.extendSelectionRange(u.NEXT,d.KEYBOARD))},this.handleExtendSelectionToNextRow=e=>{this.isGlobalEvent(e)&&(e.preventDefault(),this.extendSelectionRange(u.NEXT_ROW,d.KEYBOARD))},this.handleKeyboardDeselectAll=e=>{const{selection:t}=this.props;e&&!this.isGlobalEvent(e)||!t.selected.size||this.handleDeselectAll(d.KEYBOARD)},this.handleDeselectAll=e=>{if(this.updateSelection([],e,!0),l.findDOMNode(this).contains(document.activeElement)){const e=document.activeElement;e.blur&&e.blur()}this.props.onDeselectAll&&this.props.onDeselectAll()},this.handleKeyboardSelectAll=e=>{const{itemIds:t,selection:n}=this.props;e&&!this.isGlobalEvent(e)||n.selected.size===t.length||this.handleSelectAll(d.KEYBOARD)},this.handleSelectAll=e=>{this.updateSelection(this.props.itemIds,e,!0)},this.handleDeselect=(e,t,n)=>{if(t)return this.extendOrShrinkSelectionByFile(e,n);this.updateSelectionById(e,"delete",n)},this.handleSelect=(e,t=h.DEFAULT,n)=>{if(t===h.EXTEND)return this.extendOrShrinkSelectionByFile(e);t===h.ONLY?this.updateSelection([e],n,!0):this.updateSelectionById(e,"add",n)},this.handleFocusFile=e=>{this.setState({focusedFileId:e})},this.isSelectableListEvent=()=>this.isFocused,this.handleFocus=()=>{this.isFocused=!0},this.handleBlur=()=>{this.isFocused=!1},this.state={selection:e.selection,keyScope:e.keyScope}}UNSAFE_componentWillReceiveProps(e){this.props.keyScope!==e.keyScope&&(this.setState({keyScope:e.keyScope}),this.isFocused=!1)}componentDidMount(){this.setupKeyboardShortcuts(),this.setFocusedIdFromSelection(this.props.selection)}componentDidUpdate(e,t){e.selection&&this.props.selection&&e.selection.anchor!==this.props.selection.anchor&&this.setFocusedIdFromSelection(this.props.selection),this.state.keyScope!==t.keyScope&&this.setupKeyboardShortcuts(),e.isActive!==this.props.isActive&&(this.props.isActive?this.setupKeyboardShortcuts():this.cleanupKeyboardShortcuts())}componentWillUnmount(){this.cleanupKeyboardShortcuts()}setupKeyboardShortcuts(){const{keyScope:e}=this.state;c=o.default.getScope(),c!==e&&o.default.setScope(e);const n=o.default.filter||(e=>{const t=e.target||e.srcElement;if(!(t instanceof Element))return!0;const n=t.tagName;return!("INPUT"===n||"SELECT"===n||"TEXTAREA"===n)});o.default.filter=e=>{const t=e.target||e.srcElement,i=t.tagName;return(!this.isSelectableListEvent()||"BUTTON"!==i)&&(t instanceof HTMLInputElement&&"checkbox"===t.type||n.call(this,e))},e===t.SELECTABLE_LIST_KEY_SCOPE?(o.default("up",e,this.handleSelectPrevious),o.default("shift+up",e,this.handleExtendSelectionToPrevious),o.default("down",e,this.handleSelectNext),o.default("shift+down",e,this.handleExtendSelectionToNext)):e===t.SELECTABLE_TILE_GRID_KEY_SCOPE&&(o.default("left",e,this.handleSelectPrevious),o.default("shift+left",e,this.handleExtendSelectionToPrevious),o.default("right",e,this.handleSelectNext),o.default("shift+right",e,this.handleExtendSelectionToNext),o.default("up",e,this.handleSelectPreviousRow),o.default("shift+up",e,this.handleExtendSelectionToPreviousRow),o.default("down",e,this.handleSelectNextRow),o.default("shift+down",e,this.handleExtendSelectionToNextRow)),o.default("escape",e,this.handleKeyboardDeselectAll),a.mac?o.default("command+a",e,this.handleKeyboardSelectAll):o.default("ctrl+a",e,this.handleKeyboardSelectAll)}cleanupKeyboardShortcuts(){o.default.clearScope(this.state.keyScope),c&&o.default.setScope(c),o.default.resetFilter()}setFocusedIdFromSelection(e){e.anchor&&0!==e.selected.size&&this.setState({focusedFileId:e.anchor})}selectNeighboringItem(e,t){const{itemIds:n,selection:i,tilesPerRow:o,sectionStartIndices:s}=this.props,r=n.indexOf(i.selected.last()),l=n[p(e,r,n.length,o,s)];this.setState({focusedFileId:l}),this.updateSelection([l],t,!0)}extendSelectionRange(e,t){const{itemIds:n,selection:i,tilesPerRow:o,sectionStartIndices:s}=this.props,r=i.anchor||n[0];if(!r)return;const l=n.indexOf(i.selected.last());let a=i.selected.toArray();const c=n.indexOf(r),{startIndex:d,endIndex:u}=this.getRangeOfSelectedBlock(r);a=f(e,l,o,c,d,u,a,n,s),this.setState({focusedFileId:a[a.length-1]}),this.updateSelection(a,t)}getRangeOfSelectedBlock(e){const{itemIds:t,selection:n}=this.props;let i=t.indexOf(e),o=0,s=0;for(;o=i,i--,!(i<0)&&n.selected.has(t[i]););for(i=o;;){const e=t[i];if(!e||!n.selected.has(e))break;s=i,i++}return{startIndex:o,endIndex:s}}extendOrShrinkSelectionByFile(e,t){const{itemIds:n,selection:i}=this.props,o=i.anchor||n[0];if(!o)return;const s=n.indexOf(o),r=n.indexOf(e),{startIndex:l,endIndex:a}=this.getRangeOfSelectedBlock(o),c=[],d=[];n.forEach((e,t)=>{l<=t&&t<=a&&c.push(e),(r<=t&&t<=s||s<=t&&t<=r)&&d.push(e)}),r<s&&d.reverse();const u=i.update("selected",e=>e.subtract(c).union(d));this.setState({focusedFileId:e}),this.props.onSelectionChange(u,t)}updateSelectionById(e,t,n){const{selection:i}=this.props,o="add"===t?e:i.anchor,s=i.selected[t](e),r=i.merge({selected:s,anchor:o||null});this.props.onSelectionChange(r,n)}isGlobalEvent(e){const t=e.target instanceof HTMLInputElement,n=e.target instanceof HTMLElement,i=t&&"checkbox"===e.target.type,o=n&&(e.target.classList.contains("mc-popover-selectable-item")||e.target.classList.contains("mc-popover-content-item")||e.target.classList.contains("mc-popover-trigger"));return!document.activeElement||document.activeElement===document.body||e.target instanceof Element&&(l.findDOMNode(this).contains(e.target)&&(!t||i)&&!o)}render(){const{children:e}=this.props,{focusedFileId:t}=this.state;if(!e)return null;let n=e;return"function"==typeof e&&(n=e({focusedFileId:t,updateSelection:this.updateSelection,handleDeselect:this.handleDeselect,handleDeselectAll:this.handleDeselectAll,handleFocusFile:this.handleFocusFile,handleSelect:this.handleSelect,handleSelectAll:this.handleSelectAll,isSelectableListEvent:this.isSelectableListEvent})),s.default.createElement("div",{className:"selectable-list",onBlur:this.handleBlur,onFocus:this.handleFocus},n)}}t.SelectableList=m,m.defaultProps={isActive:!0},m.displayName="SelectableList"})),define("metaserver/static/js/modules/clean/react/tree",["require","exports","tslib","immutable"],(function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tree=void 0,i=n.__importStar(i);class o{constructor(e){const t=i.Map();this.rootItem=e.rootItem,this.items=e.items,this.childItemsByParentKey=e.childItemsByParentKey||t,this.parentItemByChildKey=e.parentItemByChildKey||i.Map()}static createWithRootItem(e){return new o({rootItem:e,items:i.Map([[e.key,e]])})}getParentItem(e){if(!e)return;const t=this.parentItemByChildKey.get(e.key);return t?this.items.get(t):null}getChildItems(e){return this.childItemsByParentKey.get(e.key)||null}isParent(e){return this.childItemsByParentKey.has(e.key)}getClosestExistingChildFromKey(e){var t;const n=e.split("/");let i=this.rootItem;for(let e=2;e<n.length+1;e++){const o=n.slice(0,e).join("/"),s=null===(t=this.getChildItems(i))||void 0===t?void 0:t.find(e=>e.key===o);if(void 0===s)return i;i=s}return i}setChildItems(e,t){t=i.List(t);const n=i.Map(t.map(e=>[e.key,e])),s=i.Map(this.items).merge(n),r=i.Map(this.childItemsByParentKey).set(e.key,t);let l=i.Map(this.parentItemByChildKey);return t.forEach(t=>l=l.set(t.key,e.key)),new o({rootItem:this.rootItem,items:s,childItemsByParentKey:r,parentItemByChildKey:l})}}t.Tree=o})),define("metaserver/static/js/modules/clean/react/tree_item",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FolderTreeItem=t.TreeItem=t.RootStyle=void 0,(function(e){e[e.None=0]="None",e[e.TreeItem=1]="TreeItem",e[e.HeaderItem=2]="HeaderItem",e[e.StaticHeader=3]="StaticHeader"})(t.RootStyle||(t.RootStyle={}));class n{constructor(e){this.key=e.key,this.label=e.label?e.label:"",this.icon=e.icon?e.icon:"",this.disabled=!!e.disabled,this.canExpand=!!e.canExpand,this.forceExpanded=!!e.forceExpanded,this.readOnly=!!e.readOnly}}t.TreeItem=n;t.FolderTreeItem=class extends n{constructor(e,t){super(e),this.folderNsId=t}}})),define("metaserver/static/js/modules/clean/react/files_view/overflow_menu_item_section",["require","exports","tslib","react","spectrum/popover/index"],(function(e,t,n,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OverflowMenuItemSection=void 0,i=n.__importDefault(i),t.OverflowMenuItemSection=({actionSection:e,showSeparators:t=!0,renderItem:n})=>0===e.length?null:i.default.createElement(i.default.Fragment,null,e.map(e=>e.map((e,t)=>i.default.createElement(i.default.Fragment,{key:`${t}-${e.label}`},n(e)))).reduce((e,n,s)=>[...e,...t?[i.default.createElement(o.PopoverItemGroupSeparator,{key:s})]:[],...n]))})),define("metaserver/static/js/modules/clean/react/files_view/util",["require","exports","tslib","typescript/component_libraries/retrieval-components/src/view-mode-toggle/index","metaserver/static/js/modules/clean/filepath/filepath","metaserver/static/js/modules/clean/pnm/utils","metaserver/static/js/modules/clean/react/browse/models","metaserver/static/js/modules/clean/react/files_view/view_type"],(function(e,t,n,i,o,s,r,l){"use strict";function a(e){return e.altKey||e.ctrlKey||e.metaKey||e.shiftKey}Object.defineProperty(t,"__esModule",{value:!0}),t.isMobileMode=t.ScopedEventHandlers=t.isCutToClipboard=t.viewModeFromViewType=t.viewTypeFromViewMode=t.shouldClickDeselect=t.createFakeWindow=t.getFilename=t.isFileModel=t.isFswm=t.isFile=t.hasModifierKey=t.shouldHandleClick=void 0,o=n.__importStar(o),t.shouldHandleClick=function(e){return 0===e.button&&!a(e)},t.hasModifierKey=a,t.isFile=e=>e instanceof r.File,t.isFswm=e=>e instanceof r.FileSharedWithMe,t.isFileModel=e=>"fq_path"in e,t.getFilename=e=>t.isFileModel(e)||t.isFile(e)?s.hasValidLinkNode(e.per_node_metadata)||s.shouldHideExtension(e.per_node_metadata)?o.filename_without_extension(o.filename(e.fq_path)):o.filename(e.fq_path):e.filename,t.createFakeWindow=e=>{const t=new Proxy(window.document,{get(t,n){switch(n){case"body":case"documentElement":case"scrollingElement":return e}return t[n]}});return new Proxy(window,{get(n,i){switch(i){case"document":return t;case"innerHeight":return e.clientHeight;case"pageYOffset":return e.scrollTop;case"addEventListener":case"removeEventListener":case"scrollTo":{const t=e[i];return t?t.bind(e):()=>{}}}const o=n[i];return"function"==typeof o?o.bind(n):o}})},t.shouldClickDeselect=(e,t)=>{if(e.defaultPrevented)return!1;let n=e.target;for(;n instanceof Node&&n!==e.currentTarget;){if(0===n.tabIndex&&!t||n instanceof HTMLAnchorElement||n instanceof HTMLButtonElement||n instanceof HTMLInputElement||n instanceof HTMLLabelElement||"button"===n.getAttribute("role")||n.classList.contains("mc-popover"))return!1;n=n.parentElement}return!0},t.viewTypeFromViewMode=function(e){switch(e){case i.ViewMode.GRID:return l.ViewType.Grid;case i.ViewMode.TILE:return l.ViewType.LargeGrid;case i.ViewMode.CONDENSED_LIST:return l.ViewType.CondensedList;case i.ViewMode.LIST:return l.ViewType.List}},t.viewModeFromViewType=function(e){switch(e){case l.ViewType.Grid:return i.ViewMode.GRID;case l.ViewType.LargeGrid:return i.ViewMode.TILE;case l.ViewType.SmallGrid:return i.ViewMode.GRID;case l.ViewType.List:return i.ViewMode.LIST;case l.ViewType.CondensedList:return i.ViewMode.CONDENSED_LIST}},t.isCutToClipboard=function(e,t){if(!(e instanceof r.File))return!1;const n=t.get(e.fq_path);return Boolean(n&&n.file_id===e.file_id)};t.ScopedEventHandlers=class{constructor(e){this.handlers={},this.element=e}add(e,t,n){this.handlers[e]=this.handlers[e]||{},this.handlers[e][t]=n,this.element.addEventListener(t,n)}remove(e,t,n){this.handlers[e]&&this.handlers[e][t]&&(this.element.removeEventListener(t,n||this.handlers[e][t]),this.handlers[e][t]===n&&delete this.handlers[e][t])}removeAll(e){if(this.handlers[e])for(const t in this.handlers[e])this.handlers[e].hasOwnProperty(t)&&(this.element.removeEventListener(t,this.handlers[e][t]),delete this.handlers[e][t])}},t.isMobileMode=e=>!e.isMatchedLarge&&!e.isMatchedMedium}));var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t};define("metaserver/static/js/modules/clean/react/file_viewer/async_controller",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.asyncOpenPreview=void 0,t.asyncOpenPreview=function({containerId:t,files:n,fileViewAction:i,fileViewOrigin:o,fileViewTarget:s,indexOfPreviewFile:r,onFileViewerDidMount:l,onFileViewerUnmount:a,shouldFocusComment:c=!1,activeCommentThreadId:d,shouldPresentInZoom:u=!1,updateBrowserLocation:h=!0,user:p,hidePageChrome:f=!1,transparentBackground:m=!1,forceNoToolbar:g=!1,headerHeight:S="0",forceDisplayToolbar:E=!1,doNotUpdateDocumentTitle:v=!1,onFullscreenChange:y=(()=>{}),onFlipNext:b=(()=>{}),onFlipPrevious:_=(()=>{}),onPreviewSessionInitialized:w=(()=>{}),browseContext:M,browseExceptions:T,shouldFocusApproval:I=!1,skipFileViewerRouting:L=!1,onCloseViewer:O,usePreloadedMetadata:x,disableHydrateStore:P}){return new Promise((t,n)=>{e(["metaserver/static/js/modules/clean/react/file_viewer/controller"],t,n)}).then(__importStar).then(e=>(e.open(n,r,p,t,{fileViewTarget:s,fileViewOrigin:o,fileViewAction:i,disableRouting:!h,onComponentDidMount:l,onComponentWillUnmount:a,onCloseViewer:O,shouldPresentInZoom:u,hidePageChrome:f,transparentBackground:m,forceNoToolbar:g,headerHeight:S,forceDisplayToolbar:E,doNotUpdateDocumentTitle:v,onFullscreenChange:y,onFlipNext:b,onFlipPrevious:_,onPreviewSessionInitialized:w,browseContext:M,browseExceptions:T,shouldFocusApproval:I,shouldFocusComment:c,activeCommentThreadId:d,skipOuterRouting:L,usePreloadedMetadata:x},P),e))}})),define("metaserver/static/js/modules/clean/undo",["require","exports","tslib","dompurify","react","metaserver/static/js/modules/constants/undo_strings","metaserver/static/js/modules/core/notify"],(function(e,t,n,i,o,s,r){"use strict";let l,a;function c(){a&&(a(l),a=void 0,l=null)}Object.defineProperty(t,"__esModule",{value:!0}),t.notifyWithUndo=t.setHandleUndo=t.performUndo=void 0,i=n.__importDefault(i),o=n.__importStar(o),t.performUndo=c,t.setHandleUndo=function(e,t){a=e,l=t||null},t.notifyWithUndo=function(e,t,n,i,u=s.UNDO){if(!t||!Object.keys(t).length)return void r.Notify.success(e);l=t,a=n,i=null==i?30:i;const h=e=>{e.preventDefault(),c(),r.Notify.clear()};r.Notify.customSuccess(o.createElement(d,{message:e,undoButtonText:u,onUndo:h}),e,i)};const d=e=>"string"==typeof e.message?o.createElement("span",{"aria-live":"polite"},e.message," ",o.createElement("button",{className:"button-as-link",onClick:e.onUndo},e.undoButtonText)):o.createElement(o.Fragment,null,o.createElement("span",{"aria-live":"polite",dangerouslySetInnerHTML:{__html:i.default.sanitize(e.message.toHTML())}})," ",o.createElement("button",{className:"button-as-link",onClick:e.onUndo},e.undoButtonText));d.displayName="UndoNotification"})),define("typescript/component_libraries/retrieval-components/src/view-mode-toggle/index",["require","exports","tslib","typescript/component_libraries/retrieval-components/src/view-mode-toggle/view_mode_toggle"],(function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.__exportStar(i,t)})),define("typescript/component_libraries/retrieval-components/src/view-mode-toggle/view_mode_toggle",["require","exports","tslib","react","react-intl","dig-components/icons/src","dig-components/menu","dig-components/buttons","dig-components/icons"],(function(e,t,n,i,o,s,r,l,a){"use strict";var c;function d(e,n,i){const r=o.defineMessage({id:"izeluw",defaultMessage:"Grid"}),l=o.defineMessage({id:"BOj5uG",defaultMessage:"Large grid"}),a=o.defineMessage({id:"kn0aTF",defaultMessage:"List"}),c=o.defineMessage({id:"+ElFUY",defaultMessage:"Large list"}),d=!n&&!i,u=[{mode:t.ViewMode.GRID,icon:s.GridViewDenseLine,label:e.formatMessage(r)},{mode:t.ViewMode.TILE,icon:s.GridViewLine,label:e.formatMessage(l)}];return d&&u.push({mode:t.ViewMode.CONDENSED_LIST,icon:s.ListViewDenseLine,label:e.formatMessage(a)}),u.push({mode:t.ViewMode.LIST,icon:s.ListViewLine,label:n?e.formatMessage(a):e.formatMessage(c)}),u}Object.defineProperty(t,"__esModule",{value:!0}),t.ViewModeMenu=t.ViewModeToggle=t.ViewMode=void 0,i=n.__importStar(i),(c=t.ViewMode||(t.ViewMode={})).GRID="grid",c.TILE="tile",c.CONDENSED_LIST="condensed_list",c.LIST="list",t.ViewModeToggle=({className:e,currentMode:n,disabled:s,onSelection:c,onToggle:u,treatLargeListAsList:h,withoutCondensedListMode:p})=>{const f=o.defineMessage({id:"slo33I",defaultMessage:"Select view type"}),m=o.useIntl(),g=m.formatMessage(f),S=d(m,h,p),E=S.find(e=>e.mode===n)||S.find(e=>e.mode===t.ViewMode.LIST);return i.createElement(r.Menu.Wrapper,{onSelection:c,onToggle:u},({getTriggerProps:o,getContentProps:c})=>i.createElement(i.Fragment,null,i.createElement(l.IconButton,Object.assign({className:e,variant:"transparent","aria-label":g,disabled:s,withDropdownIcon:!0},o()),i.createElement(a.UIIcon,{src:E.icon})),i.createElement(r.Menu.Content,Object.assign({},c(),{placement:"bottom-end"}),i.createElement(t.ViewModeMenu,{currentMode:n,treatLargeListAsList:h,withoutCondensedListMode:p}))))},t.ViewModeToggle.displayName="ViewModeToggle",t.ViewModeMenu=({currentMode:e,treatLargeListAsList:t,withoutCondensedListMode:n})=>{const s=d(o.useIntl(),t,n);return i.createElement(r.Menu.Segment,null,s.map(t=>i.createElement(r.Menu.SelectItem,{key:t.mode,value:t.mode,selected:t.mode===e,"aria-checked":t.mode===e,withRightAccessory:i.createElement(a.UIIcon,{src:t.icon})},t.label)))},t.ViewModeMenu.displayName="ViewModeMenu"})),(function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define("metaserver/static/js/prod_assets_web_modules/keymaster",[],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}})(window,(function(){return(function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)})({"./keymaster.js":function(e,t){var n,i={},o={16:!1,18:!1,17:!1,91:!1},s="all",r={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},l={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220};for(n=1;n<20;n++)l["f"+n]=111+n;function a(e,t){for(var n=e.length;n--;)if(e[n]===t)return n;return-1}function c(){for(n in o)o.hasOwnProperty(n)&&(o[n]=!1)}function d(e,t,n){var o,s,a,c;for(void 0===n&&(n=t,t="all"),""==(o=(e=e.replace(/\s/g,"")).split(","))[o.length-1]&&(o[o.length-2]+=","),a=0;a<o.length;a++){if(s=[],(e=o[a].split("+")).length>1){for(s=e.slice(0,e.length-1),c=0;c<s.length;c++)s[c]=r[s[c]];e=[e[e.length-1]]}e=e[0],(e=l[e]||e.toUpperCase().charCodeAt(0))in i||(i[e]=[]),i[e].push({shortcut:o[a],scope:t,method:n,key:o[a],mods:s})}}for(n in r)d[n]=!1;function u(e){s=e||"all"}function h(){return s}function p(e){for(var t=e.slice(0,e.length-1),n=0;n<t.length;n++)t[n]=r[t[n]];return t}function f(e,t){if(e.length!=t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function m(e){var t=e.target||e.srcElement,n=t.tagName,i=e.keyCode,o=t.hasAttribute&&t.hasAttribute("contenteditable")&&"false"!=t.getAttribute("contenteditable").toLowerCase()||"undefined"!=typeof jest&&"true"==t.contentEditable;return!(("INPUT"==n||"SELECT"==n||"TEXTAREA"==n||o)&&-1==["submit","button"].indexOf(t.type)&&i!=l.escape&&i!=l.tab)}function g(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,(function(){n(window.event)}))}const S=d;S.setScope=u,S.getScope=h,S.clear=function(){i={},u(),c()},S.clearScope=function(e){for(var t in i)if(i.hasOwnProperty(t))for(var n=0;n<i[t].length;n++)i[t][n].scope===e&&(i[t].splice(n,1),n-=1)},S.filter=m,S.resetFilter=function(){d.filter=m},S.unbind=function(e,t,n){var o,s,r,a,c,d,u,m=[];for(s=(function(e){var t=e.replace(/\s/g,"").split(",");return""==t[t.length-1]&&(t[t.length-2]+=","),t})(e),c=0;c<s.length;c++){if((r=s[c].split("+")).length>1&&(m=p(r)),o=r[r.length-1],o=l[u=o]||u.toUpperCase().charCodeAt(0),void 0===t&&(t=h()),!i[o])return;for(a=0;a<i[o].length;a++)(d=i[o][a]).scope===t&&f(d.mods,m)&&(n&&d.method!==n||(i[o][a]={}))}},window.key||(g(document,"keydown",(function(e){var t,n,l,c,u;if((e.target||e.srcElement).tagName,93!=(t=e.keyCode)&&224!=t||(t=91),t in o)for(l in o[t]=!0,r)r[l]==t&&(d[l]=!0);else if(d.filter.call(this,e)&&t in i){var h=s;for(c=0;c<i[t].length;c++)if((n=i[t][c]).scope==h||"all"==n.scope){for(l in u=n.mods.length>0,o)(!o[l]&&a(n.mods,+l)>-1||o[l]&&-1==a(n.mods,+l))&&(u=!1);(0!=n.mods.length||o[16]||o[18]||o[17]||o[91])&&!u||!1===n.method(e,n)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}})),g(document,"keyup",(function(e){var t,n=e.keyCode;if(93!=n&&224!=n||(n=91),n in o)for(t in o[n]=!1,r)r[t]==n&&(d[t]=!1)})),g(window,"focus",c),g(document,"contextmenu",c),window.key=S),e.exports=window.key},0:function(e,t,n){e.exports=n("./keymaster.js")}})}));
//# sourceMappingURL=pkg-selectable-list.min.js-vflPfqzRy.map