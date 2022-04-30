define("metaserver/static/js/modules/clean/stormcrow/experiment",["require","exports"],(function(r,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ExperimentGroup=e.Gate=e.Experiment=e.StormcrowExperimentGroup=e.StormcrowGate=e.StormcrowExperiment=void 0;class t{constructor(r){this.variant=void 0!==r?r:""}get isActive(){return""!==this.variant&&!this.variantIn("OFF","CONTROL")}variantIs(r){return this.variant===r}variantIn(...r){return!!(this.variant&&r&&r.length)&&-1!==r.indexOf(this.variant)}}e.StormcrowExperiment=t;class o{constructor(r){this.isOn=void 0!==r&&("string"==typeof r?"ON"===r:!!r)}}e.StormcrowGate=o;class s{constructor(...r){this.experiments=r.map(r=>new t(r))}hasVariant(r){return this.experiments.some(e=>e.variantIs(r))}hasVariantIn(...r){return this.experiments.some(e=>e.variantIn(...r))}}e.StormcrowExperimentGroup=s,e.Experiment=function(r){return new t(r)},e.Gate=function(r){return new o(r)},e.ExperimentGroup=function(...r){return new s(...r)}})),define("metaserver/static/js/modules/clean/stormcrow/stormcrow_exposure_logger",["require","exports","tslib","metaserver/static/js/modules/clean/deprecated_ajax/ajax"],(function(r,e,t,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logVariantExposure=e.StormcrowExposureLogger=void 0,o=t.__importStar(o);e.StormcrowExposureLogger=class{constructor(){this.exposures={}}logExposure(r,e){o.SilentBackgroundRequest({url:"/log/stormcrow_exposures",data:{stormcrow_name:r,variant:e}})}logExposuresOnce(r){Object.keys(r).forEach(e=>{if(!(e in this.exposures)){const t=r[e];e&&t&&(this.exposures[e]=t,this.logExposure(e,t))}})}},e.logVariantExposure=(r,e)=>!(!e||"OFF"===e)&&o.SilentBackgroundRequest({url:"/log/stormcrow_exposures",data:{stormcrow_name:r,variant:e}})}));
//# sourceMappingURL=pkg-stormcrow.min.js-vfle_Dlei.map