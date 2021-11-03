(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1877],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4756:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(4034),o=n(9973),s=(n(7294),n(3905)),i=["components"],r={title:"cw20-base Tutorial",sidebar_position:3},l="CW20-base Tutorial",c={unversionedId:"cw20/cw20-base-tutorial",id:"cw20/cw20-base-tutorial",isDocsHomePage:!1,title:"cw20-base Tutorial",description:"This is a simple tutorial showing you how to use of powerful node REPL to interact with a cw20 token contract (fungible",source:"@site/cw-plus/cw20/cw20-base-tutorial.md",sourceDirName:"cw20",slug:"/cw20/cw20-base-tutorial",permalink:"/cw-plus/0.9.0/cw20/cw20-base-tutorial",editUrl:"https://github.com/InterWasm/docs/edit/main/cw-plus/cw20/cw20-base-tutorial.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"cw20-base Tutorial",sidebar_position:3},sidebar:"cwPlus",previous:{title:"cw20-base Spec",permalink:"/cw-plus/0.9.0/cw20/cw20-base-spec"},next:{title:"cw20-bonding Spec",permalink:"/cw-plus/0.9.0/cw20/cw20-bonding-spec"}},d=[{value:"Connecting to the chain",id:"connecting-to-the-chain",children:[],level:2},{value:"Reloading your Wallet",id:"reloading-your-wallet",children:[],level:2},{value:"Sending cw20 Tokens",id:"sending-cw20-tokens",children:[],level:2},{value:"Upload and Instantiate a Contract",id:"upload-and-instantiate-a-contract",children:[{value:"Example: STAR",id:"example-star",children:[],level:3},{value:"Try this at home: MINE",id:"try-this-at-home-mine",children:[],level:3}],level:2},{value:"Using a contract",id:"using-a-contract",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cw20-base-tutorial"},"CW20-base Tutorial"),(0,s.kt)("p",null,"This is a simple tutorial showing you how to use of powerful node REPL to interact with a cw20 token contract (fungible\ntokens, like ERC20)."),(0,s.kt)("p",null,"I will walk you through uploading contract code and creating a concrete instance (the same ",(0,s.kt)("inlineCode",{parentName:"p"},"cw20-base"),"\nwasm code can be reused to create dozens of token contracts with different symbols and distributions). Then I will show\nyou how to easily interact with this contract. As JSON manipulation and local variables are not so much fun in BASH, we\nuse the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmjs/tree/master/packages/cli"},(0,s.kt)("inlineCode",{parentName:"a"},"@cosmjs/cli")),"\ntool instead of the ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmd")," CLI tool."),(0,s.kt)("p",null,"But, before we get into the fun part of playing with the smart contracts, I want to make sure you know how to use your\ntools and not loose your private keys."),(0,s.kt)("p",null,"You must have Node 10+ installed locally to run it. It has been tested on Ubuntu, and may not work properly on Windows (\nwe assume a HOME environmental variable). PRs welcome."),(0,s.kt)("h2",{id:"connecting-to-the-chain"},"Connecting to the chain"),(0,s.kt)("p",null,"The first step before doing anything is ensuring we can create an account and connect to the chain. You will always use\nthe following command to start up the ",(0,s.kt)("inlineCode",{parentName:"p"},"@cosmjs/cli")," with some cw20-specific helpers preloaded\n(in addition to all the general helpers it has)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npx @cosmjs/cli@^0.26 --init https://raw.githubusercontent.com/CosmWasm/cw-plus/v0.9.0/contracts/cw20-base/helpers.ts\n")),(0,s.kt)("p",null,"Once this downloads the source and starts up, you should see a bunch of yellow text (explaining what code is preloaded),\nfollowed by a familiar node prompt: ",(0,s.kt)("inlineCode",{parentName:"p"},">> "),". Please note this is a super-charged REPL, it allows the use of ",(0,s.kt)("inlineCode",{parentName:"p"},"await"),"\nto easily work with ",(0,s.kt)("inlineCode",{parentName:"p"},"Promises"),", and also does type-checks before executing code. You don't need to define types, but if\nyou type ",(0,s.kt)("inlineCode",{parentName:"p"},"client.getCodez()"),", you will get the helpful message:\n",(0,s.kt)("inlineCode",{parentName:"p"},"Property 'getCodez' does not exist on type 'SigningCosmWasmClient'. Did you mean 'getCodes'?"),", much better than the\ntypical ",(0,s.kt)("inlineCode",{parentName:"p"},"TypeError: client.getCodez is not a function"),"\nor worse ",(0,s.kt)("inlineCode",{parentName:"p"},"cannot call undefined"),"."),(0,s.kt)("p",null,"Without further ado, let's get to use it, and please do read the error messages:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const [addr, client] = await useOptions(pebblenetOptions).setup('password');\nclient.getAccount(addr);\n")),(0,s.kt)("p",null,"This will take a few seconds as we hit the faucet the first time to ensure you have some tokens in your account to pay\nfees. When it returns, you should see something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"{\n  address: 'wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp',\n  pubkey: {\n    type: 'tendermint/PubKeySecp256k1',\n    value: 'AkjSrJA0XT612qHvnHieHAebZ+cIA2jq3LRj0g4V/lOF'\n  },\n  accountNumber: 323,\n  sequence: 4\n}\n")),(0,s.kt)("h2",{id:"reloading-your-wallet"},"Reloading your Wallet"),(0,s.kt)("p",null,"You can keep typing in the shell, or close it and run some sections later. Always start off with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const [addr, client] = await useOptions(pebblenetOptions).setup(PASSWORD_HERE);\n")),(0,s.kt)("p",null,"to set up your client. ",(0,s.kt)("inlineCode",{parentName:"p"},"useOptions")," takes the pebblenet configuration from everything from URLs to tokens to\nbech32prefix. When you call ",(0,s.kt)("inlineCode",{parentName:"p"},"setup")," with a password, it checks for\n",(0,s.kt)("inlineCode",{parentName:"p"},"~/.pebblenet.key")," and creates a new key if it is not there, otherwise it loads the key from the file. Your private key (\nactually mnemonic) is stored encrypted, and you need the same password to use it again. Try ",(0,s.kt)("inlineCode",{parentName:"p"},"cat ~/.pebblenet.key")," to prove\nto yourself that it is indeed encrypted, or try reloading with a different password."),(0,s.kt)("p",null,"If you want the mnemonic, you can recover it at anytime, as long as you still have the file and the password. You could\nuse this later to recover, or use the same mnemonic to import the key into the ",(0,s.kt)("inlineCode",{parentName:"p"},"pebblenet")," cli tool."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"useOptions(pebblenetOptions).recoverMnemonic(YOUR_PASSWORD_HERE)\n")),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This command saves the key to ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.pebblenet.key")," encrypted. If you forget the password, either delete it or pass\na\n",(0,s.kt)("inlineCode",{parentName:"p"},"filename")," along with a password to create a new key."))),(0,s.kt)("p",null,"Also, try this with a invalid password and see how it fails."),(0,s.kt)("p",null,"Now that you feel a bit more secure about your keys (and ability to load them later), let's get into working with some\ncontracts."),(0,s.kt)("h2",{id:"sending-cw20-tokens"},"Sending cw20 Tokens"),(0,s.kt)("p",null,"Now that you have set up your client, let's get going and try out the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/tree/master/contracts/cw20-base"},(0,s.kt)("inlineCode",{parentName:"a"},"cw20-base")),"\ntoken contract, which implements the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/master/packages/cw20/README.md"},(0,s.kt)("inlineCode",{parentName:"a"},"cw20")," spec"),"."),(0,s.kt)("p",null,"We will show how to upload the compiled wasm code, instantiate your own contract (possibly reusing code), and then mint\nand transfer tokens on that contract."),(0,s.kt)("h2",{id:"upload-and-instantiate-a-contract"},"Upload and Instantiate a Contract"),(0,s.kt)("p",null,"I will walk you though how to set up an example cw20 contract on Pebblenet."),(0,s.kt)("h3",{id:"example-star"},"Example: STAR"),(0,s.kt)("p",null,'The first contract I uploaded was STAR tokens, or "Golden Stars" to be distribute to the\n',(0,s.kt)("a",{parentName:"p",href:"https://block-explorer.pebblenet.cosmwasm.com/validators"},"first 3 validators")," on the network."),(0,s.kt)("p",null,"Please do not copy this verbatum, but look to see how such a contract is setup and deployed the first time."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const [addr, client] = await useOptions(pebblenetOptions).setup(PASSWORD_HERE);\n\nconst cw20 = CW20(client, pebblenetOptions.fees);\nconst codeId = await cw20.upload(addr);\nconsole.log(`CodeId: ${codeId}`);\n// output: 55\n\n// enable REPL editor mode to edit multiline code then execute\n.editor\nconst initMsg = {\n  name: "Golden Stars",\n  symbol: "STAR",\n  decimals: 2,\n  // list of all validator self-delegate addresses - 100 STARs each!\n  initial_balances: [\n    {address: "wasm13krn38qhu83y5xvmjgydnk5vjau2u3c0tv5jsu", amount: "10000"},\n    {address: "wasm1ppgpwep3yzh8w3d89xlzlens3420j5vs5q3p4j", amount: "10000"},\n    {address: "wasm1fnx5jzqsdkntlq2nspjgswtezf45u5ug3kq9sw", amount: "10000"},\n  ],\n  mint: {\n    minter: addr,\n  },\n};\n// exit editor using `^D` and execute entered code\n^\nD\n\nconst contract = await cw20.instantiate(addr, codeId, initMsg, "STAR");\nconsole.log(`Contract: ${contract.contractAddress}`);\n// Contract: wasm14wm5jvsm6r896tcqsx9dlxc8h0w2mg5de39dsm\n\nconsole.log(await contract.balance("wasm13krn38qhu83y5xvmjgydnk5vjau2u3c0tv5jsu"));\n// 10000\nconsole.log(await contract.balance());\n// 0\n')),(0,s.kt)("h3",{id:"try-this-at-home-mine"},"Try this at home: MINE"),(0,s.kt)("p",null,"Now that we have that uploaded, we can easily make a second contract. This one, please do run through and customize the\nfield names and token amounts before entering them."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const [addr, client] = await useOptions(pebblenetOptions).setup(PASSWORD_HERE);\nconst cw20 = CW20(client, pebblenetOptions.fees);\n\n.editor\nconst initMsg = {\n  name: "My Coin",\n  symbol: "MINE",\n  decimals: 6,\n  // list of all validator self-delegate addresses - 100 STARs each!\n  initial_balances: [\n    {address, amount: "12345678000"},\n  ],\n  mint: {\n    minter: address,\n    cap: "99900000000"\n  },\n};\n^\nD\n\nconst codeId = 55;\nconst mine = await cw20.instantiate(addr, codeId, initMsg, "MINE");\nconsole.log(`Contract: ${mine.contractAddress}`);\n// Contract: wasm10ajume5hphs9gcrpl9mw2m96fv7qu0q7esznj2\n\n// now, check the configuration\nmine.balance();\nmine.tokenInfo()\nmine.minter()\n')),(0,s.kt)("p",null,"Look, you're rich now! Time to share the wealth."),(0,s.kt)("h2",{id:"using-a-contract"},"Using a contract"),(0,s.kt)("p",null,"In this section, we will show you how to use your newly constructed token. You can keep typing along in the same REPL\nthat you used to create the ",(0,s.kt)("inlineCode",{parentName:"p"},"MINE"),"\ntokens (or whatever better name you invented), but if you closed it down and come back, here's how to re-connect:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const [addr, client] = await useOptions(pebblenetOptions).setup(PASSWORD_HERE);\nconst cw20 = CW20(client, pebblenetOptions.fees);\n\n// if you forgot your address, but remember your label, you can find it again\nconst contracts = await client.getContracts(55)\ncontracts\nconst contractAddress = contracts.filter(x => x.label === 'MINE')[0].address;\n\n// otherwise, you can just cut and paste from before\nconst contractAddress = \"wasm14wm5jvsm6r896tcqsx9dlxc8h0w2mg5de39dsm\"\n\n// now, connect to that contract and make sure it is yours\nconst mine = cw20.use(contractAddress);\nmine.tokenInfo()\nmine.minter()\nmine.balance()\n")),(0,s.kt)("p",null,"Okay, you are connected to your contract. Let's see what cw20 is capable of. Here I will show you how you can mint\ntokens (you did give yourself that special permission on init, right?) and transfer tokens to other users."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const someone = "wasm13nt9rxj7v2ly096hm8qsyfjzg5pr7vn56p3cay";\nconst other = "wasm1ve2n9dd4uy48hzjgx8wamkc7dp7sfdv82u585d";\n\n// right now, only you have tokens\nmine.balance()\nmine.balance(someone)\nmine.balance(other)\n// and watch the total\nmine.tokenInfo()\n\n// let\'s mint some tokens for someone\nmine.mint(addr, someone, "999888000")\n// Bonus, take the tx hash printed out and cut-paste that into https://bigdipper.wasmnet.cosmwasm.com\n// eg 26D5514CF437EE584793768B56CB4E605F1F6E61FC0123030DC64E08E2EE97FA\n\n// See balances updated\nmine.balance(someone)\nmine.balance()\n// and the supply goes up\nmine.tokenInfo()\n\n// Okay, now let\'s transfer some tokens... that is the more normal one, right?\nmine.transfer(addr, other, "4567000");\n// eg. 4A76EFFEB09C82D0FEB97C3B5A9D5BADB6E9BD71F4EF248A3EF8B232C2F7262A\nmine.balance(other)\nmine.balance()\n')))}p.isMDXComponent=!0}}]);