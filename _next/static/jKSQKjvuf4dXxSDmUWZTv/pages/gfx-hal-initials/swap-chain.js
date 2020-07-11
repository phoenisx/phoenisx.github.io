(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0Hkh":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("Q88C"),i={"rust-cargo-basics":{key:"rust-cargo-basics",link:"/rust-reference/rust-cargo-basics",title:"Basics on Rust & Cargo",titleString:"Basics on Rust & Cargo",description:"Basics on Rust & Cargo",ogImage:"https://user-images.githubusercontent.com/11786283/81770497-0c77c000-94fe-11ea-95bc-44e5e432b1d8.jpg",tags:[a.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"rust-smart-pointers":{key:"rust-smart-pointers",link:"/rust-reference/rust-smart-pointers",title:"Smart Pointers",titleString:"Smart Pointers",description:"Some notes on Box<>, Rc<>, RefCell<> etc.",ogImage:"https://user-images.githubusercontent.com/11786283/81770497-0c77c000-94fe-11ea-95bc-44e5e432b1d8.jpg",tags:[a.a.RUST],createdAt:new Date("2020/05/22 17:45:00"),updatedAt:new Date("2020/05/22 17:45:00"),isPublished:!0}}},"1RgH":function(e,n,t){"use strict";t.r(n),t.d(n,"record",(function(){return l})),t.d(n,"prevRecord",(function(){return d})),t.d(n,"nextRecord",(function(){return p})),t.d(n,"default",(function(){return j}));var a=t("wx14"),i=t("Ff2n"),r=t("q1tI"),o=t.n(r),c=t("7ljp"),s=t("rFFW"),l=(t("RYGM"),t("0Hkh"),o.a.createElement,s.a["swap-chain"]),d=s.a["physical-logical-devices"],p=s.a["render-pass"],u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",n)}},b=u("PolkaContainer"),m=u("H1"),f=u("Image"),h=u("Diff"),g=u("MoveOtherPage"),w={record:l,prevRecord:d},O="wrapper";function j(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)(O,Object(a.a)({},w,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)(b,{pageTitle:l.title,pageTitleString:l.titleString,pageDescription:l.description,keywords:["Swap Chain","Swapchain","ImageViews","Vulkan","Basics","Fundamental","Beginner","gfx-hal"],publishDate:l.createdAt,ogImage:l.ogImage,mdxType:"PolkaContainer"},Object(c.b)(m,{id:l.titleString,updatedAt:l.updatedAt,mdxType:"H1"},"T-","".concat(s.b-3),": ",l.title),Object(c.b)("p",null,"Before diving in, let's first understand what Double Buffering is.\nA great video on ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=tfzCcN2aIhI&feature=emb_logo"}),"Double Buffering"),"\nto get a fundamental understanding."),Object(c.b)("p",null,"As you can see in the video, double buffering is nothing but\na way to cache images in a buffer. One of the Buffer is used\nto draw on the Window Surface, while other acts as a hidden\ncanvas to draw the next frame and keep it in the cache, to\nget better performance and framerate."),Object(c.b)(f,{alt:"Swapchain to Surface to Window Draw",src:"https://user-images.githubusercontent.com/11786283/82720485-ae9f6100-9cd1-11ea-8e8a-6689645f9706.png",placeholder:"https://user-images.githubusercontent.com/11786283/82720437-51a3ab00-9cd1-11ea-8623-218277d9c519.png",mdxType:"Image"}),Object(c.b)("p",null,"Swapchain is very similar. It can be used to achieve\ndouble buffering. In simple words, Swapchain is a collection\nImages (Stored in Image Buffers), that can be used to draw\nframes and present them on a screen when needed."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Quoting directly from ",Object(c.b)("a",Object(a.a)({parentName:"strong"},{href:"https://www.falseidolfactory.com/2020/04/01/intro-to-gfx-hal-part-1-drawing-a-triangle.html"}),"falseidolfactory.com"))),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("em",{parentName:"p"},"Swapchain is a chain of images that we can render onto and then"),"\n",Object(c.b)("em",{parentName:"p"},"present to our window. While we\u2019re showing one of them"),"\n",Object(c.b)("em",{parentName:"p"},"on screen, we can render it to a different one. Then once"),"\n",Object(c.b)("em",{parentName:"p"},"we\u2019re done rendering, we can ",Object(c.b)("strong",{parentName:"em"},"swap")," them.")),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("em",{parentName:"p"},"This is one of the few places where ",Object(c.b)("inlineCode",{parentName:"em"},"gfx")," departs"),"\n",Object(c.b)("em",{parentName:"p"},"significantly from the ",Object(c.b)("strong",{parentName:"em"},"Vulkan API"),". In Vulkan, you create"),"\n",Object(c.b)("em",{parentName:"p"},"and manage the ",Object(c.b)("inlineCode",{parentName:"em"},"swapchain")," yourself. In ",Object(c.b)("inlineCode",{parentName:"em"},"gfx"),", the surface"),"\n",Object(c.b)("em",{parentName:"p"},"mostly does it for you. You can read more about the"),"\n",Object(c.b)("em",{parentName:"p"},"decision behind that ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://gfx-rs.github.io/2019/10/01/update.html#new-swapchain-model"}),"here"),"."))),Object(c.b)("p",null,"The above decision, to handle ",Object(c.b)("inlineCode",{parentName:"p"},"swapchain")," internally in\ngfx-hal, was made to hide logical improvements done by gfx-hal\nto improve performance in MacOS ",Object(c.b)("inlineCode",{parentName:"p"},"Metal")," and DirectX 12 backends. ",Object(c.b)("inlineCode",{parentName:"p"},"Metal"),"\nbackend doesn't quite work well with Vulkan Swapchain API;\nthus, the team decided to manage the logic internally to\nprovide a performant cross-platform GPU Driver framework."),Object(c.b)("p",null,"Discussion on the above issue can be ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gfx-rs/gfx/issues/2863"}),"read here"),"."),Object(c.b)("p",null,"Thus, Swapchain in ",Object(c.b)("inlineCode",{parentName:"p"},"gfx-rs")," can be described in simple words:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Don't do anything, just let the framework handle the\nSwapchain management"),Object(c.b)("li",{parentName:"ul"},"To support the above statement, we need to provide a few\nconfig details to gfx-hal ",Object(c.b)("inlineCode",{parentName:"li"},"surface")," instance, so that it\ncan create the Swapchain instance and manage it internally.")),Object(c.b)("p",null,"The following diagram illustrates how Swapchain is created\nin Vulkan, and how we need to bind it to ",Object(c.b)("inlineCode",{parentName:"p"},"surface")," instance,\nto make it work. ",Object(c.b)("em",{parentName:"p"},"(We do not have to worry about all\nthese details, in ",Object(c.b)("inlineCode",{parentName:"em"},"gfx-hal")," though)")),Object(c.b)(f,{alt:"gfx-hal Swapchain flow",src:"https://user-images.githubusercontent.com/11786283/82650223-038e9900-9c38-11ea-8ae4-c6b464ac7007.png",placeholder:"https://user-images.githubusercontent.com/11786283/82650444-56685080-9c38-11ea-960d-770db9795773.png",mdxType:"Image"}),Object(c.b)("h2",{id:"lets-code"},"Let's Code"),Object(c.b)("p",null,"First, we will discuss on how swapchain is created in Vulkan:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Querying details of Swapchain support, which includes:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"surface")," capabilities, like in which mode image would\nbe presented (Presentation Mode), what is image bounds\nto draw on the surface, etc.\nDetails - ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.rs/gfx-hal/0.5.0/gfx_hal/window/struct.SurfaceCapabilities.html"}),"SurfaceCapabilities")),Object(c.b)("li",{parentName:"ul"},"Supported image format by the ",Object(c.b)("inlineCode",{parentName:"li"},"surface")," on which we will draw"),Object(c.b)("li",{parentName:"ul"},"Window Dimensions (Viewport) or Window Extent"),Object(c.b)("li",{parentName:"ul"},"All of the above to create Swapchain Config."))),Object(c.b)("li",{parentName:"ul"},"Once Swapchain Config is created, we can use it\nto create our Swapchain Instance"),Object(c.b)("li",{parentName:"ul"},"Swapchain will later provide us with inner Image Buffers\nto be used during the render phase.")),Object(c.b)("p",null,"In ",Object(c.b)("inlineCode",{parentName:"p"},"gfx-hal"),", point-2 i.e., the creation of Swapchain is not\nsomething a developer needs to worry about. We need to use\nthe Swapchain support details to ",Object(c.b)("inlineCode",{parentName:"p"},"configure_swapchain")," using\nthe ",Object(c.b)("inlineCode",{parentName:"p"},"surface")," instance."),Object(c.b)("h3",{id:"lets-breakdown-the-above-code-in-3-sections"},"Let's Breakdown the above code in 3 sections:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Configuration"),Object(c.b)("li",{parentName:"ul"},"Re-Configuration"),Object(c.b)("li",{parentName:"ul"},"Destruction")),Object(c.b)("h4",{id:"configuration"},"Configuration"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),'struct Renderer<B: Backend> {\n    ...\n    // Collection Swapchain Image, Empty buffer initially\n    frame_count: usize,\n    // Desired Format / Selected Format\n    format: hal_format::Format,\n}\n\nimpl<B: Backend> Renderer<B> {\n    fn new(instance: B::Instance, surface: B::Surface) -> Self {\n        ...\n\n        // Configure Swapchain\n        let (frame_count, format) = {\n            let caps = surface.capabilities(&adapter.physical_device);\n\n            let supported_formats = surface.supported_formats(&adapter.physical_device);\n            // We need a supported format for the OS Window, so that Images drawn on\n            // Swapchain are of that same format.\n            let format = supported_formats.map_or(hal_format::Format::Rgba8Srgb, |formats| {\n                formats\n                    .iter()\n                    .find(|format| format.base_format().1 == hal_format::ChannelType::Srgb)\n                    .map(|format| *format)\n                    .unwrap_or(formats[0])\n            });\n\n            let swap_config = hal_window::SwapchainConfig::from_caps(&caps, format, init_extent);\n            let image_extent = swap_config.extent.to_extent();\n\n            unsafe {\n                surface\n                    .configure_swapchain(&device, swap_config)\n                    .expect("Can\'t configure swapchain");\n            };\n\n            (3, format)\n        };\n\n        Renderer {\n            ...\n            frame_count,\n            format,\n        }\n    }\n}\n...\n')),Object(c.b)("p",null,"As discussed before, first, we need to query details for\nSwapchain support. Once we have the details, we will use\nthem to configure our swapchain using ",Object(c.b)("inlineCode",{parentName:"p"},"gfx-hal")," ",Object(c.b)("inlineCode",{parentName:"p"},"surface"),"\ninstance."),Object(c.b)("p",null,"We will keep a reference to ",Object(c.b)("inlineCode",{parentName:"p"},"format")," for later use, especially\nfor re-configuring the swapchain when the window surface\nbecomes invalidated, like on window resize and other related\nevents."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"frame_count")," is the number of frames we would be parallelly\nworking with.\n",Object(c.b)("em",{parentName:"p"},"I am not exactly sure right now, why ",Object(c.b)("inlineCode",{parentName:"em"},"3")," is\nthe frame count used in most of the ",Object(c.b)("inlineCode",{parentName:"em"},"gfx-hal")," examples.\nMy guess is, it's because it's the number of ",Object(c.b)("inlineCode",{parentName:"em"},"image_count"),"s\nany GPU currently supports for buffering.")),Object(c.b)("h4",{id:"re-configuration"},"Re-Configuration"),Object(c.b)("p",null,"Some changes to be done to our code, before moving forward"),Object(c.b)(h,{lang:"rs",addedLineNumbers:[6,23,26],removedLineNumbers:[15,22,25],hideLines:!0,mdxType:"Diff"},"\nimpl<B: Backend> Renderer<B> {\n    fn new(\n        instance: B::Instance,\n        mut surface: B::Surface,\n        init_extent: hal_window::Extent2D,\n    ) -> Self {\n        ...\n    }\n}\n...\nfn create_backend(\n    wb: window::WindowBuilder,\n    ev_loop: &event_loop::EventLoop<()>,\n    extent: hal_window::Extent2D,\n) -> (back::Instance, back::Surface, window::Window) {\n    ...\n}\n...\nfn main() {\n    let (window_builder, extent) = build_window(&ev_loop);\n    let (instance, surface, window) = create_backend(window_builder, &ev_loop, extent);\n    let (instance, surface, window) = create_backend(window_builder, &ev_loop);\n    ...\n    let renderer = Renderer::<back::Backend>::new(instance, surface);\n    let mut renderer = Renderer::<back::Backend>::new(instance, surface, extent);\n    ...\n}\n"),Object(c.b)("p",null,"Changes from above include:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Window Dimensions (as ",Object(c.b)("inlineCode",{parentName:"li"},"Extent2D"),") to be used in our ",Object(c.b)("inlineCode",{parentName:"li"},"Renderer"),"\nstruct. This extent will help us to create our Surface\nViewport when the ",Object(c.b)("inlineCode",{parentName:"li"},"Renderer")," instance is created for the\nfirst time."),Object(c.b)("li",{parentName:"ul"},"Make our ",Object(c.b)("inlineCode",{parentName:"li"},"renderer")," instance mutable.")),Object(c.b)("p",null,"Re-Configuration is an important part of making Swapchain work.\nIt is required to notify the swapchain that the window\nis invalidated, and thus every image that it contains should\nbe invalidated and re-created."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),"struct Renderer<B: Backend> {\n    window_dims: hal_window::Extent2D,\n    viewport: Viewport,\n    ...\n}\n\nimpl<B: Backend> Renderer<B> {\n    fn new(\n        ...\n    ) -> Self {\n        ...\n        let viewport = Viewport {\n            rect: Rect {\n                x: 0,\n                y: 0,\n                w: init_extent.width as _,\n                h: init_extent.height as _,\n            },\n            depth: 0.0..1.0,\n        };\n\n        Renderer {\n            window_dims: init_extent,\n            viewport,\n            ...\n        }\n    }\n\n    fn set_dims(&mut self, dims: PhysicalSize<u32>) {\n        self.window_dims = hal_window::Extent2D {\n            width: dims.width,\n            height: dims.height,\n        };\n    }\n\n    fn recreate_swapchain(&mut self) {\n        let caps = self.surface.capabilities(&self.adapter.physical_device);\n        let swap_config =\n            hal_window::SwapchainConfig::from_caps(&caps, self.format, self.window_dims);\n        let image_extent = swap_config.extent.to_extent();\n\n        unsafe {\n            self.surface\n                .configure_swapchain(&self.device, swap_config)\n                .expect(\"Can't create swapchain\");\n        }\n\n        self.viewport.rect.w = image_extent.width as _;\n        self.viewport.rect.h = image_extent.height as _;\n    }\n}\n\nfn main() -> Result<(), &'static str> {\n    ...\n    ev_loop.run(move |event, _, control_flow| {\n        ...\n        event::WindowEvent::Resized(dims) => {\n            // We need to re-configure our swapchain\n            // with new window dimensions on every re-size\n            renderer.set_dims(dims);\n            renderer.recreate_swapchain();\n        }\n        ...\n    }\n}\n")),Object(c.b)("p",null,"We are re-configuring our swapchain on every ",Object(c.b)("inlineCode",{parentName:"p"},"resize")," event."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Similarly, we should also re-configure for other window\nevents that will invalidate the Vulkan ",Object(c.b)("inlineCode",{parentName:"p"},"surface")," like\nwinit's ",Object(c.b)("inlineCode",{parentName:"p"},"ScaleFactorChanged"),", which we will skip for now.")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"viewport")," will be used later when we will render our images."),Object(c.b)("h4",{id:"destruction"},"Destruction"),Object(c.b)("p",null,"A part where we need to memory manage our swapchain.\nSince we created (configured) ",Object(c.b)("inlineCode",{parentName:"p"},"swapchain")," using ",Object(c.b)("inlineCode",{parentName:"p"},"surface"),", we will\nhave to use ",Object(c.b)("inlineCode",{parentName:"p"},"surface")," again to destroy it as well, before\nour struct ",Object(c.b)("inlineCode",{parentName:"p"},"Renderer")," gets destroyed."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),"impl<B: Backend> Drop for Renderer<B> {\n    fn drop(&mut self) {\n        unsafe {\n            self.surface.unconfigure_swapchain(&self.device);\n            ...\n        }\n    }\n}\n")),Object(c.b)("p",null,"Once that is done, ",Object(c.b)("inlineCode",{parentName:"p"},"swapchain")," will automatically get\ndropped by ",Object(c.b)("inlineCode",{parentName:"p"},"surface"),", before ",Object(c.b)("inlineCode",{parentName:"p"},"surface")," itself is dropped."),Object(c.b)("h2",{id:"image-views"},"Image Views"),Object(c.b)("p",null,"We won't be working with ",Object(c.b)("inlineCode",{parentName:"p"},"ImageView"),"s in ",Object(c.b)("inlineCode",{parentName:"p"},"gfx-hal")," (at-least\nfor this tutorial), but in Vulkan ",Object(c.b)("inlineCode",{parentName:"p"},"ImageView")," is a very\nintegral part when it comes to\nSwapChain. It is just a representation (view) of the actual\n",Object(c.b)("inlineCode",{parentName:"p"},"Image")," that SwapChain contains."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Quoting directly from ",Object(c.b)("a",Object(a.a)({parentName:"strong"},{href:"https://vulkan-tutorial.com/Drawing_a_triangle/Presentation/Image_views"}),"Vulkan Tutorial"))),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("em",{parentName:"p"},"An image view is quite literally a view into an image.\nIt describes how to access the image and which part of\nthe image to access, for example if it should be treated\nas a 2D texture depth texture without any mipmapping\nlevels."))),Object(c.b)("p",null,"Since we do not actually interact with Swapchain in\n",Object(c.b)("inlineCode",{parentName:"p"},"gfx-hal"),", ",Object(c.b)("inlineCode",{parentName:"p"},"gfx-hal")," provides us APIs to get\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.rs/gfx-hal/0.5.0/gfx_hal/window/trait.PresentationSurface.html#tymethod.unconfigure_swapchain"}),"SwapchainImage"),",\nwhich can be rendered to the screen directly. Consider it as\na frame per unit time."),Object(c.b)("hr",null),Object(c.b)("p",null,"You can find the full code for this Doc,\nhere ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Shub1427/rustschool/blob/master/gui/draw-cube/src/003-swap_chain/main.rs"}),"003-swap_chain")),Object(c.b)(g,{prev:d.link,prevLabel:d.titleString,next:p.link,nextLabel:p.titleString,mdxType:"MoveOtherPage"})))}j.isMDXComponent=!0},"7ljp":function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var a=t("q1tI"),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),d=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"===typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=d(e.components);return(i.a.createElement(l.Provider,{value:n},e.children))},u="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return t?i.a.createElement(m,c({ref:n},l,{components:t})):i.a.createElement(m,c({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"===typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},CTN9:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gfx-hal-initials/swap-chain",function(){return t("1RgH")}])},Q88C:function(e,n,t){"use strict";var a;t.d(n,"a",(function(){return a})),function(e){e.TUTORIAL="tutorial",e.PROJECT="project",e.RESEARCH="research",e.RUST="rust",e.JS="javascript",e.REACT="reactjs",e.GFX_HAL="gfx-hal"}(a||(a={}))},RYGM:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return l}));var a=t("q1tI"),i=t.n(a),r=t("Q88C"),o=t("Swb2"),c=i.a.createElement,s={"rust-reference":{key:"rust-reference",link:"/rust-reference",title:"Advance Rust Reference",titleString:"Advance Rust Reference",description:"Some advance concepts in Rust that were difficult for me to understand.       This Doc is trying to keep a reference of all those topics, for me to take       a reference from later for easier understanding",ogImage:"https://user-images.githubusercontent.com/11786283/82665354-47da6300-9c51-11ea-87c7-bb996eb79de1.jpg",tags:[r.a.RUST],createdAt:new Date("2020/05/22 17:25:00"),updatedAt:new Date("2020/05/22 17:25:00"),isPublished:!0},"performance-reactjs":{key:"performance-reactjs",link:"/performance-reactjs",title:"Performance Improvements in JS and ReactJS",titleString:"Performance Improvements in JS and ReactJS",description:"Recent Performance related findings of mine, which I am jotting down here for later reference",ogImage:"https://user-images.githubusercontent.com/11786283/81769128-6f675800-94fa-11ea-99d6-57dc42166eaa.jpg",tags:[r.a.RESEARCH,r.a.JS,r.a.REACT],createdAt:new Date("2020/05/07 09:15:00"),updatedAt:new Date("2020/05/09 23:15:00"),isPublished:!0},"upload-client-logs":{key:"upload-client-logs",link:"/upload-client-logs",title:"Client Browser Log to your Server",titleString:"Client Browser Log to your Server",description:"Sometimes (like to get details on performance) there is a requirement to log data       from end-user's browser to you own servers, for which this note will talk about.",ogImage:"https://user-images.githubusercontent.com/11786283/81769041-37601500-94fa-11ea-98f7-f353dca53e6b.jpg",tags:[r.a.PROJECT,r.a.JS,r.a.REACT],createdAt:new Date("2020/04/29 08:30:00"),updatedAt:new Date("2020/05/09 12:30:00"),isPublished:!0},"word-counter":{key:"word-counter",link:"/word-counter",title:"Word Counter in Rust",titleString:"Word Counter in Rust",description:"Just a fun bin script for my project, to count words in my MDX files.",ogImage:"https://user-images.githubusercontent.com/11786283/81768977-fd8f0e80-94f9-11ea-8425-953f8639d80e.jpg",tags:[r.a.PROJECT,r.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"gfx-hal-basics":{key:"gfx-hal-basics",link:"/gfx-hal-initials",title:c("span",null,"Learn to Draw a Cube using\xa0",c(o.a,null,"gfx-hal")),titleString:"Learn to Draw a Cube using gfx-hal",description:"Learn to draw a cube using gfx-hal. Also understand       concepts of Vulkan while learning to draw a cube",ogImage:"https://user-images.githubusercontent.com/11786283/81768708-514d2800-94f9-11ea-95d3-36796815a31f.jpg",tags:[r.a.TUTORIAL,r.a.RUST],createdAt:new Date("2020/04/26 10:00:00"),updatedAt:new Date("2020/04/26 16:00:00"),isPublished:!0},"astro-v2":{key:"astro-v2",link:"/astro-v2",title:"Astro Blaster v2 in Rust",titleString:"Astro Blaster v2 in Rust",description:"A very minimal game making tutorial in Rust using ggez",ogImage:"https://user-images.githubusercontent.com/11786283/81768159-f1a24d00-94f7-11ea-83e3-8b9212d4851c.jpg",tags:[r.a.TUTORIAL,r.a.RUST],createdAt:new Date("2020/04/10"),updatedAt:new Date("2020/04/12"),isPublished:!0}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(n,t){return Object.prototype.hasOwnProperty.call(e,t)&&n.push(e[t]),n}),[])}(s)},rFFW:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return l}));var a=t("q1tI"),i=t.n(a),r=t("Q88C"),o=t("Swb2"),c=i.a.createElement,s={"display-window":{key:"display-window",link:"/gfx-hal-initials/display-window",title:"Setup & Display Blank Window",titleString:"Setup & Display Blank Window",description:"Learn Displaying a Blank Window using winit and bind it to gfx-hal surface instance",ogImage:"https://user-images.githubusercontent.com/11786283/82109997-98852400-9758-11ea-84a0-aa3996c67f86.jpg",tags:[r.a.RUST],createdAt:new Date("2020/04/25 17:00:00"),updatedAt:new Date("2020/05/28 23:50:00"),isPublished:!0},"physical-logical-devices":{key:"physical-logical-devices",link:"/gfx-hal-initials/physical-logical-devices",title:"Adapters & Physical/Logical Devices & Device Queues",titleString:"Adapters & Physical/Logical Devices & Device Queues",description:"Learn to Instantiate Vulkan Physical/Logical Devices and get Device Queue from gfx-hal adapters",ogImage:"https://user-images.githubusercontent.com/11786283/82111231-485e8f80-9761-11ea-9f21-8843d4a66752.jpg",tags:[r.a.TUTORIAL,r.a.RUST,r.a.GFX_HAL],createdAt:new Date("2020/05/16 8:45:00"),updatedAt:new Date("2020/05/29 9:25:00"),isPublished:!0},"swap-chain":{key:"swap-chain",link:"/gfx-hal-initials/swap-chain",title:c("span",null,"SwapChain and Image Views in \xa0",c(o.a,null,"gfx-hal")),titleString:"SwapChain and Image Views in gfx-hal",description:"Learning about Swapchain, Double Buffering and Image Views. Understanding the implementation of SwapChain in gfx-hal",ogImage:"https://user-images.githubusercontent.com/11786283/82640938-22396380-9c29-11ea-9ee5-9a7fc01920da.jpg",tags:[r.a.TUTORIAL,r.a.RUST,r.a.GFX_HAL],createdAt:new Date("2020/05/22 10:20:00"),updatedAt:new Date("2020/06/06 14:00:00"),isPublished:!0},"render-pass":{key:"render-pass",link:"/gfx-hal-initials/render-pass",title:"Render Pass",titleString:"Render Pass in Vulkan",description:"Render Pass initialization and basic understanding in Vulkan",ogImage:"https://user-images.githubusercontent.com/11786283/82640938-22396380-9c29-11ea-9ee5-9a7fc01920da.jpg",tags:[r.a.TUTORIAL,r.a.RUST,r.a.GFX_HAL],createdAt:new Date("2020/06/06 14:30:00"),updatedAt:new Date("2020/06/06 14:30:00"),isPublished:!0},"command-buffers":{key:"command-buffers",link:"/gfx-hal-initials/command-buffers",title:"Command Buffers & Pool",titleString:"Command Buffers & Pool",description:"Understanding Command Pools and Command Buffers in Vulkan and gfx-hal",ogImage:"https://user-images.githubusercontent.com/11786283/82124794-f0567600-97be-11ea-9023-ea1467a6b734.jpg",tags:[r.a.TUTORIAL,r.a.RUST,r.a.GFX_HAL],createdAt:new Date("2020/05/16 21:45:00"),updatedAt:new Date("2020/05/16 21:45:00"),isPublished:!0},shaders:{key:"shaders",link:"/gfx-hal-initials/shaders",title:"Shaders",titleString:"Shaders",description:"Understanding Shaders & writing minimal Shader using GLSL Shading language",ogImage:"https://user-images.githubusercontent.com/11786283/82640938-22396380-9c29-11ea-9ee5-9a7fc01920da.jpg",tags:[r.a.TUTORIAL,r.a.RUST,r.a.GFX_HAL],createdAt:new Date("2020/05/23 19:30:00"),updatedAt:new Date("2020/05/23 19:35:00"),isPublished:!0}},l=Object.keys(s).length}},[["CTN9",0,1,2]]]);