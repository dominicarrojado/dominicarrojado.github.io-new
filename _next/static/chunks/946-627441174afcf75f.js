"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946],{91126:function(a,b,c){c.d(b,{Z:function(){return y}});var d=c(85893),e=c(67294),f=c(94184),g=c.n(f),h=c(1216),i=c(61292),j=c(83779),k=c(3326),l=c(46288),m=c(44006),n=c(28416),o=c(56856);function p(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var q=function(a){return(0,d.jsx)("svg",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){p(a,b,c[b])})}return a}({viewBox:"0 0 576 512",role:"img"},a,{children:(0,d.jsx)("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})}))},r=c(9123),s=(0,e.forwardRef)(function(a,b){var c=a.className,e=a.color;return(0,d.jsx)("div",{ref:b,className:g()("border-transparent rounded-full","animate-spin",c),style:{borderRightColor:e},"data-testid":"spinner"})});s.displayName="Spinner";var t=s,u=c(98961),v=c(56204);function w(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function x(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){w(a,b,c[b])})}return a}function y(a){var b=a.project,c=a.className,e=a.style,f=a.headingLevel;return(0,d.jsxs)("li",{className:g()("flex flex-col items-center mt-16 first:mt-0","sm:mt-24","lg:mt-48 lg:flex-row","xl:mt-52",c),style:e,children:[(0,d.jsx)(z,{imageUrl:b.imageUrl,imageWidth:b.imageWidth,imageHeight:b.imageHeight,gifUrl:b.gifUrl,title:b.title}),(0,d.jsx)(C,{headingLevel:f,title:b.title,description:b.description,links:b.links,isBest:b.isBest})]})}function z(a){var b=a.imageUrl,c=a.imageWidth,f=a.imageHeight,j=a.gifUrl,k=a.title,p=(0,e.useRef)(null),q=(0,e.useRef)(null),r=(0,e.useState)(!1),s=r[0],t=r[1],u=(0,e.useState)(!1),y=u[0],z=u[1],C=(0,e.useState)(!1),D=C[0],E=C[1],F=(0,e.useState)(0),G=F[0],H=F[1],I=(0,e.useState)(""),J=I[0],K=I[1],L=(0,o._D)(),M=(0,o.UX)({url:j,onStart:function(){H(0)},onProgress:function(a){H(a)},onSuccess:function(a){var b=a.durationMs,c=a.data;H(100),K(c),(0,m.L)({event:v.cj.GIF_AUTO_PLAY_START,projectTitle:k,gifLoadTime:b})},onCancel:function(a){var b=a.durationMs,c=a.progress;(0,m.L)({event:v.cj.GIF_AUTO_PLAY_CANCEL,projectTitle:k,gifCancelTime:b,gifCancelProgress:c})},onError:function(a){console.error("Error on Work GIF download:",a)}}),N=M.startDownloadGif,O=M.cancelDownloadGif,P={width:c,height:f,className:"z-10 max-w-full h-auto shadow-3xl",style:{aspectRatio:"".concat(c," / ").concat(f)},draggable:!1},Q=Boolean(L&&y&&D&&!s&&100!==G),R=Boolean(L&&J&&D&&!s);return(0,e.useEffect)(function(){var a,b=function(){window.requestAnimationFrame(function(){var b=(0,n.e)(p);if(b){var c=window.pageYOffset,d=window.innerHeight,e=b.getBoundingClientRect(),f=e.top,g=e.height;t(!0),0!==c&&f>=0&&f+g<=d?E(!0):E(!1),clearTimeout(a),a=window.setTimeout(function(){t(!1)},200)}})};return l.Z.on("scroll",b),function(){clearTimeout(a),l.Z.off("scroll",b)}},[]),(0,e.useEffect)(function(){L&&!J&&(D?N():O())},[L,D,J]),(0,d.jsx)("div",{className:g()("flex justify-center items-center w-full","lg:w-4/6"),children:(0,d.jsxs)("div",{ref:p,className:"relative inline-flex min-w-11 min-h-24",children:[!y&&(0,d.jsx)(A,{}),(0,d.jsx)(h.ZP,{height:f,once:!0,children:(0,d.jsx)("img",x({},P,{src:b,alt:"Screenshot of ".concat(k),onLoad:function(){return z(!0)}}))}),(0,d.jsx)(i.ZP,{in:R,nodeRef:q,timeout:300,mountOnEnter:!0,unmountOnExit:!0,children:function(a){return(0,d.jsx)("img",{ref:q,src:J,alt:"GIF of ".concat(k),className:g()("absolute top-0 left-0 w-full h-full z-20","transition-opacity duration-300","motion-reduce:transition-none",w({},"entered"===a?"opacity-100 delay-300":"opacity-0",!0)),draggable:!1})}}),(0,d.jsx)(B,{shouldDisplay:Q,progress:G,title:k})]})})}function A(){return(0,d.jsx)(t,{className:g()("absolute inset-0 z-0 w-7 h-7 m-auto border-2","sm:w-9 sm:h-9","md:w-11 md:h-11 md:border-4"),color:"#999999"})}function B(a){var b=a.shouldDisplay,c=a.progress,f=a.title,h=(0,e.useMemo)(function(){return f.toLowerCase().replace(/[ :.]/g,"-")},[f]),l=(0,j.K)({baseId:"tooltip-".concat(h),animated:300,placement:"left"}),n=(0,e.useRef)(null),p=(0,o.s4)(),q="Downloading GIF...",r=function(){(0,m.L)({event:v.cj.PROJECT_INFO_HOVER,projectTitle:f,hoverText:q})};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.ZP,{in:p&&b,nodeRef:n,timeout:300,mountOnEnter:!0,unmountOnExit:!0,children:function(a){return(0,d.jsxs)(k.v,x({},l,{ref:n,className:g()("absolute top-3 right-3 bg-black bg-opacity-60 rounded-full p-1 z-30","transition-opacity duration-300","motion-reduce:transition-none","sm:top-4 sm:right-4",w({},"entered"===a?"opacity-100":"opacity-0",!0)),"data-testid":"gif-loader",onMouseEnter:r,children:[(0,d.jsx)(t,{className:g()("w-7 h-7 border-2","transition-opacity duration-1000","motion-reduce:transition-none","sm:w-9 sm:h-9","md:w-11 md:h-11 md:border-4"),color:"#ffffff"}),(0,d.jsx)("div",{className:g()("absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xs","sm:text-sm","md:text-base"),children:c})]}))}}),(0,d.jsx)(u.Z,{tooltip:l,className:"mr-3",children:q})]})}function C(a){var b=a.headingLevel,c=a.title,e=a.description,f=a.links,h=a.isBest,i=g()("inline-flex items-center font-bold text-lg","sm:text-xl","md:text-2xl","xl:text-3xl");return(0,d.jsxs)("div",{className:g()("w-full mt-8 text-center","md:mt-10","lg:w-2/6 lg:mt-0 lg:pl-10 lg:text-left","xl:px-14"),children:[2===b?(0,d.jsx)("h2",{className:i,children:c}):(0,d.jsx)("h3",{className:i,children:c}),h&&(0,d.jsx)(D,{}),(0,d.jsx)("p",{className:g()("mt-1","md:mt-4"),children:e}),(0,d.jsx)("div",{className:g()("mt-6","md:mt-8"),children:(0,d.jsx)("ul",{children:f.map(function(a,b){return(0,d.jsx)(E,x({},a,{projectTitle:c}),b)})})})]})}function D(){return(0,d.jsxs)("div",{className:g()("flex justify-center items-center mt-1 text-xs text-yellow-400 font-normal uppercase select-none","md:text-sm","lg:justify-start"),children:[(0,d.jsx)(q,{className:g()("inline-block w-2.5 h-2.5 mr-1 -mt-0.5","md:w-3.5 md:h-3.5")}),"Best Project"]})}function E(a){var b=a.title,c=a.url,f=a.projectTitle,h=(0,e.useRef)(!1),i=!c.startsWith(v.AW.HOME);return(0,d.jsx)("li",{className:g()("mt-4","sm:mt-2","lg:mt-1"),children:(0,d.jsx)(r.Z,{href:c,onMouseLeave:function(){(0,n.e)(h)||(0,m.L)({projectTitle:f,event:v.cj.PROJECT_HOVER,hoverText:b,hoverUrl:c})},onClick:function(){h.current=!0,(0,m.L)({projectTitle:f,event:v.cj.PROJECT_CLICK,linkText:b,linkUrl:c})},target:"_blank",isExternal:i,children:b})})}},51127:function(a,b,c){var d=c(85893),e=c(67294),f=c(94184),g=c.n(f);function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var i=(0,e.forwardRef)(function(a,b){var c=a.className,e=a.children,f=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["className","children"]);return(0,d.jsx)("section",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){h(a,b,c[b])})}return a}({ref:b,className:g()("pt-16 pb-20 px-6","sm:pt-20 sm:pb-24 sm:px-8","md:pt-24 md:pb-28 lg:px-10","xl:pt-28 xl:pb-32",c)},f,{children:e}))});i.displayName="Section",b.Z=i},76399:function(a,b,c){c.d(b,{Z:function(){return h}});var d=c(85893),e=c(9008),f=c(56204),g=c(88927);function h(a){var b=a.path,c=a.title,h=a.description,i=a.imageUrl,j=void 0===i?g.Ov:i,k=a.imageWidth,l=void 0===k?g.DN:k,m=a.imageHeight,n=void 0===m?g.oM:m,o=b===f.AW.HOME,p="".concat(g.cG).concat(b).concat(o?"":"/"),q="".concat(c," | ").concat(g.fB),r="".concat(g.cG).concat(j);return(0,d.jsxs)(e.default,{children:[(0,d.jsx)("meta",{charSet:"utf-8"}),(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,d.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,d.jsx)("meta",{name:"description",content:h}),(0,d.jsx)("meta",{name:"author",content:g.Z9}),(0,d.jsx)("link",{rel:"canonical",href:p}),(0,d.jsx)("link",{rel:"icon",href:"".concat(g.cG,"/favicon.ico")}),(0,d.jsx)("link",{rel:"manifest",href:"".concat(g.cG,"/manifest.json")}),(0,d.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,d.jsx)("meta",{property:"og:type",content:"website"}),(0,d.jsx)("meta",{property:"og:title",content:q}),(0,d.jsx)("meta",{property:"og:description",content:h}),(0,d.jsx)("meta",{property:"og:url",content:p}),(0,d.jsx)("meta",{property:"og:site_name",content:g.px}),(0,d.jsx)("meta",{property:"og:image",content:r}),(0,d.jsx)("meta",{property:"og:image:secure_url",content:r}),(0,d.jsx)("meta",{property:"og:image:width",content:"".concat(l)}),(0,d.jsx)("meta",{property:"og:image:height",content:"".concat(n)}),(0,d.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,d.jsx)("meta",{name:"twitter:description",content:h}),(0,d.jsx)("meta",{name:"twitter:title",content:q}),(0,d.jsx)("meta",{name:"twitter:image",content:r}),(0,d.jsx)("title",{children:q})]})}},50665:function(a,b,c){var d=c(85893);function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c(67294),b.Z=function(a){return(0,d.jsx)("svg",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){e(a,b,c[b])})}return a}({viewBox:"0 0 320 512",role:"img"},a,{children:(0,d.jsx)("path",{fill:"currentColor",d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})}))}},9123:function(a,b,c){var d=c(85893),e=c(67294),f=c(94184),g=c.n(f),h=c(50665);function i(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var j=(0,e.forwardRef)(function(a,b){var c=a.target,e=a.rel,f=a.children,j=a.isExternal,k=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["target","rel","children","isExternal"]);return(0,d.jsxs)("a",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){i(a,b,c[b])})}return a}({ref:b,className:g()("group inline-flex items-center font-normal select-none","dark:hover:text-white","transition-colors duration-300 hover:text-black group-hover:text-black","motion-reduce:transition-none"),target:j?"_blank":c,rel:j?"noopener noreferrer nofollow":e},k,{children:[f,(0,d.jsx)(h.Z,{className:g()("inline-block w-2 h-2 ml-2 text-black opacity-30","dark:text-white","transform transition duration-300 group-hover:translate-x-1.5 group-hover:opacity-100","motion-reduce:transition-none","sm:w-2.5 sm:h-2.5 sm:ml-2.5","md:w-3 md:h-3 md:ml-3","xl:w-3.5 xl:h-3.5")})]}))});j.displayName="TextArrowLink",b.Z=j}}])