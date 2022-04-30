define("typescript/component_libraries/pro-ui/src/components/branding/background/index",["require","exports","typescript/component_libraries/pro-ui/src/components/branding/background/thumbnail","typescript/component_libraries/pro-ui/src/components/branding/background/color","typescript/component_libraries/pro-ui/src/components/branding/background/image","typescript/component_libraries/pro-ui/src/components/branding/background/video"],(function(e,o,r,n,a,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.VideoBackground=o.ImageBackground=o.ColorBackground=o.Thumbnail=void 0,Object.defineProperty(o,"Thumbnail",{enumerable:!0,get:function(){return r.Thumbnail}}),Object.defineProperty(o,"ColorBackground",{enumerable:!0,get:function(){return n.ColorBackground}}),Object.defineProperty(o,"ImageBackground",{enumerable:!0,get:function(){return a.ImageBackground}}),Object.defineProperty(o,"VideoBackground",{enumerable:!0,get:function(){return t.VideoBackground}})})),define("typescript/component_libraries/pro-ui/src/components/branding/background/color",["require","exports","tslib","react","classnames"],(function(e,o,r,n,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.ColorBackground=void 0,n=r.__importStar(n),a=r.__importDefault(a),o.ColorBackground=({colorHex:e,className:o})=>n.createElement("div",{className:a.default("branding-background",o),style:{backgroundColor:e}}),o.ColorBackground.displayName="ColorBackground"})),define("typescript/component_libraries/pro-ui/src/components/branding/background/image",["require","exports","tslib","react","classnames"],(function(e,o,r,n,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.ImageBackground=void 0,n=r.__importStar(n),a=r.__importDefault(a),o.ImageBackground=({src:e,className:o})=>n.createElement("div",{className:a.default("branding-background","branding-background--image",o),style:{backgroundImage:`url("${e}")`}}),o.ImageBackground.displayName="ImageBackground"})),define("typescript/component_libraries/pro-ui/src/components/branding/background/thumbnail",["require","exports","tslib","react","classnames"],(function(e,o,r,n,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.Thumbnail=void 0,n=r.__importStar(n),a=r.__importDefault(a),o.Thumbnail=({className:e,colorHex:o,src:r})=>{const t={backgroundColor:o};return r&&(t.backgroundImage=`url(${r})`),n.createElement("span",{className:a.default("branding-background-thumbnail",e),style:t})},o.Thumbnail.displayName="Thumbnail"})),define("typescript/component_libraries/pro-ui/src/components/branding/background/video",["require","exports","tslib","react","classnames"],(function(e,o,r,n,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.VideoBackground=void 0,n=r.__importStar(n),a=r.__importDefault(a),o.VideoBackground=({src:e,className:o})=>n.createElement("div",{className:a.default("branding-background",o)},n.createElement("video",{key:e,className:"branding-background__video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0},n.createElement("source",{src:e,type:"video/mp4"}))),o.VideoBackground.displayName="VideoBackground"})),define("typescript/component_libraries/pro-ui/src/components/branding/branding_block/index",["require","exports","tslib","react","classnames","dig-components/typography"],(function(e,o,r,n,a,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.BrandingBlock=void 0,n=r.__importStar(n),a=r.__importDefault(a),o.BrandingBlock=({className:e,orgLogoUrl:o,orgName:r,size:i})=>n.createElement("div",{className:a.default("branding-block",e,{[`branding-block--${i}`]:i})},n.createElement("img",{className:"branding-block__item branding-block__item--img",src:o}),n.createElement(t.Text,{className:"branding-block__item branding-block__item--name"},r))})),define("typescript/component_libraries/pro-ui/src/components/branding/cover_modal/index",["require","exports","tslib","react","dig-components/modal","typescript/component_libraries/pro-ui/src/components/branding/cover_modal/modal_content"],(function(e,o,r,n,a,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.CoverModal=void 0,n=r.__importStar(n),o.CoverModal=e=>{var{onClose:o,open:i}=e,c=r.__rest(e,["onClose","open"]);return n.createElement(a.Modal,{open:i,onRequestClose:o,overlayClassName:"cover-modal",width:"large",isCentered:!0},n.createElement(t.ModalContent,Object.assign({onClose:o},c)))},o.CoverModal.displayName="CoverModal",o.CoverModal.displayName="CoverModal"})),define("typescript/component_libraries/pro-ui/src/components/branding/cover_modal/card",["require","exports","tslib","react","classnames","dig-components/buttons","dig-components/typography"],(function(e,o,r,n,a,t,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.Card=void 0,n=r.__importStar(n),a=r.__importDefault(a),o.Card=({closeButtonText:e,onClose:o,orgLogoUrl:r,orgName:c,size:s})=>n.createElement("div",{className:a.default("cover-modal__card",{[`cover-modal__card--${s}`]:s})},n.createElement("img",{className:"cover-modal__card-logo-img",src:r}),n.createElement(i.Text,{className:"cover-modal__card-org-name",isBold:!0,tagName:"h2"},c),n.createElement(t.Button,{variant:"primary",onClick:o},e)),o.Card.displayName="Card",o.Card.displayName="Card"})),define("typescript/component_libraries/pro-ui/src/components/branding/cover_modal/modal_content",["require","exports","tslib","react","typescript/component_libraries/pro-ui/src/components/branding/cover_modal/card"],(function(e,o,r,n,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.ModalContent=void 0,n=r.__importStar(n),o.ModalContent=({background:e,closeButtonText:o,onClose:r,orgLogoUrl:t,orgName:i,size:c})=>n.createElement("div",{className:"cover-modal__content"},n.createElement(a.Card,{closeButtonText:o,onClose:r,orgLogoUrl:t,orgName:i,size:c}),n.createElement("div",{className:"cover-modal__background"},e)),o.ModalContent.displayName="ModalContent",o.ModalContent.displayName="ModalContent"}));
//# sourceMappingURL=pkg-branding.min.js-vflzvu-zL.map