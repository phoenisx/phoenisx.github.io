(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,f=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?a.a.createElement(f,l({ref:t},s,{components:n})):a.a.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"===typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},"FU+d":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=n.n(o),l=n("7ljp"),c=n("k333"),s=n("zAA7"),u=(i.a.createElement,function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}}),b=u("PolkaContainer"),p=u("H1"),d=u("InlineCode"),f=u("Blockquote"),m=u("Link"),g={},h="wrapper";function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(h,Object(r.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(b,{mdxType:"PolkaContainer"},Object(l.b)(p,{updatedAt:c.b["gfx-hal-basics"].updatedAt,wordCount:325,mdxType:"H1"},Object(l.b)(d,{mdxType:"InlineCode"},"gfx-hal")," & ",Object(l.b)(d,{mdxType:"InlineCode"},"vulkan")," basics"),Object(l.b)(f,{type:"warn",mdxType:"Blockquote"},"This blog is a ",Object(l.b)("b",null,"Work in Progress"),". As I complete learning few things one by one, I will update the doc accordingly.",Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("p",null,"  \u26a0\ufe0f ","\xa0","For now, read it at your own risk!!!")),Object(l.b)("p",null,"I have found that learning new things every often,\nleads to chaos, and people (specifically ME) tend to forget many things they have already\nlearnt before."),Object(l.b)("br",null),Object(l.b)("p",null,"These notes will help me to keep reference notes for myself, as well as for anybody who is willing to\nlearn Vulkan API using ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal"),"."),Object(l.b)("br",null),Object(l.b)("p",null,"Learning ",Object(l.b)("inlineCode",{parentName:"p"},"rust")," language and ",Object(l.b)("inlineCode",{parentName:"p"},"vulkan")," APIs, both are very difficult for starters. I am still struggling\nto understand the basics, let aside writing proper Memory Management and Performance optimized Rust\nCode. Reading these notes requires prior knowledge of at-least one statically typed language (like\n",Object(l.b)("inlineCode",{parentName:"p"},"java"),", ",Object(l.b)("inlineCode",{parentName:"p"},"C")," etc.), and some understanding of graphics, though even I am very new to Graphics Programming,\nso even for me many concepts are very new, and I will try to either explain them as much as I could, or\nbetter point you to some reference to take a look into and understand it better."),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Special Thanks to"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Lokathor"}),"@lokathor"),", for writing an open book on learning basics of using ",Object(l.b)("inlineCode",{parentName:"li"},"gfx-hal"),",\nthough with very old ",Object(l.b)("inlineCode",{parentName:"li"},"gfx-hal")," version, but it still guided me a lot. You can read it\n",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://rust-tutorials.github.io/learn-gfx-hal/"}),"here"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://twitter.com/mistodon"}),"@mistodon"),", for writing such a good blog on ",Object(l.b)("inlineCode",{parentName:"li"},"gfx-hal")," and ",Object(l.b)("inlineCode",{parentName:"li"},"vulkan"),", which\nyou can read ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.falseidolfactory.com/2020/04/01/intro-to-gfx-hal-part-1-drawing-a-triangle.html"}),"here"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://vulkan.lunarg.com/doc/sdk/1.2.131.2/linux/tutorial/html/index.html"}),"LunarG Vulkan Tutorial")),Object(l.b)("li",{parentName:"ul"},"Special Mentions, (most of them I haven't read completely, but will help me later for reference):",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.fasterthan.life/blog/2017/7/11/i-am-graphics-and-so-can-you-part-1"}),"Dusting H Lan")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://vulkan-tutorial.com/Introduction"}),"Vulkan Tutorials"))))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Before moving forward, I would like to clear some basics on Rust and Cargo.\n",Object(l.b)("em",{parentName:"p"},"Follow ",Object(l.b)(m,{href:s.a["rust-cargo-basics"].link,mdxType:"Link"},"this guide")),", if you want to\nclear some basics on the same.")),Object(l.b)("hr",null),Object(l.b)("h2",null,"Table of Contents"),Object(l.b)("h3",null,"Draw a Cube"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)(m,{href:s.a["display-window"].link,mdxType:"Link"},"Display a Window")))))}O.isMDXComponent=!0},Ff2n:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("zLVn");function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Q88C:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.TUTORIAL="tutorial",e.PROJECT="project",e.RESEARCH="research",e.RUST="rust",e.JS="javascript",e.REACT="reactjs"}(r||(r={}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},UJ6d:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gfx-hal-initials",function(){return n("FU+d")}])},k333:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n("Q88C"),a={"performance-reactjs":{key:"performance-reactjs",link:"/performance-reactjs",title:"Performance Improvements in JS and ReactJS",description:"Recent Performance related findings of mine, which I am jotting down here for later reference",tags:[r.a.RESEARCH,r.a.JS,r.a.REACT],createdAt:new Date("2020/05/07 09:15:00"),updatedAt:new Date("2020/05/09 23:15:00"),isPublished:!0},"upload-client-logs":{key:"upload-client-logs",link:"/upload-client-logs",title:"Client Browser Log to your Server",description:"Sometimes (like to get details on performance) there is a requirement to log data       from end-user's browser to you own servers, for which this note will talk about.",tags:[r.a.PROJECT,r.a.JS,r.a.REACT],createdAt:new Date("2020/04/29 08:30:00"),updatedAt:new Date("2020/05/09 12:30:00"),isPublished:!0},"word-counter":{key:"word-counter",link:"/word-counter",title:"Word Counter in Rust",description:"Just a fun bin script for my project, to count words in my MDX files.",tags:[r.a.PROJECT,r.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"gfx-hal-basics":{key:"gfx-hal-basics",link:"/gfx-hal-initials",title:"Basics on Vulkan using gfx-hal",description:"Reference Notes for me (and others) to help get started with Rust and Vulkan",tags:[r.a.TUTORIAL,r.a.RUST],createdAt:new Date("2020/04/26 10:00:00"),updatedAt:new Date("2020/04/26 16:00:00"),isPublished:!0},"astro-v2":{key:"astro-v2",link:"/astro-v2",title:"Astro Blaster v2 in Rust",description:"A very minimal game making tutorial in Rust using ggez",tags:[r.a.TUTORIAL,r.a.RUST],createdAt:new Date("2020/04/10"),updatedAt:new Date("2020/04/12"),isPublished:!0}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,n){return Object.prototype.hasOwnProperty.call(e,n)&&t.push(e[n]),t}),[])}(a)},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zAA7:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("Q88C"),a={"rust-cargo-basics":{key:"rust-cargo-basics",link:"/gfx-hal-initials/rust-cargo-basics",title:"Basics on Rust & Cargo",description:"Basics on Rust & Cargo",tags:[r.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"display-window":{key:"display-window",link:"/gfx-hal-initials/display-window",title:"Display Window",description:"Displaying Window using winit and bind it to gfx-hal surface instance",tags:[r.a.RUST],createdAt:new Date("2020/04/25 17:00:00"),updatedAt:new Date("2020/05/09 23:50:00"),isPublished:!1}}},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}},[["UJ6d",0,1]]]);