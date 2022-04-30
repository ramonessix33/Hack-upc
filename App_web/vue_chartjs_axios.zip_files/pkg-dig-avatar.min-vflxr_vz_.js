define("metaserver/static/js/prod_assets_web_modules/dig-components/avatar",["exports","../common/tslib.es6","../classnames","react","./typography","./icons/src","./buttons","focus-visible","./icons","./progress_indicators","../react-transition-group/CSSTransition","../common/extends","../common/Transition","react-dom"],(function(e,t,a,r,n,s,i,c,o,l,u,d,v,m){"use strict";var g=["var(--color__accent__ocean)","var(--color__accent__crimson)","var(--color__accent__rust)","var(--color__accent__canopy)","var(--color__accent__navy)","var(--color__accent__plum)","var(--color__accent__azalea)","var(--color__accent__gold)"];function _(){for(var e=Math.random().toString(36).slice(2),t=5381*e.length,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<6)+(t<<16)-t);return t=Math.abs(t),g[t%g.length]}function f(e){for(var t=5381*(e=e||Math.random().toString(36).slice(2)).length,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<6)+(t<<16)-t);return t=Math.abs(t),g[t%g.length]}var h=function(e){var i=e.backgroundColor,c=e.className,o=e.children,l=e.src,u=e.srcSet,d=e.alt,v=e.size,m=void 0===v?"standard":v,g=e.isInactive,f=void 0!==g&&g,h=e.hasNoOutline,p=void 0!==h&&h,b=e.isGuest,S=void 0!==b&&b,A=t.__rest(e,["backgroundColor","className","children","src","srcSet","alt","size","isInactive","hasNoOutline","isGuest"]),C=r.useState(!1),N=C[0],y=C[1],I=r.useState(""),x=I[0],E=I[1];""===x&&E(_()),i=S?x:i;var z=(l||u)&&!N,k=o&&"number"==typeof o,F=a(c,"dig-Avatar","dig-Avatar--"+m,{"dig-Avatar--hasNoOutline":p,"dig-Avatar--withImage":z,"dig-Avatar--isGuest":S}),G=a({"dig-Avatar-image":!0,"dig-Avatar-image--isInactive":f}),w=a({"dig-Avatar-text":!0,"dig-Avatar-text--isInactive":f,"dig-Avatar-text--isNumber":k}),M=k||f?{}:{background:""+i},O="small"===m?"xsmall":m;return r.createElement("div",t.__assign({className:F,"aria-label":d},A),S&&r.createElement(s.PersonFill,{className:"dig-Avatar-image--isGuest"}),z?r.createElement("img",{alt:d,className:G,src:l,onError:function(){return y(!0)},srcSet:u}):r.createElement(n.Text,{size:O,className:w,inverse:!k,isBold:!0,style:M},o))};h.displayName="Avatar";var p={size:"standard",items:new Set,getIndex:function(){return-1},add:function(){return!1},remove:function(){return!1}},b=r.createContext(p),S=r.forwardRef((function(e,n){var s=e.children,c=e.backgroundColor,o=e.src,l=e.srcSet,u=e.className,d=e.style,v=e.isInactive,m=e.isGuest,g=void 0!==m&&m,p=t.__rest(e,["children","backgroundColor","src","srcSet","className","style","isInactive","isGuest"]),S=r.useState(-1),A=S[0],C=S[1],N=r.useRef(null),y=r.useContext(b),I=y.size,x=y.getIndex,E=y.add,z=y.remove,k=c||f(A.toString()),F=r.useState(""),G=F[0],w=F[1];""===G&&w(_()),c=g?G:c;var M=a("dig-Facepile-item",u);return r.useImperativeHandle(n,(function(){return{getBoundingClientRect:function(){return N.current&&N.current.getBoundingClientRect()}}}),[N]),r.useEffect((function(){return E(N),function(){return z(N)}}),[N,E,z]),r.useEffect((function(){C(x(N))}),[x]),r.createElement(i.StylelessButton,t.__assign({ref:N,className:M,style:d},p),g?r.createElement(h,{size:I,isGuest:g}):r.createElement(h,{size:I,backgroundColor:k,src:o,srcSet:l,isInactive:v},s))}));S.displayName="Item";var A=function(e){var t=e.children,n=e.size,s=void 0===n?"standard":n,i=r.useState(new Set),c=i[0],o=i[1],l=r.useCallback((function(e){return e?Array.from(c.values()).indexOf(e.current):-1}),[c]),u=r.useCallback((function(e){e&&o(c.add(e.current))}),[c]),d=r.useCallback((function(e){e&&c.delete(e.current)&&o(c)}),[c]),v={size:s,items:c,getIndex:l,add:u,remove:d},m=a("dig-Facepile","dig-Facepile--"+s);return r.createElement(b.Provider,{value:v},r.createElement("div",{className:m},r.Children.toArray(t).reverse()))};A.Item=S,A.displayName="Facepile",e.Avatar=h,e.Facepile=A,e.avatarColorForUserIdentifier=f,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=pkg-dig-avatar.min.js-vfl26-Koy.map