(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n("q1tI"),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=b(e.components);return(r.a.createElement(c.Provider,{value:t},e.children))},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return n?r.a.createElement(d,l({ref:t},c,{components:n})):r.a.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"===typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("zLVn");function r(e,t){if(null==e)return{};var n,r,o=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},HF3l:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/performance-reactjs",function(){return n("IWf1")}])},IWf1:function(e,t,n){"use strict";n.r(t),n.d(t,"record",(function(){return c})),n.d(t,"default",(function(){return g}));var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),i=n.n(o),l=n("7ljp"),s=n("k333"),c=(i.a.createElement,s.b["performance-reactjs"]),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},p=b("PolkaContainer"),u=b("H1"),m=b("Blockquote"),d=b("Link"),h={record:c},f="wrapper";function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)(f,Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(p,{pageTitle:c.title,pageDescription:c.description,keywords:["Performance"],publishDate:c.createdAt,ogImage:c.ogImage,mdxType:"PolkaContainer"},Object(l.b)(u,{updatedAt:c.updatedAt,wordCount:971,mdxType:"H1"},"Improve Performance in JS and ReactJS"),Object(l.b)(m,{type:"warn",mdxType:"Blockquote"},"This blog is a ",Object(l.b)("b",null,"Work in Progress"),", and I am hoping to work on it part by part when I would have already worked on it once. Parts of the doc are complete as I have worked on it before and can assure, that they will surely benefit in Improving Performance.",Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("p",null,"  \u26a0\ufe0f ","\xa0","For now, read it at your own risk!!!")),Object(l.b)("h2",null,"References to take a look at:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://addyosmani.com/blog/profiling-react-js/"}),"Addy Osmani's Profiling ReactJS")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3"}),"Twitter's Blog on their Performance Improvements for Twitter Lite")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7"}),"Handle Too many Socket events creating Backpressure")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://reactjs.org/docs/optimizing-performance.html"}),"React Optimizing Performance"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"These guides were enough to boost my app performance."),Object(l.b)("p",{parentName:"blockquote"},"Backpressure is something that is not exactly related to ReactJS\nand can occur to any JS app. To handle Backpressure, we have various ways,\none of which I used in our Project.")),Object(l.b)("hr",null),Object(l.b)("h2",null,"React Profiling"),Object(l.b)("p",null,"Ok. So, if you are lazy and don't want to put too much effort on\nfinding Performance glitches, Profiling is the best option."),Object(l.b)("p",null,"React DevTools provides a developer with ",Object(l.b)("inlineCode",{parentName:"p"},"Profiler"),", which provides\nre-rendering data of components in Flame-Graph. This flame graph was\ndeveloped by ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bvaughn"}),"Brian Vaughn"),", creator\nof ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bvaughn/react-window"}),"react-window"),", which\nhe is using to virtualize the flame graphs as well."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"By default, you do not need to\n",Object(l.b)("inlineCode",{parentName:"p"},'import { unstable_Profiler as Profiler } from "react";'),"\nas of v16.4+ (I guess), ",Object(l.b)("inlineCode",{parentName:"p"},"Profiler")," is by default added to react development\nbuilds. If you do face that the Profiler in Devtools is not working,\ntry importing the above Profiler Component, and wrap your Root Component\nwith ",Object(l.b)("inlineCode",{parentName:"p"},"<Profiler />"),".")),Object(l.b)("p",null,"These Flame Graphs are easy to understand, and pin-points which Components\nare getting rendered unnecessarily."),Object(l.b)("p",null,"Once you get to know which Components are getting re-rendered, due to some\nprop changes that shouldn't re-render them, you can use:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"shouldComponentUpdate")," - is a React Component life cycle Method to render\nthe component only according to your own logic. Apply some shallow\ncomparisons here, and you are good to go."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"React.memo")," - If you are not using Class Components, ",Object(l.b)("inlineCode",{parentName:"li"},"React.memo")," is\nrequired to make your Functional component act as PureComponents. Also,\n",Object(l.b)("inlineCode",{parentName:"li"},"React.memo")," takes function as argument, where you can shallow compare\nprevious props with new props to decide when to render.")),Object(l.b)("p",null,"Above steps helps ",Object(l.b)("em",{parentName:"p"},"memoizing")," React Components, but that's not enough if you\nuse Connected (or Container) Components. Vanilla Connected Components can\nhave ",Object(l.b)("inlineCode",{parentName:"p"},"mapStateToProps")," that re-renders the whole component, whenever some state\nchanges which is not even mapped to connected component."),Object(l.b)("br",null),Object(l.b)("p",null,"For such cases, simplest solution is to use Selectors with Redux, specially\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/reduxjs/reselect"}),"ReSelect"),"."),Object(l.b)("p",null,"If you don't want to introduce ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/reduxjs/reselect"}),"ReSelect"),", and do things by yourself, then you need to create your own\nselectors and memoize them. Best and less complex library to memoize\nfunctions is ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/alexreardon/memoize-one"}),"memoize-one"),"."),Object(l.b)("br",null),Object(l.b)("p",null,"Combining both of the above solutions, will improve your app performance\na lot. For me it gave a 50% increase in performance."),Object(l.b)("h3",null,"Browser Profiling"),Object(l.b)("p",null,"We are not limited to React DevTools Profiler, and I highly recommend to do\nProfiling in Browser DevTools as well, as it gives a broader insight on what\nis going on."),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://nolanlawson.com/2018/09/25/accurately-measuring-layout-on-the-web/"}),"Details on How to read Profiling on Browser DevTools")),Object(l.b)("hr",null),Object(l.b)("h2",null,"Defer Rendering When Mounting & Unmounting Many Components"),Object(l.b)("p",null,"You can find a better explanation ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3"}),"here")),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"TLDR;")," Deferring a Render just means call any state updates behind\n",Object(l.b)("inlineCode",{parentName:"p"},"requestAnimationFrame"),". What this will do is put the load off your\nBrowser's main thread for sometime and allow the user to interact with UI\nwithout jankiness (or having an un-responsive UI)."),Object(l.b)("hr",null),Object(l.b)("h2",null,"Long lists need to have Virtualization or Pagination"),Object(l.b)("p",null,"Lists can be one of the bottlenecks in performance, if not done right.\nMost of the UI libraries out there are vanilla ",Object(l.b)("inlineCode",{parentName:"p"},"<ul />")," lists."),Object(l.b)("p",null,"Using 3rd-party Virtualization libs like ",Object(l.b)("inlineCode",{parentName:"p"},"react-window")," or\n",Object(l.b)("inlineCode",{parentName:"p"},"react-virtualized")," could help improve performance as well as\nFPS of Scrolling."),Object(l.b)("p",null,"You can get a very detailed explanation of what virtualization is, and\nwhat hurdles we need to resolve while building a Virtualized List,\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.google.com/web/updates/2016/07/infinite-scroller"}),"here @ Complexities of Infinite Scroller"),"."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"I think I will try to build a virtualized list in Rust,someday. Let's see!!!")," ",Object(l.b)("img",{className:"emoji",title:":bowtie:",alt:":bowtie:",src:"https://github.githubassets.com/images/icons/emoji/bowtie.png",width:"20",height:"20",align:"middle"})),Object(l.b)("br",null),Object(l.b)("p",null,"Virtualization is difficult to integrate in ",Object(l.b)("em",{parentName:"p"},"Chat apps"),", where the list\nneeds to be scrolled bottom-up and can have dynamic height for each\nlist item."),Object(l.b)("p",null,"So my implementation was to use a simple non virtualized list (relatively\npositioned list items). Most of the ",Object(l.b)("em",{parentName:"p"},"Chat apps")," in real world, like in\nFacebook or in Hangouts, all use the same principle. They paginate the\nchat with infinite scroll and use relatively positioned list."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Hope to create a separate blog, for Infinite Scrollable\nList using ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"}),"IntersectionObserver"),",\nwhich I worked on while working on Chat App at\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.upgrad.com/"}),"upGrad"),".")),Object(l.b)("p",null,"Infinite Scrolling (without Virtualization) is fine, till the time we don't see our list getting\nbombarded with too many DOM elements. In Chat, I haven't figured out a proper way to virtualize\nthe list, but I am feeling that it will become very crucial when a Chat App is used by thousands\nof user at the same time, all bombarding messages in an instant populating chat messages in thousands,\nin a list which is not virtualized, the DOM will eat too much memory due to too many list items."),Object(l.b)("p",null,"I will try ",Object(l.b)("inlineCode",{parentName:"p"},"react-window")," this time, for virtualization, but I have a feeling it won't be easy.\nOne of the bugs I faced and thought was related to virtualization (but was not) is listed ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bvaughn/react-window/issues/455"}),"here,\nwith a workaround solution"),"."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"react-window")," does not support dynamic item sizes, ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bvaughn/react-window/issues/6"}),"it's still a work in progress"),", but I do hope instead of focusing on supporting grids, and\njust working on Vertical Lists would be easier for me to work on, using the approach that is\nmentioned in the issue. ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"}),"ResizeObserver"),"\nis something worth looking at, has OKayish support in major browsers."),Object(l.b)("hr",null),Object(l.b)("h2",null,"Buffering Events that change state in less than an Animation Frame"),Object(l.b)(m,{type:"warn",mdxType:"Blockquote"},"I would suggest you to read this blog before going forward ",Object(l.b)(d,{href:"https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7",target:"_blank",rel:"noopener noreferrer",mdxType:"Link"},"Handle Too many Socket events creating Backpressure"),", as it elaborates on basic concepts of Back Buffering."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"TLDR;")," I am giving a small reference on how to implement buffering of events\nusing ",Object(l.b)("inlineCode",{parentName:"p"},"rxjs"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"rxjs.fromEvent(socket, 'message').pipe(\n  () => source => source.pipe(\n    rxjs.operators.buffer(source.pipe(waitForAnimationFrame()))\n  ),\n);\n")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"If say our Browser (or the Monitor in whole) supports only 60FPS, each ",Object(l.b)("inlineCode",{parentName:"em"},"requestAnimationFrame")," will run\nevery 16ms, we can conclude:")),Object(l.b)("p",null,"Above code is buffering all incoming messages, for each ",Object(l.b)("inlineCode",{parentName:"p"},"requestAnimationFrame"),". What this solve is:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If I get 100 messages in less than ",Object(l.b)("inlineCode",{parentName:"li"},"16ms")," (for 60FPS screen), they all will be buffered into an\narray, and pushed to the subscriber all in one go after every ",Object(l.b)("inlineCode",{parentName:"li"},"requestAnimationFrame")," completes.")),Object(l.b)("p",null,"This handles back-pressure, by allowing only 60 re-renders per second, which our Browser can really\nhandle, and not allow any unnecessary re-renders in-between."),Object(l.b)("p",null,"Since, we are sure every ",Object(l.b)("inlineCode",{parentName:"p"},"16ms")," our buffer will be emptied, we don't have to worry too much on\nmemory overflows."),Object(l.b)("hr",null),Object(l.b)("h2",null,"Lazy Loading Images:"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"I don't want to repeat things which are already done properly before, so to get details on"),"\n",Object(l.b)("em",{parentName:"p"},"Lazy Loading of Image, you can follow ",Object(l.b)("a",Object(a.a)({parentName:"em"},{href:"https://addyosmani.com/blog/lazy-loading/"}),"Addy Osmani's blog")),"\n",Object(l.b)("em",{parentName:"p"},"on the same, for better explanation. (To be honest I don't like writing that much, so saving myself"),"\n",Object(l.b)("em",{parentName:"p"},"some effort here as well")," \ud83d\ude05 \ud83d\ude2c",Object(l.b)("em",{parentName:"p"},")")),Object(l.b)("p",null,"One think I want to add here is that, if you do use Virtualized list, where each item contains\nimages, they are lazy loaded anyways, so this attribute is not required for virtualized lists."),Object(l.b)("h3",null,"Preloading Image Src Sets (Not related to Perf, though):"),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://web.dev/preload-responsive-images/"}),"Preload Images")),Object(l.b)("h2",null,"Pre-Loading and Pre-Fetching Links:"),Object(l.b)("h3",null,"Pre-Loading Links:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/"}),"Preload: What is it Good For?")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://web.dev/preload-critical-assets/"}),"Preload critical assets to improve loading speed"))),Object(l.b)("h3",null,"Pre-Fetching Links:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ"}),"MDN Prefetch Doc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://css-tricks.com/prefetching-preloading-prebrowsing/"}),"CSS Tricks Pre-*"))),Object(l.b)("hr",null),Object(l.b)("h2",null,"Some Side Notes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"SSR is also a way to optimize your performance, but I don't want to\ncover that."),Object(l.b)("li",{parentName:"ul"},"Statically serve your pages. This is something I am unaware of how to do\nit manually, but to support this feature, I suggest you to use ",Object(l.b)("inlineCode",{parentName:"li"},"NextJS")," or\nsome similar Statically generated framework like ",Object(l.b)("inlineCode",{parentName:"li"},"Gatsby"),". In ",Object(l.b)("inlineCode",{parentName:"li"},"NextJS"),",\ndo not use ",Object(l.b)("inlineCode",{parentName:"li"},"getInitialProps")," for Page components, and NextJS spits\nout static HTMLs for React App on build.")),Object(l.b)("h2",null,"TODOs:"),Object(l.b)("p",null,"I want to add more stuff here, regarding performance research\nwhich I am still exploring:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Using Puppeteer to get stats on performance"),Object(l.b)("li",{parentName:"ul"},"Bundle Size optimizations, using ",Object(l.b)("inlineCode",{parentName:"li"},"webpack"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Something to research on later ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://web.dev/granular-chunking-nextjs/"}),"Granular Chunking")),Object(l.b)("li",{parentName:"ul"},"Not sure if this link will be alive later, but still something to look into later\n",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.google.com/document/d/11t4Ix2bvF1_ZCV9HKfafGfWu82zbOD7aUhZ_FyDAgmA/edit?usp=sharing"}),"WebBundles")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://codeascraft.com/2020/02/03/production-webpack-builds/"}),"Fast Production Asset Builds using Webpack")))))))}g.isMDXComponent=!0},Q88C:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.TUTORIAL="tutorial",e.PROJECT="project",e.RESEARCH="research",e.RUST="rust",e.JS="javascript",e.REACT="reactjs"}(a||(a={}))},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},k333:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n("Q88C"),r={"performance-reactjs":{key:"performance-reactjs",link:"/performance-reactjs",title:"Performance Improvements in JS and ReactJS",description:"Recent Performance related findings of mine, which I am jotting down here for later reference",ogImage:"https://user-images.githubusercontent.com/11786283/81769128-6f675800-94fa-11ea-99d6-57dc42166eaa.jpg",tags:[a.a.RESEARCH,a.a.JS,a.a.REACT],createdAt:new Date("2020/05/07 09:15:00"),updatedAt:new Date("2020/05/09 23:15:00"),isPublished:!0},"upload-client-logs":{key:"upload-client-logs",link:"/upload-client-logs",title:"Client Browser Log to your Server",description:"Sometimes (like to get details on performance) there is a requirement to log data       from end-user's browser to you own servers, for which this note will talk about.",ogImage:"https://user-images.githubusercontent.com/11786283/81769041-37601500-94fa-11ea-98f7-f353dca53e6b.jpg",tags:[a.a.PROJECT,a.a.JS,a.a.REACT],createdAt:new Date("2020/04/29 08:30:00"),updatedAt:new Date("2020/05/09 12:30:00"),isPublished:!0},"word-counter":{key:"word-counter",link:"/word-counter",title:"Word Counter in Rust",description:"Just a fun bin script for my project, to count words in my MDX files.",ogImage:"https://user-images.githubusercontent.com/11786283/81768977-fd8f0e80-94f9-11ea-8425-953f8639d80e.jpg",tags:[a.a.PROJECT,a.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"gfx-hal-basics":{key:"gfx-hal-basics",link:"/gfx-hal-initials",title:"Basics on Vulkan using gfx-hal",description:"Reference Notes for me (and others) to help get started with Rust and Vulkan",ogImage:"https://user-images.githubusercontent.com/11786283/81768708-514d2800-94f9-11ea-95d3-36796815a31f.jpg",tags:[a.a.TUTORIAL,a.a.RUST],createdAt:new Date("2020/04/26 10:00:00"),updatedAt:new Date("2020/04/26 16:00:00"),isPublished:!0},"astro-v2":{key:"astro-v2",link:"/astro-v2",title:"Astro Blaster v2 in Rust",description:"A very minimal game making tutorial in Rust using ggez",ogImage:"https://user-images.githubusercontent.com/11786283/81768159-f1a24d00-94f7-11ea-83e3-8b9212d4851c.jpg",tags:[a.a.TUTORIAL,a.a.RUST],createdAt:new Date("2020/04/10"),updatedAt:new Date("2020/04/12"),isPublished:!0}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,n){return Object.prototype.hasOwnProperty.call(e,n)&&t.push(e[n]),t}),[])}(r)},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}},[["HF3l",0,1]]]);