(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n("q1tI"),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,i({ref:t},c,{components:n})):r.a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"===typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("zLVn");function r(e,t){if(null==e)return{};var n,r,o=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Q88C:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.TUTORIAL="tutorial",e.PROJECT="project",e.RESEARCH="research",e.RUST="rust",e.JS="javascript",e.REACT="reactjs"}(a||(a={}))},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},RxO3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/upload-client-logs",function(){return n("TX4g")}])},TX4g:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),l=n.n(o),i=n("7ljp"),s=n("k333"),c=(l.a.createElement,function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}}),b=c("PolkaContainer"),u=c("H1"),d=c("InlineCode"),p=c("Blockquote"),m=c("Image"),h={},f="wrapper";function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(f,Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"PolkaContainer"},Object(i.b)(u,{updatedAt:s.b["upload-client-logs"].updatedAt,wordCount:564,mdxType:"H1"},"Up And Up ",Object(i.b)(d,{mdxType:"InlineCode"},"up-n-up")),Object(i.b)(p,{type:"warn",mdxType:"Blockquote"},"This blog is a ",Object(i.b)("b",null,"Work in Progress"),", and I am hoping to work on it part by part when I will really start implementing th idea mentioned in here. Gradually noting down what hurdles I faced or if some changes I made, that needs to be reflected here as well.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,"  \u26a0\ufe0f ","\xa0","For now, read it at your own risk!!!")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Up and Up our logs you go. ",Object(i.b)("br",null),"\nTo give an insight ",Object(i.b)("br",null),"\nOf what should you Hope. \ud83c\udfbc")),Object(i.b)("h3",null,"What/Why the hell???"),Object(i.b)("p",null,"This project is meant to get essential logs from client's browser, so as to later verify what went wrong.\nUsually, in Front-end development, developers tend to disable logs to improve performance and\nmany other good reasons, but in intial days of development of a product sometimes require's\nus to monitor how tha app is performing on the end-user's browsers. This project is developed\nto support an idea that I had yesterday (it's similar to what Google Analytics or Rollbar or Sentry does),\nto get small chunks of performance related data, on a constant\ninterval, that we can later on verify what went wrong, or where an improvement can be made."),Object(i.b)("h2",null,"Pseudo Implementation:"),Object(i.b)(p,{type:"warn",mdxType:"Blockquote"},"Following implentation is not tested or written in real code. It's just for explanatory purpose."),Object(i.b)("h3",null,"Payload structures:"),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"DefaultPayload")),Object(i.b)("p",null,"This payload will be extended by every other ",Object(i.b)("inlineCode",{parentName:"p"},"LogPayload")," that end-user would want to log to the service."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface DefaultPayload {\n  /**\n   * Name of the OS, like Windows/Android etc.\n   */\n  client_os: string;\n  /**\n   * Version of the OS being used, would come handy to figure out what CPU processor might\n   * be used\n   */\n  client_version: number | null;\n  /**\n   * Browser details, still don't know how to read this\n   */\n  user_agent: string;\n  /**\n   * Following Log Level doesn't actually refer to Log Levels, but they denote the weight\n   * of a Log, depending on the feature.\n   *\n   * `debug`: being the least weighted, and these logs should be removed, once we are done with improvements\n   * `error`: being the medium weighted.\n   * `perf`: being the medium weighted, which we can keep to track performance details of end-user's per browser\n   * `data`: Never to be removed, they denote a Log, required by Data-Analysts.\n   */\n  log_level: 'error' | 'debug' | 'perf' | 'data';\n}\n")),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"LogPayload")),Object(i.b)("p",null,"This is a custom payload and might differ as per developer's implementation, since\nvarious apps have various logs they want to track or later on do elastic search or something."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface LogPayload extends DefaultPayload {\n  /**\n   * Could relate to various features/modules being used in an App.\n   */\n  feature: string;\n  /**\n   * Internal task related to a feature like `chat-send` or `blog-post`\n   * This is an array, because in a feature we can have multiple sub-features batched into one\n   * single API call.\n   *\n   * Having an array of sub-features will also help us to batch performance logs into one single API call\n   *\n   * sub_features are basically a one-to-one map for `measures`, but it won't be case everytime.\n   */\n  sub_features?: string[];\n  /**\n   * User's ID to log for\n   */\n  user_id: number;\n  /**\n   * Current User's Email\n   */\n  email: string;\n  /**\n   * Performance measures: providing us Time Deltas, so as to figure\n   * out if any feature or sub-feature is taking time, and what exactly is causing it\n   *\n   * Measure data is not required for log_level: ['debug', 'data'];\n   */\n  measures?: MeasurePayload[];\n  /**\n   * Extra meta data, could be present or not, nobody knows ;P\n   */\n  meta?: Record<string, any>;\n};\n")),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"MeasurePayload")),Object(i.b)("p",null,"This payload defines the details on what performance measure were for a particular subfeature.\nWill help to get details on performance of our app."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface MeasurePayload {\n  /**\n   * name: corelates to the sub_feature we are working on, so that it is easier to understand\n   * for which feature time delta was taken for.\n   */\n  name: string;\n  /**\n   * Time Delta, between Start Time and End Time for this sub-feature.\n   *\n   * delta = 0, if sub_feature is instantanous, i.e., we don't want to log perf delta\n   */\n  delta: number;\n  /**\n   * Should always be an ISO string\n   *\n   * whether or not delta is present, we should have DateTime details when logging any\n   * sub-feature, for later references\n   */\n  datetime: string;\n};\n")),Object(i.b)("hr",null),Object(i.b)("h2",null,"We need to create server, which will listen to some HTTP endpoints"),Object(i.b)("p",null,"Enpoints like:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/debug")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/error")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/perf")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/data"))),Object(i.b)("p",null,"Following APIs will need an array as payload, as they will have a batch of data\nto be sent to server."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/batch/debug")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/batch/error")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/batch/perf")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/batch/data"))),Object(i.b)("p",null,"Whatever Logs we receive in server, can be put into a log file, that can be dumped into some warehouse\nor can be processed in an Elastic Search or completely sent to some Analytics server like Google Analytics\nwithout saving them to file."),Object(i.b)("p",null,"What I am thinking is, any payload that come to ",Object(i.b)("inlineCode",{parentName:"p"},"/data")," or ",Object(i.b)("inlineCode",{parentName:"p"},"/bulk/data")," will be sent to whatever\nanalytics backend we will link to our server, like Google Analytics or Segment or anything."),Object(i.b)("hr",null),Object(i.b)("h2",null,"We need to create a Frontend library as well that will manage all these calls to backend"),Object(i.b)("p",null,"Since we want to send single or batched payloads to server, we need a library to manage that\nburden from a dev, and provide a clean API that the dev can usee to"),Object(i.b)("h3",null,"Concept"),Object(i.b)("p",null,"The thought behind building this library is simple:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Keep the Library as small as possible and with less overhead.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We will be creating a Class (",Object(i.b)("em",{parentName:"p"},"UpNUp"),"), that will provide us with few APIs"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"debug")," - to add debug logs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"error")," - to send errors on any UI failure, like Rollbar does."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"perf")," - performance logs that can be used to get a better insight on what feature is bloating the app"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data")," - data analysis logs. These logs will be directly sent to some other third party libraries like\nGoogle Analytics from our Backend Server."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"These APIs can be called anytime and they all will update specific queues, to push the\nlogs in the queue, so as to keep the logging burden off the shelf (I think I can later on add Webworkers\nto move the burden off the main thread.)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"On every interval, which the user will configure, chunk of each queue would be popped out and an\nHTTP request will be made the endpoint configured before."),Object(i.b)(m,{src:"https://user-images.githubusercontent.com/11786283/81470865-cde6ba80-920a-11ea-8429-6df2a2ac0595.png",placeholder:"https://user-images.githubusercontent.com/11786283/81470875-de973080-920a-11ea-99a3-5397f40b85b0.png",alt:"Flow Diagram for Log Upload",mdxType:"Image"}))),Object(i.b)(p,{type:"warn",mdxType:"Blockquote"},"If we do use\xa0",Object(i.b)("b",null,"Webworkers"),", someday in future, all the above logic will become parallel and it will become trivial to use ",Object(i.b)("i",null,"Mutex/Locks")," to manage manipulation of queues, which also gives us more control over when the data chunk should be extracted, i.e. should we get the chunk after 2 seconds or should we get the chunk when it crosses a size threshold of let's say 100kb, so that the API calls we make are more effective."),Object(i.b)("h3",null,"Solution"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Using ",Object(i.b)("inlineCode",{parentName:"p"},"RxJS"),", to simplify the concept of buffering. Understanding ",Object(i.b)("inlineCode",{parentName:"p"},"RxJS")," took\nme a lot of time. There are four main concepts for ",Object(i.b)("inlineCode",{parentName:"p"},"RxJS"),"."),Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"Observable/Observer (Publisher/Subscriber)"),Object(i.b)("li",{parentName:"ol"},"Cold and Hot Publisher"),Object(i.b)("li",{parentName:"ol"},"Schedulers"),Object(i.b)("li",{parentName:"ol"},"Operators")),Object(i.b)("p",{parentName:"blockquote"},"I will discuss these in a separate Note. For now we will just talk about\nbuffering.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create an instance of the Logger.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The moment the instance is created, create just one ",Object(i.b)("inlineCode",{parentName:"li"},"RxJS Subjects")," which\nwill manage the buffers and simultaneously ",Object(i.b)("inlineCode",{parentName:"li"},"subscribe")," them as well."))),Object(i.b)("li",{parentName:"ul"},"On any API call for ",Object(i.b)("inlineCode",{parentName:"li"},"debug"),", ",Object(i.b)("inlineCode",{parentName:"li"},"perf")," etc., a call to ",Object(i.b)("inlineCode",{parentName:"li"},"subject.next")," would be\nmade, so as to publish the log string."),Object(i.b)("li",{parentName:"ul"},"Which when received to the ",Object(i.b)("inlineCode",{parentName:"li"},"subscriber")," will be piped with some compression\noperator then ",Object(i.b)("inlineCode",{parentName:"li"},"buffer")," operator, and for each ",Object(i.b)("inlineCode",{parentName:"li"},"buffer")," complete, we\nwill make an HTTP call pushing the buffer to our remote server."))))}g.isMDXComponent=!0},k333:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n("Q88C"),r={"performance-reactjs":{key:"performance-reactjs",link:"/performance-reactjs",title:"Performance Improvements in JS and ReactJS",description:"Recent Performance related findings of mine, which I am jotting down here for later reference",tags:[a.a.RESEARCH,a.a.JS,a.a.REACT],createdAt:new Date("2020/05/07 09:15:00"),updatedAt:new Date("2020/05/07 09:15:00"),isPublished:!0},"upload-client-logs":{key:"upload-client-logs",link:"/upload-client-logs",title:"Client Browser Log to your Server",description:"Sometimes (like to get details on performance) there is a requirement to log data       from end-user's browser to you own servers, for which this note will talk about.",tags:[a.a.PROJECT,a.a.JS,a.a.REACT],createdAt:new Date("2020/04/29 08:30:00"),updatedAt:new Date("2020/05/03 23:30:00"),isPublished:!0},"word-counter":{key:"word-counter",link:"/word-counter",title:"Word Counter in Rust",description:"Just a fun bin script for my project, to count words in my MDX files.",tags:[a.a.PROJECT,a.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"gfx-hal-basics":{key:"gfx-hal-basics",link:"/gfx-hal-initials",title:"Basics on Vulkan using gfx-hal",description:"Reference Notes for me (and others) to help get started with Rust and Vulkan",tags:[a.a.TUTORIAL,a.a.RUST],createdAt:new Date("2020/04/26 10:00:00"),updatedAt:new Date("2020/04/26 16:00:00"),isPublished:!0},"astro-v2":{key:"astro-v2",link:"/astro-v2",title:"Astro Blaster v2 in Rust",description:"A very minimal game making tutorial in Rust using ggez",tags:[a.a.TUTORIAL,a.a.RUST],createdAt:new Date("2020/04/10"),updatedAt:new Date("2020/04/12"),isPublished:!0}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,n){return Object.prototype.hasOwnProperty.call(e,n)&&t.push(e[n]),t}),[])}(r)},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}},[["RxO3",0,1]]]);