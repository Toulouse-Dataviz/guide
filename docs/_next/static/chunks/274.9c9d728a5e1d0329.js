"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[274],{7274:function(e,t,n){n.r(t),n.d(t,{Equation:function(){return Equation}});var r,l,o,i=n(7294),s=n(1008);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=(0,i.memo)(function(e){var t=e.children,n=e.math,r=e.block,l=e.errorColor,o=e.renderError,c=e.settings,u=e.as,m=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(l[n]=e[n]);return l}(e,["children","math","block","errorColor","renderError","settings","as"]),d=u||(r?"div":"span"),p=null!=t?t:n,g=(0,i.useState)({innerHtml:""}),h=g[0],f=g[1];return(0,i.useEffect)(function(){try{var e=s.Z.renderToString(p,a({displayMode:!!r,errorColor:l,throwOnError:!!o},c));f({innerHtml:e})}catch(e){if(!(e instanceof s.Z.ParseError||e instanceof TypeError))throw e;f(o?{errorElement:o(e)}:{innerHtml:e.message})}},[r,p,l,o,c]),"errorElement"in h?h.errorElement:i.createElement(d,Object.assign({},m,{dangerouslySetInnerHTML:{__html:h.innerHtml}}))}),u=n(6134),m=n(8110),d=n(3324),p=n(3072),g=n(9218),h=n(9590),f=Object.create,v=Object.defineProperty,y=Object.defineProperties,b=Object.getOwnPropertyDescriptor,_=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,k=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,__spreadValues=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&__defNormalProp(e,n,t[n]);if(C)for(var n of C(t))N.call(t,n)&&__defNormalProp(e,n,t[n]);return e},__spreadProps=(e,t)=>y(e,_(t)),__objRest=(e,t)=>{var n={};for(var r in e)w.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&C)for(var r of C(e))0>t.indexOf(r)&&N.call(e,r)&&(n[r]=e[r]);return n},__async=(e,t,n)=>new Promise((r,l)=>{var fulfilled=e=>{try{step(n.next(e))}catch(e){l(e)}},rejected=e=>{try{step(n.throw(e))}catch(e){l(e)}},step=e=>e.done?r(e.value):Promise.resolve(e.value).then(fulfilled,rejected);step((n=n.apply(e,t)).next())}),x=(r={"../../node_modules/lodash.throttle/index.js"(e,t){var n="Expected a function",r=0/0,l=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof global&&global&&global.Object===Object&&global,m="object"==typeof self&&self&&self.Object===Object&&self,d=u||m||Function("return this")(),p=Object.prototype.toString,g=Math.max,h=Math.min,now=function(){return d.Date.now()};function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function toNumber(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==p.call(t))return r;if(isObject(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=isObject(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var u=i.test(e);return u||s.test(e)?c(e.slice(2),u?2:8):o.test(e)?r:+e}t.exports=function(e,t,r){var l=!0,o=!0;if("function"!=typeof e)throw TypeError(n);return isObject(r)&&(l="leading"in r?!!r.leading:l,o="trailing"in r?!!r.trailing:o),function(e,t,r){var l,o,i,s,c,u,m=0,d=!1,p=!1,f=!0;if("function"!=typeof e)throw TypeError(n);function invokeFunc(t){var n=l,r=o;return l=o=void 0,m=t,s=e.apply(r,n)}function shouldInvoke(e){var n=e-u,r=e-m;return void 0===u||n>=t||n<0||p&&r>=i}function timerExpired(){var e,n,r,l=now();if(shouldInvoke(l))return trailingEdge(l);c=setTimeout(timerExpired,(e=l-u,n=l-m,r=t-e,p?h(r,i-n):r))}function trailingEdge(e){return(c=void 0,f&&l)?invokeFunc(e):(l=o=void 0,s)}function debounced(){var e,n=now(),r=shouldInvoke(n);if(l=arguments,o=this,u=n,r){if(void 0===c)return m=e=u,c=setTimeout(timerExpired,t),d?invokeFunc(e):s;if(p)return c=setTimeout(timerExpired,t),invokeFunc(u)}return void 0===c&&(c=setTimeout(timerExpired,t)),s}return t=toNumber(t)||0,isObject(r)&&(d=!!r.leading,i=(p="maxWait"in r)?g(toNumber(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),debounced.cancel=function(){void 0!==c&&clearTimeout(c),m=0,l=u=o=c=void 0},debounced.flush=function(){return void 0===c?s:trailingEdge(now())},debounced}(e,t,{leading:l,maxWait:t,trailing:o})}}},function(){return l||(0,r[E(r)[0]])((l={exports:{}}).exports,l),l.exports}),defaultMapImageUrl=(e,t)=>{if(!e)return null;if(e.startsWith("data:")||e.startsWith("https://images.unsplash.com"))return e;try{let t=new URL(e);if(t.pathname.startsWith("/secure.notion-static.com")&&t.hostname.endsWith(".amazonaws.com")&&t.searchParams.has("X-Amz-Credential")&&t.searchParams.has("X-Amz-Signature")&&t.searchParams.has("X-Amz-Algorithm"))return e}catch(e){}e.startsWith("/images")&&(e=`https://www.notion.so${e}`),e=`https://www.notion.so${e.startsWith("/image")?e:`/image/${encodeURIComponent(e)}`}`;let n=new URL(e),r="space"===t.parent_table?"block":t.parent_table;return("collection"===r||"team"===r)&&(r="block"),n.searchParams.set("table",r),n.searchParams.set("id",t.id),n.searchParams.set("cache","v2"),e=n.toString()},defaultMapPageUrl=e=>t=>(t=(t||"").replace(/-/g,""),e&&t===e)?"/":`/${t}`,cs=(...e)=>e.filter(e=>!!e).join(" "),getHashFragmentValue=e=>e.includes("#")?e.replace(/^.+(#.+)$/,"$1"):"",O="undefined"!=typeof window,I=new Set(["youtu.be","youtube.com","www.youtube.com","youtube-nocookie.com","www.youtube-nocookie.com"]),getYoutubeId=e=>{try{let{hostname:t}=new URL(e);if(!I.has(t))return null;let n=e.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/i);if(n&&11==n[2].length)return n[2]}catch(e){}return null},type_github_default=function(e){return i.createElement("svg",__spreadValues({viewBox:"0 0 260 260"},e),i.createElement("g",null,i.createElement("path",{d:"M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z",fill:"#161614"})))},EOI=({block:e,inline:t,className:n})=>{var r,l,o;let s;let{components:c}=useNotionContext(),{original_url:m,attributes:d,domain:p}=(null==e?void 0:e.format)||{};if(!m||!d)return null;let g=null==(r=d.find(e=>"title"===e.id))?void 0:r.values[0],h=null==(l=d.find(e=>"owner"===e.id))?void 0:l.values[0],f=null==(o=d.find(e=>"updated_at"===e.id))?void 0:o.values[0],v=f?(0,u.c8)(f):null;if("github.com"!==p)return console.log(`Unsupported external_object_instance domain "${p}"`,JSON.stringify(e,null,2)),null;if(s=i.createElement(type_github_default,null),h){let e=h.split("/");h=e[e.length-1]}return i.createElement(c.Link,{target:"_blank",rel:"noopener noreferrer",href:m,className:cs("notion-external",t?"notion-external-mention":"notion-external-block notion-row",n)},s&&i.createElement("div",{className:"notion-external-image"},s),i.createElement("div",{className:"notion-external-description"},i.createElement("div",{className:"notion-external-title"},g),(h||v)&&i.createElement("div",{className:"notion-external-subtitle"},h&&i.createElement("span",null,h),h&&v&&i.createElement("span",null," • "),v&&i.createElement("span",null,"Updated ",v))))},GracefulImage=e=>O?i.createElement(d.Img,__spreadValues({},e)):i.createElement("img",__spreadValues({},e)),DefaultPageIcon=e=>{let{className:t}=e,n=__objRest(e,["className"]);return i.createElement("svg",__spreadProps(__spreadValues({className:t},n),{viewBox:"0 0 30 30",width:"16"}),i.createElement("path",{d:"M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"}))},LazyImage=e=>{var t,n,r,{src:l,alt:o,className:s,style:c,zoomable:m=!1,priority:d=!1,height:g}=e,h=__objRest(e,["src","alt","className","style","zoomable","priority","height"]);let{recordMap:f,zoom:v,previewImages:y,forceCustomImages:b,components:_}=useNotionContext(),E=i.useRef(v?v.clone():null),C=y?null!=(r=null==(t=null==f?void 0:f.preview_images)?void 0:t[l])?r:null==(n=null==f?void 0:f.preview_images)?void 0:n[(0,u.D5)(l)]:null,k=i.useCallback(e=>{m&&(e.target.src||e.target.srcset)&&E.current&&E.current.attach(e.target)},[E,m]),w=i.useCallback(e=>{E.current&&e&&E.current.attach(e)},[E]),N=i.useMemo(()=>m?w:void 0,[m,w]);if(C){let e=C.originalHeight/C.originalWidth;return _.Image?i.createElement(_.Image,{src:l,alt:o,style:c,className:s,width:C.originalWidth,height:C.originalHeight,blurDataURL:C.dataURIBase64,placeholder:"blur",priority:d,onLoad:k}):i.createElement(p.AZ,__spreadProps(__spreadValues({src:l},h),{experimentalDecode:!0}),({imageState:t,ref:n})=>{let r=t===p.zl.LoadSuccess,u={width:"100%"},m={};return g?u.height=g:(m.position="absolute",u.paddingBottom=`${100*e}%`),i.createElement("div",{className:cs("lazy-image-wrapper",r&&"lazy-image-loaded",s),style:u},i.createElement("img",{className:"lazy-image-preview",src:C.dataURIBase64,alt:o,ref:n,style:c,decoding:"async"}),i.createElement("img",{className:"lazy-image-real",src:l,alt:o,ref:N,style:__spreadValues(__spreadValues({},c),m),width:C.originalWidth,height:C.originalHeight,decoding:"async",loading:"lazy"}))})}return _.Image&&b?i.createElement(_.Image,{src:l,alt:o,className:s,style:c,width:null,height:g||null,priority:d,onLoad:k}):i.createElement("img",__spreadValues({className:s,style:c,src:l,alt:o,ref:N,loading:"lazy",decoding:"async"},h))},isIconBlock=e=>"page"===e.type||"callout"===e.type||"collection_view"===e.type||"collection_view_page"===e.type,P=i.memo(({block:e,className:t,inline:n=!0,hideDefaultIcon:r=!1,defaultIcon:l})=>{var o;let{mapImageUrl:s,recordMap:c,darkMode:d}=useNotionContext(),p=!1,g=null;if(isIconBlock(e)){let n=(null==(o=(0,u.Ck)(e,c))?void 0:o.trim())||l,h=(0,u.Ho)(e,c);if(n&&(0,m.Z)(n)){let r=s(n,e);p=!0,g=i.createElement(LazyImage,{src:r,alt:h||"page icon",className:cs(t,"notion-page-icon")})}else if(n&&n.startsWith("/icons/")){let e="https://www.notion.so"+n+"?mode="+(d?"dark":"light");g=i.createElement(LazyImage,{src:e,alt:h||"page icon",className:cs(t,"notion-page-icon")})}else n?(p=!1,g=i.createElement("span",{className:cs(t,"notion-page-icon"),role:"img","aria-label":n},n)):r||(p=!0,g=i.createElement(DefaultPageIcon,{className:cs(t,"notion-page-icon"),alt:h||"page icon"}))}return g?i.createElement("div",{className:cs(n?"notion-page-icon-inline":"notion-page-icon-hero",p?"notion-page-icon-image":"notion-page-icon-span")},g):null}),j=i.memo(e=>{var t,n,{block:r,className:l,defaultIcon:o}=e,s=__objRest(e,["block","className","defaultIcon"]);let{recordMap:c}=useNotionContext();if(!r)return null;if("collection_view_page"===r.type||"collection_view"===r.type){let e=(0,u.Ho)(r,c);return e?i.createElement("span",__spreadValues({className:cs("notion-page-title",l)},s),i.createElement(P,{block:r,defaultIcon:o,className:"notion-page-title-icon"}),i.createElement("span",{className:"notion-page-title-text"},i.createElement(Text,{value:[[e]],block:r}))):null}return(null==(t=r.properties)?void 0:t.title)?i.createElement("span",__spreadValues({className:cs("notion-page-title",l)},s),i.createElement(P,{block:r,defaultIcon:o,className:"notion-page-title-icon"}),i.createElement("span",{className:"notion-page-title-text"},i.createElement(Text,{value:null==(n=r.properties)?void 0:n.title,block:r}))):null}),Text=({value:e,block:t,linkProps:n,linkProtocol:r})=>{let{components:l,recordMap:o,mapPageUrl:s,mapImageUrl:c,rootDomain:m}=useNotionContext();return i.createElement(i.Fragment,null,null==e?void 0:e.map(([e,d],p)=>{if(!d)return","===e?i.createElement("span",{key:p,style:{padding:"0.5em"}}):i.createElement(i.Fragment,{key:p},e);let g=d.reduce((e,d)=>{var p,g,h,f,v;switch(d[0]){case"p":{let e=d[1],t=null==(p=o.block[e])?void 0:p.value;if(!t)return console.log('"p" missing block',e),null;return i.createElement(l.PageLink,{className:"notion-link",href:s(e)},i.createElement(j,{block:t}))}case"‣":{let e=d[1][0],r=d[1][1];if("u"===e){let e=null==(g=o.notion_user[r])?void 0:g.value;if(!e)return console.log('"‣" missing user',r),null;let n=[e.given_name,e.family_name].filter(Boolean).join(" ");return i.createElement(GracefulImage,{className:"notion-user",src:c(e.profile_photo,t),alt:n})}{let t=null==(h=o.block[r])?void 0:h.value;if(!t)return console.log('"‣" missing block',e,r),null;return i.createElement(l.PageLink,__spreadProps(__spreadValues({className:"notion-link",href:s(r)},n),{target:"_blank",rel:"noopener noreferrer"}),i.createElement(j,{block:t}))}}case"h":return i.createElement("span",{className:`notion-${d[1]}`},e);case"c":return i.createElement("code",{className:"notion-inline-code"},e);case"b":return i.createElement("b",null,e);case"i":return i.createElement("em",null,e);case"s":return i.createElement("s",null,e);case"_":return i.createElement("span",{className:"notion-inline-underscore"},e);case"e":return i.createElement(l.Equation,{math:d[1],inline:!0});case"m":return e;case"a":{let t=d[1],o=t.substr(1),c=(0,u.q5)(o,{uuid:!0});if(!("/"===t[0]||t.includes(m))||!c)return i.createElement(l.Link,__spreadValues({className:"notion-link",href:r?`${r}:${d[1]}`:d[1]},n),e);{let r=t.includes(m)?t:`${s(c)}${getHashFragmentValue(t)}`;return i.createElement(l.PageLink,__spreadValues({className:"notion-link",href:r},n),e)}}case"d":{let t=d[1],n=null==t?void 0:t.type;if("date"===n){let e=t.start_date;return(0,u.p6)(e)}if("daterange"!==n)return e;{let e=t.start_date,n=t.end_date;return`${(0,u.p6)(e)} \u2192 ${(0,u.p6)(n)}`}}case"u":{let e=d[1],n=null==(f=o.notion_user[e])?void 0:f.value;if(!n)return console.log("missing user",e),null;let r=[n.given_name,n.family_name].filter(Boolean).join(" ");return i.createElement(GracefulImage,{className:"notion-user",src:c(n.profile_photo,t),alt:r})}case"eoi":{let e=d[1],t=null==(v=o.block[e])?void 0:v.value;return i.createElement(EOI,{block:t,inline:!0})}default:return console.log("unsupported text format",d),e}},i.createElement(i.Fragment,null,e));return i.createElement(i.Fragment,{key:p},g)}))},SearchIcon=e=>{let{className:t}=e,n=__objRest(e,["className"]);return i.createElement("svg",__spreadValues({className:cs("notion-icon",t),viewBox:"0 0 17 17"},n),i.createElement("path",{d:"M6.78027 13.6729C8.24805 13.6729 9.60156 13.1982 10.709 12.4072L14.875 16.5732C15.0684 16.7666 15.3232 16.8633 15.5957 16.8633C16.167 16.8633 16.5713 16.4238 16.5713 15.8613C16.5713 15.5977 16.4834 15.3516 16.29 15.1582L12.1504 11.0098C13.0205 9.86719 13.5391 8.45215 13.5391 6.91406C13.5391 3.19629 10.498 0.155273 6.78027 0.155273C3.0625 0.155273 0.0214844 3.19629 0.0214844 6.91406C0.0214844 10.6318 3.0625 13.6729 6.78027 13.6729ZM6.78027 12.2139C3.87988 12.2139 1.48047 9.81445 1.48047 6.91406C1.48047 4.01367 3.87988 1.61426 6.78027 1.61426C9.68066 1.61426 12.0801 4.01367 12.0801 6.91406C12.0801 9.81445 9.68066 12.2139 6.78027 12.2139Z"}))},V=((e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of E(t))w.call(e,n)||void 0===n||v(e,n,{get:()=>t[n],enumerable:!(r=b(t,n))||r.enumerable});return e})(v(null!=(o=x())?f(k(o)):{},"default",{value:o,enumerable:!0}),o),ClearIcon=e=>{let{className:t}=e,n=__objRest(e,["className"]);return i.createElement("svg",__spreadProps(__spreadValues({className:cs("notion-icon",t)},n),{viewBox:"0 0 30 30"}),i.createElement("path",{d:"M15,0C6.716,0,0,6.716,0,15s6.716,15,15,15s15-6.716,15-15S23.284,0,15,0z M22,20.6L20.6,22L15,16.4L9.4,22L8,20.6l5.6-5.6 L8,9.4L9.4,8l5.6,5.6L20.6,8L22,9.4L16.4,15L22,20.6z"}))},LoadingIcon=e=>{let{className:t}=e,n=__objRest(e,["className"]);return i.createElement("svg",__spreadProps(__spreadValues({className:cs("notion-icon",t)},n),{viewBox:"0 0 24 24"}),i.createElement("defs",null,i.createElement("linearGradient",{x1:"28.1542969%",y1:"63.7402344%",x2:"74.6289062%",y2:"17.7832031%",id:"linearGradient-1"},i.createElement("stop",{stopColor:"rgba(164, 164, 164, 1)",offset:"0%"}),i.createElement("stop",{stopColor:"rgba(164, 164, 164, 0)",stopOpacity:"0",offset:"100%"}))),i.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none"},i.createElement("g",{transform:"translate(-236.000000, -286.000000)"},i.createElement("g",{transform:"translate(238.000000, 286.000000)"},i.createElement("circle",{id:"Oval-2",stroke:"url(#linearGradient-1)",strokeWidth:"4",cx:"10",cy:"12",r:"10"}),i.createElement("path",{d:"M10,2 C4.4771525,2 0,6.4771525 0,12",id:"Oval-2",stroke:"rgba(164, 164, 164, 1)",strokeWidth:"4"}),i.createElement("rect",{id:"Rectangle-1",fill:"rgba(164, 164, 164, 1)",x:"8",y:"0",width:"4",height:"4",rx:"8"})))))},L=class extends i.Component{constructor(e){super(e),this.state={isLoading:!1,query:"",searchResult:null,searchError:null},this._onAfterOpen=()=>{this._inputRef.current&&this._inputRef.current.focus()},this._onChangeQuery=e=>{let t=e.target.value;if(this.setState({query:t}),t.trim())this._search();else{this.setState({isLoading:!1,searchResult:null,searchError:null});return}},this._onClearQuery=()=>{this._onChangeQuery({target:{value:""}})},this._warmupSearch=()=>__async(this,null,function*(){let{searchNotion:e,rootBlockId:t}=this.props;yield e({query:"",ancestorId:t})}),this._searchImpl=()=>__async(this,null,function*(){let{searchNotion:e,rootBlockId:t}=this.props,{query:n}=this.state;if(!n.trim()){this.setState({isLoading:!1,searchResult:null,searchError:null});return}this.setState({isLoading:!0});let r=yield e({query:n,ancestorId:t});console.log("search",n,r);let l=null,o=null;if(r.error||r.errorId)o=r;else{l=__spreadValues({},r);let e=l.results.map(e=>{var t,n;let r=null==(t=l.recordMap.block[e.id])?void 0:t.value;if(!r)return;let o=(0,u.Ho)(r,l.recordMap);if(o&&(e.title=o,e.block=r,e.recordMap=l.recordMap,e.page=(0,u.cj)(r,l.recordMap,{inclusive:!0})||r,e.page.id))return(null==(n=e.highlight)?void 0:n.text)&&(e.highlight.html=e.highlight.text.replace(/<gzkNfoUU>/gi,"<b>").replace(/<\/gzkNfoUU>/gi,"</b>")),e}).filter(Boolean),t=e.reduce((e,t)=>__spreadProps(__spreadValues({},e),{[t.page.id]:t}),{});l.results=Object.values(t)}this.state.query===n&&this.setState({isLoading:!1,searchResult:l,searchError:o})}),this._inputRef=i.createRef()}componentDidMount(){this._search=(0,V.default)(this._searchImpl.bind(this),1e3),this._warmupSearch()}render(){let{isOpen:e,onClose:t}=this.props,{isLoading:n,query:r,searchResult:l,searchError:o}=this.state,s=!!r.trim();return i.createElement(U,null,c=>{let{components:u,defaultPageIcon:m,mapPageUrl:d}=c;return i.createElement(u.Modal,{isOpen:e,contentLabel:"Search",className:"notion-search",overlayClassName:"notion-search-overlay",onRequestClose:t,onAfterOpen:this._onAfterOpen},i.createElement("div",{className:"quickFindMenu"},i.createElement("div",{className:"searchBar"},i.createElement("div",{className:"inlineIcon"},n?i.createElement(LoadingIcon,{className:"loadingIcon"}):i.createElement(SearchIcon,null)),i.createElement("input",{className:"searchInput",placeholder:"Search",value:r,ref:this._inputRef,onChange:this._onChangeQuery}),r&&i.createElement("div",{role:"button",className:"clearButton",onClick:this._onClearQuery},i.createElement(ClearIcon,{className:"clearIcon"}))),s&&l&&i.createElement(i.Fragment,null,l.results.length?i.createElement(NotionContextProvider,__spreadProps(__spreadValues({},c),{recordMap:l.recordMap}),i.createElement("div",{className:"resultsPane"},l.results.map(e=>{var t;return i.createElement(u.PageLink,{key:e.id,className:cs("result","notion-page-link"),href:d(e.page.id,l.recordMap)},i.createElement(j,{block:e.page,defaultIcon:m}),(null==(t=e.highlight)?void 0:t.html)&&i.createElement("div",{className:"notion-search-result-highlight",dangerouslySetInnerHTML:{__html:e.highlight.html}}))})),i.createElement("footer",{className:"resultsFooter"},i.createElement("div",null,i.createElement("span",{className:"resultsCount"},l.total),1===l.total?" result":" results"))):i.createElement("div",{className:"noResultsPane"},i.createElement("div",{className:"noResults"},"No results"),i.createElement("div",{className:"noResultsDetail"},"Try different search terms"))),s&&!l&&o&&i.createElement("div",{className:"noResultsPane"},i.createElement("div",{className:"noResults"},"Search error"))))})}},Breadcrumbs=({block:e,rootOnly:t=!1})=>{let{recordMap:n,mapPageUrl:r,components:l}=useNotionContext(),o=i.useMemo(()=>{let r=(0,u.Kl)(n,e.id);return t?[r[0]].filter(Boolean):r},[n,e.id,t]);return i.createElement("div",{className:"breadcrumbs",key:"breadcrumbs"},o.map((e,t)=>{if(!e)return null;let n={},s={pageLink:l.PageLink};return e.active?s.pageLink=e=>i.createElement("div",__spreadValues({},e)):n.href=r(e.pageId),i.createElement(i.Fragment,{key:e.pageId},i.createElement(s.pageLink,__spreadValues({className:cs("breadcrumb",e.active&&"active")},n),e.icon&&i.createElement(P,{className:"icon",block:e.block}),e.title&&i.createElement("span",{className:"title"},e.title)),t<o.length-1&&i.createElement("span",{className:"spacer"},"/"))}))},Search=({block:e,search:t,title:n="Search"})=>{let{searchNotion:r,rootPageId:l,isShowingSearch:o,onHideSearch:s}=useNotionContext(),c=t||r,[u,m]=i.useState(o);i.useEffect(()=>{m(o)},[o]);let d=i.useCallback(()=>{m(!0)},[]),p=i.useCallback(()=>{m(!1),s&&s()},[s]);(0,g.y1)("cmd+p",e=>{d(),e.preventDefault(),e.stopPropagation()}),(0,g.y1)("cmd+k",e=>{d(),e.preventDefault(),e.stopPropagation()});let h=!!c;return i.createElement(i.Fragment,null,h&&i.createElement("div",{role:"button",className:cs("breadcrumb","button","notion-search-button"),onClick:d},i.createElement(SearchIcon,{className:"searchIcon"}),n&&i.createElement("span",{className:"title"},n)),u&&h&&i.createElement(L,{isOpen:u,rootBlockId:l||(null==e?void 0:e.id),onClose:p,searchNotion:c}))},qs=e=>Object.keys(e).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&"),LiteYouTubeEmbed=({id:e,defaultPlay:t=!1,mute:n=!1,lazyImage:r=!1,iframeTitle:l="YouTube video",alt:o="Video preview",params:s={},adLinksPreconnect:c=!0,style:u,className:m})=>{let d=n||t?"1":"0",p=i.useMemo(()=>qs(__spreadValues({autoplay:"1",mute:d},s)),[d,s]),g=`https://i.ytimg.com/vi/${e}/hqdefault.jpg`,h="https://www.youtube-nocookie.com",f=`${h}/embed/${e}?${p}`,[v,y]=i.useState(!1),[b,_]=i.useState(t),[E,C]=i.useState(!1),k=i.useCallback(()=>{v||y(!0)},[v]),w=i.useCallback(()=>{b||_(!0)},[b]),N=i.useCallback(()=>{C(!0)},[]);return i.createElement(i.Fragment,null,i.createElement("link",{rel:"preload",href:g,as:"image"}),v&&i.createElement(i.Fragment,null,i.createElement("link",{rel:"preconnect",href:h}),i.createElement("link",{rel:"preconnect",href:"https://www.google.com"})),v&&c&&i.createElement(i.Fragment,null,i.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),i.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})),i.createElement("div",{onClick:w,onPointerOver:k,className:cs("notion-yt-lite",E&&"notion-yt-loaded",b&&"notion-yt-initialized",m),style:u},i.createElement("img",{src:g,className:"notion-yt-thumbnail",loading:r?"lazy":void 0,alt:o}),i.createElement("div",{className:"notion-yt-playbtn"}),b&&i.createElement("iframe",{width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:l,src:f,onLoad:N})))},M="undefined"==typeof window,F=["video","image","embed","figma","typeform","excalidraw","maps","tweet","pdf","gist","codepen","drive"],Asset=({block:e,zoomable:t=!0,children:n})=>{var r,l,o,s,c,m,d;let{recordMap:p,mapImageUrl:g,components:h}=useNotionContext();if(!e||!F.includes(e.type))return null;let f={position:"relative",display:"flex",justifyContent:"center",alignSelf:"center",width:"100%",maxWidth:"100%",flexDirection:"column"},v={};if(e.format){let{block_aspect_ratio:t,block_height:n,block_width:l,block_full_width:o,block_page_width:i,block_preserve_scale:s}=e.format;if(o||i)o?f.width="100vw":f.width="100%","video"===e.type?n?f.height=n:t?f.paddingBottom=`${100*t}%`:s&&(f.objectFit="contain"):t&&"image"!==e.type?f.paddingBottom=`${100*t}%`:n?f.height=n:s&&("image"===e.type?f.height="100%":(f.paddingBottom="75%",f.minHeight=100));else{switch(null==(r=e.format)?void 0:r.block_alignment){case"center":f.alignSelf="center";break;case"left":f.alignSelf="start";break;case"right":f.alignSelf="end"}l&&(f.width=l),s&&"image"!==e.type?(f.paddingBottom="50%",f.minHeight=100):n&&"image"!==e.type&&(f.height=n)}"image"===e.type?v.objectFit="cover":s&&(v.objectFit="contain")}let y=(null==(l=p.signed_urls)?void 0:l[e.id])||(null==(c=null==(s=null==(o=e.properties)?void 0:o.source)?void 0:s[0])?void 0:c[0]),b=null;if(!y)return null;if("tweet"===e.type){if(!y)return null;let e=y.split("?")[0].split("/").pop();if(!e)return null;b=i.createElement("div",{style:__spreadProps(__spreadValues({},v),{maxWidth:420,width:"100%",marginLeft:"auto",marginRight:"auto"})},i.createElement(h.Tweet,{id:e}))}else if("pdf"===e.type)f.overflow="auto",f.background="rgb(226, 226, 226)",f.padding||(f.padding="8px 16px"),M||(b=i.createElement(h.Pdf,{file:y}));else if("embed"===e.type||"video"===e.type||"figma"===e.type||"typeform"===e.type||"gist"===e.type||"maps"===e.type||"excalidraw"===e.type||"codepen"===e.type||"drive"===e.type){if("video"===e.type&&y&&0>y.indexOf("youtube")&&0>y.indexOf("youtu.be")&&0>y.indexOf("vimeo")&&0>y.indexOf("wistia")&&0>y.indexOf("loom")&&0>y.indexOf("videoask")&&0>y.indexOf("getcloudapp"))f.paddingBottom=void 0,b=i.createElement("video",{playsInline:!0,controls:!0,preload:"metadata",style:v,src:y,title:e.type});else{let t=(null==(m=e.format)?void 0:m.display_source)||y;if(t){let n="video"===e.type?getYoutubeId(t):null;n?b=i.createElement(LiteYouTubeEmbed,{id:n,style:v,className:"notion-asset-object-fit"}):"gist"===e.type?(t.endsWith(".pibb")||(t=`${t}.pibb`),v.width="100%",f.paddingBottom="50%",b=i.createElement("iframe",{style:v,className:"notion-asset-object-fit",src:t,title:"GitHub Gist",frameBorder:"0",loading:"lazy",scrolling:"auto"})):b=i.createElement("iframe",{className:"notion-asset-object-fit",style:v,src:t,title:`iframe ${e.type}`,frameBorder:"0",allowFullScreen:!0,loading:"lazy",scrolling:"auto"})}}}else if("image"===e.type){let n=g(y,e),r=(0,u.FB)(null==(d=e.properties)?void 0:d.caption),l=r||"notion image";b=i.createElement(LazyImage,{src:n,alt:l,zoomable:t,height:f.height,style:v})}return i.createElement(i.Fragment,null,i.createElement("div",{style:f},b,"image"===e.type&&n),"image"!==e.type&&n)},S={width:"100%"},AssetWrapper=({blockId:e,block:t})=>{var n,r,l,o,s,c;let{components:m,mapPageUrl:d,rootDomain:p,zoom:g}=useNotionContext(),h=!1;if("image"===t.type){let e=null==(l=null==(r=null==(n=null==t?void 0:t.properties)?void 0:n.caption)?void 0:r[0])?void 0:l[0];if(e){let t=(0,u.q5)(e,{uuid:!0}),n="/"===e.charAt(0)&&t;(n||function(e){let t=RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return!!t.test(e)}(e))&&(h=!0)}}let f=i.createElement("figure",{className:cs("notion-asset-wrapper",`notion-asset-wrapper-${t.type}`,(null==(o=t.format)?void 0:o.block_full_width)&&"notion-asset-wrapper-full",e)},i.createElement(Asset,{block:t,zoomable:g&&!h},(null==(s=null==t?void 0:t.properties)?void 0:s.caption)&&!h&&i.createElement("figcaption",{className:"notion-asset-caption"},i.createElement(Text,{value:t.properties.caption,block:t}))));if(h){let e=null==(c=null==t?void 0:t.properties)?void 0:c.caption[0][0],n=(0,u.q5)(e,{uuid:!0}),r="/"===e.charAt(0)&&n,l=function(e){try{let t=new URL(e).hostname;return t}catch(e){return""}}(e);return i.createElement(m.PageLink,{style:S,href:r?d(n):e,target:l&&l!==p&&!e.startsWith("/")?"blank_":null},f)}return f},check_default=function(e){return i.createElement("svg",__spreadValues({viewBox:"0 0 14 14"},e),i.createElement("path",{d:"M5.5 12L14 3.5 12.5 2l-7 7-4-4.003L0 6.499z"}))},wrapNextImage=e=>i.memo(function(t){var{src:n,alt:r,width:l,height:o,className:s,style:c,layout:u}=t,m=__objRest(t,["src","alt","width","height","className","style","layout"]);return u||(u=l&&o?"intrinsic":"fill"),i.createElement(e,__spreadValues({className:s,src:n,alt:r,width:"intrinsic"===u&&l,height:"intrinsic"===u&&o,objectFit:null==c?void 0:c.objectFit,objectPosition:null==c?void 0:c.objectPosition,layout:u},m))},h),wrapNextLink=e=>function(t){var{href:n,as:r,passHref:l,prefetch:o,replace:s,scroll:c,shallow:u,locale:m}=t,d=__objRest(t,["href","as","passHref","prefetch","replace","scroll","shallow","locale"]);return i.createElement(e,{href:n,as:r,passHref:l,prefetch:o,replace:s,scroll:c,shallow:u,locale:m},i.createElement("a",__spreadValues({},d)))},R=i.memo(e=>i.createElement("a",__spreadValues({target:"_blank",rel:"noopener noreferrer"},e))),z=i.memo(e=>i.createElement("a",__spreadValues({},e))),dummyComponent=e=>()=>(console.warn(`Warning: using empty component "${e}" (you should override this in NotionRenderer.components)`),null),dummyOverrideFn=(e,t)=>t(),$={Image:null,Link:R,PageLink:z,Checkbox:({isChecked:e})=>{let t=null;return t=e?i.createElement("div",{className:"notion-property-checkbox-checked"},i.createElement(check_default,null)):i.createElement("div",{className:"notion-property-checkbox-unchecked"}),i.createElement("span",{className:"notion-property notion-property-checkbox"},t)},Callout:void 0,Code:dummyComponent("Code"),Equation:dummyComponent("Equation"),Collection:dummyComponent("Collection"),Property:void 0,propertyTextValue:dummyOverrideFn,propertySelectValue:dummyOverrideFn,propertyRelationValue:dummyOverrideFn,propertyFormulaValue:dummyOverrideFn,propertyTitleValue:dummyOverrideFn,propertyPersonValue:dummyOverrideFn,propertyFileValue:dummyOverrideFn,propertyCheckboxValue:dummyOverrideFn,propertyUrlValue:dummyOverrideFn,propertyEmailValue:dummyOverrideFn,propertyPhoneNumberValue:dummyOverrideFn,propertyNumberValue:dummyOverrideFn,propertyLastEditedTimeValue:dummyOverrideFn,propertyCreatedTimeValue:dummyOverrideFn,propertyDateValue:dummyOverrideFn,Pdf:dummyComponent("Pdf"),Tweet:dummyComponent("Tweet"),Modal:dummyComponent("Modal"),Header:({block:e})=>i.createElement("header",{className:"notion-header"},i.createElement("div",{className:"notion-nav-header"},i.createElement(Breadcrumbs,{block:e}),i.createElement(Search,{block:e}))),Embed:e=>i.createElement(AssetWrapper,__spreadValues({},e))},T={recordMap:{block:{},collection:{},collection_view:{},collection_query:{},notion_user:{},signed_urls:{}},components:$,mapPageUrl:defaultMapPageUrl(),mapImageUrl:defaultMapImageUrl,searchNotion:null,isShowingSearch:!1,onHideSearch:null,fullPage:!1,darkMode:!1,previewImages:!1,forceCustomImages:!1,showCollectionViewDropdown:!0,linkTableTitleProperties:!0,isLinkCollectionToUrlProperty:!1,showTableOfContents:!1,minTableOfContentsItems:3,defaultPageIcon:null,defaultPageCover:null,defaultPageCoverPosition:.5,zoom:null},B=i.createContext(T),NotionContextProvider=e=>{var{components:t={},children:n,mapPageUrl:r,mapImageUrl:l,rootPageId:o}=e,s=__objRest(e,["components","children","mapPageUrl","mapImageUrl","rootPageId"]);for(let e of Object.keys(s))void 0===s[e]&&delete s[e];let c=i.useMemo(()=>__spreadValues({},t),[t]);for(let e of(c.nextImage&&(c.Image=wrapNextImage(t.nextImage)),c.nextLink&&(c.nextLink=wrapNextLink(t.nextLink)),Object.keys(c)))c[e]||delete c[e];let u=i.useMemo(()=>__spreadProps(__spreadValues(__spreadValues({},T),s),{rootPageId:o,mapPageUrl:null!=r?r:defaultMapPageUrl(o),mapImageUrl:null!=l?l:defaultMapImageUrl,components:__spreadValues(__spreadValues({},$),c)}),[l,r,c,o,s]);return i.createElement(B.Provider,{value:u},n)},U=B.Consumer,useNotionContext=()=>i.useContext(B),H={throwOnError:!1,strict:!1},Equation=e=>{var{block:t,math:n,inline:r=!1,className:l}=e,o=__objRest(e,["block","math","inline","className"]);let{recordMap:s}=useNotionContext();return(n=n||(0,u.Ho)(t,s))?i.createElement("span",{role:"button",tabIndex:0,className:cs("notion-equation",r?"notion-equation-inline":"notion-equation-block",l)},i.createElement(c,__spreadValues({math:n,settings:H},o))):null}}}]);