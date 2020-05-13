(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7ljp":function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t("q1tI"),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),d=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"===typeof e?e(n):l({},n,{},e)),t},b=function(e){var n=d(e.components);return(i.a.createElement(s.Provider,{value:n},e.children))},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},w=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(t),p=a,w=b["".concat(r,".").concat(p)]||b[p]||u[p]||o;return t?i.a.createElement(w,l({ref:n},s,{components:t})):i.a.createElement(w,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var o=t.length,r=new Array(o);r[0]=w;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"===typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}w.displayName="MDXCreateElement"},"8IhA":function(e,n,t){"use strict";t.r(n),t.d(n,"record",(function(){return s})),t.d(n,"default",(function(){return g}));var a=t("wx14"),i=t("Ff2n"),o=t("q1tI"),r=t.n(o),l=t("7ljp"),c=t("zAA7"),s=(r.a.createElement,c.a["display-window"]),d=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",n)}},b=d("PolkaContainer"),p=d("H1"),u=d("Image"),w=d("Blockquote"),m=d("Diff"),h=d("Link"),f={record:s},O="wrapper";function g(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)(O,Object(a.a)({},f,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)(b,{pageTitle:s.title,pageDescription:s.description,keywords:["Vulkan","Basics","Fundamental","Beginner","Surface","Window","gfx-hal"],publishDate:s.createdAt,ogImage:s.ogImage,mdxType:"PolkaContainer"},Object(l.b)(p,{updatedAt:s.updatedAt,wordCount:520,mdxType:"H1"},s.title),Object(l.b)("p",null,"Vulkan is a very low-level spec, which intends to keep as less overhead of code as it can.\n",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal")," is a library which closely resembles the Vulkan specs (not entirely though), to provide\nthe developers with clean APIs, that are very similar to Vulkan specs. Also, ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal")," provides\nmultiple graphics backends to make our code cross-platform compatible."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Code for this Note, can be found ",Object(l.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/Shub1427/rustschool/blob/master/gui/gfx-rs/src/001-show_window/main.rs"}),"here"),"\nParts of the code would be referenced here, to make things clear.")),Object(l.b)("h2",null,"Vulkan Instance and Surface"),Object(l.b)(u,{alt:"Vulkan Flow Image",src:"https://user-images.githubusercontent.com/11786283/77244041-e4bf5680-6c36-11ea-96a1-2be7bd71ccbd.png",placeholder:"https://user-images.githubusercontent.com/11786283/80305144-bce48500-87d8-11ea-9832-4baaaf8ce41f.png",mdxType:"Image"}),Object(l.b)("p",null,"This Tutorial is inspired from ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://vulkan.lunarg.com/doc/sdk/1.2.131.2/linux/tutorial/html/index.html"}),"LunarG Vulkan Tutorial"),",\nwhich is written in ",Object(l.b)("inlineCode",{parentName:"p"},"C++"),". I am trying to learn ",Object(l.b)("inlineCode",{parentName:"p"},"Rust")," and converting that tutorial into ",Object(l.b)("inlineCode",{parentName:"p"},"Rust"),",\nusing ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal")," library, which is a wrapper over Vulkan Specs."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Application: is what we will build using ",Object(l.b)("inlineCode",{parentName:"li"},"gfx-hal")),Object(l.b)("li",{parentName:"ul"},"Loader: here refers to ",Object(l.b)("inlineCode",{parentName:"li"},"gfx-hal")," and ",Object(l.b)("inlineCode",{parentName:"li"},"gfx-backend-vulkan")," libraries. An instance of\n",Object(l.b)("inlineCode",{parentName:"li"},"gfx-backend-vulkan")," initializes a Loader. Creating an instance, initializes the loader."),Object(l.b)("li",{parentName:"ul"},"Layers: is something advanced, and am not sure when or if I will talk about it at-all.")),Object(l.b)("h2",null,"Backend"),Object(l.b)(u,{alt:"GFX Hal Backends",src:"https://user-images.githubusercontent.com/11786283/77244047-03255200-6c37-11ea-885d-2d8b981bb8a8.png",placeholder:"https://user-images.githubusercontent.com/11786283/80305177-eb626000-87d8-11ea-9d40-0a632affdd2f.png",mdxType:"Image"}),Object(l.b)("p",null,"Backends are specific to what GPU u have and what specs it supports."),Object(l.b)("p",null,"Vulkan Backend is cross-compatible and has support in Linux/Windows, on AMD, Intel, NVidia etc."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Apple stays out, and I hate this thing about it, it doesn't support Vulkan, and has specific\ngraphics backend called ",Object(l.b)("inlineCode",{parentName:"p"},"Metal"),". Though ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal")," has ",Object(l.b)("inlineCode",{parentName:"p"},"metal")," backend as well and since I am using\nMac (Yeah! Now don't come and bash me, can't use my Linux system a.t.m.), it would be a good\nway to know the support of ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal")," for MacOS as well.")),Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"Moving forward")),", we now need to import various ",Object(l.b)("inlineCode",{parentName:"p"},"backends")," in our code to have cross-compatibility.\n",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal")," needs an instance of a specific Backend which can be controlled\nusing Rust Feature Configurations."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),'#[cfg(feature = "dx12")]\nuse gfx_backend_dx12 as back;\n#[cfg(feature = "metal")]\nuse gfx_backend_metal as back;\n#[cfg(feature = "vulkan")]\nuse gfx_backend_vulkan as back;\n')),Object(l.b)("hr",null),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"From here on, we will deep dive into Rust Programming. By the time we are done coding, we would be\nable to show a blank window on our Monitors.")),Object(l.b)("h2",null,"Define Backend Struct:"),Object(l.b)("p",null,"I am trying to keep my code, matching to how people write for real life projects. Thus, we won't be\njust writing down lines of code all inside ",Object(l.b)("inlineCode",{parentName:"p"},"main")," function, instead we will try to manage our code,\nas much as we can from the beginning (not overdoing to much)."),Object(l.b)("p",null,"So first thing we need is to manage Window Instance and Vulkan Backend Surface Objects (what these things\nare, is defined in next sections)."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),"struct BackendState<B: Backend> {\n    // Vulkan backend instance object\n    instance: Option<B::Instance>,\n    // Vulkan backend surface object\n    surface: ManuallyDrop<B::Surface>,\n    // `winit` Window object.\n    window: window::Window,\n}\n\nimpl<B: Backend> Drop for BackendState<B> {\n    fn drop(&mut self) {\n        if let Some(instance) = &self.instance {\n            unsafe {\n                let surface = ManuallyDrop::into_inner(ptr::read(&self.surface));\n                instance.destroy_surface(surface);\n            }\n        }\n    }\n}\n")),Object(l.b)("p",null,"Since ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal")," does not manage every peace of Memory, we need to define the Vulkan ",Object(l.b)("inlineCode",{parentName:"p"},"surface"),"\nas manually managed, using ",Object(l.b)("inlineCode",{parentName:"p"},"ManuallyDrop")," struct. Also, we need to drop ",Object(l.b)("inlineCode",{parentName:"p"},"surface")," once done with it,\ni.e. when ",Object(l.b)("inlineCode",{parentName:"p"},"BackendState")," struct gets dropped."),Object(l.b)("h2",null,"Creating OS Window"),Object(l.b)("p",null,"Now let's come back to our code. In real world, to draw\nanything we need a canvas, right. Similarly, in\nComputer Graphics to draw anything, we need an OS Window.\nLater we will be binding this OS Window with GPU ",Object(l.b)("inlineCode",{parentName:"p"},"surface"),"\ninstance that will do the actual drawing. Creating an OS Window\nin Rust is done using ",Object(l.b)("inlineCode",{parentName:"p"},"winit")," library, which again is\ncross-platform. It requires two major steps to display a blank window:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Window Dimensions"),Object(l.b)("li",{parentName:"ul"},"Event Loop, that will help us to know when to redraw, w.r.t\nCPU and GPU capabilities (since we are working with Vulkan,\nit's all GPU capabilities), and listen to user events.")),Object(l.b)(w,{type:"warn",mdxType:"Blockquote"},"How or When re-renders happen, is all very low level details, which I don't have much context on right now."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),'const APP_NAME: &\'static str = "Show Window";\nconst WINDOW_SIZE: [u32; 2] = [1024, 768];\n...\n// main function will start instantiation of static instances.\nfn main() {\n  ...\n  let ev_loop = event_loop::EventLoop::new();\n  let (window_builder, extent) = build_window(&ev_loop);\n  ...\n}\n')),Object(l.b)("p",null,"where, ",Object(l.b)("inlineCode",{parentName:"p"},"build_window()")," is doing the main job, of instantiating\nthe main OS window, with some logical window size, scaled to\nmatch the actual physical size."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),'fn build_window(\n    ev_loop: &event_loop::EventLoop<()>\n) -> (window::WindowBuilder, hal_window::Extent2D) {\n    // We need to first get Logical and Physical Size of the screen\n    let (logical_window_size, physical_window_size) = {\n        let dpi = ev_loop.primary_monitor().scale_factor();\n        let logical: LogicalSize<u32> = WINDOW_SIZE.into();\n        let physical: PhysicalSize<u32> = logical.to_physical(dpi);\n\n        (logical, physical)\n    };\n\n    let window_builder = window::WindowBuilder::new()\n        .with_title(APP_NAME)\n        .with_inner_size(logical_window_size)\n        .with_title("colour-uniform".to_string());\n\n    (\n        window_builder,\n        hal_window::Extent2D {\n            width: physical_window_size.width,\n            height: physical_window_size.height,\n        },\n    )\n}\n')),Object(l.b)("p",null,"Everything in the above code is quite simple and\nself-explanatory. The only thing that is confusing is, why\ndo we have two device sizes. Best explanation can be found\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.rs/winit/0.22.1/winit/dpi/index.html"}),"here in ",Object(l.b)("inlineCode",{parentName:"a"},"winit")," docs"),", but in short they are just two different size\ninstances. One (the ",Object(l.b)("inlineCode",{parentName:"p"},"LogicalSize"),") is Human understandable,\ni.e., what you ask for is what you get. The other one\n(",Object(l.b)("inlineCode",{parentName:"p"},"PhysicalDevice"),") is something specific to OS and hardware,\nwhere each Computer System might have a different Screen\ndisplay ratio (also known as DPI), defining how a 720 sized\nLogical window we defined will actually be presented on real\nScreen, calculating the pixel ratio per inch and stuff."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"We still haven't built our ",Object(l.b)("inlineCode",{parentName:"p"},"winit")," Window, yet. We have just\ninstantiated ",Object(l.b)("inlineCode",{parentName:"p"},"winit"),"'s WindowBuilder, which uses Builder\nPattern to generate ",Object(l.b)("inlineCode",{parentName:"p"},"Window"),", once ",Object(l.b)("inlineCode",{parentName:"p"},"build")," method is called.")),Object(l.b)("h2",null,"Instance & Surface (Instantiating our ",Object(l.b)("inlineCode",{parentName:"h2"},"BackendState"),")"),Object(l.b)("p",null,"Vulkan instance is the starting point to work with Vulkan.\nA Vulkan instance actually takes the name of Application,\nand provides us with various APIs, specially to\n",Object(l.b)("inlineCode",{parentName:"p"},"enumerate_devices"),"."),Object(l.b)("p",null,"We will start by wrapping all these instantiations into one\nfunction call."),Object(l.b)(m,{lang:"rs",addedLineNumbers:[6],removedLineNumbers:[],hideLines:!0,mdxType:"Diff"},'// main.rs\n...\nfn main() {\n  ...\n  let (window_builder, extent) = build_window(&ev_loop, "Show Window".into());\n  let backend = create_backend(window_builder, &ev_loop, extent);\n  ...\n}\n'),Object(l.b)("p",null,"We first need to get our ",Object(l.b)("inlineCode",{parentName:"p"},"winit")," ",Object(l.b)("inlineCode",{parentName:"p"},"Window")," instance, that we\nleft to do in last section, then we will move forward in\ngenerating ",Object(l.b)("inlineCode",{parentName:"p"},"gfx_hal"),"'s backend ",Object(l.b)("inlineCode",{parentName:"p"},"instance")," and using that\n",Object(l.b)("inlineCode",{parentName:"p"},"instance")," we will derive our ",Object(l.b)("inlineCode",{parentName:"p"},"surface")," and ",Object(l.b)("inlineCode",{parentName:"p"},"devices"),",\nused to draw on window and get GPU details, respectively."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),'fn create_backend(\n    wb: window::WindowBuilder,\n    ev_loop: &event_loop::EventLoop<()>,\n    extent: hal_window::Extent2D\n) -> BackendState<back::Backend> {\n    let window = wb.build(ev_loop).unwrap();\n\n    let instance = back::Instance::create(APP_NAME, 1)\n        .expect("Failed to create an instance!");\n    let surface = unsafe {\n        instance\n            .create_surface(&window)\n            .expect("Failed to create a surface!")\n    };\n\n    BackendState {\n        instance: Some(instance),\n        surface: ManuallyDrop::new(surface),\n        window,\n    }\n}\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"We will discuss about ",Object(l.b)("inlineCode",{parentName:"p"},"extent")," in other sections,\nwhen we will start working with GPU device instances, i.e.\nwhen we will work with ",Object(l.b)("inlineCode",{parentName:"p"},"adapters"),".")),Object(l.b)("p",null,"First thing to note, we need to create ",Object(l.b)("inlineCode",{parentName:"p"},"window")," instance, which\nis nothing but ",Object(l.b)("inlineCode",{parentName:"p"},"winit"),"'s Window instance, built by the\n",Object(l.b)("inlineCode",{parentName:"p"},"WindowBuilder")," we instantiated earlier. This instance will\nbe used by ",Object(l.b)("inlineCode",{parentName:"p"},"surface")," to bind them together."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"instance")," is created directly from static functions from\n",Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"gfx_hal"))," ",Object(l.b)("inlineCode",{parentName:"p"},"Instance"),". ",Object(l.b)("inlineCode",{parentName:"p"},"create")," function takes an ",Object(l.b)("em",{parentName:"p"},"APP_NAME"),"\nand a ",Object(l.b)("em",{parentName:"p"},"VERSION")," number for the app, whose functionality is\ncurrently unknown to me."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"instance")," is used to create ",Object(l.b)("inlineCode",{parentName:"p"},"surface"),". Vulkan requires a\ncanvas or ",Object(l.b)("inlineCode",{parentName:"p"},"surface")," to draw things into and a ",Object(l.b)("inlineCode",{parentName:"p"},"surface")," can\nonly exist inside a OS App Window. Usually we use a 3rd-party\nmodule to create OS specific Window instances,\nlike created one from ",Object(l.b)("inlineCode",{parentName:"p"},"winit"),"."),Object(l.b)(w,{type:"warn",mdxType:"Blockquote"},"Many stuff here has not been described in detail. We will bw discussing and explaining stuff in more detail later, or update this Doc again later, when I gain more knowledge."),Object(l.b)("h2",null,"Bonus Round (Event Loop)"),Object(l.b)("p",null,"Ok! We have already created ",Object(l.b)("inlineCode",{parentName:"p"},"ev_loop")," instance for ",Object(l.b)("inlineCode",{parentName:"p"},"winit"),",\nbut we haven't really discussed about it properly. As the\nname suggests, it is the core of ",Object(l.b)("inlineCode",{parentName:"p"},"winit"),", used for starting the\nApp and listening to User Events.\nWe will discuss on Event Handling done inside the ",Object(l.b)("inlineCode",{parentName:"p"},"run")," loop,\nwhere we pass a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.rust-lang.org/book/ch13-01-closures.html"}),"Closure"),", which will handle various user events,\nlike ",Object(l.b)("em",{parentName:"p"},"Keyboard"),", ",Object(l.b)("em",{parentName:"p"},"Joystick"),", ",Object(l.b)("em",{parentName:"p"},"Mouse")," events etc."),Object(l.b)(w,{type:"warn",mdxType:"Blockquote"},"Do remember that a ",Object(l.b)(h,{href:"https://doc.rust-lang.org/book/ch13-01-closures.html",target:"_blank",rel:"noopener noreferrer",mdxType:"Link"},"Closure"),"\xa0 will completely get the ownership of any variables that are passed to it.",Object(l.b)("p",null,"  Even the ",Object(l.b)("inlineCode",{parentName:"p"},"ev_loop")," instance we created, will lose it's\nownership after ",Object(l.b)("inlineCode",{parentName:"p"},"ev_loop.run")," call. This is the reason\neverything we have done till now is done inside ",Object(l.b)("inlineCode",{parentName:"p"},"main"),"\nfunction to keep instance ownerships temporary.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),'fn main() {\n    // Previous instantiations, before starting the\n    // event_loop\n    ...\n    ev_loop.run(move |event, _, control_flow| {\n        *control_flow = event_loop::ControlFlow::Wait;\n        match event {\n            event::Event::WindowEvent { event, .. } =>\n            {\n                #[allow(unused_variables)]\n                match event {\n                    event::WindowEvent::CloseRequested => {\n                        *control_flow = event_loop::ControlFlow::Exit\n                    }\n                    event::WindowEvent::Resized(dims) => {\n                        debug!("RESIZE EVENT");\n                    }\n                    event::WindowEvent::ScaleFactorChanged { new_inner_size, .. } => {\n                        // Will get called whenever the screen scale factor (DPI) changes,\n                        // like when user move the Window from one less DPI monitor\n                        // to other high scaled DPI Monitor.\n                        debug!("Scale Factor Change");\n                    }\n                    _ => (),\n                }\n            }\n            event::Event::MainEventsCleared => {\n                debug!("MainEventsCleared");\n                backend.window.request_redraw();\n            },\n            event::Event::RedrawRequested(_) => {\n                debug!("RedrawRequested");\n            },\n            event::Event::RedrawEventsCleared => {\n                debug!("RedrawEventsCleared");\n            }\n            _ => (),\n        }\n    });\n    ...\n}\n')),Object(l.b)("p",null,"First things first, ",Object(l.b)("inlineCode",{parentName:"p"},"ev_loop.run(|| => {})")," starts our event\nloop, that actually takes a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.rust-lang.org/book/ch13-01-closures.html"}),"closure"),",\nthus we need to be a bit careful in using it. This was one of the reasons\nwe instantiated everything inside main. Later on we will\ndo things inside ",Object(l.b)("inlineCode",{parentName:"p"},"struct")," ",Object(l.b)("inlineCode",{parentName:"p"},"impl"),"s, but in this section, we have\nsone most of the work inside ",Object(l.b)("inlineCode",{parentName:"p"},"main"),"."),Object(l.b)("p",null,"Details on event listeners:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"CloseRequested")," is used for listening close button click.\nWithout this our Window won't Shutdown gracefully, we would\nhad to ",Object(l.b)("inlineCode",{parentName:"li"},"SIGKILL")," our app. We can also listen to Key presses, like ",Object(l.b)("inlineCode",{parentName:"li"},"ESC"),"\nto close the window, but we will cover that later."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Resized")," and ",Object(l.b)("inlineCode",{parentName:"li"},"ScaleFactorChanged")," are called when window is resized and\nwhen window's DPI changes (like when we move our window from a low DPI\nMonitor to High DPI) respectively."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"MainEventsCleared"),": If you are from ",Object(l.b)("strong",{parentName:"li"},"Android")," background\nit resembles the ",Object(l.b)("inlineCode",{parentName:"li"},"onMeasure")," call, or if from ",Object(l.b)("strong",{parentName:"li"},"ReactJS"),"\nworld it resembles the ",Object(l.b)("inlineCode",{parentName:"li"},"shouldComponentUpdate")," call. What I\nmean is, this event is called just before any redraw,\nand can be used to do calculations before drawing on window.\nAlso keep a note that if you want to redraw you need\nto call this ",Object(l.b)("inlineCode",{parentName:"li"},"window.request_redraw()"),", like we ",Object(l.b)("inlineCode",{parentName:"li"},"return true"),"\nfrom ",Object(l.b)("inlineCode",{parentName:"li"},"shouldComponentUpdate")," to do a ",Object(l.b)("inlineCode",{parentName:"li"},"render"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"RedrawRequested"),": this resembles ",Object(l.b)("strong",{parentName:"li"},"Android's")," ",Object(l.b)("inlineCode",{parentName:"li"},"onDraw"),"\ncall and in ",Object(l.b)("strong",{parentName:"li"},"ReactJS")," resembles ",Object(l.b)("inlineCode",{parentName:"li"},"render")," call. That means\nthis call is the place where we will have to handle all our\ncanvas drawings, in ",Object(l.b)("inlineCode",{parentName:"li"},"gfx_hal")," all our ",Object(l.b)("inlineCode",{parentName:"li"},"surface")," drawings."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"RedrawEventsCleared"),": this resembles ",Object(l.b)("strong",{parentName:"li"},"ReactJS"),Object(l.b)("inlineCode",{parentName:"li"},"componentDidUpdate")," call, as this event gets triggered on\neach change after a redraw has happened. One thing to note,\n",Object(l.b)("em",{parentName:"li"},"if there are no ",Object(l.b)("inlineCode",{parentName:"em"},"RedrawRequested")," events, it is emitted"),Object(l.b)("em",{parentName:"li"},"immediately after ",Object(l.b)("inlineCode",{parentName:"em"},"MainEventsCleared"),"."))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-log"}),"2020-05-11T06:59:42.987942+05:30 DEBUG show_window - MainEventsCleared\n2020-05-11T06:59:42.988007+05:30 DEBUG show_window - RedrawRequested\n2020-05-11T06:59:42.988033+05:30 DEBUG show_window - RedrawEventsCleared\n")),Object(l.b)("hr",null)))}g.isMDXComponent=!0},Ff2n:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("zLVn");function i(e,n){if(null==e)return{};var t,i,o=Object(a.a)(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},Q88C:function(e,n,t){"use strict";var a;t.d(n,"a",(function(){return a})),function(e){e.TUTORIAL="tutorial",e.PROJECT="project",e.RESEARCH="research",e.RUST="rust",e.JS="javascript",e.REACT="reactjs"}(a||(a={}))},Qetd:function(e,n,t){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},"Vi/D":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gfx-hal-initials/display-window",function(){return t("8IhA")}])},wx14:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return a}))},zAA7:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("Q88C"),i={"rust-cargo-basics":{key:"rust-cargo-basics",link:"/gfx-hal-initials/rust-cargo-basics",title:"Basics on Rust & Cargo",description:"Basics on Rust & Cargo",ogImage:"https://user-images.githubusercontent.com/11786283/81770497-0c77c000-94fe-11ea-95bc-44e5e432b1d8.jpg",tags:[a.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"display-window":{key:"display-window",link:"/gfx-hal-initials/display-window",title:"Display Window",description:"Displaying Window using winit and bind it to gfx-hal surface instance",ogImage:"https://user-images.githubusercontent.com/11786283/81770634-814afa00-94fe-11ea-9235-0684a37dd4ae.jpg",tags:[a.a.RUST],createdAt:new Date("2020/04/25 17:00:00"),updatedAt:new Date("2020/05/09 23:50:00"),isPublished:!1}}},zLVn:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}t.d(n,"a",(function(){return a}))}},[["Vi/D",0,1]]]);