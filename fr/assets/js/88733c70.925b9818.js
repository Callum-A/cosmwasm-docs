(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[470],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),y=o,f=m["".concat(c,".").concat(y)]||m[y]||u[y]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3885:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(4034),o=r(9973),a=(r(7294),r(3905)),i=["components"],s={title:"IBC Relayer",sidebar_position:2},c="Relayer",l={unversionedId:"ibc/relayer",id:"version-0.14/ibc/relayer",isDocsHomePage:!1,title:"IBC Relayer",description:"Interchain connections require external processes called [relayer](https://github.",source:"@site/docs_versioned_docs/version-0.14/04-ibc/02-relayer.md",sourceDirName:"04-ibc",slug:"/ibc/relayer",permalink:"/fr/docs/0.14/ibc/relayer",editUrl:"https://github.com/InterWasm/docs/edit/main/docs_versioned_docs/version-0.14/04-ibc/02-relayer.md",tags:[],version:"0.14",sidebarPosition:2,frontMatter:{title:"IBC Relayer",sidebar_position:2},sidebar:"version-0.14/docsSidebar",previous:{title:"IBC And CosmWasm",permalink:"/fr/docs/0.14/ibc/overview"},next:{title:"CW20 ICS20",permalink:"/fr/docs/0.14/ibc/cw20-ics20"}},p=[{value:"Relayer Implementations",id:"relayer-implementations",children:[],level:2},{value:"Setting Up a Relayer Process",id:"setting-up-a-relayer-process",children:[],level:2}],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relayer"},"Relayer"),(0,a.kt)("p",null,"Interchain connections require external processes called ","[relayer]","(",(0,a.kt)("a",{parentName:"p",href:"https://github."},"https://github."),"\ncom/cosmos/ics/tree/master/spec/ics-018-relayer-algorithms). You can setup and run your own, or just use existing\nconnections."),(0,a.kt)("h2",{id:"relayer-implementations"},"Relayer Implementations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/confio/ts-relayer"},"confio/ts-relayer")," TypeScript implementation of IBC Relayer. Customizable and\nReliable. Project state: ",(0,a.kt)("strong",{parentName:"li"},"ALPHA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/relayer"},"cosmos/relayer")," The Cosmos IBC relayer package contains a basic relayer\nimplementation that is meant for users wishing to relay packets/data between sets of IBC enabled chains. Project\nstate: ",(0,a.kt)("strong",{parentName:"li"},"ALPHA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/informalsystems/ibc-rs"},"informalsystems/ibc-rs"),": Rust implementation of IBC. Project state:\n",(0,a.kt)("strong",{parentName:"li"},"ALPHA"))),(0,a.kt)("h2",{id:"setting-up-a-relayer-process"},"Setting Up a Relayer Process"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Under Development")))}m.isMDXComponent=!0}}]);