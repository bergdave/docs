(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(110)),o={id:"dppForMM",title:"DODO Private Pool (DPP)",sidebar_label:"DODO Private Pool (DPP)"},c={unversionedId:"dppForMM",id:"dppForMM",isDocsHomePage:!1,title:"DODO Private Pool (DPP)",description:"Introduction",source:"@site/docs/dppForMM.md",slug:"/dppForMM",permalink:"/docs/docs/dppForMM",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/dppForMM.md",version:"current",sidebar_label:"DODO Private Pool (DPP)",sidebar:"someSidebar",previous:{title:"Audit",permalink:"/docs/docs/audit"},next:{title:"DODO Crowdpooling Whitelist Configuration",permalink:"/docs/docs/cpwl"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Configuration Instructions",id:"configuration-instructions",children:[{value:"Function Parameters",id:"function-parameters",children:[]}]},{value:"Appendix",id:"appendix",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"DODO V2\u2019s DODO Private Pool (DPP) is a highly customizable solution catered towards market makers who wish to operate their own liquidity pools. "),Object(i.b)("p",null,"With DPP, pool operators have complete freedom to customize their market-making experience on DODO, by configuring and modifying the following parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Trading fee rate"),Object(i.b)("li",{parentName:"ul"},"External oracle feed price, i, and"),Object(i.b)("li",{parentName:"ul"},"Price curve slippage coefficient, k")),Object(i.b)("p",null,"In addition, DPP also supports dynamic adjustment of the amount of capital in the pool. All these configurations and modifications can be made against smart contracts on-chain in a fully decentralized, permissionless manner."),Object(i.b)("h2",{id:"configuration-instructions"},"Configuration Instructions"),Object(i.b)("p",null,"In order to make changes to their pools, pool operators will need to invoke the ",Object(i.b)("inlineCode",{parentName:"p"},"resetDODOPrivatePool")," function in the ",Object(i.b)("inlineCode",{parentName:"p"},"DODO V2Proxy02")," contract (refer to the \u201cDeployment Information\u201d pages or the Appendix for contract addresses). See below for ",Object(i.b)("inlineCode",{parentName:"p"},"resetDODOPrivatePool"),"\u2019s function declaration. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    function resetDODOPrivatePool(\n        address dppAddress,\n        uint256[] memory paramList,  //0 - newLpFeeRate, 1 - newI, 2 - newK\n        uint256[] memory amountList, //0 - baseInAmount, 1 - quoteInAmount, 2 - baseOutAmount, 3- quoteOutAmount\n        uint8 flag, // 0 - ERC20, 1 - baseInETH, 2 - quoteInETH, 3 - baseOutETH, 4 - quoteOutETH\n        uint256 minBaseReserve,\n        uint256 minQuoteReserve,\n        uint256 deadLine\n    ) external;\n")),Object(i.b)("h3",{id:"function-parameters"},"Function Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"dppAddress"),": The DPP pool\u2019s contract address")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"paramList"),": An array of ",Object(i.b)("inlineCode",{parentName:"p"},"uint256")," containing three parameters, namely:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"paramList[0]"),": The first parameter is ",Object(i.b)("inlineCode",{parentName:"li"},"newLpFeeRate"),", which is the new trading fee rate that the pool will have after the function invocation. Decimals: 18, Range: ","[0, 1e18]",", where 0 represents 0% and 1e18 represents 100%."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"paramList[1]"),": The second parameter is ",Object(i.b)("inlineCode",{parentName:"li"},"newI"),", which is the new oracle feed price (i) that the pool will have after the function invocation. The oracle feed price is the baseToken price/quoteToken price ratio. Decimals: 18 - baseToken\u2019s decimals + quoteToken\u2019s decimals."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"paramList[2]"),": The third parameter is ",Object(i.b)("inlineCode",{parentName:"li"},"newK"),", which is the new slippage coefficient (k) that the pool\u2019s price curve will have after the function invocation. The slippage coefficient dictates how \u201cbent\u201d the price curve is. Decimals: 18, Range: ","[0, 1e18]",", where 0 represents a horizontal line as a price curve, and 1e18 represents a Uniswap-like, constant-product AMM price curve."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"amountList"),": An array of ",Object(i.b)("inlineCode",{parentName:"p"},"uint256")," containing the following parameters in order: ",Object(i.b)("inlineCode",{parentName:"p"},"baseInAmount"),", ",Object(i.b)("inlineCode",{parentName:"p"},"quoteInAmount"),", ",Object(i.b)("inlineCode",{parentName:"p"},"baseOutAmount"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"quoteOutAmount"),". Decimals for each of these parameters conform to the token decimals they represent, i.e., ",Object(i.b)("inlineCode",{parentName:"p"},"quoteInAmount")," has the same number of decimals as ",Object(i.b)("inlineCode",{parentName:"p"},"quoteToken"),".\n",Object(i.b)("inlineCode",{parentName:"p"},"baseInAmount")," and ",Object(i.b)("inlineCode",{parentName:"p"},"quoteInAmount")," represent the number of base tokens and quote tokens being added to the DPP pool, respectively. NOTE: Before adding these tokens, the function invoker must give token spend permissions to the ",Object(i.b)("inlineCode",{parentName:"p"},"DODOApprove")," contract (refer to the \u201cDeployment Information\u201d pages or the Appendix for contract addresses).\n",Object(i.b)("inlineCode",{parentName:"p"},"baseOutAmount"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"quoteOutAmount")," represent the number of base tokens and quote tokens being removed from the DPP pool, respectively.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"flag"),": A ",Object(i.b)("inlineCode",{parentName:"p"},"uint8")," used to flag whether wrapping/unwrapping is required for ETH"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0"),": base and quote tokens are both ERC-20"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1"),": base token being added to the pool is ETH, so the contract will wrap ETH into WETH"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"2"),": quote token being added to the pool is ETH, so the contract will wrap ETH into WETH"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"3"),": base token being removed from the pool is WETH, so the contract will unwrap WETH into ETH"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"4"),": quote token being removed from the pool is WETH, so the contract will unwrap WETH into ETH"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"minBaseReserve")," and ",Object(i.b)("inlineCode",{parentName:"p"},"minQuoteReserve"),": ",Object(i.b)("inlineCode",{parentName:"p"},"uint256")," used to reduce arbitrage opportunities for frontrunners and minimize risk. When the function invoker wants to modify parameters and submits the transaction for processing, the token price for the pool may change. This change opens a window for frontrunning bots to come in and perform arbitrage trading. With ",Object(i.b)("inlineCode",{parentName:"p"},"minBaseReserve")," and ",Object(i.b)("inlineCode",{parentName:"p"},"minQuoteReserve")," set, if after an on-chain transaction will cause the number of base tokens in the pool to go below ",Object(i.b)("inlineCode",{parentName:"p"},"minBaseReserve")," or the number of quote tokens in the pool to go below ",Object(i.b)("inlineCode",{parentName:"p"},"minQuoteReserve"),", the contract will revert this transaction, thus reducing arbitrage risk.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"deadline"),": ",Object(i.b)("inlineCode",{parentName:"p"},"uint256"),". The transaction will revert if this timestamp is exceeded."))),Object(i.b)("h2",{id:"appendix"},"Appendix"),Object(i.b)("p",null,"DODOV2Proxy Deployment Information"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ETH: ",Object(i.b)("a",{parentName:"li",href:"https://etherscan.io/address/0xa356867fDCEa8e71AEaF87805808803806231FdC"},"0xa356867fDCEa8e71AEaF87805808803806231FdC")),Object(i.b)("li",{parentName:"ul"},"BSC: ",Object(i.b)("a",{parentName:"li",href:"https://bscscan.com/address/0x8F8Dd7DB1bDA5eD3da8C9daf3bfa471c12d58486"},"0x8F8Dd7DB1bDA5eD3da8C9daf3bfa471c12d58486")," "),Object(i.b)("li",{parentName:"ul"},"HECO: ",Object(i.b)("a",{parentName:"li",href:"https://hecoinfo.com/address/0xAc7cC7d2374492De2D1ce21e2FEcA26EB0d113e7"},"0xAc7cC7d2374492De2D1ce21e2FEcA26EB0d113e7"))),Object(i.b)("p",null,"DODOApprove Deployment Information"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ETH: ",Object(i.b)("a",{parentName:"li",href:"https://etherscan.io/address/0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149"},"0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149")," "),Object(i.b)("li",{parentName:"ul"},"BSC: ",Object(i.b)("a",{parentName:"li",href:"https://bscscan.com/address/0xa128Ba44B2738A558A1fdC06d6303d52D3Cef8c1"},"0xa128Ba44B2738A558A1fdC06d6303d52D3Cef8c1")),Object(i.b)("li",{parentName:"ul"},"HECO: ",Object(i.b)("a",{parentName:"li",href:"https://hecoinfo.com/address/0x68b6c06Ac8Aa359868393724d25D871921E97293"},"0x68b6c06Ac8Aa359868393724d25D871921E97293")," ")),Object(i.b)("p",null,"DODOV2Proxy ABI "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'[\n    {\n      "inputs": [\n        {\n          "internalType": "address",\n          "name": "dppAddress",\n          "type": "address"\n        },\n        {\n          "internalType": "uint256[]",\n          "name": "paramList",\n          "type": "uint256[]"\n        },\n        {\n          "internalType": "uint256[]",\n          "name": "amountList",\n          "type": "uint256[]"\n        },\n        {\n          "internalType": "uint8",\n          "name": "flag",\n          "type": "uint8"\n        },\n        {\n          "internalType": "uint256",\n          "name": "minBaseReserve",\n          "type": "uint256"\n        },\n        {\n          "internalType": "uint256",\n          "name": "minQuoteReserve",\n          "type": "uint256"\n        },\n        {\n          "internalType": "uint256",\n          "name": "deadLine",\n          "type": "uint256"\n        }\n      ],\n      "name": "resetDODOPrivatePool",\n      "outputs": [],\n      "stateMutability": "payable",\n      "type": "function"\n    }\n]\n')))}s.isMDXComponent=!0}}]);