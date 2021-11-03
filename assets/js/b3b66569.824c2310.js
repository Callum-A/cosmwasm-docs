(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4901],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},787:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=n(4034),o=n(9973),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:2},l="Installation",u={unversionedId:"getting-started/installation",id:"version-0.16/getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"In this section, we will gear up your workhorse for developing, deploying and, enjoying smart contracts on Cosmos SDK.",source:"@site/docs_versioned_docs/version-0.16/02-getting-started/02-installation.md",sourceDirName:"02-getting-started",slug:"/getting-started/installation",permalink:"/docs/0.16/getting-started/installation",editUrl:"https://github.com/InterWasm/docs/edit/main/docs_versioned_docs/version-0.16/02-getting-started/02-installation.md",tags:[],version:"0.16",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.16/docsSidebar",previous:{title:"Your First Contract",permalink:"/docs/0.16/getting-started/intro"},next:{title:"Setting Up Environment",permalink:"/docs/0.16/getting-started/setting-env"}},d=[{value:"Go",id:"go",children:[],level:2},{value:"Rust",id:"rust",children:[{value:"Installing Rust in Linux and Mac",id:"installing-rust-in-linux-and-mac",children:[],level:3},{value:"Installing Rust in Windows 10",id:"installing-rust-in-windows-10",children:[],level:3}],level:2},{value:"wasmd",id:"wasmd",children:[],level:2},{value:"Further Information on the Cosmos SDK",id:"further-information-on-the-cosmos-sdk",children:[],level:2},{value:"Setting up your IDE",id:"setting-up-your-ide",children:[],level:2}],p={toc:d};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,"In this section, we will gear up your workhorse for developing, deploying and, enjoying smart contracts on Cosmos SDK."),(0,i.kt)("h2",{id:"go"},"Go"),(0,i.kt)("p",null,"You can setup golang following ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki#working-with-go"},"official documentation"),". The latest\nversions of ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd"),"\nrequire go version ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.16.8+"),"."),(0,i.kt)("h2",{id:"rust"},"Rust"),(0,i.kt)("p",null,"Assuming you have never worked with rust, you will first need to install some tooling. The standard approach is to\nuse ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup")," to maintain dependencies and handle updating multiple versions of\n",(0,i.kt)("inlineCode",{parentName:"p"},"cargo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rustc"),", which you will be using."),(0,i.kt)("h3",{id:"installing-rust-in-linux-and-mac"},"Installing Rust in Linux and Mac"),(0,i.kt)("p",null,"First, ",(0,i.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"install rustup"),". Once installed, make sure you have the wasm32 target:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"rustup default stable\ncargo version\n# If this is lower than 1.51.0+, update\nrustup update stable\n\nrustup target list --installed\nrustup target add wasm32-unknown-unknown\n")),(0,i.kt)("h3",{id:"installing-rust-in-windows-10"},"Installing Rust in Windows 10"),(0,i.kt)("p",null,"First, download and execute ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup-init.exe")," from ",(0,i.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"rustup.rs"),"\nor ",(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"rust-lang.org"),"."),(0,i.kt)("p",null,"If requested, manually download and install Visual C++ Build Tools 2019,\nfrom ",(0,i.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"},"https://visualstudio.microsoft.com/visual-cpp-build-tools/"),' . Make sure "Windows 10 SDK" and "English language pack"\nare selected.'),(0,i.kt)("p",null,"Continue running ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup-init.exe"),", and proceed with the installation."),(0,i.kt)("p",null,"Optionally:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download and install ",(0,i.kt)("a",{parentName:"li",href:"https://www.vim.org/download.php#pc"},"gvim"),", and modify the Env vars to add \\<gvim folder",">"," to\nthe PATH."),(0,i.kt)("li",{parentName:"ul"},"Download and install ",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"git for windows"),". Modify the Env vars to add \\<git\nfolder",">","\\bin to PATH."),(0,i.kt)("li",{parentName:"ul"},"Turn on Developer Mode (Settings -> Update and Security: For Developers) and enable Device Discovery, to be able to\naccess the Windows 10 server through\nssh (",(0,i.kt)("a",{parentName:"li",href:"https://www.ctrl.blog/entry/how-to-win10-ssh-service.html#section-mssshserv-enable"},"https://www.ctrl.blog/entry/how-to-win10-ssh-service.html#section-mssshserv-enable"),").")),(0,i.kt)("p",null,"Install the wasm32 target:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"rustup default stable\ncargo version\n# If this is lower than 1.53.0, update\nrustup update stable\n\nrustup target list --installed\nrustup target add wasm32-unknown-unknown\n")),(0,i.kt)("p",null,"For those new to rust, the ",(0,i.kt)("inlineCode",{parentName:"p"},"stable")," channel comes out every 6 weeks with a stable release. The ",(0,i.kt)("inlineCode",{parentName:"p"},"nightly")," channel is the\nbleeding edge and not only is it a version or two ahead (for testing), but it allows some extra unstable features, whose\nAPIs may change. For compiling ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm"),", you will want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"stable"),". We use ",(0,i.kt)("inlineCode",{parentName:"p"},"nightly")," to compile the runtime\nfor ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd"),", which needs it for the singlepass compiler with gas metering and more."),(0,i.kt)("h2",{id:"wasmd"},"wasmd"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," is the backbone of CosmWasm platform. It is the implementation of a Cosmoszone with wasm smart contracts\nenabled."),(0,i.kt)("p",null,"This code was forked from the ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmos/gaia")," repository as a basis and then added x/wasm and cleaned up many\ngaia-specific files. However, the wasmd binary should function just like gaiad except for the addition of the x/wasm\nmodule."),(0,i.kt)("p",null,"If you intend to develop or edit a contract, you need wasmd."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/CosmWasm/wasmd.git\ncd wasmd\n# replace the v0.18.0 with the most stable version on https://github.com/CosmWasm/wasmd/releases\ngit checkout v0.18.0\nmake install\n\n# verify the installation\nwasmd version\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," If you have any problems here, check your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"make install")," will copy ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," to\n",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin")," by default, please make sure that is set up in your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," as well, which should be the case in general\nfor building Go code from source."))),(0,i.kt)("h2",{id:"further-information-on-the-cosmos-sdk"},"Further Information on the Cosmos SDK"),(0,i.kt)("p",null,"These represent an instance of a blockchain that utilizes all of the stable features of\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos SDK"),". As such, ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," have all the same features (plus WASM smart\ncontracts obviously). If you'd like to learn more about accessing those features take a look at\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/tree/main/docs/gaia-tutorials"},"Gaia docs"),". If you'd like to learn more about getting\nstarted with the Cosmos SDK in general, take a look at the series of\n",(0,i.kt)("a",{parentName:"p",href:"https://tutorials.cosmos.network/"},"Tutorials")," that show how to build custom modules for application-specific\nblockchains."),(0,i.kt)("h2",{id:"setting-up-your-ide"},"Setting up your IDE"),(0,i.kt)("p",null,"We will need a good editor to guide us through the experience. We highly recommend plugins that help you learn syntax,\nespecially when just starting rust. There are two free editor environments we recommend, choose the one that is more\nfamiliar to you."),(0,i.kt)("p",null,"If you use VSCode (",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Download link"),") you just need to add the rust plugin. This\nis the best supported environment for RLS (Rust Language Server) and uses the rust compiler to type-check all your code\non save. This gives the same error messages as the actual compiler would and highlights along the line of the code, but\nit can be a bit slow to respond sometime (as it runs the compiler). It is quite good, and if you are used to VSCode, I\nhighly recommend it:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=rust-lang.rust"},"RLS for VSCode")),(0,i.kt)("p",null,"The other option I can recommend it Intellij IDEA Community\nEdition (",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/download/"},"Download link"),"), along with the Rust Plugin. This has very nice and\nquick support for many language features directly inline. In particular, it shows the inferred types along variables,\nwhich can be very helpful, especially when working with (nested) generics. It catches most syntax errors very quickly,\nbut not all of them. Which means sometimes you have to look at the compile failures to find the errors. If you are\ncoming from another Intellij product (eg. Goland), I recommend this approach:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://intellij-rust.github.io/"},"RUST for Intellij")),(0,i.kt)("p",null,"There are many more editors out there and some have varying degrees of rust support, at least syntax highlighting, but I\nwould recommend trying one of the two above, especially if you are new to rust. Once you are confident in the language,\nyou can always use another editor and customize it to your liking."))}c.isMDXComponent=!0}}]);