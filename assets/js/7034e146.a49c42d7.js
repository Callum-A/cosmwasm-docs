(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9863],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},419:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(4034),o=n(9973),a=(n(7294),n(3905)),p=["components"],i={sidebar_position:4},l="Bootstrap dApp",c={unversionedId:"frontend-dapp/bootstrap-dapp",id:"frontend-dapp/bootstrap-dapp",isDocsHomePage:!1,title:"Bootstrap dApp",description:"There are two approaches to bootstrap a new dApp: as a lerna package in the monorepo or as a standalone app.",source:"@site/tutorials/frontend-dapp/bootstrap-dapp.md",sourceDirName:"frontend-dapp",slug:"/frontend-dapp/bootstrap-dapp",permalink:"/tutorials/frontend-dapp/bootstrap-dapp",editUrl:"https://github.com/InterWasm/docs/edit/main/tutorials/frontend-dapp/bootstrap-dapp.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorials",previous:{title:"Cosmic dApp design",permalink:"/tutorials/frontend-dapp/cosmicdapp-design"},next:{title:"Develop dApp",permalink:"/tutorials/frontend-dapp/dapp-development"}},s=[{value:"Monorepo template",id:"monorepo-template",children:[],level:2},{value:"Standalone template",id:"standalone-template",children:[],level:2}],d={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bootstrap-dapp"},"Bootstrap dApp"),(0,a.kt)("p",null,"There are two approaches to bootstrap a new dApp: as a lerna package in the monorepo or as a standalone app."),(0,a.kt)("h2",{id:"monorepo-template"},"Monorepo template"),(0,a.kt)("p",null,"With this approach, we'll create another lerna package in the ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/")," directory that will use the local ",(0,a.kt)("inlineCode",{parentName:"p"},"logic"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"design")," packages as dependencies."),(0,a.kt)("p",null,"For that, you only need to copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"_template")," directory into ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/")," and rename it to ",(0,a.kt)("inlineCode",{parentName:"p"},"balance-checker"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/CosmWasm/dApps.git\ncd dApps\ncp -r _template packages/balance-checker\n")),(0,a.kt)("p",null,"In the next section we'll start by customizing it to our needs."),(0,a.kt)("h2",{id:"standalone-template"},"Standalone template"),(0,a.kt)("p",null,"\ud83d\udc77 Coming soon!"))}u.isMDXComponent=!0}}]);