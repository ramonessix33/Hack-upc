define("metaserver/static/js/modules/clean/react/icon/icon_helper",["require","exports","metaserver/static/js/modules/clean/filetypes","metaserver/static/js/modules/clean/filepath/filepath","metaserver/static/js/modules/clean/react/icon/extension_map"],(function(e,i,_,t,p){"use strict";var a;function r(e,_=i.ICON_SIZES.SMALL){switch(_){case i.ICON_SIZES.LARGE:return`${e}_32`;case i.ICON_SIZES.XLARGE:return`${e}_64`;default:return e}}function w(e,{size:i}={}){return r(p.getIconNameForExtension(e),i)}Object.defineProperty(i,"__esModule",{value:!0}),i.folder_icon=i.spectrumFolderIcon=i.file_icon=i.extension_icon=i.toSpectrumIconSize=i.ICON_SIZES=i.SpectrumIconSize=void 0,(function(e){e.Small="small",e.Large="large"})(a=i.SpectrumIconSize||(i.SpectrumIconSize={})),i.ICON_SIZES={SMALL:"SMALL",LARGE:"LARGE",XLARGE:"XLARGE"},i.toSpectrumIconSize=function(e){return e===i.ICON_SIZES.XLARGE?a.Large:a.Small},i.extension_icon=w,i.file_icon=function(e,{size:i}={}){return w(t.file_extension(e).toLowerCase(),{size:i})},i.spectrumFolderIcon=function({fileType:e=_.FileTypes.FOLDER,isInTeamFolderTree:i=!1,isCameraUploads:t=!1,isViewOnly:p=!1,isConfidential:r=!1,size:w=a.Small,iconPostfix:g=""}={}){let o="";if(r)return`folder_confidential${g}-${w}`;if(i)o="_team";else switch(e){case _.FileTypes.TEAM_MEMBER_FOLDER:return`folder_team_member${g}-${w}`;case _.FileTypes.SANDBOX:return`folder_app${g}-${w}`;case _.FileTypes.PACKAGE:case _.FileTypes.FOLDER:case _.FileTypes.FILE:if(t)return`folder_camera_upload${g}-${w}`;break;case _.FileTypes.SHARED_FOLDER:o="_shared";break;case _.FileTypes.TEAM_SHARED_FOLDER:o="_team"}let c="";return p&&""!==o&&(c="_read_only"),`folder${o}${c}${g}-${w}`},i.folder_icon=function({isShared:e=!1,isDeleted:_=!1,isTeamFolder:t=!1,isInTeamFolderTree:p=!1,isViewOnly:a=!1,size:w=i.ICON_SIZES.LARGE}={}){let g="";t?g="_team":(e||p)&&(g="_user");let o="";a&&""!==g&&(o="_locked");let c="";return _&&(c="_gray"),r(`folder${g}${o}${c}`,w)}})),define("metaserver/static/js/modules/clean/react/icon/extension_map",["require","exports"],(function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.getIconNameForExtension=void 0;const _={_other:"page_white",log:"page_white",msg:"page_white",sln:"page_white",vcproj:"page_white",txt:"page_white_text",wps:"page_white_text",doc:"page_white_word",docx:"page_white_word",docm:"page_white_word",rtf:"page_white_word",pages:"page_white_word",wpd:"page_white_word",odt:"page_white_word",pdf:"page_white_acrobat",eps:"page_white_acrobat",xls:"page_white_excel",xlsm:"page_white_excel",xlsx:"page_white_excel",xlsb:"page_white_excel",ods:"page_white_excel",csv:"page_white_excel",ppt:"page_white_powerpoint",pptx:"page_white_powerpoint",pptm:"page_white_powerpoint",pps:"page_white_powerpoint",ppsx:"page_white_powerpoint",ppsm:"page_white_powerpoint",odp:"page_white_powerpoint",key:"page_white_keynote",css:"page_white_code",html:"page_white_code",htm:"page_white_code",xml:"page_white_code",php:"page_white_code",c:"page_white_code",h:"page_white_code",rb:"page_white_code",cpp:"page_white_code",java:"page_white_code",js:"page_white_code",json:"page_white_code",cs:"page_white_code",py:"page_white_code",pl:"page_white_code",exe:"page_white_gear",dll:"page_white_gear",app:"page_white_gear",mp3:"page_white_sound",m3u:"page_white_sound",wav:"page_white_sound",m4a:"page_white_sound",wma:"page_white_sound",aif:"page_white_sound",iff:"page_white_sound",mid:"page_white_sound",mpa:"page_white_sound",ra:"page_white_sound",aiff:"page_white_sound",amr:"page_white_sound",ogg:"page_white_sound","3ga":"page_white_sound",aac:"page_white_sound",oga:"page_white_sound",gif:"page_white_picture",png:"page_white_picture",jpg:"page_white_picture",jpeg:"page_white_picture",tiff:"page_white_picture",tif:"page_white_picture",bmp:"page_white_picture",odg:"page_white_picture","3fr":"page_white_picture",ari:"page_white_picture",arw:"page_white_picture",srf:"page_white_picture",sr2:"page_white_picture",bay:"page_white_picture",crw:"page_white_picture",cr2:"page_white_picture",cap:"page_white_picture",eip:"page_white_picture",dcs:"page_white_picture",dcr:"page_white_picture",drf:"page_white_picture",k25:"page_white_picture",kdc:"page_white_picture",dng:"page_white_picture",erf:"page_white_picture",fff:"page_white_picture",iiq:"page_white_picture",mef:"page_white_picture",mos:"page_white_picture",mrw:"page_white_picture",nef:"page_white_picture",nrw:"page_white_picture",orf:"page_white_picture",pef:"page_white_picture",ptx:"page_white_picture",pxn:"page_white_picture",r3d:"page_white_picture",raf:"page_white_picture",rw2:"page_white_picture",raw:"page_white_picture",rwl:"page_white_picture",rwz:"page_white_picture",obm:"page_white_picture",srw:"page_white_picture",x3f:"page_white_picture",svg:"page_white_picture",asf:"page_white_film",avi:"page_white_film",flv:"page_white_film",mov:"page_white_film",mp4:"page_white_film",mkv:"page_white_film",wmv:"page_white_film",mpg:"page_white_film","3gp":"page_white_film","3gpp":"page_white_film",m4v:"page_white_film",vob:"page_white_film",ogv:"page_white_film",gz:"page_white_compressed",tar:"page_white_compressed",rar:"page_white_compressed",zip:"page_white_compressed",tgz:"page_white_compressed",bz2:"page_white_compressed",iso:"page_white_dvd",dmg:"page_white_dvd",ai:"page_white_vector",psd:"page_white_paint",au:"page_white_sound",fla:"page_white_flash",swf:"page_white_flash",url:"page_white_linkfile",webloc:"page_white_linkfile",website:"page_white_linkfile"};i.getIconNameForExtension=function(e){return _[e]||"page_white"}}));
//# sourceMappingURL=pkg-icon-essential.min.js-vfl8PZqAr.map