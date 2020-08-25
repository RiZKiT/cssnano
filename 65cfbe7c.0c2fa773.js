(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{125:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return l})),a.d(e,"rightToc",(function(){return i})),a.d(e,"default",(function(){return j}));var n=a(2),r=a(6),b=(a(0),a(176)),c={id:"what-are-optimisations",title:"Optimisations",layout:"Guide",order:3},l={id:"what-are-optimisations",title:"Optimisations",description:"What are optimisations?",source:"@site/docs/what_are_optimisations.md",permalink:"/docs/what-are-optimisations",editUrl:"https://github.com/cssnano/cssnano/edit/master/website/docs/what_are_optimisations.md",lastUpdatedBy:"Anix",lastUpdatedAt:1598351464,sidebar:"docs",previous:{title:"Config Files",permalink:"/docs/config-file"},next:{title:"Presets",permalink:"/docs/presets"}},i=[{value:"What are optimisations?",id:"what-are-optimisations",children:[]},{value:"What optimisations do you support?",id:"what-optimisations-do-you-support",children:[]}],O={rightToc:i};function j(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(b.b)("wrapper",Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"what-are-optimisations"},"What are optimisations?"),Object(b.b)("p",null,"An optimisation is a module that performs a transform on some CSS code in order\nto reduce its size, or failing this, the final gzip size of the CSS. Each\noptimisation is performed by either one module or a few modules working\ntogether."),Object(b.b)("p",null,"Due to the nature of dividing cssnano's responsibilities across several modules,\nthere will be some cases where using a transform standalone will not produce\nthe most optimal output. For example, postcss-colormin will not trim whitespace\ninside color functions as this is handled by postcss-normalize-whitespace."),Object(b.b)("h2",{id:"what-optimisations-do-you-support"},"What optimisations do you support?"),Object(b.b)("p",null,"The optimisations are different depending on which preset cssnano is configured with; with the default preset, we offer safe transforms only."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"advanced"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"lite"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/autoprefixer"}),"autoprefixer")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/cssdeclarationsorter"}),"cssDeclarationSorter")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/rawcache"}),"rawCache")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/calc"}),"calc")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/colormin"}),"colormin")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/convertvalues"}),"convertValues")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/discardcomments"}),"discardComments")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/discardduplicates"}),"discardDuplicates")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/discardempty"}),"discardEmpty")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/discardoverridden"}),"discardOverridden")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/discardunused"}),"discardUnused")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/mergeidents"}),"mergeIdents")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/mergelonghand"}),"mergeLonghand")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/mergerules"}),"mergeRules")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/minifyfontvalues"}),"minifyFontValues")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/minifygradients"}),"minifyGradients")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/minifyparams"}),"minifyParams")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/minifyselectors"}),"minifySelectors")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/normalizecharset"}),"normalizeCharset")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/normalizedisplayvalues"}),"normalizeDisplayValues")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/normalizepositions"}),"normalizePositions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/normalizerepeatstyle"}),"normalizeRepeatStyle")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/normalizestring"}),"normalizeString")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/normalizetimingfunctions"}),"normalizeTimingFunctions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/normalizeunicode"}),"normalizeUnicode")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/normalizeurl"}),"normalizeUrl")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/normalizewhitespace"}),"normalizeWhitespace")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/orderedvalues"}),"orderedValues")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/reduceidents"}),"reduceIdents")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/reduceinitial"}),"reduceInitial")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/reducetransforms"}),"reduceTransforms")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/svgo"}),"svgo")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/uniqueselectors"}),"uniqueSelectors")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/optimisations/zindex"}),"zindex")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u274c")))),Object(b.b)("p",null,"You can read more about presets in our ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/presets"}),"presets guide"),"."))}j.isMDXComponent=!0},176:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},b=Object.keys(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var O=r.a.createContext({}),j=function(t){var e=r.a.useContext(O),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},o=function(t){var e=j(t.components);return r.a.createElement(O.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,b=t.originalType,c=t.parentName,O=i(t,["components","mdxType","originalType","parentName"]),o=j(a),d=n,m=o["".concat(c,".").concat(d)]||o[d]||p[d]||b;return a?r.a.createElement(m,l(l({ref:e},O),{},{components:a})):r.a.createElement(m,l({ref:e},O))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var b=a.length,c=new Array(b);c[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:n,c[1]=l;for(var O=2;O<b;O++)c[O]=a[O];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);