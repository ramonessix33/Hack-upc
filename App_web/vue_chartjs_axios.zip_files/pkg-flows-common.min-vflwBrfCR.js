define("typescript/component_libraries/flows/src/components/approval-forms/approval_feedback_modal",["require","exports","tslib","dig-components/buttons","dig-components/controls","dig-components/modal","dig-components/text_fields","dig-components/typography","react","react-intl"],(function(e,t,a,o,l,r,s,n,p,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ApprovalFeedbackModal=void 0,p=a.__importStar(p),t.ApprovalFeedbackModal=({open:e,onRequestClose:t,onSubmit:a,onBackButtonClick:d,ioClient:u})=>{const{feedbackModalTitle:c,radioButtonTitle:m,radioButtonYesLabel:f,radioButtonNoLabel:v,textAreaYesTitle:g,textAreaNoTitle:_,backButtonLabel:b,submitFeedbackButtonLabel:h,textAreaPlaceholderTitle:A}=(function(){const e=i.useIntl();return{feedbackModalTitle:e.formatMessage({id:"0/HL+Q",defaultMessage:"What do you think of approval requests?"}),radioButtonTitle:e.formatMessage({id:"ftYhEs",defaultMessage:"Is this feature helpful?"}),radioButtonYesLabel:e.formatMessage({id:"mU1MrK",defaultMessage:"Yes"}),radioButtonNoLabel:e.formatMessage({id:"s6xbpD",defaultMessage:"No"}),textAreaYesTitle:e.formatMessage({id:"iX7U41",defaultMessage:"What suggestions do you have to make it better?"}),textAreaNoTitle:e.formatMessage({id:"ZVfnJI",defaultMessage:"What could make this feature more helpful to you?"}),textAreaPlaceholderTitle:e.formatMessage({id:"Ttsb+L",defaultMessage:"Let us know what you think here"}),backButtonLabel:e.formatMessage({id:"zEvexQ",defaultMessage:"Back"}),submitFeedbackButtonLabel:e.formatMessage({id:"F2GxG/",defaultMessage:"Submit"})}})(),[M,y]=p.useState(!0),[E,C]=p.useState("");return p.default.createElement(r.Modal,{open:e,isCentered:!0,withCloseButton:"Close",onRequestClose:t},p.default.createElement(r.Modal.Header,{hasBottomSpacing:"title-standard"},p.default.createElement(r.Modal.Title,null,c)),p.default.createElement(r.Modal.Body,null,m,p.default.createElement("div",{className:"feedback-menu__radio-buttons"},p.default.createElement(l.RadioButton,{id:"approval-is-helpful",checked:M,onChange:()=>y(!0)}),p.default.createElement(n.Label,{htmlFor:"approval-is-helpful"},f),p.default.createElement(l.RadioButton,{id:"approval-is-not-helpful",checked:!M,onChange:()=>y(!1)}),p.default.createElement(n.Label,{htmlFor:"approval-is-not-helpful"},v)),M?g:_,p.default.createElement("div",{className:"feedback-menu__text_area"},p.default.createElement(s.TextArea,{placeholder:A,maxLength:5e3,onChange:e=>{C(e.currentTarget.value)}})),p.default.createElement(n.Text,{size:"small",color:"faint"},E.length,"/5000")),p.default.createElement(r.Modal.Footer,null,d&&p.default.createElement(o.Button,{variant:"opacity",onClick:d},b),p.default.createElement(o.Button,{variant:"primary",onClick:()=>{a(),u.logApprovalsFeedback(M,E)}},h)))}})),define("typescript/component_libraries/flows/src/components/approval-forms/approval_io_client",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})})),define("typescript/component_libraries/flows/src/components/approval-forms/approval_request_modal",["require","exports","tslib","dig-components/buttons","dig-components/modal","dig-components/form_row","dig-components/text_fields","dig-components/typography","react","react-intl","spectrum/file_icon/index","typescript/component_libraries/flows/src/components/approval-forms/approval_type_radio_button_group","typescript/component_libraries/flows/src/components/approval-forms/approval_feedback_modal","typescript/component_libraries/flows/src/components/approval-forms/hooks","typescript/component_libraries/flows/src/components/contact-typeahead/index","dig-components/tooltips","dig-components/icons","dig-components/icons/src"],(function(e,t,a,o,l,r,s,n,p,i,d,u,c,m,f,v,g,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ApprovalRequestModal=void 0,p=a.__importStar(p),t.ApprovalRequestModal=({file:e,ioClient:t,multiApprovers:a=!1,onRequestClose:b,onSubmit:h,onSubmitFailure:A,onSubmitSuccess:M,open:y,showFeedbackButton:E=!1})=>{const C=i.useIntl(),[R,S]=p.useState(!1),q=t.logger;p.default.useEffect(()=>{q.logShownRequestForm(e.id,"request_approval_modal")},[e.id]);const{canSubmit:T,detailsInputValue:I,handleDetailsChange:B,handleNeedsAllApproversChange:L,handleRecipientsChange:w,handleSubmit:F,needsAllApprovers:k,onQueryChange:x,recipientNumLimit:N,recipients:P,renderTypeaheadSuggestion:O,requestPending:z,suggestions:U}=m.useApprovalRequest({fileId:e.id,ioClient:t,multiApprovers:a,onCreate:h,onCreateFailure:A,onCreateSuccess:M,actionSurface:"request_approval_modal"}),{modalHeaderSubtitle:j,closeButtonLabel:D,feedbackButtonLabel:V,cancelButtonLabel:Q,submitButtonLabel:Y,modalBodyTitle:G,detailsInputLabel:H,detailsInputPlaceholder:W,approverInputPlaceholder:K,approverInputTooltipTitle:X,singleApproverInputLabel:J,multiApproverInputLabel:Z}=(function(e){const t=i.useIntl();return{feedbackButtonLabel:t.formatMessage({id:"ivQ2Ac",defaultMessage:"Share feedback"}),cancelButtonLabel:t.formatMessage({id:"wCMmYo",defaultMessage:"Cancel"}),submitButtonLabel:t.formatMessage({id:"c/mz8E",defaultMessage:"Send"}),closeButtonLabel:t.formatMessage({id:"OS5Xe5",defaultMessage:"Close"}),modalHeaderSubtitle:e.modifiedBy?t.formatMessage({id:"RzXKqn",defaultMessage:"Last edited by {modifiedBy} at {modifiedAt}"},{modifiedBy:e.modifiedBy,modifiedAt:e.modifiedAt}):t.formatMessage({id:"s0jdsx",defaultMessage:"Last edited by you at {modifiedAt}"},{modifiedAt:e.modifiedAt}),modalBodyTitle:t.formatMessage({id:"6ta9rl",defaultMessage:"Get approval"}),detailsInputLabel:t.formatMessage({id:"DjtbhT",defaultMessage:"Message"}),detailsInputPlaceholder:t.formatMessage({id:"A62fV9",defaultMessage:"Add a note about what you need approved."}),approverInputPlaceholder:t.formatMessage({id:"0rnwy6",defaultMessage:"Add an email or name"}),approverInputTooltipTitle:t.formatMessage({id:"+lp2vo",defaultMessage:"Approvers are sent an email with your message and a link to the file."}),singleApproverInputLabel:t.formatMessage({id:"zha+hc",defaultMessage:"Approver"}),multiApproverInputLabel:t.formatMessage({id:"gdOMIk",defaultMessage:"Approver(s)"})}})(e),$=p.useCallback(()=>{S(!0)},[]),ee=p.useCallback(()=>{q.logRequestFormCancelClick(e.id,"request_approval_modal"),t.trackUserSurveyEvent("approval_request_abandoned"),b()},[e.id,t,q,b]);return p.default.createElement(p.default.Fragment,null,p.default.createElement(l.Modal,{open:y&&!R,isCentered:!0,withCloseButton:D,onRequestClose:ee,width:540},p.default.createElement("div",{className:"approval-modal__content-wrapper"},p.default.createElement(l.Modal.Header,{hasBottomSpacing:"title-standard",className:"approval-modal__header"},p.default.createElement(d.FileIcon,{path:e.name,variant:"small"}),p.default.createElement("div",{className:"approval-modal__titles-wrapper"},p.default.createElement("p",{className:"approval-modal__header-title"},p.default.createElement(n.Text,{variant:"paragraph",size:"standard",isBold:!0},e.name)),null!==e.modifiedBy&&p.default.createElement("p",{className:"approval-modal__header-subtitle"},p.default.createElement(n.Text,{variant:"label",size:"small"},j)))),p.default.createElement(l.Modal.Body,{className:"approval-modal__body"},p.default.createElement(n.Title,{className:"approval-modal__body-title"},G),p.default.createElement(r.FormRow,null,p.default.createElement(f.ContactTypeahead,{placeholder:K,recipients:P,onRecipientsChange:w,onTypeAheadSelection:t=>{q.logAddApprover(e.id,"request_approval_modal",t.dbx_account_id)},suggestions:U,onQueryChange:x,renderTypeaheadSuggestion:O,recipientNumLimit:N,label:a?Z:J,labelSubtext:p.default.createElement(v.Tooltip,{title:X,placement:"right"},p.default.createElement("div",{className:"approval-modal__approver-input-tooltip"},p.default.createElement(g.UIIcon,{src:_.HelpLine}))),onFocus:()=>{q.logFocusApproverTypeahead(e.id,"request_approval_modal")},maxNumTooltip:C.formatMessage({id:"w7qLQr",defaultMessage:"You can only have {recipientNumLimit, plural, one {# approver} other {# approvers}} per request"},{recipientNumLimit:N})})),a&&P.length>1?p.default.createElement(u.ApprovalTypeRadioButtonGroup,{className:"approval-modal__radio-button-group",needsAllApprovers:k,onChange:L}):null,p.default.createElement(r.FormRow,null,p.default.createElement(r.FormLabel,{htmlFor:"approval-request-modal__details-input"},p.default.createElement(n.Text,{isBold:!0,size:"small",tagName:"label"},H)),p.default.createElement(s.TextArea,{className:"approval-forms__text-area",id:"approval-request-modal__details-input",placeholder:W,"aria-label":W,value:I,onChange:B}))),p.default.createElement(l.Modal.Footer,{className:"approval-modal__footer"},E&&p.default.createElement(o.Button,{variant:"transparent",onClick:$},V),p.default.createElement(o.Button,{variant:"opacity",onClick:ee},Q),p.default.createElement(o.Button,{disabled:!T,isLoading:z,variant:"primary",onClick:F},Y)))),E&&p.default.createElement(c.ApprovalFeedbackModal,{open:y&&R,onRequestClose:()=>S(!1),onBackButtonClick:()=>S(!1),onSubmit:()=>S(!1),ioClient:t}))},t.ApprovalRequestModal.displayName="ApprovalRequestModal"})),define("typescript/component_libraries/flows/src/components/approval-forms/approval_type_radio_button_group",["require","exports","tslib","dig-components/controls","dig-components/form_row","dig-components/typography","react","react-intl","classnames"],(function(e,t,a,o,l,r,s,n,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ApprovalTypeRadioButtonGroup=void 0,s=a.__importDefault(s),p=a.__importDefault(p),t.ApprovalTypeRadioButtonGroup=({className:e,needsAllApprovers:t,onChange:a})=>{const{needsAllApproversRadioButtonLabel:i,needsOneApproverRadioButtonLabel:d}=(function(){const e=n.useIntl();return{needsAllApproversRadioButtonLabel:e.formatMessage({id:"dCiUbC",defaultMessage:"Everyone needs to approve"}),needsOneApproverRadioButtonLabel:e.formatMessage({id:"IVLVww",defaultMessage:"Only one approval needed"})}})();return s.default.createElement(l.FormControlGroup,{className:p.default("approval__radio-button-group",e)},s.default.createElement(l.FormRow,{variant:"control"},s.default.createElement(o.RadioButton,{id:"needs-all-approvers",checked:t,onChange:()=>a(!0)}),s.default.createElement(r.Text,{tagName:"label",htmlFor:"needs-all-approvers"},i)),s.default.createElement(l.FormRow,{variant:"control"},s.default.createElement(o.RadioButton,{id:"needs-one-approver",checked:!t,onChange:()=>a(!1)}),s.default.createElement(r.Text,{tagName:"label",htmlFor:"needs-one-approver"},d)))},t.ApprovalTypeRadioButtonGroup.displayName="ApprovalTypeRadioButtonGroup"})),define("typescript/component_libraries/flows/src/components/approval-forms/hooks",["require","exports","tslib","react","typescript/component_libraries/flows/src/components/contact-typeahead/index"],(function(e,t,a,o,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useApprovalRequest=t.MAX_RECIPIENTS_MULTI=void 0,o=a.__importStar(o),t.MAX_RECIPIENTS_MULTI=20,t.useApprovalRequest=({fileId:e,ioClient:a,multiApprovers:r=!1,actionSurface:s,onCreate:n,onCreateFailure:p,onCreateSuccess:i,onEditSuccess:d,editArgs:u,threadId:c})=>{var m;const f=r?t.MAX_RECIPIENTS_MULTI:1,[v,g]=o.useState(!1),[_,b]=o.useState(!1),[h,A]=o.useState([]),[M,y]=o.useState(!0),[E,C]=o.useState(null!==(m=null==u?void 0:u.content)&&void 0!==m?m:""),[R,S]=o.useState(!1),{suggestions:q,onQueryChange:T}=a.useSuggestions(h),I=a.logger,B=o.useCallback(e=>o.default.createElement(l.TypeaheadSuggestion,{suggestion:e,getInitials:a.getInitials}),[a.getInitials]),L=o.useCallback(e=>{g(!1),b(!1),C(e.currentTarget.value)},[]),w=h.length>0&&h.length<=f&&0===h.filter(e=>e.validationResult!==l.ValidationResult.OK).length,F=()=>{var t;g(!1),b(!1),S(!0);const o={actor:"requester",approval_type:"request",requester_email:null==u?void 0:u.approvalMetadata.requester_email,status:"pending",type:"approval",approvers:null!==(t=null==u?void 0:u.approvalMetadata.approvers)&&void 0!==t?t:h.map(({email:e,name:t})=>({email:e,display_name:t})),requires_all:u?u.approvalMetadata.requires_all:M};if(u)a.editApprovalRequest(e,u.commentId,E).then(()=>{null==d||d(u.commentId,c,{text:E,metadata:[o]}),I.logEditApprovalRequestSuccess(e,E.length,c)}).catch(()=>{g(!0),S(!1)});else{const t=h.map(({email:e})=>({email:e}));null==n||n(h.length),a.createApproval(e,E,t,M).then(t=>{null==i||i(h.length,{text:E,metadata:[o]}),I.logSubmitApprovalSuccess(e,s,E.length,JSON.stringify(h.map(({dbx_account_id:e})=>e)),M,h.length,t.comment_id),a.triggerSprigSurvey()}).catch(e=>{var t;null==p||p(h.length,F),g(!0),"user_not_found"===(null===(t=e.error)||void 0===t?void 0:t[".tag"])&&b(!0),S(!1)})}};return{canSubmit:!!u||w,detailsInputValue:E,handleDetailsChange:L,handleNeedsAllApproversChange:t=>{y(t),I.logApproverOptionsClick(e,t,s)},handleRecipientsChange:e=>{g(!1),b(!1),A(e)},handleSubmit:F,hasError:v,isUserNotFoundError:_,needsAllApprovers:M,onQueryChange:T,recipientNumLimit:f,recipients:h,renderTypeaheadSuggestion:B,requestPending:R,suggestions:q}}})),define("typescript/component_libraries/flows/src/components/approval-forms/index",["require","exports","tslib","typescript/component_libraries/flows/src/components/approval-forms/request_form","typescript/component_libraries/flows/src/components/approval-forms/respond_form","typescript/component_libraries/flows/src/components/approval-forms/approval_io_client","typescript/component_libraries/flows/src/components/approval-forms/reducer","typescript/component_libraries/flows/src/components/approval-forms/test_utils","typescript/component_libraries/flows/src/components/approval-forms/url_utils","typescript/component_libraries/flows/src/components/approval-forms/approval_request_modal","typescript/component_libraries/flows/src/components/approval-forms/approval_type_radio_button_group"],(function(e,t,a,o,l,r,s,n,p,i,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.__exportStar(o,t),a.__exportStar(l,t),a.__exportStar(r,t),a.__exportStar(s,t),a.__exportStar(n,t),a.__exportStar(p,t),a.__exportStar(i,t),a.__exportStar(d,t)})),define("typescript/component_libraries/flows/src/components/approval-forms/reducer",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setApprovalForm=t.approvalReducer=t.Action=void 0,(t.Action||(t.Action={})).SetApprovalForm="@@approval/setApprovalForm",t.approvalReducer=(e={},{type:a,payload:o})=>{switch(a){case t.Action.SetApprovalForm:return Object.assign(Object.assign({},e),o);default:return e}},t.setApprovalForm=function(e){return{type:t.Action.SetApprovalForm,payload:e}}})),define("typescript/component_libraries/flows/src/components/approval-forms/request_form",["require","exports","tslib","react","dig-components/buttons","classnames","typescript/component_libraries/flows/src/components/spacer/index","react-intl","react-intl","dig-components/controls","typescript/component_libraries/flows/src/components/contact-typeahead/index","dig-components/form_row","dig-components/text_fields","dig-components/typography","dig-components/avatar","dig-components/tooltips","dig-components/badges","dig-components/icons","dig-components/icons/src","typescript/component_libraries/flows/src/components/approval-forms/hooks"],(function(e,t,a,o,l,r,s,n,p,i,d,u,c,m,f,v,g,_,b,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ApprovalRequestForm=t.ApprovalRequestFormInternal=void 0,o=a.__importDefault(o),r=a.__importDefault(r),t.ApprovalRequestFormInternal=({onCancel:e,onRequestSuccess:t,onEditSuccess:a,ioClient:n,user:A,fileId:M,inlineWithComments:y,approvalVariant:E,editArgs:C,threadId:R})=>{var S;const{canSubmit:q,detailsInputValue:T,handleDetailsChange:I,handleNeedsAllApproversChange:B,handleRecipientsChange:L,handleSubmit:w,hasError:F,isUserNotFoundError:k,needsAllApprovers:x,onQueryChange:N,recipientNumLimit:P,recipients:O,renderTypeaheadSuggestion:z,requestPending:U,suggestions:j}=h.useApprovalRequest({fileId:M,ioClient:n,multiApprovers:"MULTI_APPROVER"===E,onCreateSuccess:(e,...a)=>null==t?void 0:t(...a),editArgs:C,threadId:R,onEditSuccess:a,actionSurface:"request_approval_form"}),D=o.default.useRef(null),{title:V,requestSubmitButtonLabel:Q,cancelButtonLabel:Y,detailsInputLabel:G,detailsInputPlaceholder:H,approverInputPlaceholder:W,approverInputLabel:K,multiApproverInputLabel:X,approverInputTooltipTitle:J,userNotFoundError:Z,genericError:$,editSubmitButtonLabel:ee,addAnApproverTooltip:te,createNewRequestTooltip:ae,onlyOneApproverAllowedTooltip:oe,onlyTwentyApproversAllowedTooltip:le,betaBadgeLabel:re,radioButtonAllApprovers:se,radioButtonOneApprover:ne}=(function(){const e=p.useIntl();return{title:e.formatMessage({id:"hEJ2Yn",defaultMessage:"Get approval"}),requestSubmitButtonLabel:e.formatMessage({id:"6+7BLc",defaultMessage:"Send"}),cancelButtonLabel:e.formatMessage({id:"KQ8scR",defaultMessage:"Cancel"}),detailsInputLabel:e.formatMessage({id:"R+Was/",defaultMessage:"Message"}),detailsInputPlaceholder:e.formatMessage({id:"A62fV9",defaultMessage:"Add a note about what you need approved."}),approverInputPlaceholder:e.formatMessage({id:"0rnwy6",defaultMessage:"Add an email or name"}),approverInputLabel:e.formatMessage({id:"v53Uf+",defaultMessage:"Approver"}),multiApproverInputLabel:e.formatMessage({id:"/qlqYb",defaultMessage:"Approver(s)"}),approverInputTooltipTitle:e.formatMessage({id:"ss5f1a",defaultMessage:"Approvers are sent an email with your message and a link to the file."}),userNotFoundError:e.formatMessage({id:"UzX8SG",defaultMessage:"Couldn’t send approval request because 1 or more approvers don’t have a Dropbox account."}),genericError:e.formatMessage({id:"vK1TiB",defaultMessage:"Something went wrong. Please try again later."}),editSubmitButtonLabel:e.formatMessage({id:"WGyt7S",defaultMessage:"Save changes"}),addAnApproverTooltip:e.formatMessage({id:"CoADMJ",defaultMessage:"Add an approver to your request"}),createNewRequestTooltip:e.formatMessage({id:"2hpgtD",defaultMessage:"Create a new request to get approval from another person"}),onlyOneApproverAllowedTooltip:e.formatMessage({id:"6CxwHA",defaultMessage:"You can only have one approver per request"}),onlyTwentyApproversAllowedTooltip:e.formatMessage({id:"s3OEMQ",defaultMessage:"You can only have twenty approvers per request"}),betaBadgeLabel:e.formatMessage({id:"PbRgl7",defaultMessage:"Beta"}),radioButtonAllApprovers:e.formatMessage({id:"dCiUbC",defaultMessage:"Everyone needs to approve"}),radioButtonOneApprover:e.formatMessage({id:"IVLVww",defaultMessage:"Only one approval needed"})}})(),pe=n.logger;o.default.useEffect(()=>{pe.logShownRequestForm(M,"request_approval_form")},[M]);const ie=e=>o.default.createElement(l.Button,{onClick:w,variant:"primary",disabled:e,size:"small",className:"approval-form__footer_primary-action",isLoading:U},C?ee:Q);return o.default.createElement("div",{className:r.default("approval-form",{"inline-with-comments":y}),ref:D},o.default.createElement("div",{className:"approval-form__title"},o.default.createElement(f.Avatar,{src:A.photoUrl,backgroundColor:f.avatarColorForUserIdentifier(A.initials),hasNoOutline:!0,size:"small",style:{marginRight:"6px"}},A.initials),o.default.createElement(m.Text,{isBold:!0,tagName:"h1"},V),o.default.createElement(g.AccessoryBadge,null,re)),o.default.createElement("div",{className:"approval-form__body"},C?o.default.createElement(o.default.Fragment,null,o.default.createElement(u.FormLabel,{htmlFor:"approval-form__approver"},o.default.createElement(m.Text,{isBold:!0,size:"small",tagName:"label"},"MULTI_APPROVER"===E?X:K)),o.default.createElement(v.Tooltip,{title:ae,boundary:D,placement:"top-start",auto:!0},o.default.createElement(m.Text,{id:"approval-form__approver",size:"small",className:"approval-form__approver-display-name"},null===(S=C.approvalMetadata.approvers)||void 0===S?void 0:S.map(e=>`@${e.display_name?e.display_name:e.email} `)))):o.default.createElement(d.ContactTypeahead,{placeholder:W,recipients:O,onRecipientsChange:L,onTypeAheadSelection:e=>pe.logAddApprover(M,"request_approval_form",e.dbx_account_id),suggestions:j,onQueryChange:N,renderTypeaheadSuggestion:z,recipientNumLimit:P,label:"MULTI_APPROVER"===E?X:K,labelSubtext:o.default.createElement(v.Tooltip,{title:J,placement:"top"},o.default.createElement("div",{className:"approval-modal__approver-input-tooltip"},o.default.createElement(_.UIIcon,{src:b.HelpLine,size:"small"}))),maxNumTooltip:"MULTI_APPROVER"===E?le:oe,onFocus:()=>pe.logFocusApproverTypeahead(M,"request_approval_form")}),o.default.createElement(s.Spacer,{multiplier:2}),o.default.createElement(u.FormLabel,{htmlFor:"approval-request-form__details-input"},o.default.createElement(m.Text,{isBold:!0,size:"small",tagName:"label"},G)),o.default.createElement(c.TextArea,{className:"approval-forms__text-area",id:"approval-request-form__details-input",placeholder:H,"aria-label":H,value:T,onChange:I}),"MULTI_APPROVER"===E&&(O.length>1||(null==C?void 0:C.approvalMetadata.approvers)&&C.approvalMetadata.approvers.length>1)?o.default.createElement(u.FormControlGroup,{className:"approval-form__radio-button-group"},o.default.createElement("div",{className:"approval-form__radio-button-row"},o.default.createElement(i.RadioButton,{checked:C?C.approvalMetadata.requires_all:x,disabled:!!C,"aria-label":se,onClick:()=>B(!0)}),o.default.createElement("div",{className:"approval-form__radio-button-text"},o.default.createElement(m.Text,{size:"small"},se))),o.default.createElement("div",{className:"approval-form__radio-button-row"},o.default.createElement(i.RadioButton,{checked:C?!C.approvalMetadata.requires_all:!x,disabled:!!C,"aria-label":ne,onClick:()=>B(!1)}),o.default.createElement("div",{className:"approval-form__radio-button-text"},o.default.createElement(m.Text,{size:"small"},ne)))):null,F&&(k?o.default.createElement(u.FormHelperText,{isInvalid:!0},Z):o.default.createElement(u.FormHelperText,{isInvalid:!0},$))),o.default.createElement("div",{className:"approval-form__footer"},o.default.createElement(l.Button,{onClick:()=>{pe.logRequestFormCancelClick(M,"request_approval_form"),n.trackUserSurveyEvent("approval_request_abandoned"),e()},variant:"transparent",size:"small",disabled:U},Y),q?ie(!1):o.default.createElement(v.Tooltip,{title:te,placement:"top-start",auto:!0,boundary:D},o.default.createElement("span",{style:{display:"inline-block"},tabIndex:0},ie(!0)))))},t.ApprovalRequestFormInternal.displayName="ApprovalRequestFormInternal",t.ApprovalRequestForm=e=>o.default.createElement(n.RawIntlProvider,{value:e.intl},o.default.createElement(t.ApprovalRequestFormInternal,Object.assign({},e))),t.ApprovalRequestForm.displayName="ApprovalRequestForm"})),define("typescript/component_libraries/flows/src/components/approval-forms/respond_form",["require","exports","tslib","react","dig-components/buttons","classnames","typescript/component_libraries/flows/src/components/spacer/index","react-intl","react-intl","dig-components/chips","dig-components/icons","dig-components/icons/src","dig-components/form_row","dig-components/text_fields","dig-components/typography","dig-components/avatar","dig-components/tooltips","dig-components/badges"],(function(e,t,a,o,l,r,s,n,p,i,d,u,c,m,f,v,g,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ApprovalRespondForm=t.ApprovalRespondFormInternal=void 0,o=a.__importStar(o),r=a.__importDefault(r),t.ApprovalRespondFormInternal=({onCancel:e,onRespondSuccess:t,onEditSuccess:a,user:n,inlineWithComments:b,ioClient:h,fileId:A,threadId:M,editArgs:y})=>{var E;const[C,R]=o.useState(null!==(E=null==y?void 0:y.content)&&void 0!==E?E:""),[S,q]=o.useState("approved"==(null==y?void 0:y.approvalMetadata.status)||"rejected"!=(null==y?void 0:y.approvalMetadata.status)&&void 0),[T,I]=o.useState(!1),[B,L]=o.useState(!1),w=o.default.useRef(null),{title:F,submitButtonLabel:k,cancelButtonLabel:x,detailsInputLabel:N,detailsInputPlaceholder:P,approveChipLabel:O,rejectChipLabel:z,genericError:U,approveOrRequestFirstTooltip:j,addDetailsTooltip:D,betaBadgeLabel:V}=(function(){const e=p.useIntl();return{title:e.formatMessage({id:"TKvySt",defaultMessage:"Respond to request"}),submitButtonLabel:e.formatMessage({id:"mVrd/b",defaultMessage:"Submit"}),cancelButtonLabel:e.formatMessage({id:"KQ8scR",defaultMessage:"Cancel"}),detailsInputLabel:e.formatMessage({id:"rFAfdB",defaultMessage:"Details"}),detailsInputPlaceholder:e.formatMessage({id:"hzYIsD",defaultMessage:"Tell requester more about your decision"}),approveChipLabel:e.formatMessage({id:"TjnDNv",defaultMessage:"Approve"}),rejectChipLabel:e.formatMessage({id:"YEnec6",defaultMessage:"Request change"}),genericError:e.formatMessage({id:"vK1TiB",defaultMessage:"Something went wrong. Please try again later."}),approveOrRequestFirstTooltip:e.formatMessage({id:"2p63Fj",defaultMessage:"Approve or request change first"}),addDetailsTooltip:e.formatMessage({id:"wWiE03",defaultMessage:"Add details about your change request"}),betaBadgeLabel:e.formatMessage({id:"HA3jPv",defaultMessage:"Beta"})}})(),Q=h.logger;o.default.useEffect(()=>{Q.logShownRespondForm(A,M)},[A,M]);const Y=()=>{I(!1),L(!0);const e={type:"approval",status:S?"approved":"rejected",requester_email:null==y?void 0:y.approvalMetadata.requester_email,approval_type:"response",actor:"approver",approvers:null==y?void 0:y.approvalMetadata.approvers,requires_all:null==y?void 0:y.approvalMetadata.requires_all};y?h.editApprovalResponse(A,y.commentId,S,C).then(()=>{Q.logApprovalResponseResubmitSuccess(A,M,e.status,C.length),a&&a(y.commentId,M,{text:C,metadata:[e]})}).catch(()=>{I(!0),L(!1)}):h.respondToApprovalRequest(A,M,S,C).then(()=>{t&&t({text:C,metadata:[e]},M),Q.logSubmitResponseSuccess(e.status,A,M,C.length)}).catch(()=>{I(!0),L(!1)})},G=S||void 0!==S&&!!C,H=e=>o.default.createElement(l.Button,{onClick:Y,variant:"primary",size:"small",disabled:e,className:"approval-form__footer_primary-action",isLoading:B},k),W=e=>{Q.logApproveChipClick(A,M,e),q(e)};return o.default.createElement("div",{className:r.default("approval-form",{"inline-with-comments":b}),ref:w},o.default.createElement("div",{className:"approval-form__title"},o.default.createElement(v.Avatar,{src:n.photoUrl,backgroundColor:v.avatarColorForUserIdentifier(n.initials),hasNoOutline:!0,size:"small",style:{marginRight:"6px"}},n.initials),o.default.createElement(f.Text,{isBold:!0,tagName:"h1"},F),o.default.createElement(_.AccessoryBadge,null,V)),o.default.createElement("div",{className:"approval-form__body"},o.default.createElement("div",{className:"approval-respond-form__action-chips-group"},o.default.createElement(i.FilterChip,{className:S?"approve-action-selected":void 0,isSelected:S,onClick:()=>W(!0),withIconLeft:o.default.createElement("div",{className:"approval-respond-form__icon-container"},o.default.createElement(d.UIIcon,{size:"small",src:u.CheckmarkCircleLine})),size:"small"},O),o.default.createElement(s.Spacer,{multiplier:2}),o.default.createElement(i.FilterChip,{className:!1===S?"reject-action-selected":void 0,isSelected:!1===S,onClick:()=>W(!1),withIconLeft:o.default.createElement("div",{className:"approval-respond-form__icon-container"},o.default.createElement(d.UIIcon,{size:"small",src:u.WarningLine})),size:"small"},z)),o.default.createElement(s.Spacer,{multiplier:2}),o.default.createElement(c.FormLabel,{htmlFor:"approval-respond-form__details-input"},o.default.createElement(f.Text,{isBold:!0,size:"small",tagName:"label"},N)),o.default.createElement(m.TextArea,{className:"approval-forms__text-area",id:"approval-respond-form__details-input",placeholder:P,"aria-label":P,value:C,onChange:e=>{R(e.currentTarget.value)}}),T&&o.default.createElement(c.FormHelperText,{isInvalid:!0},U)),o.default.createElement("div",{className:"approval-form__footer"},o.default.createElement(l.Button,{onClick:()=>{e&&(Q.logRespondFormCancelClick(A),e())},variant:"transparent",size:"small",disabled:B},x),G?H(!1):o.default.createElement(g.Tooltip,{title:null==S?j:S||C?null:D,placement:"top-start",auto:!0,boundary:w},o.default.createElement("span",{style:{display:"inline-block"},tabIndex:0},H(!0)))))},t.ApprovalRespondFormInternal.displayName="ApprovalRespondFormInternal",t.ApprovalRespondForm=e=>o.default.createElement(n.RawIntlProvider,{value:e.intl},o.default.createElement(t.ApprovalRespondFormInternal,Object.assign({},e))),t.ApprovalRespondForm.displayName="ApprovalRespondForm"})),define("typescript/component_libraries/flows/src/components/approval-forms/test_utils",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.approvalLogger=t.getMockApprovalIOClient=void 0,t.getMockApprovalIOClient=e=>({useSuggestions:t=>({suggestions:null!=e?e:[],onQueryChange:()=>{}}),getInitials:e=>"AB",createApproval:(e,t,a,o)=>new Promise(e=>setTimeout(()=>{e({})},1e3)),respondToApprovalRequest:(e,t,a,o)=>Promise.resolve({}),editApprovalResponse:(e,t,a,o)=>Promise.resolve({}),showApprovalDeleteCommentModal:(e,t,a)=>{},editApprovalRequest:(e,t,a)=>Promise.resolve({}),resubmitApprovalRequest:(e,t,a)=>Promise.resolve({}),showApprovalDeleteThreadModal:(e,t,a)=>{},triggerSprigSurvey:()=>{},trackUserSurveyEvent:e=>{},logApprovalsFeedback:(e,t)=>{},logger:t.approvalLogger}),t.approvalLogger={logRequestApprovalClick:(e,t)=>{},logShownRequestForm:(e,t)=>{},logFocusApproverTypeahead:(e,t)=>{},logRequestFormCancelClick:(e,t)=>{},logAddApprover:(e,t,a)=>{},logSubmitApprovalSuccess:(e,t,a,o,l,r,s)=>{},logApproverOptionsClick:(e,t,a)=>{},logRespondClick:(e,t)=>{},logShownRespondForm:(e,t)=>{},logApproveChipClick:(e,t,a)=>{},logRespondFormCancelClick:e=>{},logSubmitResponseSuccess:(e,t,a,o)=>{},logResubmitRequestClick:(e,t)=>{},logResubmitRequestSuccess:(e,t,a)=>{},logShownRemoveApprovalModal:(e,t,a)=>{},logRemoveApprovalConfirmClick:(e,t,a)=>{},logRemoveApprovalCancelClick:(e,t,a)=>{},logEditApprovalResponseClick:(e,t)=>{},logEditApprovalRequestClick:(e,t)=>{},logApprovalResponseResubmitSuccess:(e,t,a,o)=>{},logEditApprovalRequestSuccess:(e,t,a)=>{}}}));
//# sourceMappingURL=pkg-flows-common.min.js-vfliE3dpH.map