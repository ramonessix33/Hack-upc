define("metaserver/static/js/modules/clean/react/common/rendering",["require","exports","tslib","react"],(function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withSuspenseNoSSR=t.LazySuspense=t.RenderAfterMount=void 0,r=n.__importStar(r),t.RenderAfterMount=e=>{const{children:t,fallback:n}=e,[a,s]=r.useState(!1);return r.useEffect(()=>{s(!0)},[]),a?r.default.createElement(r.default.Fragment,null,t):r.default.isValidElement(n)?n:null},t.LazySuspense=e=>{var{fallback:a=""}=e,s=n.__rest(e,["fallback"]);return r.default.createElement(t.RenderAfterMount,{fallback:a},r.default.createElement(r.Suspense,Object.assign({fallback:a},s)))},t.withSuspenseNoSSR=(e,t=null)=>{const n=n=>r.default.createElement(r.Suspense,{fallback:t},r.default.createElement(e,Object.assign({},n)));return n.displayName="withSuspenseNoSSR",n}})),define("metaserver/static/js/modules/clean/react/common/uuid",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateUUID=void 0,t.generateUUID=function(e){const t=()=>Math.floor(65536*(1+Math.random())).toString(16).substring(1),n=t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t();return e?e+n:n}}));
//# sourceMappingURL=pkg-react-common.min.js-vflKuTuR3.map