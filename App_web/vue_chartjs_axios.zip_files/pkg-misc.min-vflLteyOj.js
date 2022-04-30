define("metaserver/static/js/modules/clean/beacon",["require","exports","tslib","lodash","jquery","metaserver/static/js/modules/clean/beacon_nodeps","metaserver/static/js/modules/clean/bolt/bolt_nodeps","metaserver/static/js/modules/core/exception"],(function(t,e,s,r,o,i,n,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UserContextPresence=e.UserAppPresence=e.Source=e.PresenceType=e.PresenceParams=e.Platforms=e.AgentStatus=e.Agent=e.Receiver=e.Transmitter=void 0,r=s.__importStar(r),o=s.__importDefault(o),i=s.__importStar(i),n=s.__importStar(n),a=s.__importStar(a);class h extends i.Transmitter{constructor(t,e,s){super(t,e,s,"beacon.dropbox.com",o.default.ajax,r,a),this._token=t,this._authn_cb=e,this._authz_cb=s}}e.Transmitter=h;class _ extends i.Receiver{constructor(t,e,s){super(t,e,s,n,"thunder.dropbox.com",o.default.ajax,r,a)}}e.Receiver=_,e.Agent=i.Agent,e.AgentStatus=i.AgentStatus,e.Platforms=i.Platforms,e.PresenceParams=i.PresenceParams,e.PresenceType=i.PresenceType,e.Source=i.Source,e.UserAppPresence=i.UserAppPresence,e.UserContextPresence=i.UserContextPresence})),define("metaserver/static/js/modules/clean/beacon_nodeps",["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UserContextPresence=e.UserAppPresence=e.Transmitter=e.Source=e.Receiver=e.PresenceType=e.PresenceParams=e.Platforms=e.AgentStatus=e.Agent=void 0;const s={WEB:0,IOS:1,ANDROID:2,DESKTOP:3};e.Platforms=s;class r{constructor(t,e,r=null){this.platform=t,this.surface=e,this.identifier=r;let o=!1;for(const t in s){const e=s[t];if(this.platform===e){o=!0;break}}if(!o)throw new Error("platform must be from Beacon.Platforms");if(this.surface.length>32||0===this.surface.length)throw new Error("surface must be populated and <= 32 chars.");if((null!=this.identifier?this.identifier.length:void 0)>128)throw new Error("identifier must be <= 128 chars.");null===this.identifier&&(this.identifier="")}static from_json(t){return new r(t.platform,t.surface,t.identifier)}}e.Source=r;class o{constructor(t,e,s,r){if(this.user_id=t,this.app=e,this.context=s,this.source=r,this.user_id.length>256)throw new Error("user_id must be <= 256 chars.");if(this.app.length>32||0===this.app.length)throw new Error("app must be populated and <= 32 chars.");if(this.context.length>64||0===this.context.length)throw new Error("context must be populated and <= 64 chars.")}static from_json(t){const e=r.from_json(t.source);return new o(t.user_id,t.app,t.context,e)}}e.Agent=o;class i{constructor(t,e,s=null){if(this.agent=t,this.status=e,this.auth_key=s,this.status.length>32)throw new Error("status must be <= 32 chars")}static from_json(t){return new i(o.from_json(t.agent),t.status)}}e.AgentStatus=i;const n={UserContext:"UserContext",UserApp:"UserApp",Context:"Context"};e.PresenceType=n;class a{constructor(t,e,s,r,o){if(this.type=t,this.user_id=e,this.app=s,this.context=r,this.token=o,this.type!==n.UserContext&&this.type!==n.UserApp&&this.type!==n.Context)throw new Error(`Unsupported type: ${this.type}.`);if((null!=this.user_id?this.user_id.length:void 0)>256)throw new Error("user_id must be <= 256 chars.");if(this.app.length>32)throw new Error("app must be <= 32 chars.");if((null!=this.context?this.context.length:void 0)>64)throw new Error("context must be <= 64 chars.")}}e.PresenceParams=a;class h{constructor(t,e){this.presence_params=t,this.agents=e}}e.UserContextPresence=h;class _{constructor(t,e){this.presence_params=t,this.status=e}static initClass(){this.Status={Offline:1,Online:2}}}e.UserAppPresence=_,_.initClass();class u{constructor(t,e,s){this.presence_params=t,this.snapshot=e,this.delta=s}}e.Transmitter=class{constructor(t,e,s,r,o,i,n=null){this._heartbeat=this._heartbeat.bind(this),this._handle_heartbeat_success=this._handle_heartbeat_success.bind(this),this._handle_heartbeat_error=this._handle_heartbeat_error.bind(this),this._token=t,this._authn_cb=e,this._authz_cb=s,this._beacon_server=r,this._ajax=o,this._lodash=i,this._exclog=n,this._started=!1,this._heartbeat_xhr=null,this._timeout_id=null,this._presence_data=[],this._offline_agents=[],this._has_changes=!1}start(){if(!this._started)return this._backoff_window=5e3,this._started=!0,this._has_changes=!1,this._heartbeat()}stop(){return this._started=!1,this._heartbeat_xhr=null,window.clearTimeout(this._timeout_id),this._timeout_id=null}add_or_update_agents(t){for(const e of Array.from(t))this._has_changes=this._add_or_update_agent(e)||this._has_changes;if(!this._heartbeat_xhr&&this._started)return window.clearTimeout(this._timeout_id),this._timeout_id=window.setTimeout(this._heartbeat,0)}update_token(t){this._token=t}_add_or_update_agent(t){for(let e=0;e<this._presence_data.length;e++){const s=this._presence_data[e];if(this._lodash.isEqual(s.agent,t.agent))return(s.status!==t.status||s.auth_key!==t.auth_key)&&(this._presence_data[e]=t,!0)}return this._presence_data.push(t),!0}_heartbeat(){if(this._started&&0!==this._presence_data.length)return this._offline_agents=this._presence_data.filter(t=>""!==t.status).map(t=>t.agent),this._has_changes=!1,this._heartbeat_xhr=this._ajax({url:`https://${this._beacon_server}/1/update`,type:"POST",data:JSON.stringify({token:this._token,updates:this._presence_data}),contentType:"application/json; charset=utf-8",dataType:"json",timeout:5e3,success:this._handle_heartbeat_success,error:this._handle_heartbeat_error,xhrFields:{withCredentials:!0}})}_handle_heartbeat_success(t,e,s){let r,i;if(this._heartbeat_xhr=null,!this._started)return;const n=[];for(const e of Array.from(t.agent_errors||[])){const t=e.error;r=o.from_json(e.agent),"authorization_error"===t?n.push(r):"invalid_agent"===t&&null!=this._exclog&&this._exclog.reportStack(`Input error: ${e}`),this._presence_data=this._presence_data.filter(t=>!this._lodash.isEqual(t.agent,r))}if(n.length){const t=this._authz_cb;window.setTimeout(()=>t(n),0)}for(const t of Array.from(this._offline_agents))for(let e=0;e<this._presence_data.length;e++){const s=this._presence_data[e];if(this._lodash.isEqual(s.agent,t)&&""===s.status){this._presence_data.splice(e,1);break}}return i=this._has_changes?0:6e4,this._backoff_window=5e3,this._timeout_id=window.setTimeout(this._heartbeat,i)}_handle_heartbeat_error(t,e,s){if(this._heartbeat_xhr=null,!this._started)return;if(t.status>=400&&t.status<500){if(401===t.status)return window.setTimeout(this._authn_cb,0),void this.stop();400===t.status&&null!=this._exclog&&this._exclog.reportStack(`Bad request: ${t.responseText}`)}const r=Math.random()*this._backoff_window;return this._backoff_window=Math.min(2*this._backoff_window,12e4),this._timeout_id=window.setTimeout(this._heartbeat,r)}};e.Receiver=class{constructor(t,e,s,r,o,i,n,a=null){this._compact_context_updates=this._compact_context_updates.bind(this),this._on_update=this._on_update.bind(this),this._on_refresh=this._on_refresh.bind(this),this._presence_params=t,this._update_callback=e,this._refresh_callback=s,this._bolt=r,this._thunder_hostname=o,this._ajax=i,this._lodash=n,this._exclog=a;const h=Array.from(this._presence_params).map(t=>this._presence_params_to_bolt_channel(t));this._thunder_client=new this._bolt.ThunderClient(h,this._on_update,this._on_refresh,this._thunder_hostname,this._lodash,this._exclog)}start(){return this._thunder_client.start()}stop(){return this._thunder_client.unsubscribe()}add_presence_params(t){const e=this._presence_params.length;if(this._presence_params=this._lodash.union(t,this._presence_params),this._presence_params.length===e)return!1;this._thunder_client.unsubscribe();const s=Array.from(this._presence_params).map(t=>this._presence_params_to_bolt_channel(t));return this._thunder_client=new this._bolt.ThunderClient(s,this._on_update,this._on_refresh,this._thunder_hostname,this._lodash,this._exclog),this._thunder_client.start(),!0}_presence_params_to_bolt_channel(t){switch(t.type){case n.UserContext:return new this._bolt.SignedChannelState(`beacon_uc-${t.app}`,`${t.user_id}|${t.context}`,"0",t.token);case n.UserApp:return new this._bolt.SignedChannelState(`beacon_ua-${t.app}`,t.user_id,"0",t.token);case n.Context:return new this._bolt.SignedChannelState(`beacon_c-${t.app}`,t.context,"0",t.token);default:throw new Error(`Unknown type: ${t.type}`)}}_bolt_channel_to_presence_params(t){let e;const s=t.app_id.split("-"),r=t.unique_id.split("|");if(2!==s.length)throw new Error(`Unexpected format of Bolt app_id: ${t.app_id}.`);const o=s[1];let i="",h="";switch(s[0]){case"beacon_uc":if(2!==r.length)throw new Error(`Unexpected format of beacon_uc: ${t.unique_id}.`);e=n.UserContext,i=r[0],h=r[1];break;case"beacon_ua":if(1!==r.length)throw new Error(`Unexpected format of beacon_ua: ${t.unique_id}.`);e=n.UserApp,i=r[0];break;case"beacon_c":if(1!==r.length)throw new Error(`Unexpected format of beacon_c: ${t.unique_id}.`);e=n.Context,h=r[0];break;default:throw new Error(`Unknown Bolt app_id: ${t.app_id}.`)}return new a(e,i,o,h,null)}_compact_context_updates(t,e){let s,r,o=!1,i=[];for(const t of Array.from(e))if(null!=t.snapshot)o=!0,i=t.snapshot;else if(null!=t.delta)for(const e of Array.from(t.delta)){let t=!1;for(let s=0;s<i.length;s++){const r=i[s];if(this._lodash.isEqual(r.agent,e.agent)){t=!0,i[s]=e;break}}t||i.push(e)}return o?(r=i,s=null):(r=null,s=i),new u(t,r,s)}_on_update(t){let e,s;const a=[];for(var u of Array.from(t)){const{channel_state:t}=u,d=new this._bolt.ChannelId(t.app_id,t.unique_id);var l=this._bolt_channel_to_presence_params(d);a.push((()=>{let t;switch(l.type){case n.UserContext:return({payload:s}=u.payloads.slice(-1)[0]),t=null!=s.agents?(()=>{const t=[];for(e of Array.from(s.agents))t.push(i.from_json(e));return t})():[],new h(l,t);case n.UserApp:return({payload:s}=u.payloads.slice(-1)[0]),new _(l,s.status);case n.Context:var a=function(t){const s=r.from_json(t.source);return e=new o(t.user_id,l.app,l.context,s),new i(e,t.status)},d=function(t){let e;return{snapshot:null!=(null!=t.snapshot?t.snapshot.agents:void 0)?(()=>{const s=[];for(e of Array.from(t.snapshot.agents))s.push(a(e));return s})():void 0,delta:null!=(null!=t.delta?t.delta.agents:void 0)?(()=>{const s=[];for(e of Array.from(t.delta.agents))s.push(a(e));return s})():void 0}},c=(()=>{const t=[];for(s of Array.from(u.payloads))t.push(d(s.payload));return t})();return this._compact_context_updates(l,c)}})())}return this._update_callback(a)}_on_refresh(t){return this._refresh_callback(Array.from(t).map(t=>this._bolt_channel_to_presence_params(t)))}}})),define("metaserver/static/js/modules/clean/react/file_uploader/drag_utils",["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.buildUrlLinkfileContents=e.getDraggedLink=void 0,e.getDraggedLink=function(t){if(!t||!t.types)return null;if(((t,e)=>{for(const s of t)if(e===s)return!0;return!1})(t.types,"Files"))return null;let e,s=null;try{e=t.getData("text/x-moz-url")}catch(t){}if(null!=e){const t=e.split("\n");t.length>=1&&(s=t[0])}if(!s)try{s=t.getData("text/uri-list")}catch(t){}if(!s)try{s=t.getData("Url")}catch(t){}return s||(s=null),s},e.buildUrlLinkfileContents=function(t){return`[InternetShortcut]\r\nURL=${t}\r\n`}})),define("metaserver/static/js/modules/clean/deprecated_pyxl/controllers/bubble_dropdown",["require","exports","tslib","lodash","jquery","ts-key-enum","metaserver/static/js/modules/core/dom"],(function(t,e,s,r,o,i,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r=s.__importStar(r),o=s.__importDefault(o),n=s.__importStar(n);class a{constructor(t,e,s,i,n,h,_){null==h&&(h=0),this.closeDropdown=this.closeDropdown.bind(this),this.openDropdown=this.openDropdown.bind(this),this.repositionDropdown=this.repositionDropdown.bind(this),this._activateNonButton=this._activateNonButton.bind(this),this._onTargetKeydown=this._onTargetKeydown.bind(this),this._onDropdownKeydown=this._onDropdownKeydown.bind(this),this._on_mouseover=this._on_mouseover.bind(this),this._on_mouseout=this._on_mouseout.bind(this),this._on_global_hover=this._on_global_hover.bind(this),this._toggle_bubble=this._toggle_bubble.bind(this),this._show_bubble=this._show_bubble.bind(this),this._hide_bubble=this._hide_bubble.bind(this),this.$root=t,this.arrow_direction=e,this.show_on_hover=s,this.show_close_button=i,this.shown_by_default=n,this.top_adjustment=h,this.tabindex=_,this.$target=this.$root.find(".bubble-dropdown-target"),this.$dropdown=this.$root.find(".bubble-dropdown"),this.$arrow_anchor=this.$root.find(".bubble-dropdown-arrow-anchor"),this.$arrow=this.$dropdown.find(".bubble-arrow");if(this.target_position={top:"bottom",left:"right",bottom:"top",right:"left"}[this.arrow_direction],this.$target.on("keydown",this._onTargetKeydown),this.$dropdown.on("keydown",this._onDropdownKeydown),this.$target.attr("aria-expanded",!1),this.show_close_button)this.$root.find(".bubble-dropdown-x").on("click",this.closeDropdown);else if(this.show_on_hover){if(this.$target.on("mouseover",this._on_mouseover),this.$dropdown.on("mouseover",this._on_mouseover),this.$target.on("mouseout",this._on_mouseout),this.$dropdown.on("mouseout",this._on_mouseout),this.$target.attr("tabindex",0).on("focus",this._show_bubble),0===this.$dropdown.find(this._focus_selectors).length){const t=r.uniqueId("bubble-dropdown-tooltip-");this.$dropdown.attr({id:t,role:"tooltip"}),this.$target.attr("aria-describedby",t)}o.default(document).on(a.HOVER_SHOWN,this._on_global_hover)}else{this.$target.click(this._toggle_bubble);let t=0;this.tabindex&&(t=this.tabindex),"BUTTON"!==this.$target.get(0).tagName&&this.$target.attr({role:"button",tabindex:t}).on("keyup",this._activateNonButton),o.default("body").on("click",t=>{if(o.default(t.target).is("select"))return!0;return o.default(t.target).closest(this.$target).length||o.default(t.target).closest(this.$dropdown).length||this._hide_bubble(),!0})}this.shown_by_default&&this.openDropdown()}static initClass(){this.HOVER_SHOWN="bubble:hover:shown",this.prototype._dropdown_shown=!1,this.prototype._focus_selectors="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"}closeDropdown(){if(this._dropdown_shown)return this._hide_bubble()}openDropdown(){if(!this._dropdown_shown)return this._show_bubble()}repositionDropdown(){if(this._dropdown_shown)return this._show_bubble()}_activateNonButton(t){if([i.Key.Enter," "].includes(t.key))return this._toggle_bubble(),!1}_onTargetKeydown(t){return(t.key===i.Key.Escape&&!this.show_on_hover||t.key===i.Key.Tab&&t.shiftKey||t.key===i.Key.Tab&&1===this.$root.find(this._focus_selectors).length)&&this._hide_bubble(),!0}_onDropdownKeydown(t){if(this.show_on_hover||t.key!==i.Key.Escape){if(t.key===i.Key.Tab&&!t.shiftKey){const e=this.$root.find(this._focus_selectors);t.target===e[e.length-1]&&this._hide_bubble(!this.show_on_hover)}}else this._hide_bubble(!0);return!0}_on_mouseover(){return o.default(document).trigger(a.HOVER_SHOWN,this.$target),this._show_bubble(),clearTimeout(this.$dropdown.data("timeout_id"))}_on_mouseout(){const t=setTimeout(this._hide_bubble,200);return this.$dropdown.data("timeout_id",t)}_on_global_hover(t,e){if(this._dropdown_shown&&e!==this.$target)return this._hide_bubble(),clearTimeout(this.$dropdown.data("timeout_id"))}_toggle_bubble(){return this._dropdown_shown?this._hide_bubble():this._show_bubble(),!0}_show_bubble(){let t,e;if(this.$target.hasClass("disabled"))return;this.$dropdown.show();const s=this.$arrow_anchor.length?this.$arrow_anchor:this.$target,{top:r}=this.$arrow.position(),{left:o}=this.$arrow.position();switch(this.arrow_direction){case"left":t=s.outerWidth()+this.$arrow.outerWidth(),e=s.outerHeight()/2-r;break;case"right":t=-1*(this.$dropdown.outerWidth()+this.$arrow.outerWidth()),e=s.outerHeight()/2-r;break;case"top":t=s.outerWidth()/2-o,e=s.outerHeight()+this.$arrow.outerHeight()-this.top_adjustment;break;case"bottom":t=s.outerWidth()/2-o,e=-1*(this.$dropdown.outerHeight()+this.$arrow.outerHeight()+this.top_adjustment)}return n.clone_position(this.$dropdown[0],s[0],{setHeight:!1,setWidth:!1,offsetLeft:t,offsetTop:e}),this._dropdown_shown=!0,this.$target.addClass("bubble-dropdown-target--active").attr("aria-expanded",!0)}_hide_bubble(t){if(this.$dropdown.hide(),this._dropdown_shown=!1,this.$target.removeClass("bubble-dropdown-target--active").attr("aria-expanded",!1),t)return this.$target.focus()}}a.initClass(),e.default=a})),define("metaserver/static/js/modules/clean/deprecated_pyxl/controllers/input",["require","exports","tslib","jquery","metaserver/static/js/modules/clean/accessibility/tabbable","metaserver/static/js/modules/clean/web_timing_logger","metaserver/static/js/modules/core/assert","metaserver/static/js/modules/core/i18n"],(function(t,e,s,r,o,i,n,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PasswordWatchInput=e.PasswordInput=e.TextInput=void 0,r=s.__importDefault(r),o=s.__importDefault(o),i=s.__importStar(i);const h=function(t){const e=r.default.data(t,"input-element");return n.assert(e.length,"TextInput element has no related input element please ensure it was setup correctly"),e};r.default.valHooks.textinput={get:t=>h(t).val(),set:(t,e)=>h(t).val(e).trigger("input")};class _ extends o.default{constructor(t,e=!0){super(),this._on_change=this._on_change.bind(this),this.$text_input=t,this.persistent_label=this.$text_input.is(".label-above"),this.$input=this.$text_input.find(".text-input-input"),this.$text_input.data("input-element",this.$input),this.$label=this.$text_input.find("label"),this.$text_input.find(".error-message").length&&this.$input.addClass("input-error"),this.$text_input.each((t,e)=>e.type="textinput"),this.$text_input.focus(()=>setTimeout(()=>this.$input.focus(),0)),r.default((function(){if("BODY"===(null!=document.activeElement?document.activeElement.tagName:void 0))return r.default(".autofocus:visible").first().focus()})),this._listen(),e&&this._on_change()}_listen(){return this.$input.on("keydown keyup paste input blur",()=>this._on_change()),this.$input.on("blur",t=>this.$text_input.trigger(t)),this.$input.on("focus",()=>this.$input.removeClass("input-error"))}_on_change(){this.persistent_label||this.$label.toggle(!this.$input.val());const t=this.$text_input.find(".error-message");t.length&&window.setTimeout((function(){return t[0].remove()}),3e3)}}e.TextInput=_;class u extends _{constructor(t,e=!0){super(t,e),this.$caps=this.$text_input.find(".password-caps-indicator"),this.$caps_lock=!1,this.$text_input.on("keypress",t=>{let e;const s=/Mac/.test(navigator.platform),r=null!=t.charCode?t.charCode:t.keyCode,o=String.fromCharCode(r);return o.toLowerCase()===o.toUpperCase()?e=void 0:o===o.toLowerCase()?e=t.shiftKey:o!==o.toUpperCase()||t.shiftKey&&s||(e=!t.shiftKey),null!=e&&(this.$caps_lock=e),this.$caps_lock?this.$caps.addClass("password-caps-indicator-activated"):this.$caps.removeClass("password-caps-indicator-activated")})}}e.PasswordInput=u;e.PasswordWatchInput=class extends u{constructor(e,r){super(e,!1),this._on_change=this._on_change.bind(this),this.$bubble_title=this.$text_input.find(".password-bubble-title"),this.$bubble_desc=this.$text_input.find(".password-bubble-desc"),this.$meter=this.$text_input.find(".password-input-meter"),this.$default_bubble_text=this.$bubble_desc.text(),this.$last_pwd="",this._on_change(),r?i.waitForTTI().then(()=>{new Promise((e,s)=>{t(["zxcvbn"],e,s)}).then(s.__importStar).then(({default:t})=>{this.zxcvbn=t})}):new Promise((e,s)=>{t(["zxcvbn"],e,s)}).then(s.__importStar).then(({default:t})=>{this.zxcvbn=t})}_on_change(){let t,e;const s=this.$input.val();if(this.$last_pwd!==s){if(this.$last_pwd=s,"correcthorsebatterystaple"===s||"Tr0ub4dour&3"===s||"Tr0ub4dor&3"===s){let r;t=0,e=a.intl.formatMessage({id:"6aphVB",defaultMessage:"lol"}),this.$bubble_title.text(e),"correcthorsebatterystaple"===s?(r=a.intl.formatMessage({id:"WRnWCY",defaultMessage:"Whoa there, don't take advice from a webcomic too literally ;)"}),this.$bubble_desc.text(r)):(r=a.intl.formatMessage({id:"E44pjD",defaultMessage:"Guess again"}),this.$bubble_desc.text(r))}else{const r=["",a.intl.formatMessage({id:"i/ragh",defaultMessage:"Weak"}),a.intl.formatMessage({id:"GwYES8",defaultMessage:"So-so"}),a.intl.formatMessage({id:"Yd7c8F",defaultMessage:"Good"}),a.intl.formatMessage({id:"kbsmZh",defaultMessage:"Great!"})];t=this._score(s),e=r[t],this.$bubble_title.text(e),this.$bubble_desc.text(this.$default_bubble_text)}return this.$meter.find(".password-input-dot").removeClass("password-input-dot-selected"),this.$meter.find(".password-input-dot").slice(4-t,4).addClass("password-input-dot-selected"),super._on_change()}}_get_user_inputs(){const t=["dropbox"];for(const e of Array.from(this.$text_input.closest("form").find("input[type=text], input[type=email]")))t.push(r.default(e).val());return t}_score(t){return this.zxcvbn&&t?Math.max(1,this.zxcvbn(t,this._get_user_inputs()).score):0}}}));
//# sourceMappingURL=pkg-misc.min.js-vfljiDsw8.map