(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0Hkh":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("Q88C"),i={"rust-cargo-basics":{key:"rust-cargo-basics",link:"/rust-reference/rust-cargo-basics",title:"Basics on Rust & Cargo",description:"Basics on Rust & Cargo",ogImage:"https://user-images.githubusercontent.com/11786283/81770497-0c77c000-94fe-11ea-95bc-44e5e432b1d8.jpg",tags:[a.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"rust-smart-pointers":{key:"rust-smart-pointers",link:"/rust-reference/rust-smart-pointers",title:"Smart Pointers",description:"Some notes on Box<>, Rc<>, RefCell<> etc.",ogImage:"https://user-images.githubusercontent.com/11786283/81770497-0c77c000-94fe-11ea-95bc-44e5e432b1d8.jpg",tags:[a.a.RUST],createdAt:new Date("2020/05/22 17:45:00"),updatedAt:new Date("2020/05/22 17:45:00"),isPublished:!0}}},"1RgH":function(e,t,n){"use strict";n.r(t),n.d(t,"record",(function(){return p})),n.d(t,"default",(function(){return w}));var a=n("wx14"),i=n("Ff2n"),r=n("q1tI"),o=n.n(r),c=n("7ljp"),s=n("zAA7"),l=(n("k333"),n("0Hkh")),p=(o.a.createElement,s.a["swap-chain"]),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},d=b("PolkaContainer"),u=b("H1"),m=b("Image"),h=b("Link"),f={record:p},g="wrapper";function w(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)(g,Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(d,{pageTitle:p.title,pageDescription:p.description,keywords:["Vulkan","Basics","Fundamental","Beginner","gfx-hal"],publishDate:p.createdAt,ogImage:p.ogImage,mdxType:"PolkaContainer"},Object(c.b)(u,{updatedAt:p.updatedAt,mdxType:"H1"},"T-","".concat(s.b-3),": ",p.title),Object(c.b)("p",null,"Before diving in, let's first understand what Double Buffering is.\nA great video on ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=tfzCcN2aIhI&feature=emb_logo"}),"Double Buffering"),",\nto get a very basic understanding."),Object(c.b)("p",null,"As you can see in the video, double buffering is nothing but\na way to cache images in a buffer. One of the Buffer is used\nto draw on the Window Surface, while other acts as a hidden\ncanvas to draw the next frame and keep it in cache, so as to\nget a better performance and framerate."),Object(c.b)(m,{alt:"Swapchain to Surface to Window Draw",src:"https://user-images.githubusercontent.com/11786283/82720485-ae9f6100-9cd1-11ea-8e8a-6689645f9706.png",placeholder:"https://user-images.githubusercontent.com/11786283/82720437-51a3ab00-9cd1-11ea-8623-218277d9c519.png",mdxType:"Image"}),Object(c.b)("p",null,"Swapchain is very similar. It basically can be used to achieve\ndouble buffering. In simple words, Swapchain is a collection\nImages (Stored in Image Buffers), that can be used to draw frames and present\nthem on screen when needed."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Quoting directly from ",Object(c.b)("a",Object(a.a)({parentName:"strong"},{href:"https://www.falseidolfactory.com/2020/04/01/intro-to-gfx-hal-part-1-drawing-a-triangle.html"}),"falseidolfactory.com"))),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("em",{parentName:"p"},"Swapchain is a chain of images that we can render onto and then"),"\n",Object(c.b)("em",{parentName:"p"},"present to our window. While we\u2019re showing one of them"),"\n",Object(c.b)("em",{parentName:"p"},"on screen, we can render to a different one. Then once"),"\n",Object(c.b)("em",{parentName:"p"},"we\u2019re done rendering, we can ",Object(c.b)("strong",{parentName:"em"},"swap")," them.")),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("em",{parentName:"p"},"This is one of the few places where ",Object(c.b)("inlineCode",{parentName:"em"},"gfx")," departs"),"\n",Object(c.b)("em",{parentName:"p"},"significantly from the ",Object(c.b)("strong",{parentName:"em"},"Vulkan API"),". In Vulkan, you create"),"\n",Object(c.b)("em",{parentName:"p"},"and manage the ",Object(c.b)("inlineCode",{parentName:"em"},"swapchain")," yourself. In ",Object(c.b)("inlineCode",{parentName:"em"},"gfx"),", the surface"),"\n",Object(c.b)("em",{parentName:"p"},"mostly does it for you. You can read more about the"),"\n",Object(c.b)("em",{parentName:"p"},"decision behind that ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://gfx-rs.github.io/2019/10/01/update.html#new-swapchain-model"}),"here"),"."))),Object(c.b)("p",null,"Thus, Swapchain in ",Object(c.b)("inlineCode",{parentName:"p"},"gfx-rs")," can be described in simple words:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Get Swapchain instance from already created ",Object(c.b)("inlineCode",{parentName:"li"},"device"),"\ninstance and ",Object(c.b)("inlineCode",{parentName:"li"},"swap")," config."),Object(c.b)("li",{parentName:"ul"},"Attach/Link this swapchain instance to ",Object(c.b)("inlineCode",{parentName:"li"},"surface"),", so as\nto draw images from it."),Object(c.b)("li",{parentName:"ul"},"Maintain a swapchain state, to get details on ",Object(c.b)("inlineCode",{parentName:"li"},"window"),"\ngetting invalidate (dirty, like when it's resized or made\nfullscreen etc.). This ",Object(c.b)("inlineCode",{parentName:"li"},"state")," which changes on each\ninvalidation of the ",Object(c.b)("inlineCode",{parentName:"li"},"window"),", should re-configure ",Object(c.b)("inlineCode",{parentName:"li"},"swap"),"\nconfig, and re-create swapchain for that new ",Object(c.b)("inlineCode",{parentName:"li"},"surface"),".")),Object(c.b)(m,{alt:"gfx-hal Swapchain flow",src:"https://user-images.githubusercontent.com/11786283/82650223-038e9900-9c38-11ea-8ae4-c6b464ac7007.png",placeholder:"https://user-images.githubusercontent.com/11786283/82650444-56685080-9c38-11ea-960d-770db9795773.png",mdxType:"Image"}),Object(c.b)("h2",null,"Let's Code"),Object(c.b)("p",null,"First thing to note, ",Object(c.b)("inlineCode",{parentName:"p"},"device")," state that we created in earlier\ntutorials, is a state that needs to be shared across\ndifferent states, like creating Swapchain requires an instance\nof ",Object(c.b)("inlineCode",{parentName:"p"},"device"),". From now on we will be using ",Object(c.b)("inlineCode",{parentName:"p"},"Rc<RefCell<T>>"),"\nto share ",Object(c.b)("inlineCode",{parentName:"p"},"device")," state across various structs."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Details on ",Object(c.b)("inlineCode",{parentName:"em"},"Rc<RefCell<T>>")," can be read"),"\n",Object(c.b)("em",{parentName:"p"},"in ",Object(c.b)(h,{href:l.a["rust-smart-pointers"].link,mdxType:"Link"},"this guide"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"I am not pointing few changes that I have made in various\nstructs previously created. You can refer to the\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Shub1427/rustschool/blob/master/gui/draw-cube/src/004-swap_chain/main.rs"}),"full code"),"\nfor better understanding on the changes."),Object(c.b)("p",{parentName:"blockquote"},"To point out few changes, ",Object(c.b)("inlineCode",{parentName:"p"},"DeviceState")," &\n",Object(c.b)("inlineCode",{parentName:"p"},"FrameBufferState")," have been modified.")),Object(c.b)("p",null,"We will first define our struct ",Object(c.b)("inlineCode",{parentName:"p"},"SwapchainState"),",\nwhich will maintain Swapchain state and provide API for\nit's creation."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),'struct SwapchainState<B: Backend> {\n    swapchain: Option<B::Swapchain>,\n    backbuffer: Option<Vec<B::Image>>,\n    deviceState: Rc<RefCell<DeviceState<B>>>,\n    extent: image::Extent,\n    format: hal_format::Format,\n}\n\nimpl<B: Backend> SwapchainState<B> {\n    fn new(backendState: &mut BackendState<B>, deviceState: Rc<RefCell<DeviceState<B>>>) -> Self {\n        // Get Surface Capabilities\n        let caps = backendState\n            .surface\n            .capabilities(&deviceState.borrow().physical_device);\n\n        let supported_formats = backendState\n            .surface\n            .supported_formats(&deviceState.borrow().physical_device);\n        // We need a supported format for the OS Window, so that Images drawn on\n        // Swapchain are of that same format.\n        let format = supported_formats.map_or(hal_format::Format::Rgba8Srgb, |formats| {\n            formats\n                .iter()\n                .find(|format| format.base_format().1 == hal_format::ChannelType::Srgb)\n                .map(|format| *format)\n                .unwrap_or(formats[0])\n        });\n\n        let swap_config = hal_window::SwapchainConfig::from_caps(&caps, format, backendState.extent);\n        let extent = swap_config.extent.to_extent();\n        let (swapchain, backbuffer) = unsafe {\n            deviceState\n                .borrow()\n                .device\n                .create_swapchain(&mut backendState.surface, swap_config, None)\n                .expect("Can\'t create swapchain")\n        };\n\n        SwapchainState {\n            swapchain: Some(swapchain),\n            backbuffer: Some(backbuffer),\n            deviceState,\n            extent,\n            format,\n        }\n    }\n}\n\nimpl<B: Backend> Drop for SwapchainState<B> {\n    fn drop(&mut self) {\n        unsafe {\n            self.deviceState\n                .borrow()\n                .device\n                .destroy_swapchain(self.swapchain.take().unwrap());\n        }\n    }\n}\n')),Object(c.b)("p",null,"Let's Breakdown the above code in 3 sections:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Structure"),Object(c.b)("li",{parentName:"ul"},"Creation"),Object(c.b)("li",{parentName:"ul"},"Destruction")),Object(c.b)("h3",null,"Structure"),Object(c.b)("p",null,"We have ",Object(c.b)("inlineCode",{parentName:"p"},"swapchain")," instance, which is the actual Swapchain\ninstance, which will maintain actual Image Buffers in itself."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"backbuffer")," is Image Buffer, representing the 2D Image\nthat we would be drawing. Since, we are drawing a 3D cube,\nwe would also be needing 3",Object(c.b)("sup",null,"rd")," dimension, Z-Buffer\nalso known as Depth Buffer, which we will discuss later in\ncoming sections."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"deviceState")," is required, because we would be re-creating\nand thus destroy old ",Object(c.b)("inlineCode",{parentName:"p"},"swapchain")," in SwapchainState,\non every window dimension change."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"extent")," and ",Object(c.b)("inlineCode",{parentName:"p"},"format")," would be later on used in Render Pass."),Object(c.b)("h3",null,"Creation"),Object(c.b)("p",null,"Creating a ",Object(c.b)("inlineCode",{parentName:"p"},"swapchain")," is a three step process:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"We need to first get ",Object(c.b)("inlineCode",{parentName:"li"},"surface")," capabilities. Details on\neach property in ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.rs/gfx-hal/0.5.0/gfx_hal/window/struct.SurfaceCapabilities.html"}),"SurfaceCapabilities")),Object(c.b)("li",{parentName:"ul"},"Next we need to figure out what kind of Image Format\nour ",Object(c.b)("inlineCode",{parentName:"li"},"surface")," supports, so that Swapchain draws only that\nformat image."),Object(c.b)("li",{parentName:"ul"},"Next we need to create ",Object(c.b)("inlineCode",{parentName:"li"},"swap_config"),", from ",Object(c.b)("inlineCode",{parentName:"li"},"caps"),", ",Object(c.b)("inlineCode",{parentName:"li"},"format"),"\n(already discussed), and window size extent. This\n",Object(c.b)("inlineCode",{parentName:"li"},"Extent2D")," reference should be always up-to-date\nrespective to the current Window size. Thus, we will be\nupdating our ",Object(c.b)("inlineCode",{parentName:"li"},"window")," event_loop, as shown below.")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),"...\nevent::WindowEvent::Resized(dims) => {\n    backend.update_extent(hal_window::Extent2D {\n        width: dims.width,\n        height: dims.height,\n    });\n}\nevent::WindowEvent::ScaleFactorChanged { new_inner_size, .. } => {\n    backend.update_extent(hal_window::Extent2D {\n        width: new_inner_size.width,\n        height: new_inner_size.height,\n    });\n}\n...\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"We would be keeping reference to ",Object(c.b)("inlineCode",{parentName:"li"},"format")," and ",Object(c.b)("inlineCode",{parentName:"li"},"extent"),"\n(",Object(c.b)("inlineCode",{parentName:"li"},"image::Extent"),") for later reference, for creating images."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},".create_swapchain()")," is ",Object(c.b)("inlineCode",{parentName:"li"},"unsafe")," code, thus it is created\ninside ",Object(c.b)("inlineCode",{parentName:"li"},"unsafe")," block. It's quite clear that we need,\n",Object(c.b)("inlineCode",{parentName:"li"},"device"),", ",Object(c.b)("inlineCode",{parentName:"li"},"surface")," and ",Object(c.b)("inlineCode",{parentName:"li"},"swap_config")," to create ",Object(c.b)("inlineCode",{parentName:"li"},"swapchain"),"\nand link it to ",Object(c.b)("inlineCode",{parentName:"li"},"surface"),". We also get ",Object(c.b)("inlineCode",{parentName:"li"},"backbuffer"),", which\nrelates to the collection of 2D Image Buffers, where\nwe need to save our images and use it with ",Object(c.b)("inlineCode",{parentName:"li"},"swapchain")," later.")),Object(c.b)("h3",null,"Destruction"),Object(c.b)("p",null,"Normally we don't need ",Object(c.b)("inlineCode",{parentName:"p"},"Drop")," trait that often in any Rust\ncode, but here the situation is a bit different. Problem is\nif we drop ",Object(c.b)("inlineCode",{parentName:"p"},"SwapchainState"),", it will drop ",Object(c.b)("inlineCode",{parentName:"p"},"swapchain"),"\ninstance with it, but will not clear the state of ",Object(c.b)("inlineCode",{parentName:"p"},"surface"),"\nwhere the ",Object(c.b)("inlineCode",{parentName:"p"},"swapchain")," was previously linked to, causing\nmemory leaks. So, it's better to first ",Object(c.b)("inlineCode",{parentName:"p"},"destroy_swapchain"),"\nalready linked to ",Object(c.b)("inlineCode",{parentName:"p"},"surface")," using ",Object(c.b)("inlineCode",{parentName:"p"},"device"),"."),Object(c.b)("p",null,"Once that is done, ",Object(c.b)("inlineCode",{parentName:"p"},"swapchain")," will automatically get\ndropped."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"For cases like this, where an instance needs to pass it's\nownership to someone else, like here to ",Object(c.b)("inlineCode",{parentName:"p"},"device")," when\n",Object(c.b)("inlineCode",{parentName:"p"},"destroy_swapchain")," was called, it's better to keep\nthose instances inside ",Object(c.b)("inlineCode",{parentName:"p"},"Option")," enum, because it's easy\nto swap the memory and change the ownership, without\ncausing Rust Compiler to freak out. This is the reason\nwe have used ",Object(c.b)("inlineCode",{parentName:"p"},"Option<B::Swapchain>")," instead of directly\nowning ",Object(c.b)("inlineCode",{parentName:"p"},"Swapchain"),", as we needed to swap swapchain\nownership at runtime, while destroying ",Object(c.b)("inlineCode",{parentName:"p"},"SwapchainState"),".")),Object(c.b)("p",null,"Details on ",Object(c.b)("inlineCode",{parentName:"p"},"Option.map_or")," can be found ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.rust-lang.org/std/option/enum.Option.html#method.map_or"}),"here"),"."),Object(c.b)("h2",null,"Left out things"),Object(c.b)("p",null,"Swapchain is easy to understand, but is a little complicated\nto use in real world. For eg., On each window ",Object(c.b)("inlineCode",{parentName:"p"},"resize")," or\nchange in Window size/resolution,\n",Object(c.b)("inlineCode",{parentName:"p"},"swapchain")," should be re-created. We haven't properly\ndiscussed such cases yet.\nI want to talk about that in Render Passes, as\nit makes more sense to talk this over there."),Object(c.b)("hr",null),Object(c.b)("p",null,"You can find the full code for this Doc,\nhere ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Shub1427/rustschool/blob/master/gui/draw-cube/src/004-swap_chain/main.rs"}),"004-swap_chain"))))}w.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n("q1tI"),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return(i.a.createElement(l.Provider,{value:t},e.children))},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(m,c({ref:t},l,{components:n})):i.a.createElement(m,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"===typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},CTN9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gfx-hal-initials/swap-chain",function(){return n("1RgH")}])},Ff2n:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("zLVn");function i(e,t){if(null==e)return{};var n,i,r=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}},Q88C:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.TUTORIAL="tutorial",e.PROJECT="project",e.RESEARCH="research",e.RUST="rust",e.JS="javascript",e.REACT="reactjs",e.GFX_HAL="gfx-hal"}(a||(a={}))},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},k333:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n("Q88C"),i={"rust-reference":{key:"rust-reference",link:"/rust-reference",title:"Advance Rust Reference",description:"Some advance concepts in Rust that were difficult for me to understand.       This Doc is trying to keep a reference of all those topics, for me to take       a reference from later for easier understanding",ogImage:"https://user-images.githubusercontent.com/11786283/82665354-47da6300-9c51-11ea-87c7-bb996eb79de1.jpg",tags:[a.a.RUST],createdAt:new Date("2020/05/22 17:25:00"),updatedAt:new Date("2020/05/22 17:25:00"),isPublished:!0},"performance-reactjs":{key:"performance-reactjs",link:"/performance-reactjs",title:"Performance Improvements in JS and ReactJS",description:"Recent Performance related findings of mine, which I am jotting down here for later reference",ogImage:"https://user-images.githubusercontent.com/11786283/81769128-6f675800-94fa-11ea-99d6-57dc42166eaa.jpg",tags:[a.a.RESEARCH,a.a.JS,a.a.REACT],createdAt:new Date("2020/05/07 09:15:00"),updatedAt:new Date("2020/05/09 23:15:00"),isPublished:!0},"upload-client-logs":{key:"upload-client-logs",link:"/upload-client-logs",title:"Client Browser Log to your Server",description:"Sometimes (like to get details on performance) there is a requirement to log data       from end-user's browser to you own servers, for which this note will talk about.",ogImage:"https://user-images.githubusercontent.com/11786283/81769041-37601500-94fa-11ea-98f7-f353dca53e6b.jpg",tags:[a.a.PROJECT,a.a.JS,a.a.REACT],createdAt:new Date("2020/04/29 08:30:00"),updatedAt:new Date("2020/05/09 12:30:00"),isPublished:!0},"word-counter":{key:"word-counter",link:"/word-counter",title:"Word Counter in Rust",description:"Just a fun bin script for my project, to count words in my MDX files.",ogImage:"https://user-images.githubusercontent.com/11786283/81768977-fd8f0e80-94f9-11ea-8425-953f8639d80e.jpg",tags:[a.a.PROJECT,a.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"gfx-hal-basics":{key:"gfx-hal-basics",link:"/gfx-hal-initials",title:"Basics on Vulkan using gfx-hal",description:"Reference Notes for me (and others) to help get started with Rust and Vulkan",ogImage:"https://user-images.githubusercontent.com/11786283/81768708-514d2800-94f9-11ea-95d3-36796815a31f.jpg",tags:[a.a.TUTORIAL,a.a.RUST],createdAt:new Date("2020/04/26 10:00:00"),updatedAt:new Date("2020/04/26 16:00:00"),isPublished:!0},"astro-v2":{key:"astro-v2",link:"/astro-v2",title:"Astro Blaster v2 in Rust",description:"A very minimal game making tutorial in Rust using ggez",ogImage:"https://user-images.githubusercontent.com/11786283/81768159-f1a24d00-94f7-11ea-83e3-8b9212d4851c.jpg",tags:[a.a.TUTORIAL,a.a.RUST],createdAt:new Date("2020/04/10"),updatedAt:new Date("2020/04/12"),isPublished:!0}},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,n){return Object.prototype.hasOwnProperty.call(e,n)&&t.push(e[n]),t}),[])}(i)},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},zAA7:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var a=n("Q88C"),i={"display-window":{key:"display-window",link:"/gfx-hal-initials/display-window",title:"Setup & Display Blank Window",description:"Learn Displaying a Blank Window using winit and bind it to gfx-hal surface instance",ogImage:"https://user-images.githubusercontent.com/11786283/82109997-98852400-9758-11ea-84a0-aa3996c67f86.jpg",tags:[a.a.RUST],createdAt:new Date("2020/04/25 17:00:00"),updatedAt:new Date("2020/05/28 23:50:00"),isPublished:!0},"physical-logical-devices":{key:"physical-logical-devices",link:"/gfx-hal-initials/physical-logical-devices",title:"Adapters & Physical/Logical Devices & Device Queues",description:"Learn to Instantiate Vulkan Physical/Logical Devices and get Device Queue from gfx-hal adapters",ogImage:"https://user-images.githubusercontent.com/11786283/82111231-485e8f80-9761-11ea-9f21-8843d4a66752.jpg",tags:[a.a.TUTORIAL,a.a.RUST,a.a.GFX_HAL],createdAt:new Date("2020/05/16 8:45:00"),updatedAt:new Date("2020/05/16 19:30:00"),isPublished:!0},"swap-chain":{key:"swap-chain",link:"/gfx-hal-initials/swap-chain",title:"SwapChain and Image Views in gfx-hal",description:"Learning about Swapchain, Double Buffering and Image Views. Understanding the implementation of SwapChain in gfx-hal",ogImage:"https://user-images.githubusercontent.com/11786283/82640938-22396380-9c29-11ea-9ee5-9a7fc01920da.jpg",tags:[a.a.TUTORIAL,a.a.RUST,a.a.GFX_HAL],createdAt:new Date("2020/05/22 10:20:00"),updatedAt:new Date("2020/05/23 14:30:00"),isPublished:!0},"command-buffers":{key:"command-buffers",link:"/gfx-hal-initials/command-buffers",title:"Command Buffers & Pool",description:"Understanding Command Pools and Command Buffers in Vulkan and gfx-hal",ogImage:"https://user-images.githubusercontent.com/11786283/82124794-f0567600-97be-11ea-9023-ea1467a6b734.jpg",tags:[a.a.TUTORIAL,a.a.RUST,a.a.GFX_HAL],createdAt:new Date("2020/05/16 21:45:00"),updatedAt:new Date("2020/05/16 21:45:00"),isPublished:!0},shaders:{key:"shaders",link:"/gfx-hal-initials/shaders",title:"Shaders",description:"Understanding Shaders & writing minimal Shader using GLSL Shading language",ogImage:"https://user-images.githubusercontent.com/11786283/82640938-22396380-9c29-11ea-9ee5-9a7fc01920da.jpg",tags:[a.a.TUTORIAL,a.a.RUST,a.a.GFX_HAL],createdAt:new Date("2020/05/23 19:30:00"),updatedAt:new Date("2020/05/23 19:35:00"),isPublished:!0}},r=Object.keys(i).length},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return a}))}},[["CTN9",0,1]]]);