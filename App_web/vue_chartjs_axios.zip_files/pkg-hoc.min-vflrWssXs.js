define("metaserver/static/js/modules/clean/react/hoc",["require","exports","tslib","react","react-redux","react-intl","metaserver/static/js/modules/clean/react/components/css","metaserver/static/js/modules/clean/react/components/helpers"],(function(e,t,r,n,i,a,s,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withIntlProvider=t.withCSS=t.withReduxStore=void 0,n=r.__importDefault(n),t.withReduxStore=function(e){return function(t){const r=r=>n.default.createElement(i.Provider,{store:e},n.default.createElement(t,Object.assign({},r)));return r.displayName=`WithProvider(${c.getDisplayName(t)})`,r}},t.withCSS=function(e){return function(t){return s.requireCssWithComponent(t,e)}},t.withIntlProvider=function(e){return function(t){const r=r=>n.default.createElement(a.RawIntlProvider,{value:e},n.default.createElement(t,Object.assign({},r)));return r.displayName=`withIntlProvider(${c.getDisplayName(t)})`,r}}}));
//# sourceMappingURL=pkg-hoc.min.js-vflawCcA0.map