(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{93:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return s})),i.d(t,"toc",(function(){return l})),i.d(t,"default",(function(){return d}));var o=i(3),n=i(7),r=(i(0),i(96)),a={id:"crowdPooling",title:"DODO CrowdPooling",sidebar_label:"DODO CrowdPooling"},s={unversionedId:"crowdPooling",id:"crowdPooling",isDocsHomePage:!1,title:"DODO CrowdPooling",description:"What is CrowdPooling",source:"@site/docs/crowdPooling.md",slug:"/crowdPooling",permalink:"/docs/docs/crowdPooling",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/crowdPooling.md",version:"current",sidebar_label:"DODO CrowdPooling",sidebar:"someSidebar",previous:{title:"DODO Private Pool",permalink:"/docs/docs/privatePool"},next:{title:"\u5347\u4ef7\u4e0e\u56fa\u5b9a\u4ef7\u683c\u4f17\u7b79",permalink:"/docs/docs/upCrowdPooling"}},l=[{value:"What is CrowdPooling",id:"what-is-crowdpooling",children:[{value:"Pre-deposit Settlement",id:"pre-deposit-settlement",children:[]},{value:"liquidity protection",id:"liquidity-protection",children:[]},{value:"Fee",id:"fee",children:[]}]},{value:"Why Crowdpooling",id:"why-crowdpooling",children:[]}],c={toc:l};function d(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-is-crowdpooling"},"What is CrowdPooling"),Object(r.b)("p",null,"There are currently three major liquidity offering methods on decentralized exchanges (DEXs) today:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Bonding curve:")," The price of a token asset increases according to a pre-set pricing curve, known as a bonding curve, as the token supply increases. What always happens though, is that degens ape into contracts and frontrun everyone else, getting tokens at obscenely low prices. This frontrunning leads to large price discrepancies among participants. As a result, speculators are usually able to price out genuine investors who believe in the project visions under this scheme.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"AMM coupled with yield farming:")," Many token assets are being issued on AMM platforms, which almost always require liquidity be contributed in 50% base tokens (the tokens being issued/sold; the ask side) and 50% quote tokens (tokens in which the asset price is denominated, usually ETH and stablecoins; the bid side). But the reality is that the majority of project teams simply cannot afford to lock the bid-side liquidity required to sustain the market for prolonged periods of time. In other words, they don\u2019t have enough ETH (or stablecoins) to keep the market sufficiently liquid. Thus, pool 2 yield farming, a kind of liquidity farming that requires liquidity providers to be exposed to the tokens being issued, is often used to bootstrap bid-side liquidity. However, this AMM and yield farming combination is essentially an act of \u201crenting\u201d liquidity by constantly inflating the token supply. Yield farmers are mercenaries that have no vested interest in the projects themselves and will not hesitate to \u201cfarm and dump\u201d, which creates near-constant sell pressure on secondary markets.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Auction:")," Token auctions are inherently limited in that participants can only buy tokens but not sell them, resulting in an inefficient, illiquid market."))),Object(r.b)("p",null,"In short, mainstream DEX liquidity offering suffers from issues such as frontrunning, high cost of attracting liquidity, and/or insufficient liquidity."),Object(r.b)("p",null,"Here at DODO, we have been working hard to create a liquidity offering paradigm that works for everyone. It should be cheap and easy for project teams to onboard, while keeping market liquidity at a satisfactory level. As for traders/offering participants, they have to start on an equal footing with everyone else. \u201cThe early bird getting the worm\u201d seems to be the norm in crypto, but it doesn\u2019t have to be."),Object(r.b)("p",null,"Inspired by the call auction mechanism commonplace in securities markets, Crowdpooling is a portmanteau of \u201ccrowdfunding\u201d and \u201cliquidity pool\u201d. Here is a high-level description of how it works:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"You want to distribute your token asset. You supply a number of tokens and set a soft cap target. A portion of the tokens you supply will be used for crowdfunding and the rest will be used for ask-side liquidity in the pool. You set the initial offering price and a start time and end time for your Crowdpooling campaign. After that, anyone can participate in the offering by staking their capital.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once the Crowdpooling ends, participants can claim the tokens based on their stakes at the pre-defined initial offering price. If the Crowdpooling progress is over your soft cap target (i.e. there is more capital in the pool than your soft cap), then all participants claim the tokens proportional to their shares of the pool, at the initial offering price. Any difference between the amount participants staked and the actual cost of the tokens (i.e. initial offering price * the number of tokens actually received) is then refunded back to participants.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After the Crowdpooling phase ends, new public liquidity pools will be automatically set up with the capital raised and the tokens reserved for ask-side liquidity from step 1 and trading becomes available. The starting market price is the initial offering price from step 1."))),Object(r.b)("p",null,"At the same time, we add a pre-deposit settlement mechanism, liquidity protection mechanism and support flexible fee configuration."),Object(r.b)("h3",{id:"pre-deposit-settlement"},"Pre-deposit Settlement"),Object(r.b)("p",null,"We know that smart contracts are passively triggered, and a transaction cost is required. In the business of crowdpooling, a transaction needs to be send to change the state of the crowdpooling and then create an ",Object(r.b)("a",{parentName:"p",href:"./publicPool"},"dodo vending machine"),", Therefore, we have introduced pre-deposited settlement fees to cover the cost of this transaction."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"When the project party creates a crowdpooling, need to pre-deposit the settlement fee into the smart contract  (currently 0.2ETH)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"At the end of the crowdpooling, anyone (including project parties) can send a transaction to end the process and create a dodo vending machine. The person who executes the transaction will receive the pre-deposited settlement fee."))),Object(r.b)("h3",{id:"liquidity-protection"},"liquidity protection"),Object(r.b)("p",null,"There is also a liquidity protection period to prevent the project teams from rug pulling immediately."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The bid-side liquidity is established by proceeds from Crowdpooling participants, and the ask-side liquidity is established by tokens reserved for the pools from Crowdpooling."),Object(r.b)("li",{parentName:"ol"},"This initial liquidity belongs to creator of this Crowdpooling campaign, but the creator cannot remove this liquidity during the liquidity protection period."),Object(r.b)("li",{parentName:"ol"},"Anyone is able to provide liquidity to these pools AMM-style, with the added benefit of higher capital efficiency thanks to PMM."),Object(r.b)("li",{parentName:"ol"},"This resulting spot market follows the bonding curve method: when a trader buys tokens, the token price goes up; when a trade sells tokens, the token price goes down.")),Object(r.b)("h3",{id:"fee"},"Fee"),Object(r.b)("p",null,"We have a fee configuration function for crowdpooling, and any pools can set fees for different users. some use cases:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The crowdpooling sets a fee of 0% for privileged users and 100% for common users. To implement whitelist function."),Object(r.b)("li",{parentName:"ol"},"According to users' vDODO balances. Crowdpooling can be set different tiered rates of discounts for platform vDODO holders."),Object(r.b)("li",{parentName:"ol"},"The fee collected can be used to repurchase DODO in the secondary market to empower token value.")),Object(r.b)("h2",{id:"why-crowdpooling"},"Why Crowdpooling"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Unlike bonding curves, there is no frontrunning on Crowdpooling."),Object(r.b)("li",{parentName:"ol"},"Compared to AMM + pool 2 yield farming, with Crowdpooling there is no need to inflate the token supply in circulation to bootstrap temporary liquidity. Token assets are more likely to go into the hands of genuine investors rather than speculators or \u201cdumping farmers\u201d."),Object(r.b)("li",{parentName:"ol"},"Compared to simple auctions, Crowdpooling is much more than mere fundraising. The immediate end result of Crowdpooling is a trading pair with sufficient liquidity."),Object(r.b)("li",{parentName:"ol"},"Proceeds raised from Crowdpooling participants is not misused, but is instead used to create a liquidity market."),Object(r.b)("li",{parentName:"ol"},"For new assets, Crowdpooling is a one-stop token distribution solution. It builds a solid foundation for future influx of interest and capital, even if the bid size is small."),Object(r.b)("li",{parentName:"ol"},"For token assets that are already available for trading elsewhere but with limited liquidity, Crowdpooling provides an avenue for these assets to release significant ask-side liquidity and can act as a price source and guidance for external markets.")))}d.isMDXComponent=!0},96:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return b}));var o=i(0),n=i.n(o);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(i),h=o,b=p["".concat(a,".").concat(h)]||p[h]||u[h]||r;return i?n.a.createElement(b,s(s({ref:t},c),{},{components:i})):n.a.createElement(b,s({ref:t},c))}));function b(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=i[c];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,i)}h.displayName="MDXCreateElement"}}]);