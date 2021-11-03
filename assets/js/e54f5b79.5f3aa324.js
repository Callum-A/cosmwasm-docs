(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[626],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=a,d=h["".concat(c,".").concat(p)]||h[p]||u[p]||r;return n?o.createElement(d,i(i({ref:t},m),{},{components:n})):o.createElement(d,i({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8500:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return h}});var o=n(4034),a=n(9973),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},c="What are Multi-Chain Contracts?",l={unversionedId:"architecture/multichain",id:"version-0.16/architecture/multichain",isDocsHomePage:!1,title:"What are Multi-Chain Contracts?",description:"CosmWasm is designed and built from the ground-up to be a multi-chain solution for smart contracts. As it comes from the",source:"@site/docs_versioned_docs/version-0.16/03-architecture/01-multichain.md",sourceDirName:"03-architecture",slug:"/architecture/multichain",permalink:"/docs/0.16/architecture/multichain",editUrl:"https://github.com/InterWasm/docs/edit/main/docs_versioned_docs/version-0.16/03-architecture/01-multichain.md",tags:[],version:"0.16",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.16/docsSidebar",previous:{title:"Next Steps",permalink:"/docs/0.16/getting-started/next-steps"},next:{title:"Actor Model",permalink:"/docs/0.16/architecture/actor"}},m=[{value:"Different Chain, Same Contract",id:"different-chain-same-contract",children:[],level:2},{value:"Inter Blockchain Contracts",id:"inter-blockchain-contracts",children:[],level:2},{value:"Easy to Integrate",id:"easy-to-integrate",children:[],level:2},{value:"Platform to Build On",id:"platform-to-build-on",children:[],level:2}],u={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-are-multi-chain-contracts"},"What are Multi-Chain Contracts?"),(0,r.kt)("p",null,"CosmWasm is designed and built from the ground-up to be a multi-chain solution for smart contracts. As it comes from the\nCosmos ecosystem, it is no surprise that this is designed for networks of blockchains, rather than the traditional\nblockchain silos. But what exactly do we mean by multi-chain?"),(0,r.kt)("h2",{id:"different-chain-same-contract"},"Different Chain, Same Contract"),(0,r.kt)("p",null,"Since we make little requirements of the host application, it is easy for any Cosmos SDK app to embed the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm")," module\nand customize the permissioning or fees as they wish. All code is designed to be agnostic to the details of the\nunderlying chain, so just by writing a CosmWasm contract, you will soon be able to run on many different chains on the\nCosmos ecosystem."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://regen.network"},"Regen Network")," plans to include CosmWasm support, when they launch. And a number of other chains\nare looking into adding this support."),(0,r.kt)("h2",{id:"inter-blockchain-contracts"},"Inter Blockchain Contracts"),(0,r.kt)("p",null,"If you have heard anything about Cosmos, it is most likely\nabout ",(0,r.kt)("a",{parentName:"p",href:"https://cosmos.network/ibc/"},"Inter-Blockchain Communication"),". The power\nof ",(0,r.kt)("a",{parentName:"p",href:"https://tendermint.com"},"Tendermint BFT consensus")," and\ntheir ",(0,r.kt)("a",{parentName:"p",href:"https://blog.cosmos.network/what-does-the-launch-of-cosmos-mean-for-the-blockchain-ecosystem-952e14f67d0d"},"novel bonded proof of stake algorithm"),"\nare just the foundation on which they enable a revolutionary protocol to allow trustless message passing semantics\nbetween blockchains. No middleman, no timing issue, full security."),(0,r.kt)("p",null,"The potential means code on one chain can execute a transaction on another chain. But the code must be designed around\nsuch a message-passing idiom. CosmWasm fully embraces the ",(0,r.kt)("a",{parentName:"p",href:"./actor"},"actor model")," and as such naturally lends itself to\nsuch IBC. Fire and forget messages, rather than awaiting a promise and worrying about race conditions and reentrancy\nattacks. As IBC stabilizes, we will be adding first class support for IBC primitives into\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm"},"CosmWasm")," libraries, as well as\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/tree/master/x/wasm"},"Cosmos SDK module")," that hosts it."),(0,r.kt)("h2",{id:"easy-to-integrate"},"Easy to Integrate"),(0,r.kt)("p",null,"Another design goal of CosmWasm was to be more of a library than a framework. This means it has a small surface area of\nrequired APIs and you can opt-in to most of the code. It is there to make life easy for you, but you can easily build it\nyour own way as well. This has two big benefits:"),(0,r.kt)("p",null,"The first is that it makes it easier to add support for multiple languages to write contracts in. So we can add support\nfor say, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.assemblyscript.org/"},"AssemblyScript")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tinygo-org/tinygo"},"Go"),", for those who\nprefer not to write in Rust."),(0,r.kt)("p",null,"The second benefit is that since it makes limited demands of the host system, it can be embedded in other frameworks,\nnot just the Cosmos SDK. The core runtime logic ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/tree/master/lib/vm"},(0,r.kt)("inlineCode",{parentName:"a"},"cosmwasm-vm")),"\nis in Rust, and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/go-cosmwasm"},(0,r.kt)("inlineCode",{parentName:"a"},"go-cosmwasm"))," provides a generic Go binding to it. As Go and\nRust are two of the most popular languages to write blockchains, this opens the door for many integrations. Of course,\nunless your chain is running on top of ",(0,r.kt)("a",{parentName:"p",href:"https://tendermint.com"},"Tendermint")," or potentially another BFT Instant Finality\nConsensus algorithm like ",(0,r.kt)("a",{parentName:"p",href:"https://babble.io/"},"Babble"),", the contracts will not be able to participate with IBC."),(0,r.kt)("h2",{id:"platform-to-build-on"},"Platform to Build On"),(0,r.kt)("p",null,"CosmWasm doesn't want to lock you to one blockchain, or even one programming language. It is designed to be adaptable to\nmany environments, and ",(0,r.kt)("em",{parentName:"p"},"connect")," blockchains. This makes it a solid platform to build on. Even if one chain doesn't pan\nout well, all your smart contracts and dApps can quickly be transferred to another chain. Or if your app grows quickly,\nyou can launch your own chain to deploy the next version of the contracts, and transfer all existing tokens to your new\nchain via IBC. The possibilities are only limited by your imagination."))}h.isMDXComponent=!0}}]);