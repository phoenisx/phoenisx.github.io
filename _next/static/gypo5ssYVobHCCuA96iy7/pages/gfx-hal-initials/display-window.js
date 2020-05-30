(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0Hkh":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("Q88C"),i={"rust-cargo-basics":{key:"rust-cargo-basics",link:"/rust-reference/rust-cargo-basics",title:"Basics on Rust & Cargo",description:"Basics on Rust & Cargo",ogImage:"https://user-images.githubusercontent.com/11786283/81770497-0c77c000-94fe-11ea-95bc-44e5e432b1d8.jpg",tags:[a.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"rust-smart-pointers":{key:"rust-smart-pointers",link:"/rust-reference/rust-smart-pointers",title:"Smart Pointers",description:"Some notes on Box<>, Rc<>, RefCell<> etc.",ogImage:"https://user-images.githubusercontent.com/11786283/81770497-0c77c000-94fe-11ea-95bc-44e5e432b1d8.jpg",tags:[a.a.RUST],createdAt:new Date("2020/05/22 17:45:00"),updatedAt:new Date("2020/05/22 17:45:00"),isPublished:!0}}},"7ljp":function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return w}));var a=t("q1tI"),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),d=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"===typeof e?e(n):l({},n,{},e)),t},b=function(e){var n=d(e.components);return(i.a.createElement(s.Provider,{value:n},e.children))},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(t),u=a,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||r;return t?i.a.createElement(m,l({ref:n},s,{components:t})):i.a.createElement(m,l({ref:n},s))}));function w(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"===typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},"8IhA":function(e,n,t){"use strict";t.r(n),t.d(n,"record",(function(){return d})),t.d(n,"rustBasicsRecord",(function(){return b})),t.d(n,"default",(function(){return N}));var a=t("wx14"),i=t("Ff2n"),r=t("q1tI"),o=t.n(r),l=t("7ljp"),c=t("zAA7"),s=t("0Hkh"),d=(o.a.createElement,c.a["display-window"]),b=s.a["rust-cargo-basics"],u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",n)}},p=u("PolkaContainer"),m=u("H1"),w=u("Link"),h=u("Image"),f=u("Blockquote"),g=u("Diff"),O={record:d},j="wrapper";function N(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)(j,Object(a.a)({},O,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)(p,{pageTitle:d.title,pageDescription:d.description,keywords:["Vulkan","Basics","Fundamental","Beginner","Surface","Window","learn gfx-hal","learn"],publishDate:d.createdAt,ogImage:d.ogImage,mdxType:"PolkaContainer"},Object(l.b)(m,{updatedAt:d.updatedAt,mdxType:"H1"},"T-","".concat(c.b-1),": ",d.title),Object(l.b)("p",null,"Vulkan is a very low-level spec that intends to keep as\nlittle code overhead as possible.\n",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal")," is a library that closely resembles -\nthough not entirely - the Vulkan spec. It's designed to\nprovide developers with a clean Vulkan-like API. Also,\n",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal")," provides multiple graphics backends to make our\ncode cross-platform compatible."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The following section is about ",Object(l.b)("strong",{parentName:"p"},"Project Setup"),",\nwhich you can skip and directly\ngo to ",Object(l.b)("inlineCode",{parentName:"p"},"Vulkan Instance and Surface")," section\nto get a heads-up on Vulkan Instance and Surface.")),Object(l.b)("h2",null,"Project Setup"),Object(l.b)("p",null,"Setting up a project in Rust is quite easy.\nWe just need to run: ",Object(l.b)("br",null)," ",Object(l.b)("inlineCode",{parentName:"p"},"cargo new {{project_name}}")),Object(l.b)("p",null,"We need some essential modules as our project\ndependencies, used across every chapter."),Object(l.b)("h3",null,"Dependencies and Metadata"),Object(l.b)("p",null,"Cool, so let's dive into ",Object(l.b)("inlineCode",{parentName:"p"},"Cargo.toml")," file for our dependencies"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'...\n[features]\ndefault = []\nmetal = ["gfx-backend-metal"]\ndx12 = ["gfx-backend-dx12"]\nvulkan = ["gfx-backend-vulkan"]\n\n[dependencies]\nwinit = "0.22.0"\ngfx-hal = "0.5.0"\nlog = "0.4.0"\nlog4rs = "0.11.0"\n\n[dependencies.gfx-backend-vulkan]\nversion = "0.5.0"\nfeatures = ["x11"]\noptional = true\n\n[target.\'cfg(target_os = "macos")\'.dependencies.gfx-backend-metal]\nversion = "0.5.0"\noptional = true\n\n[target.\'cfg(windows)\'.dependencies.gfx-backend-dx12]\nversion = "0.5.0"\noptional = true\n')),Object(l.b)("h4",null,"[features]"),Object(l.b)("p",null,"We are focusing only on 3 leading platforms for now:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Linux"),Object(l.b)("li",{parentName:"ul"},"MacOS"),Object(l.b)("li",{parentName:"ul"},"Windows")),Object(l.b)("p",null,"Thus, we require 3 different modules for each. ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-backend-vulkan"),"\nfor Linux/Windows, ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-backend-metal")," for MacOS, ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-backend-dx12"),"\nfor Windows."),Object(l.b)("p",null,"Details on how Rust Cargo ",Object(l.b)("inlineCode",{parentName:"p"},"features")," work can be read\nin ",Object(l.b)(w,{href:b.link,mdxType:"Link"},"Rust ","&"," Cargo basics"),"."),Object(l.b)("h4",null,"[dependencies]"),Object(l.b)("p",null,"Well, this section is quite clear:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"winit")," is used for Cross-Platform Windowing Provider."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"gfx-hal")," is used for Cross-Platform GPU Abstraction Layer Provider."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"log")," and ",Object(l.b)("inlineCode",{parentName:"li"},"log4rs")," combined provide us with Logging Implementation\nin our project since we wouldn't be using ",Object(l.b)("inlineCode",{parentName:"li"},"println!")," macro.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"[dependencies.{{feature}}]")," are the dependencies that will\nbe installed conditionally depending on the user's Operating System.\nWe need to always run our project with one of the features\nenabled."),Object(l.b)("h3",null,"Code Setup"),Object(l.b)("p",null,"This tutorial maintains a single ",Object(l.b)("inlineCode",{parentName:"p"},"main.rs")," file with\njust one ",Object(l.b)("inlineCode",{parentName:"p"},"struct")," that manages all the ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal")," instances."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs.true"}),'use std::mem::ManuallyDrop;\nuse std::ptr;\n\nuse gfx_hal::{window as hal_window, Backend, Instance};\nuse winit::{\n    dpi::{LogicalSize, PhysicalSize, Size},\n    event, event_loop, window,\n};\n\n#[cfg(feature = "dx12")]\nuse gfx_backend_dx12 as back;\n#[cfg(feature = "metal")]\nuse gfx_backend_metal as back;\n#[cfg(feature = "vulkan")]\nuse gfx_backend_vulkan as back;\n\nuse log::debug;\nuse log4rs;\n\nconst APP_NAME: &\'static str = "Show Window";\nconst WINDOW_SIZE: [u32; 2] = [1280, 768];\n\nstruct Renderer<B: Backend> {}\n\nimpl<B: Backend> Renderer<B> {\n    fn new() -> Self {\n        Renderer {}\n    }\n}\n\nfn main() {\n    log4rs::init_file("log4rs.yml", Default::default()).unwrap();\n}\n')),Object(l.b)("p",null,"The above code is our base structure, moving forward. We will do\nvery little work in ",Object(l.b)("inlineCode",{parentName:"p"},"fn main()"),", which includes making our\napplication up and running (also running the main Event Loop).\nThe heart of the whole application lies within ",Object(l.b)("inlineCode",{parentName:"p"},"struct Renderer"),"\nand all it's implementations (Do note, in a real-world project,\nyou should properly plan and structure your application)."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Lines 10-15"),": are conditional imports, depending on\nwhich ",Object(l.b)("inlineCode",{parentName:"p"},"feature")," we would be running our application or build\nit for release. If ",Object(l.b)("inlineCode",{parentName:"p"},"--features=metal")," is passed to ",Object(l.b)("inlineCode",{parentName:"p"},"cargo run"),",\nit will run our application with ",Object(l.b)("inlineCode",{parentName:"p"},"gfx_backend_metal"),"\nbackend."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"gfx-backend-vulkan"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Gets installed and used when ",Object(l.b)("inlineCode",{parentName:"li"},"vulkan")," feature is enabled"),Object(l.b)("li",{parentName:"ul"},"For Linux and Windows: ",Object(l.b)("inlineCode",{parentName:"li"},"cargo run --features=vulkan")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"gfx-backend-metal"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Gets installed and used when ",Object(l.b)("inlineCode",{parentName:"li"},"metal")," feature is enabled"),Object(l.b)("li",{parentName:"ul"},"For MacOS only: ",Object(l.b)("inlineCode",{parentName:"li"},"cargo run --features=metal")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"gfx-backend-dx12"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Gets installed and used when ",Object(l.b)("inlineCode",{parentName:"li"},"dx12")," feature is enabled"),Object(l.b)("li",{parentName:"ul"},"For Windows only: ",Object(l.b)("inlineCode",{parentName:"li"},"cargo run --features=dx12"))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Lines 17-18 & 32"),": are importing our log modules and\nsetting it up for logging. Once logging is setup, we can\ncall ",Object(l.b)("inlineCode",{parentName:"p"},"debug!")," macro anywhere in the code. To call other\nLogging APIs, like ",Object(l.b)("inlineCode",{parentName:"p"},"info!"),", ",Object(l.b)("inlineCode",{parentName:"p"},"warn!"),", and more, we just need\nto import them at ",Object(l.b)("em",{parentName:"p"},"Line-17"),"."),Object(l.b)("h2",null,Object(l.b)("inlineCode",{parentName:"h2"},"gfx-hal")," Backend"),Object(l.b)(h,{alt:"GFX Hal Backends",src:"https://user-images.githubusercontent.com/11786283/83277422-a70b1b00-a1ef-11ea-8f3e-c0254e40c203.png",placeholder:"https://user-images.githubusercontent.com/11786283/83277585-ed607a00-a1ef-11ea-803c-5df40055ecf8.png",mdxType:"Image"}),Object(l.b)("p",null,"Backends are specific to what GPU you have and what specs it supports."),Object(l.b)("p",null,"Vulkan Backend is cross-compatible and has support in\nLinux/Windows, on AMD, Intel, NVidia."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Apple stays out, and I hate this thing about it. It\ndoesn't support Vulkan and has a specific\ngraphics backend called ",Object(l.b)("inlineCode",{parentName:"p"},"Metal"),". Though ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal")," has\n",Object(l.b)("inlineCode",{parentName:"p"},"metal")," backend as well and since I am using\nMac (Yeah! Now don't come and bash me, can't use my\nLinux system a.t.m.), it would be a good\nway to know the support of ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal")," for MacOS as well.")),Object(l.b)("h2",null,"Vulkan Instance and Surface"),Object(l.b)(h,{alt:"Vulkan Flow Image",src:"https://user-images.githubusercontent.com/11786283/77244041-e4bf5680-6c36-11ea-96a1-2be7bd71ccbd.png",placeholder:"https://user-images.githubusercontent.com/11786283/80305144-bce48500-87d8-11ea-9832-4baaaf8ce41f.png",mdxType:"Image"}),Object(l.b)("p",null,"This tutorial is inspired from:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://vulkan.lunarg.com/doc/sdk/1.2.131.2/linux/tutorial/html/index.html"}),"LunarG Vulkan Tutorial"),","),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://vulkan-tutorial.com/Drawing_a_triangle/Setup/Base_code"}),"Vulkan Tutorial"))),Object(l.b)("p",null,"They are written in ",Object(l.b)("inlineCode",{parentName:"p"},"C++"),". I am trying to learn ",Object(l.b)("inlineCode",{parentName:"p"},"Rust")," and converting that tutorial into ",Object(l.b)("inlineCode",{parentName:"p"},"Rust"),",\nusing ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal")," library, which is a wrapper over Vulkan Specs."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Application"),": this whole project is the application."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Loader"),": here refers to ",Object(l.b)("inlineCode",{parentName:"li"},"gfx-hal")," and ",Object(l.b)("inlineCode",{parentName:"li"},"gfx-backend-vulkan")," libraries. An instance of\n",Object(l.b)("inlineCode",{parentName:"li"},"gfx-backend-vulkan")," initializes a Loader. Creating an instance initializes the loader."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Layers"),": is something advanced, and I am not sure when\nor if I will talk about it at all.")),Object(l.b)("h3",null,"Structure"),Object(l.b)("p",null,"The following structure is the minimal one, without Pipelines,\nDescriptors, Depth/Uniform Buffers, Shaders, and more (we will\nre-define our structure in coming chapters)."),Object(l.b)("p",null,"First few chapters, we will be rushing towards understanding\nthe very basics and try to get our application running.\n",Object(l.b)("em",{parentName:"p"},"Things really get boring if you don't see any results, right!!!")),Object(l.b)("p",null,"Comments in the following code block are for reference, which you can skip\nand refer them later, once you start understanding the overall\nprocess better."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),"...\nimpl impl<B: Backend> Renderer<B> {\n    fn new() -> Self {\n        /**\n         * Do not worry about the following right now:\n         *\n         * Initialization Steps, like:\n         *  * Get gfx-hal adapter\n         *  * Get Devices and Device Queues and Supported Family\n         *  * Setup Swapchain\n         *  * Initialize Render Pass\n         *  * Create Command Pool and get Command Buffers from them\n         *  * Initialize Synchronization Primitives\n         */\n        Renderer {}\n    }\n\n    fn draw() {\n      /**\n       * Draw calls are required to update our Window Frames, respective to OS's refresh rate.\n       *\n       * Thus we need the following:\n       *  * Update our Current Frame Index, to keep a check on which frame we are.\n       *  * Get an Image that we will draw to our screen\n       *  * Create a Framebuffer that links the Image resource to Render Pass\n       *  * Lock process\n       *  * Begin recording commands\n       *  * End recording commands\n       *  * Submit Commands to Device Queue.\n       *  * Presenting to screen\n       *  * Unlock processes\n       *\n       * (Semaphore and Fence) Locking/Unlocking processes run in parallel, so above sequence\n       * will differ when implemented.\n       */\n    }\n}\n\nimpl<B: Backend> Drop for Renderer<B> {\n    fn drop(&mut self) {\n      // Clean-Up Code, for some resources that are manually managed...\n    }\n}\n...\nfn main() -> Result<(), &'static str> {\n    /**\n     * Various instantiation steps are required before creating\n     * our Render:\n     *\n     *  * Instantiate Window Event Loop\n     *  * Instantiate OS Window Instance and get Window Dimension Extents\n     *  * Instantiate Vulkan(gfx-hal backend) Instance and Surface\n     *  * Instantiate our Renderer {}\n     *  * Start our Window Event Loop:\n     *  * -> Renderer Draws to Screen every Window redraw\n     *  * Application gets Killed, Event Loop drops.\n     */\n}\n")),Object(l.b)("h2",null,"Creating OS Window"),Object(l.b)("p",null,"Now let's come back to our code. In the real-world, to draw\nanything, we need a canvas, right. Similarly, in\nComputer Graphics to draw anything, we need an OS Window.\nLater we will be binding this OS Window with GPU ",Object(l.b)("inlineCode",{parentName:"p"},"surface"),"\ninstance that will do the actual drawing. Creating an OS Window\nin Rust is done using ",Object(l.b)("inlineCode",{parentName:"p"},"winit")," library, which again is\ncross-platform. It requires two significant steps to\ndisplay a blank window:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Window Dimensions"),Object(l.b)("li",{parentName:"ul"},"Event Loop will help us know when to redraw, w.r.t\nCPU and GPU capabilities (since we are working with Vulkan,\nit's all GPU capabilities), and listen to user events.")),Object(l.b)(f,{type:"warn",mdxType:"Blockquote"},"How or When re-renders happen, is all very low-level details, which I don't have much context on right now."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),"...\n// main function will start instantiation of static instances.\nfn main() {\n  ...\n  let ev_loop = event_loop::EventLoop::new();\n  let (window_builder, extent) = build_window(&ev_loop);\n  let (window) = create_backend(window_builder, &ev_loop, extent);\n  ...\n}\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"build_window()")," is doing the main job of instantiating\nthe main OS window, with some logical window size, scaled to\nmatch the actual physical size."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),"...\nfn create_backend(\n    wb: window::WindowBuilder,\n    ev_loop: &event_loop::EventLoop<()>,\n    extent: hal_window::Extent2D,\n) -> (back::Instance, back::Surface, window::Window) {\n    let window = wb.build(ev_loop).unwrap();\n\n    (window)\n}\n\nfn build_window(\n    ev_loop: &event_loop::EventLoop<()>\n) -> (window::WindowBuilder, hal_window::Extent2D) {\n    let (logical_window_size, physical_window_size) = {\n        let dpi = ev_loop.primary_monitor().scale_factor();\n        let logical: LogicalSize<u32> = WINDOW_SIZE.into();\n        let physical: PhysicalSize<u32> = logical.to_physical(dpi);\n\n        (logical, physical)\n    };\n\n    let window_builder = window::WindowBuilder::new()\n        .with_title(APP_NAME)\n        .with_inner_size(logical_window_size);\n\n    (\n        window_builder,\n        hal_window::Extent2D {\n            width: physical_window_size.width,\n            height: physical_window_size.height,\n        },\n    )\n}\n")),Object(l.b)("p",null,"Everything in the above code is quite self-explanatory and\nstraightforward. The only thing that seems confusing is, why\ndo we have two device sizes. The best explanation can be found\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.rs/winit/0.22.1/winit/dpi/index.html"}),"here in ",Object(l.b)("inlineCode",{parentName:"a"},"winit")," docs"),",\nbut in short, they are just two different size\ninstances. One (the ",Object(l.b)("inlineCode",{parentName:"p"},"LogicalSize"),") is Human understandable,\ni.e., what you ask for is what you get. The other one\n(",Object(l.b)("inlineCode",{parentName:"p"},"PhysicalDevice"),") is something specific to OS and hardware,\nwhere each Computer System might have a different Screen\ndisplay ratio (also known as DPI or PPI), defining how a 720 sized\nLogical window we defined will be presented on real\nScreen, calculating the pixel ratio per inch and stuff."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"window")," instance, which\nis nothing but ",Object(l.b)("inlineCode",{parentName:"p"},"winit"),"'s Window instance, is built by the\n",Object(l.b)("inlineCode",{parentName:"p"},"WindowBuilder")," we instantiated earlier. This ",Object(l.b)("inlineCode",{parentName:"p"},"window")," will\nbe used by ",Object(l.b)("inlineCode",{parentName:"p"},"surface")," to bind them together."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"We will discuss the Event Loop in a later section.")),Object(l.b)("h2",null,"Vulkan Instance & Surface instance creation"),Object(l.b)("p",null,"We now have to create instances of Vulkan Backend Instance\nand Surface. These two states will only be used for instantiating\nand destroying other useful resources; thus, we will have to\nkeep them in ",Object(l.b)("inlineCode",{parentName:"p"},"Renderer")," struct."),Object(l.b)("p",null,"We will update our ",Object(l.b)("inlineCode",{parentName:"p"},"create_backend")," function, which will\ngive us (instance, surface) instances for later use."),Object(l.b)(g,{lang:"rs",addedLineNumbers:[8,9,10,11,12,13,16,17,24],removedLineNumbers:[],hideLines:!0,mdxType:"Diff"},'...\nfn create_backend(\n    wb: window::WindowBuilder,\n    ev_loop: &event_loop::EventLoop<()>,\n    extent: hal_window::Extent2D,\n) -> (back::Instance, back::Surface, window::Window) {\n    ...\n    let instance = back::Instance::create(APP_NAME, 1).expect("Failed to create an instance!");\n    let surface = unsafe {\n        instance\n            .create_surface(&window)\n            .expect("Failed to create a surface!")\n    };\n    ...\n    (\n      instance,\n      surface,\n      window\n    )\n}\n...\nfn main() {\n  ...\n  let (instance, surface, window) = create_backend(window_builder, &ev_loop, extent);\n  ...\n}\n'),Object(l.b)("p",null,"The above code will give us instances of Vulkan Instance and Surface,\nbut we need them in ",Object(l.b)("inlineCode",{parentName:"p"},"Renderer")," struct as well for later reference."),Object(l.b)("p",null,"Thus we need to update our ",Object(l.b)("inlineCode",{parentName:"p"},"Renderer")," struct as well."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Details on the above code:")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"We will discuss ",Object(l.b)("inlineCode",{parentName:"p"},"extent")," in another chapter in detail,\nbut in short, it` will help us keep window dimension\ndetails.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"instance")," is created directly from static functions from\n",Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"gfx_hal"))," ",Object(l.b)("inlineCode",{parentName:"p"},"Instance"),". ",Object(l.b)("inlineCode",{parentName:"p"},"create")," function takes an ",Object(l.b)("em",{parentName:"p"},"APP_NAME"),"\nand a ",Object(l.b)("em",{parentName:"p"},"VERSION")," number for the app, whose functionality is\ncurrently unknown to me."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"instance")," is used to create ",Object(l.b)("inlineCode",{parentName:"p"},"surface"),". Vulkan requires a\ncanvas or ",Object(l.b)("inlineCode",{parentName:"p"},"surface")," to draw things into, and a ",Object(l.b)("inlineCode",{parentName:"p"},"surface")," can\nonly exist inside an OS App Window. Usually, we use a 3rd-party\nmodule to create OS specific Window instances,\nlike we created one from ",Object(l.b)("inlineCode",{parentName:"p"},"winit"),"."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"One thing to note"),": ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal")," does not manage every piece of Memory,\nup here, like ",Object(l.b)("inlineCode",{parentName:"p"},"surface")," was created using ",Object(l.b)("inlineCode",{parentName:"p"},"instance"),". Thus we\nneed to manage such resources, which need to be cleared\nfrom memory before other resources, such as instance.\nTherefore, we define such instances like\nVulkan ",Object(l.b)("inlineCode",{parentName:"p"},"surface"),", as manually managed using ",Object(l.b)("inlineCode",{parentName:"p"},"ManuallyDrop"),"\nstruct, and we need to drop ",Object(l.b)("inlineCode",{parentName:"p"},"surface")," once done with it,\ni.e., before ",Object(l.b)("inlineCode",{parentName:"p"},"Renderer")," struct gets dropped."),Object(l.b)(g,{lang:"rs",addedLineNumbers:[3,5,9,11,12,17,18,19,20,21,22,23,24,28],removedLineNumbers:[],hideLines:!0,mdxType:"Diff"},"struct Renderer<B: Backend> {\n    // Vulkan backend instance object\n    instance: B::Instance,\n    // Vulkan backend surface object\n    surface: ManuallyDrop<B::Surface>,\n}\n...\nimpl<B: Backend> Renderer<B> {\n    fn new(instance: B::Instance, surface: B::Surface) -> Self {\n        Renderer {\n            instance,\n            surface: ManuallyDrop::new(surface),\n        }\n    }\n}\n...\nimpl<B: Backend> Drop for Renderer<B> {\n    fn drop(&mut self) {\n        unsafe {\n            let surface = ManuallyDrop::into_inner(ptr::read(&self.surface));\n            self.instance.destroy_surface(surface);\n        }\n    }\n}\n...\nfn main() {\n  ...\n  let renderer = Renderer::<back::Backend>::new(instance, surface);\n  ...\n}\n"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"ManuallyDrop")," is a module that gives any developer a\nsecure way to clear the memory in Rust. Instead of ",Object(l.b)("inlineCode",{parentName:"p"},"ManuallyDrop::drop"),"\nwe are using ",Object(l.b)("inlineCode",{parentName:"p"},"ManuallyDrop::into_inner"),", because we need to\nget the actual data from memory and pass it's ownership to\nVulkan ",Object(l.b)("inlineCode",{parentName:"p"},"instance")," for destruction."),Object(l.b)("h2",null,"Bonus Round (Event Loop)"),Object(l.b)("p",null,"Ok! We have already created ",Object(l.b)("inlineCode",{parentName:"p"},"ev_loop")," instance for ",Object(l.b)("inlineCode",{parentName:"p"},"winit"),",\nbut we haven't discussed it properly. As the\nname suggests, it is the core of ",Object(l.b)("inlineCode",{parentName:"p"},"winit"),", used for starting the\nApp and listening to User Events.\nWe will discuss Event Handling done inside the ",Object(l.b)("inlineCode",{parentName:"p"},"run")," loop,\nwhere we pass a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.rust-lang.org/book/ch13-01-closures.html"}),"Closure"),", which will handle various user events,\nlike ",Object(l.b)("em",{parentName:"p"},"Keyboard"),", ",Object(l.b)("em",{parentName:"p"},"Joystick"),", ",Object(l.b)("em",{parentName:"p"},"Mouse")," events."),Object(l.b)(f,{type:"warn",mdxType:"Blockquote"},"Do remember that a ",Object(l.b)(w,{href:"https://doc.rust-lang.org/book/ch13-01-closures.html",target:"_blank",rel:"noopener noreferrer",mdxType:"Link"},"Closure"),"\xa0 will completely get the ownership of any variables that are passed to it.",Object(l.b)("p",null,"  Even the ",Object(l.b)("inlineCode",{parentName:"p"},"ev_loop")," instance we created, will lose its\nownership after ",Object(l.b)("inlineCode",{parentName:"p"},"ev_loop.run")," call. That's why everything\nwe have done until now is done inside ",Object(l.b)("inlineCode",{parentName:"p"},"main"),"\nfunction to keep instance ownerships temporary.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),'fn main() {\n    // Previous instantiations, before starting the\n    // event_loop\n    ...\n    ev_loop.run(move |event, _, control_flow| {\n        *control_flow = event_loop::ControlFlow::Wait;\n        match event {\n            event::Event::WindowEvent { event, .. } =>\n            {\n                #[allow(unused_variables)]\n                match event {\n                    event::WindowEvent::CloseRequested => {\n                        *control_flow = event_loop::ControlFlow::Exit\n                    }\n                    event::WindowEvent::Resized(dims) => {\n                        debug!("RESIZE EVENT");\n                    }\n                    event::WindowEvent::ScaleFactorChanged { new_inner_size, .. } => {\n                        // Will get called whenever the screen scale factor (DPI) changes,\n                        // like when the user move the Window from one less DPI monitor\n                        // to other high scaled DPI Monitor.\n                        debug!("Scale Factor Change");\n                    }\n                    _ => (),\n                }\n            }\n            event::Event::MainEventsCleared => {\n                debug!("MainEventsCleared");\n                backend.window.request_redraw();\n            },\n            event::Event::RedrawRequested(_) => {\n                debug!("RedrawRequested");\n            },\n            event::Event::RedrawEventsCleared => {\n                debug!("RedrawEventsCleared");\n            }\n            _ => (),\n        }\n    });\n    ...\n}\n')),Object(l.b)("p",null,"First things first, ",Object(l.b)("inlineCode",{parentName:"p"},"ev_loop.run(|| => {})")," starts our event\nloop, which actually takes a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.rust-lang.org/book/ch13-01-closures.html"}),"closure"),".\nThus we need to be a bit careful in using it. That's one of the reasons\nwe instantiated everything inside ",Object(l.b)("inlineCode",{parentName:"p"},"main"),". Later on, we will\ndo things inside ",Object(l.b)("inlineCode",{parentName:"p"},"struct")," ",Object(l.b)("inlineCode",{parentName:"p"},"impl"),"s, but in this section, we have\nsone most of the work inside ",Object(l.b)("inlineCode",{parentName:"p"},"main"),"."),Object(l.b)("p",null,"Details on event listeners:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"CloseRequested")," is used for listening close button click.\nWithout this, our Window won't Shutdown gracefully, we would\nhave to ",Object(l.b)("inlineCode",{parentName:"li"},"SIGKILL")," our app. We can also listen to Key presses, like ",Object(l.b)("inlineCode",{parentName:"li"},"ESC"),",\nto close the window, but we will cover that later."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Resized")," and ",Object(l.b)("inlineCode",{parentName:"li"},"ScaleFactorChanged")," are called when window is resized and\nwhen window's DPI changes (like when we move our window from a low DPI\nMonitor to High DPI), respectively."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"MainEventsCleared"),": If you are from ",Object(l.b)("strong",{parentName:"li"},"Android")," background,\nit resembles the ",Object(l.b)("inlineCode",{parentName:"li"},"onMeasure")," call, or if from ",Object(l.b)("strong",{parentName:"li"},"ReactJS"),"\nworld, it resembles the ",Object(l.b)("inlineCode",{parentName:"li"},"shouldComponentUpdate")," call. What I\nmean is, this event is called just before any redraw\nand can be used to do calculations before drawing on window.\nAlso, keep a note that if you want to redraw you need\nto call this ",Object(l.b)("inlineCode",{parentName:"li"},"window.request_redraw()"),", like we ",Object(l.b)("inlineCode",{parentName:"li"},"return true"),"\nfrom ",Object(l.b)("inlineCode",{parentName:"li"},"shouldComponentUpdate")," to do a ",Object(l.b)("inlineCode",{parentName:"li"},"render"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"RedrawRequested"),": this resembles ",Object(l.b)("strong",{parentName:"li"},"Android's")," ",Object(l.b)("inlineCode",{parentName:"li"},"onDraw"),"\ncall and in ",Object(l.b)("strong",{parentName:"li"},"ReactJS")," resembles a ",Object(l.b)("inlineCode",{parentName:"li"},"render")," call. That means\nthis call is where we will have to handle all our\ncanvas drawings, in ",Object(l.b)("inlineCode",{parentName:"li"},"gfx_hal"),", all our ",Object(l.b)("inlineCode",{parentName:"li"},"surface")," drawings."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"RedrawEventsCleared"),": this resembles ",Object(l.b)("strong",{parentName:"li"},"ReactJS")," ",Object(l.b)("inlineCode",{parentName:"li"},"componentDidUpdate")," call,\nas this event gets triggered on\neach change after a redraw has happened. One thing to note,\n",Object(l.b)("em",{parentName:"li"},"if there are no ",Object(l.b)("inlineCode",{parentName:"em"},"RedrawRequested")," events, it is emitted\nimmediately after ",Object(l.b)("inlineCode",{parentName:"em"},"MainEventsCleared"),"."))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-log"}),"2020-05-11T06:59:42.987942+05:30 DEBUG show_window - MainEventsCleared\n2020-05-11T06:59:42.988007+05:30 DEBUG show_window - RedrawRequested\n2020-05-11T06:59:42.988033+05:30 DEBUG show_window - RedrawEventsCleared\n")),Object(l.b)("hr",null),Object(l.b)("h2",null,"Code & Output"),Object(l.b)("p",null,"You can find the full code for this Doc,\nhere ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Shub1427/rustschool/blob/master/gui/draw-cube/src/001-show_window/main.rs"}),"001-show_window")),Object(l.b)("p",null,"Once you run the code (",Object(l.b)("inlineCode",{parentName:"p"},"cargo run --bin show_window --features=vulkan"),"),\nyou will get the following output."),Object(l.b)(h,{alt:"Blank Window Surface",src:"https://user-images.githubusercontent.com/11786283/83215493-b903a400-a184-11ea-997a-6fdf5417954e.png",placeholder:"https://user-images.githubusercontent.com/11786283/83215617-0b44c500-a185-11ea-8f91-de78c37c4993.png",mdxType:"Image"})))}N.isMDXComponent=!0},Ff2n:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("zLVn");function i(e,n){if(null==e)return{};var t,i,r=Object(a.a)(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}},Q88C:function(e,n,t){"use strict";var a;t.d(n,"a",(function(){return a})),function(e){e.TUTORIAL="tutorial",e.PROJECT="project",e.RESEARCH="research",e.RUST="rust",e.JS="javascript",e.REACT="reactjs",e.GFX_HAL="gfx-hal"}(a||(a={}))},Qetd:function(e,n,t){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},"Vi/D":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gfx-hal-initials/display-window",function(){return t("8IhA")}])},wx14:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return a}))},zAA7:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return r}));var a=t("Q88C"),i={"display-window":{key:"display-window",link:"/gfx-hal-initials/display-window",title:"Setup & Display Blank Window",description:"Learn Displaying a Blank Window using winit and bind it to gfx-hal surface instance",ogImage:"https://user-images.githubusercontent.com/11786283/82109997-98852400-9758-11ea-84a0-aa3996c67f86.jpg",tags:[a.a.RUST],createdAt:new Date("2020/04/25 17:00:00"),updatedAt:new Date("2020/05/28 23:50:00"),isPublished:!0},"physical-logical-devices":{key:"physical-logical-devices",link:"/gfx-hal-initials/physical-logical-devices",title:"Adapters & Physical/Logical Devices & Device Queues",description:"Learn to Instantiate Vulkan Physical/Logical Devices and get Device Queue from gfx-hal adapters",ogImage:"https://user-images.githubusercontent.com/11786283/82111231-485e8f80-9761-11ea-9f21-8843d4a66752.jpg",tags:[a.a.TUTORIAL,a.a.RUST,a.a.GFX_HAL],createdAt:new Date("2020/05/16 8:45:00"),updatedAt:new Date("2020/05/29 9:25:00"),isPublished:!0},"swap-chain":{key:"swap-chain",link:"/gfx-hal-initials/swap-chain",title:"SwapChain and Image Views in gfx-hal",description:"Learning about Swapchain, Double Buffering and Image Views. Understanding the implementation of SwapChain in gfx-hal",ogImage:"https://user-images.githubusercontent.com/11786283/82640938-22396380-9c29-11ea-9ee5-9a7fc01920da.jpg",tags:[a.a.TUTORIAL,a.a.RUST,a.a.GFX_HAL],createdAt:new Date("2020/05/22 10:20:00"),updatedAt:new Date("2020/05/23 14:30:00"),isPublished:!0},"command-buffers":{key:"command-buffers",link:"/gfx-hal-initials/command-buffers",title:"Command Buffers & Pool",description:"Understanding Command Pools and Command Buffers in Vulkan and gfx-hal",ogImage:"https://user-images.githubusercontent.com/11786283/82124794-f0567600-97be-11ea-9023-ea1467a6b734.jpg",tags:[a.a.TUTORIAL,a.a.RUST,a.a.GFX_HAL],createdAt:new Date("2020/05/16 21:45:00"),updatedAt:new Date("2020/05/16 21:45:00"),isPublished:!0},shaders:{key:"shaders",link:"/gfx-hal-initials/shaders",title:"Shaders",description:"Understanding Shaders & writing minimal Shader using GLSL Shading language",ogImage:"https://user-images.githubusercontent.com/11786283/82640938-22396380-9c29-11ea-9ee5-9a7fc01920da.jpg",tags:[a.a.TUTORIAL,a.a.RUST,a.a.GFX_HAL],createdAt:new Date("2020/05/23 19:30:00"),updatedAt:new Date("2020/05/23 19:35:00"),isPublished:!0}},r=Object.keys(i).length},zLVn:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}t.d(n,"a",(function(){return a}))}},[["Vi/D",0,1]]]);