(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6487],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8569:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(4034),r=n(9973),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:1},l="Anatomy of a Smart Contract",c={unversionedId:"develop-smart-contract/intro",id:"develop-smart-contract/intro",isDocsHomePage:!1,title:"Anatomy of a Smart Contract",description:"A smart contract can be considered an instance of a singleton object whose internal state is persisted on the",source:"@site/dev-academy/develop-smart-contract/01-intro.md",sourceDirName:"develop-smart-contract",slug:"/develop-smart-contract/intro",permalink:"/dev-academy/develop-smart-contract/intro",editUrl:"https://github.com/InterWasm/docs/edit/main/dev-academy/develop-smart-contract/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"devAcademy",previous:{title:"Hints",permalink:"/dev-academy/capture-the-flag/hints"},next:{title:"Develop Contract",permalink:"/dev-academy/develop-smart-contract/develop"}},u=[{value:"Start with a template",id:"start-with-a-template",children:[],level:2},{value:"Contract State",id:"contract-state",children:[],level:2},{value:"InstantiateMsg",id:"instantiatemsg",children:[{value:"Example",id:"example",children:[],level:3},{value:"Message Definition",id:"message-definition",children:[],level:3},{value:"Logic",id:"logic",children:[],level:3}],level:2},{value:"ExecuteMsg",id:"executemsg",children:[{value:"Example",id:"example-1",children:[{value:"Increment",id:"increment",children:[],level:4},{value:"Reset",id:"reset",children:[],level:4}],level:3},{value:"Message Definition",id:"message-definition-1",children:[],level:3},{value:"Logic",id:"logic-1",children:[],level:3}],level:2},{value:"QueryMsg",id:"querymsg",children:[{value:"Example",id:"example-2",children:[{value:"Balance",id:"balance",children:[],level:4}],level:3},{value:"Message Definition",id:"message-definition-2",children:[],level:3},{value:"Logic",id:"logic-2",children:[],level:3}],level:2},{value:"Building the Contract",id:"building-the-contract",children:[{value:"Optimizing your build",id:"optimizing-your-build",children:[],level:3}],level:2},{value:"Schemas",id:"schemas",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"anatomy-of-a-smart-contract"},"Anatomy of a Smart Contract"),(0,i.kt)("p",null,"A smart contract can be considered an instance of a singleton object whose internal state is persisted on the\nblockchain. Users can trigger state changes through sending it JSON messages, and users can also query its state through\nsending a request formatted as a JSON message."),(0,i.kt)("p",null,"As a smart contract writer, your job is to define 3 functions that define your smart contract's interface:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"instantiate()"),": a constructor which is called during contract instantiation to provide initial state"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"execute()"),": gets called when a user wants to invoke a method on the smart contract"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query()"),": gets called when a user wants to get data out of a smart contract")),(0,i.kt)("p",null,"In this section, we'll define our expected messages alongside their implementation."),(0,i.kt)("h2",{id:"start-with-a-template"},"Start with a template"),(0,i.kt)("p",null,"In your working directory, you'll want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo-generate")," to start your smart contract with the recommended folder\nstructure and build options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# install cargo-generate\ncargo install cargo-generate --features vendored-openssl\ncargo generate --git https://github.com/CosmWasm/cosmwasm-template.git --name my-first-contract\ncd my-first-contract\n")),(0,i.kt)("p",null,"This helps get you started by providing the basic boilerplate and structure for a smart contract. You'll find in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," file that the standard CosmWasm entry points ",(0,i.kt)("inlineCode",{parentName:"p"},"instantiate()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"query()")," are\nproperly exposed and hooked up."),(0,i.kt)("h2",{id:"contract-state"},"Contract State"),(0,i.kt)("p",null,"The starting template has the basic following state:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a singleton struct ",(0,i.kt)("inlineCode",{parentName:"li"},"State")," containing:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a 32-bit integer ",(0,i.kt)("inlineCode",{parentName:"li"},"count")),(0,i.kt)("li",{parentName:"ul"},"an address ",(0,i.kt)("inlineCode",{parentName:"li"},"owner"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// src/state.rs\nuse schemars::JsonSchema;\nuse serde::{Deserialize, Serialize};\n\nuse cosmwasm_std::{CanonicalAddr, Storage};\nuse cosmwasm_storage::{singleton, singleton_read, ReadonlySingleton, Singleton};\n\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct State {\n  pub count: i32,\n  pub owner: Addr,\n}\n")),(0,i.kt)("p",null,"Smart contracts have the ability to keep persistent state through native LevelDB, a bytes-based key-value\nstore. As such, any data you wish to persist should be assigned a unique key at which the data can be indexed and later\nretrieved."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// src/state.rs\npub const STATE: Item<State> = Item::new("state");\n')),(0,i.kt)("p",null,"In the example above, the key ",(0,i.kt)("inlineCode",{parentName:"p"},'"state"')," is used as prefix."),(0,i.kt)("p",null,"Data can only be persisted as raw bytes, so any notion of structure or data type must be expressed as a pair of\nserializing and deserializing functions. For instance, objects must be stored as bytes, so you must supply both the\nfunction that encodes the object into bytes to save it on the blockchain, as well as the function that decodes the bytes\nback into data types that your contract logic can understand. The choice of byte representation is up to you, so long as\nit provides a clean, bi-directional mapping."),(0,i.kt)("p",null,"Fortunately, the CosmWasm team have provided utility crates such\nas ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/tree/main/packages/storage"},"cosmwasm_storage"),', which provides convenient\nhigh-level abstractions for data containers such as a "singleton" and "bucket", which automatically provide\nserialization and deserialization for commonly-used types such as structs and Rust numbers.'),(0,i.kt)("p",null,"Notice how the ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," struct holds both ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"owner"),". In addition, the ",(0,i.kt)("inlineCode",{parentName:"p"},"derive")," attribute is applied to\nauto-implement some useful traits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Serialize"),": provides serialization"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Deserialize"),": provides deserialization"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Clone"),": makes our struct copyable"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Debug"),": enables our struct to be printed to string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PartialEq"),": gives us equality comparison"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JsonSchema"),": auto-generates a JSON schema for us")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Addr")," which represents a human-readable Bech32 address prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm..."),"."),(0,i.kt)("h2",{id:"instantiatemsg"},"InstantiateMsg"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"InstantiateMsg")," is provided when a user creates a contract on the blockchain through a ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgInstantiateContract"),". This\nprovides the contract with its configuration as well as its initial state."),(0,i.kt)("p",null,"On the CosmWasm, the uploading of a contract's code and the instantiation of a contract are regarded as\nseparate events, unlike on Ethereum. This is to allow a small set of vetted contract archetypes to exist as\nmultiple instances  sharing the same base code but configured with different parameters (imagine one canonical ERC20,\nand multiple tokens that use its code)."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"For our contract, we will expect a contract creator to supply the initial state in a JSON message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 100\n}\n')),(0,i.kt)("h3",{id:"message-definition"},"Message Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// src/msg.rs\n\nuse schemars::JsonSchema;\nuse serde::{Deserialize, Serialize};\n\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct InstantiateMsg {\n  pub count: i32,\n}\n\n")),(0,i.kt)("h3",{id:"logic"},"Logic"),(0,i.kt)("p",null,"Here we define our first entry-point, the ",(0,i.kt)("inlineCode",{parentName:"p"},"instantiate()"),", or where the contract is instantiated and passed its ",(0,i.kt)("inlineCode",{parentName:"p"},"InstantiateMsg"),". We\nextract the count from the message and set up our initial state, where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"count")," is assigned the count from the message"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"owner")," is assigned to the sender of the ",(0,i.kt)("inlineCode",{parentName:"li"},"MsgInstantiateContract"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// src/contract.rs\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn instantiate(\n  deps: DepsMut,\n  _env: Env,\n  info: MessageInfo,\n  msg: InstantiateMsg,\n) -> Result<Response, ContractError> {\n  let state = State {\n    count: msg.count,\n    owner: info.sender.clone(),\n  };\n  set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;\n  STATE.save(deps.storage, &state)?;\n\n  Ok(Response::new()\n    .add_attribute("method", "instantiate")\n    .add_attribute("owner", info.sender)\n    .add_attribute("count", msg.count.to_string()))\n}\n')),(0,i.kt)("h2",{id:"executemsg"},"ExecuteMsg"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," is a JSON message passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," function through a ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgExecuteContract"),". Unlike the ",(0,i.kt)("inlineCode",{parentName:"p"},"InstantiateMsg"),"\n, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," can exist as several different types of messages, to account for the different types of functions that\na smart contract can expose to a user. The ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," function demultiplexes these different types of messages to its\nappropriate message handler logic."),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("h4",{id:"increment"},"Increment"),(0,i.kt)("p",null,"Any user can increment the current count by 1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "increment": {}\n}\n')),(0,i.kt)("h4",{id:"reset"},"Reset"),(0,i.kt)("p",null,"Only the owner can reset the count to a specific number."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reset": {\n    "count": 5\n  }\n}\n')),(0,i.kt)("h3",{id:"message-definition-1"},"Message Definition"),(0,i.kt)("p",null,"As for our ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteMsg"),", we will use an ",(0,i.kt)("inlineCode",{parentName:"p"},"enum")," to multiplex over the different types of messages that our contract can\nunderstand. The ",(0,i.kt)("inlineCode",{parentName:"p"},"serde")," attribute rewrites our attribute keys in snake case and lower case, so we'll have ",(0,i.kt)("inlineCode",{parentName:"p"},"increment"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"Increment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Reset")," when serializing and deserializing across JSON."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// src/msg.rs\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum ExecuteMsg {\n  Increment {},\n  Reset { count: i32 },\n}\n')),(0,i.kt)("h3",{id:"logic-1"},"Logic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// src/contract.rs\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn execute(\n  deps: DepsMut,\n  _env: Env,\n  info: MessageInfo,\n  msg: ExecuteMsg,\n) -> Result<Response, ContractError> {\n  match msg {\n    ExecuteMsg::Increment {} => try_increment(deps),\n    ExecuteMsg::Reset { count } => try_reset(deps, info, count),\n  }\n}\n')),(0,i.kt)("p",null,"This is our ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," method, which uses Rust's pattern matching to route the received ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," to the appropriate\nhandling logic, either dispatching a ",(0,i.kt)("inlineCode",{parentName:"p"},"try_increment()")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"try_reset()")," call depending on the message received."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn try_increment(deps: DepsMut) -> Result<Response, ContractError> {\n  STATE.update(deps.storage, |mut state| -> Result<_, ContractError> {\n    state.count += 1;\n    Ok(state)\n  })?;\n\n  Ok(Response::new().add_attribute("method", "try_increment"))\n}\n')),(0,i.kt)("p",null,"It is quite straightforward to follow the logic of ",(0,i.kt)("inlineCode",{parentName:"p"},"try_increment()"),". We acquire a mutable reference to the storage to\nupdate the item located at key ",(0,i.kt)("inlineCode",{parentName:"p"},'"state"'),", made accessible through the ",(0,i.kt)("inlineCode",{parentName:"p"},"STATE")," convenience function defined in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"src/state.rs"),". We then update the present state's count by returning an ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok")," result with the new state. Finally, we\nterminate the contract's execution with an acknowledgement of success by returning an ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok")," result with the\ndefault ",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),"."),(0,i.kt)("p",null,"In this example, the default ",(0,i.kt)("inlineCode",{parentName:"p"},"Response")," is used for simplicity. However, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Response")," can be manually created to\nprovide the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"messages"),": a list of messages. This is where smart contracts execute other smart contracts or use native modules."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attributes"),": a list of key-value pairs to define emitted SDK events that can be subscribed to by clients and parsed by block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"events"),": Extra, custom events separate from the main ",(0,i.kt)("inlineCode",{parentName:"li"},"wasm")," one. These will have ",(0,i.kt)("inlineCode",{parentName:"li"},"wasm-")," prepended to the type.\nExplorers and applications to report important events or state changes that occurred during the execution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data"),": additional data that the contract return to client.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// src/contract.rs\npub fn try_reset(deps: DepsMut, info: MessageInfo, count: i32) -> Result<Response, ContractError> {\n  STATE.update(deps.storage, |mut state| -> Result<_, ContractError> {\n    if info.sender != state.owner {\n      return Err(ContractError::Unauthorized {});\n    }\n    state.count = count;\n    Ok(state)\n  })?;\n  Ok(Response::new().add_attribute("method", "reset"))\n}\n')),(0,i.kt)("p",null,"The logic for reset is very similar to increment -- except this time, we first check that the message sender is\npermitted to invoke the reset function."),(0,i.kt)("h2",{id:"querymsg"},"QueryMsg"),(0,i.kt)("h3",{id:"example-2"},"Example"),(0,i.kt)("p",null,"The template contract only supports one type of ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryMsg"),":"),(0,i.kt)("h4",{id:"balance"},"Balance"),(0,i.kt)("p",null,"The request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "get_count": {}\n}\n')),(0,i.kt)("p",null,"Which should return:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 5\n}\n')),(0,i.kt)("h3",{id:"message-definition-2"},"Message Definition"),(0,i.kt)("p",null,"To support queries against our contract for data, we'll have to define both a ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryMsg")," format (which represents\nrequests), as well as provide the structure of the query's output -- ",(0,i.kt)("inlineCode",{parentName:"p"},"CountResponse")," in this case. We must do this\nbecause ",(0,i.kt)("inlineCode",{parentName:"p"},"query()")," will send back information to the user through JSON in a structure and we must make the shape of our\nresponse known."),(0,i.kt)("p",null,"Add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"src/msg.rs"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// src/msg.rs\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum QueryMsg {\n  // GetCount returns the current count as a json-encoded number\n  GetCount {},\n}\n\n// We define a custom struct for each query response\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct CountResponse {\n  pub count: i32,\n}\n')),(0,i.kt)("h3",{id:"logic-2"},"Logic"),(0,i.kt)("p",null,"The logic for ",(0,i.kt)("inlineCode",{parentName:"p"},"query()")," should be similar to that of ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()"),", except that, since ",(0,i.kt)("inlineCode",{parentName:"p"},"query()")," is called without the\nend-user making a transaction, we omit the ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," argument as there is no information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// src/contract.rs\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {\n  match msg {\n    QueryMsg::GetCount {} => to_binary(&query_count(deps)?),\n  }\n}\n\nfn query_count(deps: Deps) -> StdResult<CountResponse> {\n  let state = STATE.load(deps.storage)?;\n  Ok(CountResponse { count: state.count })\n}\n')),(0,i.kt)("h2",{id:"building-the-contract"},"Building the Contract"),(0,i.kt)("p",null,"To build your contract, run the following command. This will check for any preliminary errors before optimizing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo wasm\n")),(0,i.kt)("h3",{id:"optimizing-your-build"},"Optimizing your build"),(0,i.kt)("p",null,"::: warning NOTE You will need ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," installed to run this command.\n:::"),(0,i.kt)("p",null,"You will need to make sure the output WASM binary is as small as possible in order to minimize fees and stay under the\nsize limit for the blockchain. Run the following command in the root directory of your Rust smart contract's project\nfolder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'docker run --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer:0.12.0\n')),(0,i.kt)("p",null,"This will result in an optimized build of ",(0,i.kt)("inlineCode",{parentName:"p"},"artifacts/my_first_contract.wasm")," in your working directory."),(0,i.kt)("p",null,"(Optional) Add the above command in ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," for quick access."),(0,i.kt)("p",null,"This allows the run custom script commands in a similar way as ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," in the Node ecosystem."),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo-run-script")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo install cargo-run-script\n")),(0,i.kt)("p",null,"Add the script in ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[package.metadata.scripts]\noptimize = """docker run --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer:0.12.0\n"""\n')),(0,i.kt)("p",null,"Run the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo run-script optimize\n")),(0,i.kt)("h2",{id:"schemas"},"Schemas"),(0,i.kt)("p",null,"In order to make use of JSON-schema auto-generation, we should register each of the data structures that we need schemas\nfor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// examples/schema.rs\n\nuse std::env::current_dir;\nuse std::fs::create_dir_all;\n\nuse cosmwasm_schema::{export_schema, remove_schemas, schema_for};\n\nuse my_first_contract::msg::{CountResponse, ExecuteMsg, InstantiateMsg, QueryMsg};\nuse my_first_contract::state::State;\n\nfn main() {\n  let mut out_dir = current_dir().unwrap();\n  out_dir.push("schema");\n  create_dir_all(&out_dir).unwrap();\n  remove_schemas(&out_dir).unwrap();\n\n  export_schema(&schema_for!(InstantiateMsg), &out_dir);\n  export_schema(&schema_for!(ExecuteMsg), &out_dir);\n  export_schema(&schema_for!(QueryMsg), &out_dir);\n  export_schema(&schema_for!(State), &out_dir);\n  export_schema(&schema_for!(CountResponse), &out_dir);\n}\n')),(0,i.kt)("p",null,"You can then build the schemas with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo schema\n")),(0,i.kt)("p",null,"Your newly generated schemas should be visible in your ",(0,i.kt)("inlineCode",{parentName:"p"},"schema/")," directory. The following is an example\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"schema/query_msg.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "QueryMsg",\n  "anyOf": [\n    {\n      "type": "object",\n      "required": [\n        "get_count"\n      ],\n      "properties": {\n        "get_count": {\n          "type": "object"\n        }\n      },\n      "additionalProperties": false\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"You can use an online tool such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.jsonschemavalidator.net/"},"JSON Schema Validator")," to test your input\nagainst the generated JSON schema."))}d.isMDXComponent=!0}}]);