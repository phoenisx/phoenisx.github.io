(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7c7i":function(e,t,n){"use strict";n.r(t),n.d(t,"record",(function(){return l})),n.d(t,"prevRecord",(function(){return u})),n.d(t,"default",(function(){return j}));var a=n("wx14"),i=n("Ff2n"),r=n("q1tI"),o=n.n(r),c=n("7ljp"),s=n("zAA7"),l=(o.a.createElement,s.a["physical-logical-devices"]),u=s.a["display-window"],p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},d=p("PolkaContainer"),b=p("H1"),m=p("Image"),f=p("Link"),g=p("Diff"),h=p("Blockquote"),y={record:l,prevRecord:u},O="wrapper";function j(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)(O,Object(a.a)({},y,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(d,{pageTitle:l.title,pageDescription:l.description,keywords:["Vulkan","Basics","Fundamental","Beginner","Physical Device","Logical Device","gfx-hal"],publishDate:l.createdAt,ogImage:l.ogImage,mdxType:"PolkaContainer"},Object(c.b)(b,{updatedAt:l.updatedAt,mdxType:"H1"},l.title),Object(c.b)(m,{alt:"Get Physical Device from Backend to Logical Devices",src:"https://user-images.githubusercontent.com/11786283/82109324-a8016e80-9752-11ea-89ba-677880ada6b1.png",placeholder:"https://user-images.githubusercontent.com/11786283/82109811-ac2f8b00-9756-11ea-88db-3cbc70ee1350.png",mdxType:"Image"}),Object(c.b)("h2",null,"What is a Device"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Physical Device")," - denotes to actual Hardware device present\nin your Computer. There could be, that has Device details\nas elements. Each item pointing to the GPU hardware you\nhave. So, if we have Single NVidia GPU, we will get a\nsingle item, which we can ",Object(c.b)("inlineCode",{parentName:"li"},"open")," and later on use as\n",Object(c.b)("em",{parentName:"li"},"Logical Device")," where command buffers are passed."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Logical Device")," - Basically it is a representation of\nPhysical device, that the application will use\nto compute their logic. In ",Object(c.b)("inlineCode",{parentName:"li"},"gfx-hal")," to get logical device,\nyou need to open ",Object(c.b)("inlineCode",{parentName:"li"},"physical_device"),".\n(Details discussed at later).")),Object(c.b)("h2",null,"Physical Device:"),Object(c.b)("h3",null,"Getting Adapters from Instance"),Object(c.b)("p",null,"I hope you have already read details on how to get reference\nof ",Object(c.b)(f,{href:"".concat(u.link),mdxType:"Link"},"gfx-hal Instance and it's Surface"),". If not, please read it once before continuing."),Object(c.b)("p",null,"We would get a list of ",Object(c.b)("inlineCode",{parentName:"p"},"adapters")," from ",Object(c.b)("inlineCode",{parentName:"p"},"instance"),", which will\ncontain details on Physical Devices present on our system."),Object(c.b)("p",null,"Before that, we need to create our Structure for Adapter\nState."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),"struct AdapterState<B: Backend> {\n    adapter: Option<Adapter<B>>,\n    memory_types: Vec<MemoryType>,\n    limits: Limits,\n}\n\nimpl<B: Backend> AdapterState<B> {\n    fn new(adapters: &mut Vec<Adapter<B>>) -> Self {\n        // In my system, I have just one GPU Physical adapter, thus\n        // will only work with first instance.\n        let adapter = adapters.remove(0);\n\n        Self {\n            memory_types: adapter.physical_device.memory_properties().memory_types,\n            limits: adapter.physical_device.limits(),\n            adapter: Some(adapter),\n        }\n    }\n}\n")),Object(c.b)("p",null,"You can assume ",Object(c.b)("inlineCode",{parentName:"p"},"AdapterState")," as a state, that maintains Physical Device instance,\nand can be later on used to get device details, or get Logical Device instance and more.\n",Object(c.b)("em",{parentName:"p"},"Details on Memory Type and GPU limits, will be discussed later.")),Object(c.b)("p",null,"We need to add this to ",Object(c.b)("inlineCode",{parentName:"p"},"BackendState")," as well,\nso as to later on use it for other things."),Object(c.b)(g,{lang:"rs",addedLineNumbers:[4,5,15,20],removedLineNumbers:[],hideLines:!0,mdxType:"Diff"},"// main.rs\nstruct BackendState<B: Backend> {\n  ...\n  // Vulkan backend surface object\n  adapterState: AdapterState<B>,\n  ...\n}\n...\nfn create_backend(\n    wb: window::WindowBuilder,\n    ev_loop: &event_loop::EventLoop<()>,\n    extent: hal_window::Extent2D,\n) -> BackendState<back::Backend> {\n    ...\n    let mut adapters = instance.enumerate_adapters();\n    ...\n    BackendState {\n        instance: Some(instance),\n        surface: ManuallyDrop::new(surface),\n        adapterState: AdapterState::new(&mut adapters),\n        window,\n    }\n}\n"),Object(c.b)("p",null,"As you can see, we need to ",Object(c.b)("inlineCode",{parentName:"p"},"enumerate_adapters")," to get a list of all available\nGpU devices on the system. These device instances could point an Integrated GPU,\nDiscrete GPU (Could be internal, or external)."),Object(c.b)("h3",null,"What details does an ",Object(c.b)("inlineCode",{parentName:"h3"},"Adapter")," has"),Object(c.b)(h,{type:"warn",mdxType:"Blockquote"},"Following are not a complete list of Adapter properties. They mostly consist of all those properties that we have already described earlier. We are just discussing them in detail here."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'// `adapter.info`: Adapter Info\n{\n  name: "GeForce GTX 1060 6GB",\n  vendor: 4310,\n  device: 7114,\n  // Enum - { Other = 0, IntegratedGpu = 1, DiscreteGpu = 2, VirtualGpu = 3, Cpu = 4 }\n  device_type: DiscreteGpu,\n}\n')),Object(c.b)("p",null,"GPU info is quite clear. Getting info is simple - ",Object(c.b)("inlineCode",{parentName:"p"},"adapter.info"),". It basically gives us details on GPU Hardware."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// `adapter.physical_device.limits()`: Physical Device Limits,\n{\n  max_image_1d_size: 16384,\n  max_image_2d_size: 16384,\n  max_image_3d_size: 2048,\n  max_image_cube_size: 16384,\n  max_image_array_layers: 2048,\n  max_texel_elements: 268435456,\n  // ...and more\n}\n")),Object(c.b)("p",null,"GPU limits is also self explanatory. It gives us a struct containing details on\nGPU Memory, Concurrency etc. limits."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Memory Types\n[\n    MemoryType {\n        properties: DEVICE_LOCAL,\n        heap_index: 0,\n    },\n    MemoryType {\n        properties: CPU_VISIBLE | COHERENT,\n        heap_index: 1,\n    },\n    //...more\n]\n")),Object(c.b)("p",null,"Memory Types are just a collection of GPU supported Memory Details(could be CPU or Local).\nIt just helps us to figure our what type of memory GPU supports and when to use which,\nif GPU has the support for it."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Direct Quote from gfx-hal examples")),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("em",{parentName:"p"},"Using CPU_VISIBLE memory is convenient because it can be"),"\n",Object(c.b)("em",{parentName:"p"},"directly memory mapped and easily updated by the CPU, but it is very slow and so should"),"\n",Object(c.b)("em",{parentName:"p"},"only be used for small pieces of data that need to be updated very frequently."),"\n",Object(c.b)("em",{parentName:"p"},"For something like a vertex buffer that may be much larger and should not change"),"\n",Object(c.b)("em",{parentName:"p"},"frequently, you should instead use a DEVICE_LOCAL buffer that gets filled by"),"\n",Object(c.b)("em",{parentName:"p"},"copying data from a CPU_VISIBLE staging buffer."))),Object(c.b)("p",null,"I can understand if things are getting too intense. Be patient, and force yourself to\ncomplete the whole tutorial. Ultimately the results will be awesome. Once we are done\nshowing graphics on Window, everything here will make sense."),Object(c.b)("hr",null),Object(c.b)("h2",null,"Logical Device"),Object(c.b)(m,{alt:"How to get Logical Devices from Physical Device",src:"https://user-images.githubusercontent.com/11786283/77247969-01ba5080-6c5c-11ea-8202-3c83e1a25b51.png",placeholder:"https://user-images.githubusercontent.com/11786283/82109903-8951a680-9757-11ea-8acc-b88bbc173fce.png",mdxType:"Image"}),Object(c.b)("p",null,"As you can see from the above image, logical device is nothing but a representation\nof actual physical device."),Object(c.b)("p",null,"Basically, Physical device (like NVidia GPU) can be used for various things like,\nGames, Graphics Rendering, Data Mining, Machine Learning etc. This vast\nrange of use-cases is possible in GPU only due to it's support for both,\nCPU intensive tasks, as well as GPU intensive tasks. For us, we are currently\nlooking for a Device Capability specific to Graphics intensive task."),Object(c.b)("p",null,"Thus Logical Device is a representation of Physical Device, which has\nsupport for specific capabilities, that it will be working on for the\ntime App will be running."),Object(c.b)("p",null,"Logical Devices are used to create and manage different resources, like buffers, shader programs and textures."),Object(c.b)("h3",null,"Device Queues & Queue Families"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"What are Device Queues anyways??"),"\nAs the name suggests, it's just a queue, that Vulkan API creates according to App's\nrequirements. We can use this queue to synchronously or parallelly process graphics\ncommands. It acts as a link between our app render commands and surface draws."),Object(c.b)("p",null,"Cool! Now let's move forward towards some actual code example."),Object(c.b)("p",null,"We need to get two main instances out of ",Object(c.b)("inlineCode",{parentName:"p"},"adapter")," we previously got from Hal Instance."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Logical Device that has specific GPU features enabled\n(for us that would be GPU intensive tasks)."),Object(c.b)("li",{parentName:"ul"},"Supported Device Queue from Queue Groups")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs.true"}),"struct DeviceState<B: Backend> {\n    device: B::Device,\n    queues: QueueGroup<B>,\n}\n\nimpl<B: Backend> DeviceState<B> {\n    fn new(adapter: Adapter<B>, surface: &B::Surface) -> Self {\n        let supported_family = adapter\n            .queue_families\n            .iter()\n            .find(|family| {\n                surface.supports_queue_family(family) && family.queue_type().supports_graphics()\n            })\n            .unwrap();\n\n        let mut gpu = unsafe {\n            adapter\n                .physical_device\n                .open(&[(supported_family, &[1.0])], Features::empty())\n                .unwrap()\n        };\n\n        Self {\n            device: gpu.device,\n            queues: gpu.queue_groups.pop().unwrap(),\n        }\n    }\n}\n")),Object(c.b)("p",null,"Defining ",Object(c.b)("inlineCode",{parentName:"p"},"supported_family")," (lines ",Object(c.b)("em",{parentName:"p"},"8-14"),"), you can see that we are trying to\nget a ",Object(c.b)("inlineCode",{parentName:"p"},"queue_family"),", where:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The family is supported by the current gpu ",Object(c.b)("inlineCode",{parentName:"li"},"surface"),", meaning is compatible to pass\ncommands to current window ",Object(c.b)("inlineCode",{parentName:"li"},"surface"),"."),Object(c.b)("li",{parentName:"ul"},"Secondly, should support graphics commands.")),Object(c.b)("p",null,"Once we figure out the supported queue family, we then need to get it's\nrespective Logical Device instance, and actual ",Object(c.b)("inlineCode",{parentName:"p"},"queues")," that will keep hold of\nour commands from a ",Object(c.b)("em",{parentName:"p"},"Command Buffer"),". This is done from lines ",Object(c.b)("em",{parentName:"p"},"16-26"),"."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Note:")," Opening a Physical Device instance to get Logical Device instance\nis ",Object(c.b)("inlineCode",{parentName:"p"},"unsafe")," in nature. Thus that code-block is wrapped inside ",Object(c.b)("inlineCode",{parentName:"p"},"unsafe {}")," block."),Object(c.b)("p",{parentName:"blockquote"},"To get details on ",Object(c.b)("inlineCode",{parentName:"p"},"unsafe")," usage, read ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.rust-lang.org/nomicon/meet-safe-and-unsafe.html"}),"Rust Nomicon"))),Object(c.b)("h3",null,"How do they look internally:"),Object(c.b)("p",null,"Logical Device representation is quite complex, so I won't describe it here.\nBetter to read ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.rs/gfx-hal/0.5.0/gfx_hal/device/trait.Device.html"}),"Device Docs"),",\nand understand how to use it's apis."),Object(c.b)("p",null,"Queue Families are basically collection of supported Queue types,\nfor current Surface for the GPU."),Object(c.b)("p",null,"(Since I was using MacOS) I got ",Object(c.b)("inlineCode",{parentName:"p"},"supported_family")," as shown below:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-log"}),"2020-05-16T19:22:41.155852+05:30 DEBUG enumerate_devices - >>>>>>> Queue Family Type:: General\n2020-05-16T19:22:41.155987+05:30 DEBUG enumerate_devices - >>>>>>> Queue Max Queues:: 1\n2020-05-16T19:22:41.156018+05:30 DEBUG enumerate_devices - >>>>>>> Queue Id:: QueueFamilyId(0)\n")),Object(c.b)("p",null,"where if you see the family id, that points to the first Queue group, in\n",Object(c.b)("inlineCode",{parentName:"p"},"gpu.queue_groups"),", which contains the supported queues for creating and\nmanaging different resources."),Object(c.b)("p",null,"Above representation of Queue Family is very different than actual\nVulkan Queue Family, which you can see in any Linux OS."),Object(c.b)("p",null,"Do not get confused with the following log,\nas it differs from system to system.\nFollowing is a representation of all ",Object(c.b)("inlineCode",{parentName:"p"},"adapter.queue_families")," (on Linux)."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Queue Families\n[\n  {\n    properties: {\n      queue_flags: GRAPHICS | COMPUTE | TRANSFER | SPARSE_BINDING,\n      queue_count: 16,\n      timestamp_valid_bits: 64,\n      min_image_transfer_granularity: {\n        width: 1,\n        height: 1,\n        depth: 1,\n      },\n    },\n    device: 0x00005622e6d7d271,\n    index: 0,\n  },\n  {\n    properties: {\n      queue_flags: TRANSFER,\n      queue_count: 1,\n      timestamp_valid_bits: 64,\n      min_image_transfer_granularity: {\n        width: 1,\n        height: 1,\n        depth: 1,\n      },\n    },\n    device: 0x00005622e6d7d270,\n    index: 1,\n  }\n]\n")),Object(c.b)("p",null,"For a detailed explanation on Queue Family, see this ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/a/55273688/2849127"}),"Stackoverflow thread"))))}j.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n("q1tI"),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return(i.a.createElement(l.Provider,{value:t},e.children))},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return n?i.a.createElement(m,c({ref:t},l,{components:n})):i.a.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"===typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("zLVn");function i(e,t){if(null==e)return{};var n,i,r=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}},Q88C:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.TUTORIAL="tutorial",e.PROJECT="project",e.RESEARCH="research",e.RUST="rust",e.JS="javascript",e.REACT="reactjs",e.GFX_HAL="gfx-hal"}(a||(a={}))},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},hzGs:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gfx-hal-initials/physical-logical-devices",function(){return n("7c7i")}])},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},zAA7:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("Q88C"),i={"rust-cargo-basics":{key:"rust-cargo-basics",link:"/gfx-hal-initials/rust-cargo-basics",title:"Basics on Rust & Cargo",description:"Basics on Rust & Cargo",ogImage:"https://user-images.githubusercontent.com/11786283/81770497-0c77c000-94fe-11ea-95bc-44e5e432b1d8.jpg",tags:[a.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"display-window":{key:"display-window",link:"/gfx-hal-initials/display-window",title:"Display Window",description:"Displaying Window using winit and bind it to gfx-hal surface instance",ogImage:"https://user-images.githubusercontent.com/11786283/82109997-98852400-9758-11ea-84a0-aa3996c67f86.jpg",tags:[a.a.RUST],createdAt:new Date("2020/04/25 17:00:00"),updatedAt:new Date("2020/05/09 23:50:00"),isPublished:!0},"physical-logical-devices":{key:"physical-logical-devices",link:"/gfx-hal-initials/physical-logical-devices",title:"Physical & Logical Devices",description:"We would be looking into all       instances devices from gfx-hal,       which resembles Vulkan devices.       We will also learn some basics on enumerating these devices and stuff.",ogImage:"https://user-images.githubusercontent.com/11786283/82111231-485e8f80-9761-11ea-9f21-8843d4a66752.jpg",tags:[a.a.TUTORIAL,a.a.RUST,a.a.GFX_HAL],createdAt:new Date("2020/05/16 8:45:00"),updatedAt:new Date("2020/05/16 19:30:00"),isPublished:!0},"command-buffers":{key:"command-buffers",link:"/gfx-hal-initials/command-buffers",title:"Command Buffers",description:"We would be looking into Command Buffers and how to instantiate them",ogImage:"https://user-images.githubusercontent.com/11786283/82124794-f0567600-97be-11ea-9023-ea1467a6b734.jpg",tags:[a.a.TUTORIAL,a.a.RUST,a.a.GFX_HAL],createdAt:new Date("2020/05/16 21:45:00"),updatedAt:new Date("2020/05/16 21:45:00"),isPublished:!0}}},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return a}))}},[["hzGs",0,1]]]);