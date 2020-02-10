webpackJsonp([5],{198:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.TeamComponent=void 0;var s=n(103),l=i(s),c=n(105),u=i(c),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();n(104),n(106);var g=n(0),I=i(g),f=n(64),m=n(546),M=i(m),p=n(182),C=n(183),w=i(C),A=n(565),h=i(A),y=n(568),b=i(y),D=n(570),x=i(D),j=t.TeamComponent=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={bioIsVisible:!1,focusedPerson:null},e.focusPerson=function(t){e.setState({focusedPerson:t},function(){return e.setState({bioIsVisible:!0})})},e.unfocusPerson=function(){e.setState({bioIsVisible:!1}),setTimeout(function(){return e.setState({focusedPerson:null})},300)},e}return r(t,e),d(t,[{key:"renderPeople",value:function(e,t){var n=this;return e.map(function(e,i){return I.default.createElement(u.default,{key:i,xs:24,sm:12,md:12,lg:8},I.default.createElement(x.default,{data:e,focus:n.focusPerson.bind(n,e),type:t}))})}},{key:"render",value:function(){var e=this.state,t=e.bioIsVisible,n=e.focusedPerson,i=M.default.teamMembers,a=M.default.advisors;return I.default.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",width:"100%"}},I.default.createElement(f.Helmet,null,I.default.createElement("title",null,"MARKET Protocol - Team, Founders and Advisors"),I.default.createElement("meta",{name:"keywords",content:"MARKET Protocol People, MARKET Protocol Team, MARKET Protocol Advisors, MARKET Protocol Founders"}),I.default.createElement("meta",{name:"description",content:"MARKET Protocol People - Team, Founders and Advisors"})),I.default.createElement(b.default,null),I.default.createElement(p.Section,{bg:"#fff"},I.default.createElement(p.ContainerWrapper,null,I.default.createElement(p.SectionHeader,{color:"#000"},"Core Team"),I.default.createElement(l.default,{justify:"center",align:"middle"},this.renderPeople(i,"core")))),I.default.createElement(p.Section,{bg:"#f0f0f0"},I.default.createElement(p.ContainerWrapper,null,I.default.createElement(p.SectionHeader,{color:"#000"},"Advisors"),I.default.createElement(l.default,{justify:"center",align:"middle"},this.renderPeople(a,"advisors")))),I.default.createElement("div",{style:{width:"100%"}},I.default.createElement(w.default,{bg:"#fff"})),I.default.createElement("div",{className:["bio-wrap",t&&"visible"].join(" ")},I.default.createElement(h.default,{data:n||{},unfocus:this.unfocusPerson})))}}]),t}(I.default.Component);t.default=j},539:function(e,t){e.exports="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJtYXJrZXQtVGVhbSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTczNy4wMDAwMDAsIC0xMTEzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjc5LjAwMDAwMCwgMTExMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJlbWFpbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTguMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiwwIEM1LjM3MywwIDAsNS4zNzMgMCwxMiBDMCwxOC42MjYgNS4zNzMsMjQgMTIsMjQgQzE4LjYyNywyNCAyNCwxOC42MjYgMjQsMTIgQzI0LDUuMzczIDE4LjYyNywwIDEyLDAgWiIgaWQ9IkZpbGwtMSIgZmlsbD0iIzAwRTJDMSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjAwMDAwMCwgNy4wMDAwMDApIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMTAgNy44NDI4NTcxNCAwIDcuODQyODU3MTQgMCAxLjc2Nzg1NzE0IDUgNS44MiAxMCAxLjc2ODU3MTQzIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjkuOTkyODU3MTQgMC43IDUgNC43NDY0Mjg1NyAwLjAwNjQyODU3MTQzIDAuNyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},540:function(e,t){e.exports="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJtYXJrZXQtVGVhbSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcwOC4wMDAwMDAsIC0xMTEzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjc5LjAwMDAwMCwgMTExMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5rZWRpbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjkuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiwwIEM1LjM3MywwIDAsNS4zNzMgMCwxMiBDMCwxOC42MjcgNS4zNzMsMjQgMTIsMjQgQzE4LjYyNywyNCAyNCwxOC42MjcgMjQsMTIgQzI0LDUuMzczIDE4LjYyNywwIDEyLDAgWiIgaWQ9IkZpbGwtMSIgZmlsbD0iIzAwRTJDMSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy4wMDAwMDAsIDYuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCwxMCBMOC4wMDIsMTAgTDguMDAyLDcuMTM5IEM4LjAwMiw1LjI1NyA2LDUuNDE3IDYsNy4xMzkgTDYsMTAgTDQsMTAgTDQsNCBMNiw0IEw2LDUuMDkyIEM2Ljg3MiwzLjQ3NyAxMCwzLjM1NiAxMCw2LjY0MSBMMTAsMTAgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIsMy4xMDggQzEuMzkzLDMuMTA4IDAuOSwyLjYxMiAwLjksMiBDMC45LDEuMzg4IDEuMzkyLDAuODkxIDIsMC44OTEgQzIuNjA4LDAuODkxIDMuMSwxLjM4OCAzLjEsMiBDMy4xLDIuNjEyIDIuNjA3LDMuMTA4IDIsMy4xMDggWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMSAxMCAzIDEwIDMgNCAxIDQiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="},546:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(547),o=i(a),r=n(558),s=i(r),l={advisors:[{bio:'Erik Voorhees, CEO of leading digital asset exchange ShapeShift.io,        is among the top-recognized serial Bitcoin advocates and entrepreneurs,        understanding Bitcoin as one of the most important inventions ever created         by humanity. Erik’s former project, the groundbreaking gaming phenomenon SatoshiDICE,          was, at its peak, responsible for more than half of all Bitcoin transactions on Earth          and popularized the concept of "provable fairness." Having been a featured guest on          Bloomberg, Fox Business, CNBC, BBC Radio, The Peter Schiff Show, and numerous          Bitcoin and industry conferences, Erik humbly suggests that there is no such          thing as a "free market" when the institution of money itself is centrally planned and controlled.',email:"",img:s.default.Eric,linkedin:"https://www.linkedin.com/in/erikvoorhees/",name:"Erik Voorhees",title:"Founder and CEO, ShapeShift"},{bio:"Patrick Charles has over twenty years of experience building software in        a variety of industries including finance, education, health care and computer security. He        has worked as a technology leader, consultant, software architect, engineer and        researcher. Patrick is an open source contributor, has authored a number of technical        papers, is an inventor with two US patents and is co-author of the opening chapter in the        soon to be published book “Frontiers of Cyberlearning”.",email:"",img:s.default.PatrickCharles,linkedin:"https://www.linkedin.com/in/pchuck/",name:"Patrick Charles",title:"Data Science & Analytics Pipeline Architect"},{bio:"Josh started coding at the age of 10. Prior to Origin, he co-founded three        other venture-backed companies: EventVue, Torbit (acquired by Walmart Labs) & Forage.",email:"",img:s.default.JoshFraser,linkedin:"https://www.linkedin.com/in/joshuafraser/",name:"Josh Fraser",title:"Co-Founder, Origin Protocol"},{bio:"Based in Asia since 2004, Casper has worked as an investment banker,        tech entrepreneur, corporate executive and private equity investor. He is currently a        co-founder of Spartan Group, an investment management and advisory firm focusing on        blockchain technology. Casper co-heads Spartan’s advisory business, which works with        industry leaders in the blockchain and ICO space. Prior to Spartan, Casper spent 10 years        in the Investment Banking Division at Goldman Sachs in their London, Hong Kong, Beijing        and Singapore offices. Casper has been an active tech angel investor for over a decade,        and is an active blockchain and crypto investor.",email:"",img:s.default.CasperJohansen,linkedin:"https://www.linkedin.com/in/casperbjohansen",name:"Casper Johansen",title:"Co-Founder, Spartan Group"},{bio:"Brent has over 15 years of experience leading high impact growth        software companies, of which many have had successful exits. Brent is currently the        Chief Revenue Officer at Bread (BRD), one of the world's fastest growing crypto financial        platforms. Bread is considered a thought leader in the world of crypto, with over one        million users in over 140 countries. Prior to Bread, Brent worked in the Vista Equity        Partners portfolio where he helped drive two exits. Brent builds revenue engines and        helps develop growth strategies. When not at work, he helps advise a Silicon Valley         venture capital firm on early stage investments, and regularly speaks, mentors, and        attends global accelerator conferences.",email:"",img:s.default.BrentTraidman,linkedin:"https://www.linkedin.com/in/btraidman/",name:"Brent Traidman",title:"Chief Revenue Officer, Bread"},{bio:"Kevin Owocki is the founder of Gitcoin.co. He is a software engineer interested in hacking,         learning, and writing about the intersection of next-generation technologies,          especially machine learning, computer vision, VR, AR, & plenoptic photography.           He has a BS in Computer Science,            10 years of engineering leadership experience in startups and Open Source Software.             He also is a community organizer in the Boulder Colorado Blockchain Tech Scene,              helping many notable events planning, like ETHDenver with               one of MARKET Protocol co-founders Phil Elsasser.",email:"",img:s.default.KevinOwocki,linkedin:"https://www.linkedin.com/in/owocki/",name:"Kevin Owocki",title:"Founder, GitCoin"}],teamMembers:[{bio:"Seth has been a derivatives trader since 2005. He has grown and managed multiple algorithmic trading desks,         operated as a registered market maker and participated in numerous product launches. First introduced to the         crypto space in 2015 as a Trader and later focused on the technology side, Seth has a strong understanding of         centralized and decentralized trading and exchange infrastructures.",email:"seth@marketprotocol.io",img:o.default.SethRubin,linkedin:"https://www.linkedin.com/in/seth-rubin-8887a891/",name:"Seth Rubin",title:"Co-Founder"},{bio:"Collins has been trading and investing in financial markets since he was an early teenager. He has        successfully managed development groups solving complex problems in financial markets. As a market        professional, he understands the demands of an exchange user.",email:"collins@marketprotocol.io",img:o.default.CollinsBrown,linkedin:"https://www.linkedin.com/in/collins-brown-2ab68126/",name:"Collins Brown",title:"Co-Founder"},{bio:"Travis Mathis is a software developer from Burlington, VT.        He's comes from a web 2.0 development background and has owned         and operated several startups        He has over 10 years experience in software engineering and has worked on numerous        projects as a contractor, freelancer, and team member.",email:"travis@marketprotocol.io",img:o.default.TravisMathis,linkedin:"https://www.linkedin.com/in/travis-mathis-43443b16/",name:"Travis Mathis",title:"Senior Engineer"},{bio:"Dan is a digital nomad with a passion for transforming the way communication and money work.\n            He has held lead engineering and management roles in startups focused on big data, finance, and\n            communication for over 15 years. In his spare time he enjoys world schooling his two girls, travelling,\n            restaurant hopping with his wife, Ana, and exploring new places with his dog, Kieran.",email:"dan@marketprotocol.io",img:o.default.Dan,linkedin:"https://www.linkedin.com/in/dandefi/",name:"Dan Matthews",title:"Senior Engineer"}]};t.default=l},547:function(e,t,n){"use strict";t.CollinsBrown=n(548),t.LazarJovanovic=n(549),t.PerfectMakanju=n(550),t.PhilElsasser=n(551),t.SethRubin=n(552),t.RobertJordan=n(553),t.TravisMathis=n(554),t.NitinGupta=n(555),t.Bass=n(556),t.Dan=n(557)},548:function(e,t,n){e.exports=n.p+"static/collins-brown.630c11d0.svg"},549:function(e,t,n){e.exports=n.p+"static/lazar-jovanovic.77d94038.svg"},550:function(e,t,n){e.exports=n.p+"static/perfect-makanju.4170cebb.svg"},551:function(e,t,n){e.exports=n.p+"static/phil-elsasser.441e0c0f.svg"},552:function(e,t,n){e.exports=n.p+"static/seth-rubin.6eb9d056.svg"},553:function(e,t,n){e.exports=n.p+"static/robert-jordan.62375d73.svg"},554:function(e,t,n){e.exports=n.p+"static/travis-mathis.a7d64717.svg"},555:function(e,t,n){e.exports=n.p+"static/nitin-gupta.e446a2a9.svg"},556:function(e,t,n){e.exports=n.p+"static/bass.3befd4e0.jpg"},557:function(e,t,n){e.exports=n.p+"static/dan.b266c739.png"},558:function(e,t,n){"use strict";t.BrentTraidman=n(559),t.CasperJohansen=n(560),t.JoshFraser=n(561),t.PatrickCharles=n(562),t.KevinOwocki=n(563),t.Eric=n(564)},559:function(e,t,n){e.exports=n.p+"static/brent-traidman.dbb4fd2b.svg"},560:function(e,t,n){e.exports=n.p+"static/casper-johansen.ab6b0c14.svg"},561:function(e,t,n){e.exports=n.p+"static/josh-fraser.2b7ab34c.svg"},562:function(e,t,n){e.exports=n.p+"static/patrick-charles.1a2e6799.svg"},563:function(e,t,n){e.exports=n.p+"static/kevin-owocki.c44ca960.svg"},564:function(e,t,n){e.exports=n.p+"static/eric.16b2feb0.png"},565:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(0),c=i(l),u=n(32),d=n(182),g=n(566),I=i(g),f=n(539),m=i(f),M=n(540),p=i(M),C=n(567),w=i(C),A=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onEscKeyPress=function(e){27===e.keyCode&&n.props.unfocus()},n}return r(t,e),s(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.addEventListener("keydown",this.onEscKeyPress)}},{key:"render",value:function(){var e=this.props.data,t=e.name,n=e.title,i=e.img,a=e.email,o=e.linkedin,r=e.bio;return c.default.createElement("div",{style:{alignItems:"center",backgroundColor:w.default.darkGreyOpaque,bottom:0,display:"flex",justifyContent:"center",left:0,position:"fixed",right:0,top:0}},c.default.createElement("div",{onClick:this.props.unfocus,style:{bottom:0,left:0,position:"absolute",right:0,top:0,zIndex:1}}),c.default.createElement(d.BioModalContentWrap,{style:{alignItems:"center",backgroundColor:w.default.white,display:"flex",flexDirection:"column",justifyContent:"center",zIndex:2}},c.default.createElement("div",{style:{cursor:"pointer",display:"flex",height:30,justifyContent:"flex-end",width:"100%"}},c.default.createElement("div",{className:"become-opaque-on-hover",onClick:this.props.unfocus,style:{alignItems:"center",backgroundColor:w.default.medGrey,display:"flex",height:32,justifyContent:"center",width:32}},c.default.createElement("img",{src:I.default,style:{width:26,height:26}}))),c.default.createElement("img",{src:i,style:{width:100,height:100,marginTop:10}}),c.default.createElement(d.MarketText,{style:{fontWeight:400,marginBottom:0,paddingTop:10,textAlign:"center"}},t),c.default.createElement("p",{style:{fontWeight:"300"}},n),c.default.createElement(d.MarketText,{style:{fontSize:"16px",padding:"0px 40px 0px 40px",textAlign:"left"}},r),c.default.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"center",padding:"30px 0px 30px 0px"}},a?c.default.createElement(u.Link,{style:{margin:"0px 5px 0px 5px"},to:"mailto:"+a,target:"_blank"},c.default.createElement("img",{className:"become-opaque-on-hover",src:m.default})):null,o?c.default.createElement(u.Link,{style:{margin:"0px 5px 0px 5px"},to:o,target:"_blank"},c.default.createElement("img",{className:"become-opaque-on-hover",src:p.default})):null)))}}]),t}(c.default.Component);t.default=A},566:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIGZpbGw9IiNmZmYiIHZlcnNpb249IjEuMSIgaWQ9IkNyb3NzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDIwIDIwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMCAyMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNMTQuMzQ4LDE0Ljg0OWMtMC40NjksMC40NjktMS4yMjksMC40NjktMS42OTcsMEwxMCwxMS44MTlsLTIuNjUxLDMuMDI5Yy0wLjQ2OSwwLjQ2OS0xLjIyOSwwLjQ2OS0xLjY5NywwDQoJYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSwwLTEuNjk3bDIuNzU4LTMuMTVMNS42NTEsNi44NDljLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4LDAtMS42OTdjMC40NjktMC40NjksMS4yMjgtMC40NjksMS42OTcsMA0KCUwxMCw4LjE4M2wyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSwxLjIyOC0wLjQ2OSwxLjY5NywwYzAuNDY5LDAuNDY5LDAuNDY5LDEuMjI5LDAsMS42OTdsLTIuNzU4LDMuMTUybDIuNzU4LDMuMTUNCglDMTQuODE3LDEzLjYyLDE0LjgxNywxNC4zOCwxNC4zNDgsMTQuODQ5eiIvPg0KPC9zdmc+DQo="},567:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={accentBlue:"#00FFE2",accentBlue2:"#00E2C1",darkGrey:"#181E26",darkGreyOpaque:"rgba(24, 30, 38, 0.8)",lightGrey:"#F0F0F0",medGrey:"#9CA2AC",white:"#FFFFFF"}},568:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.TextWrapper=t.HeroArt=void 0;var l=n(103),c=i(l),u=n(105),d=i(u),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),I=s(["\n  text-align: right;\n  margin-top: 25px;\n\n  @media "," {\n    img {\n      width: 75%;\n    }\n  }\n\n  @media "," {\n    img {\n      width: 60%;\n    }\n  }\n"],["\n  text-align: right;\n  margin-top: 25px;\n\n  @media "," {\n    img {\n      width: 75%;\n    }\n  }\n\n  @media "," {\n    img {\n      width: 60%;\n    }\n  }\n"]),f=s(["\n  padding: 50px 0;\n\n  @media (max-width: ",") {\n    padding: 50px 25px;\n  }\n"],["\n  padding: 50px 0;\n\n  @media (max-width: ",") {\n    padding: 50px 25px;\n  }\n"]);n(104),n(106);var m=n(0),M=i(m),p=n(22),C=i(p),w=n(569),A=i(w),h=n(41),y=n(182),b=t.HeroArt=C.default.div(I,h.device.laptop,h.device.laptopM),D=t.TextWrapper=C.default.div(f,h.size.tablet),x=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),g(t,[{key:"render",value:function(){return M.default.createElement("section",{style:{background:"#181E26",minHeight:"300px",width:"100%"}},M.default.createElement(y.ContainerWrapper,null,M.default.createElement(c.default,{type:"flex",className:"hero",align:"middle"},M.default.createElement(d.default,{xs:24,sm:24,md:14,lg:12,xl:12},M.default.createElement(D,null,M.default.createElement(y.HeroHeader,null,"The Team"),M.default.createElement(y.HeroDescription,null,"Founding members of our team have been managing a 24-hour algorithmic trading group since 2014 and cumulatively have over 30 years of electronic trading experience. We have expertise in market microstructure, order routing, order management and have written directly to exchanges across the globe."),M.default.createElement(y.HeroDescription,null,"The rest of the MARKET Protocol team comes from a diverse set of technical backgrounds."),M.default.createElement(y.HeroDescription,null,"Together, we quickly realized how immature the crypto exchanges were. This created an opportunity for conceptualization and development of MARKET Protocol which provided us a blank slate to address issues with both the crypto and traditional exchange models."))),M.default.createElement(d.default,{xs:0,sm:0,md:10,lg:12,xl:12},M.default.createElement(b,null,M.default.createElement("img",{alt:"team",src:A.default}))))))}}]),t}(M.default.Component);t.default=x},569:function(e,t,n){e.exports=n.p+"static/team-hero.f6e7b868.svg"},570:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ReadBioHover=void 0;var a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  opacity: 0;\n  background-color: rgba(24, 30, 38, 0.5);\n  color: #ffffff;\n  cursor: pointer;\n  border-radius: 50%;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transition: opacity 0.2s linear;\n\n  &:hover {\n    opacity: 1;\n  }\n"],["\n  opacity: 0;\n  background-color: rgba(24, 30, 38, 0.5);\n  color: #ffffff;\n  cursor: pointer;\n  border-radius: 50%;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transition: opacity 0.2s linear;\n\n  &:hover {\n    opacity: 1;\n  }\n"]),o=n(0),r=i(o),s=n(32),l=n(22),c=i(l),u=n(182),d=n(571),g=i(d),I=n(539),f=i(I),m=n(540),M=i(m),p=t.ReadBioHover=c.default.div(a),C=function(e){var t=e.data,n=e.focus,i=e.type,a=t.name,o=t.title,l=t.img,c=t.email,d=t.linkedin,I=t.bio;return r.default.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",height:240,justifyContent:"flex-start",marginTop:30,position:"relative"}},r.default.createElement("div",{onClick:function(){return I&&"core"===i.toLocaleLowerCase()?n():null},style:{display:"flex",justifyContent:"center",position:"relative"}},I&&"core"===i.toLocaleLowerCase()&&r.default.createElement(p,{id:"readMore"},"Read Bio"),r.default.createElement("img",{src:l,style:{cursor:I?"pointer":"default",height:100,width:100}})),r.default.createElement(u.MarketText,{style:{fontWeight:400,marginBottom:0,paddingTop:10,textAlign:"center"}},a),r.default.createElement("p",{style:{fontWeight:"300",textAlign:"center"}},o),r.default.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-around",width:92}},I?r.default.createElement("img",{className:"become-opaque-on-hover",src:g.default,style:{cursor:"pointer"},onClick:n}):null,c?r.default.createElement(s.Link,{to:"mailto:"+c,target:"_blank"},r.default.createElement("img",{className:"become-opaque-on-hover",src:f.default})):null,d?r.default.createElement(s.Link,{to:d,target:"_blank"},r.default.createElement("img",{className:"become-opaque-on-hover",src:M.default})):null))};t.default=C},571:function(e,t){e.exports="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJtYXJrZXQtVGVhbSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY3OS4wMDAwMDAsIC0xMTEzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjc5LjAwMDAwMCwgMTExMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJwcm9maWxlIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIsMCBDNS4zNzMsMCAwLDUuMzczIDAsMTIgQzAsMTguNjI3IDUuMzczLDI0IDEyLDI0IEMxOC42MjcsMjQgMjQsMTguNjI3IDI0LDEyIEMyNCw1LjM3MyAxOC42MjcsMCAxMiwwIFoiIGlkPSJGaWxsLTEtQ29weSIgZmlsbD0iIzAwRTJDMSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC4wODMzNzksMTIgTDE3LDEyIEwxNywxMS4xNjY2NjY3IEwxNC4wODMzNzksMTEuMTY2NjY2NyBMMTQuMDgzMzc5LDEyIFogTTE0LjA4MzM3OSwxMC4zMzMzMzMzIEwxNywxMC4zMzMzMzMzIEwxNyw5LjUgTDE0LjA4MzM3OSw5LjUgTDE0LjA4MzM3OSwxMC4zMzMzMzMzIFogTTE0LjA4MzM3OSw4LjY2NjY2NjY3IEwxNyw4LjY2NjY2NjY3IEwxNyw3LjgzMzMzMzMzIEwxNC4wODMzNzksNy44MzMzMzMzMyBMMTQuMDgzMzc5LDguNjY2NjY2NjcgWiBNMTUuMzMzMzU5NCwxNC45OTcwODMzIEwxNS4zMzI1MjYxLDE1LjMzMzMzMzMgTDcuMDAxODIzMzQsMTUuMzMzMzMzMyBMNy4wMDAxNTY3LDE0Ljk4NjI1IEM2Ljk5NjgyMzQxLDE0LjA1OTU4MzMgNy4wMzY4MjI3OSwxMy41MyA4LjEwMzA1NjA4LDEzLjI4Mzc1IEM5LjI3MjIwNDQzLDEzLjAxNDE2NjcgMTAuNDI1NTE5NywxMi43NzI1IDkuODcwOTQ1MDQsMTEuNzQ5NTgzMyBDOC4yMjc2Mzc0Niw4LjcxODMzMzMzIDkuNDAzMDM1NzEsNyAxMS4xNjY3NTgxLDcgQzEyLjg5NzU2NDMsNyAxNC4xMDEyOTU0LDguNjU0NTgzMzMgMTIuNDYyOTg3OCwxMS43NDkxNjY3IEMxMS45MjQyNDYyLDEyLjc2NTgzMzMgMTMuMDM1ODk1NSwxMy4wMDc1IDE0LjIzMDA0MzQsMTMuMjgzMzMzMyBDMTUuMzAwODYsMTMuNTMwODMzMyAxNS4zMzcxMDk0LDE0LjA2Mzc1IDE1LjMzMzM1OTQsMTQuOTk3MDgzMyBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="}});
//# sourceMappingURL=Team.a15ca230.js.map