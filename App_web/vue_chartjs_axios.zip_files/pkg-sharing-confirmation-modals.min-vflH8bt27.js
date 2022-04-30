define("metaserver/static/js/modules/clean/flux/store_listener",["require","exports","tslib","create-react-class","react"],(function(e,t,s,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listenToStores=void 0,o=s.__importDefault(o),i=s.__importDefault(i);t.listenToStores=function(e,t,s){return o.default({displayName:`StoreListener(${null!=e.displayName?e.displayName:"Unknown"})`,getInitialState(){return{childProps:s(this.props,t)}},componentDidMount(){for(const e of Object.keys(t||{})){t[e].add_change_listener(this._handleStoreChanged)}return this.setState({childProps:s(this.props,t)})},componentWillUnmount(){return(()=>{const e=[];for(const s of Object.keys(t||{})){const o=t[s];e.push(o.remove_change_listener(this._handleStoreChanged))}return e})()},render(){const t={ref:"wrapped"};for(const e of Object.keys(this.state.childProps||{})){const s=this.state.childProps[e];t[e]=s}return i.default.createElement(e,t,this.props.children)},getWrappedComponent(){return this.refs.wrapped},getStores:()=>t,_handleStoreChanged(){if(this.isMounted()){const e=s(this.props,t);if(null!=e)return this.setState({childProps:e})}}})}})),define("metaserver/static/js/modules/clean/sharing/confirmation_modals/confirm_with_option_modal",["require","exports","tslib","react","spectrum/modal/index","metaserver/static/js/modules/clean/ux_analytics/utils","metaserver/static/js/modules/clean/ux_analytics_modal_tracking"],(function(e,t,s,o,i,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConfirmWithOptionModal=void 0,o=s.__importDefault(o);class r extends o.default.Component{constructor(e){if(super(e),this.onCancel=()=>{this.props.onCancel&&this.props.onCancel(this.state.checked),n.dispatchModalClosed()},null==this.props.children)throw new Error("Must have children prop");this.state={checked:!1},this.handleOptionClick=this.handleOptionClick.bind(this),this.handleAccept=this.handleAccept.bind(this),this.handleDismissCompleted=this.handleDismissCompleted.bind(this)}render(){const e=this.props.id||"confirm-with-option-modal";return o.default.createElement(i.UtilityModal,{ariaLabel:this.props.title,title:this.props.title,overlayClickClose:!0,primaryAction:this.props.confirmText,secondaryAction:this.props.cancelText,onPrimaryAction:this.handleAccept,onSecondaryAction:this.onCancel,open:!0,onReady:n.dispatchModalOpened,onRequestClose:this.onCancel,overlayClassName:"file-viewer-modal-overlay confirmation-modal-overlay",link:this.props.link,onLink:this.props.onClickLink,style:{zIndex:10001}},o.default.createElement(a.UXAnalyticsModalTracking,{id:e}),this.renderContent())}renderContent(){return o.default.createElement("div",{className:"simple-modal-content"},o.default.createElement("div",{className:"confirm-with-option-modal__body-text"},this.props.children),this.renderOption())}renderOption(){return this.props.showOption?o.default.createElement("div",{className:"u-mar-vertical-s confirm-with-option-modal__option"},o.default.createElement("input",{"aria-checked":this.state.checked,checked:this.state.checked,className:"confirm-with-option-modal__option-input",id:"confirm-with-option-modal__input",name:"confirmation_option",onClick:this.handleOptionClick,role:"checkbox",type:"checkbox"}),o.default.createElement("label",{className:"confirm-with-option-modal__option-label",htmlFor:"confirm-with-option-modal__input"},this.props.optionLabel)):null}handleOptionClick(){this.setState({checked:!this.state.checked})}handleAccept(){this.props.onConfirm&&this.props.onConfirm(this.state.checked),n.dispatchModalClosed()}handleDismissCompleted(){this.props.onCancel&&this.props.onCancel(this.state.checked)}}t.ConfirmWithOptionModal=r,r.displayName="ConfirmWithOptionModal"})),define("metaserver/static/js/modules/clean/sharing/confirmation_modals/relinquish_membership_confirmation_modal",["require","exports","tslib","react","metaserver/static/js/modules/clean/sharing/confirmation_modals/confirm_with_option_modal","metaserver/static/js/modules/core/i18n","metaserver/static/js/modules/clean/react/components/modal"],(function(e,t,s,o,i,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.showRelinquishMembershipConfirmationModal=void 0,o=s.__importDefault(o),t.showRelinquishMembershipConfirmationModal=function(e,t,s,r,l=!1,c=!1){let d,m,p=null;e?(m=n.intl.formatMessage({id:"UtDXzH",defaultMessage:"Remove your access to this folder?"}),d=t&&!c?n.intl.formatMessage({id:"u4EHIo",defaultMessage:"You may still have access to this folder through a company group or parent folder."}):n.intl.formatMessage({id:"1Oclqa",defaultMessage:"If you continue, you won’t be able to access this folder anymore."}),l&&(p=n.intl.formatMessage({id:"vZ/zQV",defaultMessage:"Keep a copy of this folder"}))):(m=n.intl.formatMessage({id:"l2Mi0q",defaultMessage:"Remove your access to this file?"}),d=n.intl.formatMessage({id:"N7+DBL",defaultMessage:"If you continue, you won’t be able to access this file anymore."}));const h=e?"relinquish-membership-folder-modal":"relinquish-membership-file-modal";return a.Modal.showInstance(o.default.createElement(i.ConfirmWithOptionModal,{cancelText:n.intl.formatMessage({id:"d9/SE1",defaultMessage:"Cancel"}),id:h,confirmText:n.intl.formatMessage({id:"eTtbKw",defaultMessage:"Remove my access"}),onCancel:r,onConfirm:s,optionLabel:p,showOption:null!=p,title:m},d))}})),define("metaserver/static/js/modules/clean/sharing/confirmation_modals/reset_access_modal",["require","exports","tslib","react","metaserver/static/js/modules/clean/em_string","metaserver/static/js/modules/clean/react/components/modal","metaserver/static/js/modules/clean/sharing/confirmation_modals/confirm_with_option_modal","spectrum-sharing/utils/sharing_constants","metaserver/static/js/modules/core/i18n"],(function(e,t,s,o,i,n,a,r,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.confirmResetAccess=void 0,o=s.__importDefault(o),t.confirmResetAccess=function(e){let t;t=e.isFolder?l.intl.formatMessage({id:"amJefU",defaultMessage:"Everyone will be removed from this folder. You’ll still keep a copy of this folder in your Dropbox."}):l.intl.formatMessage({id:"B69Z5q",defaultMessage:"Everyone will be removed from this file. You’ll still keep a copy of this file in your Dropbox."});const s=l.intl.formatMessage({id:"MH5OkG",defaultMessage:"Unshare “{content_name}”?"},{content_name:i.Emstring.em_snippet(e.contentName,r.SNIPPET_SIZES.FILENAME)});n.Modal.showInstance(o.default.createElement(a.ConfirmWithOptionModal,{cancelText:l.intl.formatMessage({id:"d9/SE1",defaultMessage:"Cancel"}),confirmText:l.intl.formatMessage({id:"oyC3Ha",defaultMessage:"Unshare"}),onCancel:e.onCancel,onConfirm:e.onConfirm,optionLabel:l.intl.formatMessage({id:"axFE/u",defaultMessage:"Let removed members keep a copy of this shared folder"}),showOption:e.allowLeaveACopy&&e.isFolder,title:s},t))}})),define("metaserver/static/js/modules/clean/sharing/upsells/util",["require","exports","metaserver/static/js/modules/core/i18n","metaserver/static/js/modules/clean/growth/user_action/tracker"],(function(e,t,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.upsellBannerContext=t.trackDismissAction=t.DocsendUpsellUserAction=t.DocsendUpsellUserActionTracker=void 0;class i extends o.GrowthUserActionTracker{constructor(){super(...arguments),this.project="pg_docsend_contextual_upsell"}}var n;t.DocsendUpsellUserActionTracker=i,(function(e){e.DOCSEND_UPSELL_SHARING_DIALOG_OR_BANNER_DISMISSED_ACTION="docsend_upsell_sharing_dialog_or_banner_dismissed",e.POST_UPLOAD_SNACKBAR_SHOWN="post_upload_snackbar_shown"})(n=t.DocsendUpsellUserAction||(t.DocsendUpsellUserAction={})),t.trackDismissAction=e=>{if(void 0!==e){new i(e).track(n.DOCSEND_UPSELL_SHARING_DIALOG_OR_BANNER_DISMISSED_ACTION,{})}};const a={docsend:{acceptText:s.intl.formatMessage({id:"6dTn9+",defaultMessage:"Try DocSend"}),declineText:s.intl.formatMessage({id:"PaR0U3",defaultMessage:"Skip"}),titleText:s.intl.formatMessage({id:"hm8Dgf",defaultMessage:"Interested in analytics and advanced sharing controls?"}),bodyText:s.intl.formatMessage({id:"KKXTSe",defaultMessage:"With DocSend you can control document versions, track activity with analytics, and share multiple documents with a single link."}),afterAccept:e=>{e(!0)},redirectHref:"https://docsend.com/signup/dropbox?utm_source=Dropbox%20Referral&utm_medium=Referral&utm_campaign=sh-page-v1&signup_source=sh-page-v1",uxaPrefix:"docsend-shared-page-upsell-banner",imgSrc:"/static/images/product_growth/docsend_upsell/shared_page_banner-vfll-NvSO.svg"}};t.upsellBannerContext=a}));
//# sourceMappingURL=pkg-sharing-confirmation-modals.min.js-vflYlGF41.map