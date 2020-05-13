(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0GHQ":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gfx-hal-initials/rust-cargo-basics",function(){return t("Qd9W")}])},"7ljp":function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t("q1tI"),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"===typeof e?e(n):l({},n,{},e)),t},u=function(e){var n=b(e.components);return(r.a.createElement(c.Provider,{value:n},e.children))},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(t),p=a,f=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return t?r.a.createElement(f,l({ref:n},c,{components:t})):r.a.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"===typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},Ff2n:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("zLVn");function r(e,n){if(null==e)return{};var t,r,o=Object(a.a)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},Q88C:function(e,n,t){"use strict";var a;t.d(n,"a",(function(){return a})),function(e){e.TUTORIAL="tutorial",e.PROJECT="project",e.RESEARCH="research",e.RUST="rust",e.JS="javascript",e.REACT="reactjs"}(a||(a={}))},Qd9W:function(e,n,t){"use strict";t.r(n),t.d(n,"record",(function(){return c})),t.d(n,"default",(function(){return O}));var a=t("wx14"),r=t("Ff2n"),o=t("q1tI"),i=t.n(o),l=t("7ljp"),s=t("zAA7"),c=(i.a.createElement,s.a["rust-cargo-basics"]),b=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",n)}},u=b("PolkaContainer"),p=b("H1"),d=b("Blockquote"),f=b("Link"),m={record:c},g="wrapper";function O(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)(g,Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)(u,{pageTitle:c.title,pageDescription:c.description,keywords:["Basics","Fundamental","Beginner"],publishDate:c.createdAt,ogImage:c.ogImage,mdxType:"PolkaContainer"},Object(l.b)(p,{updatedAt:c.updatedAt,wordCount:686,mdxType:"H1"},c.title),Object(l.b)("h2",null,"Rust"),Object(l.b)(d,{type:"warn",mdxType:"Blockquote"},"I am a very beginner in Rust and Low Level Programming, and parts of my research might be falsy or wrong (as I forget things very soon, due to me trying new things most often). Don't take everything I write here, as the only source of truth. Please do verify my writings here from different sources. If found falsy, please do let me know by\xa0",Object(l.b)(f,{target:"_blank",href:"https://github.com/Shub1427/shub1427.github.io/issues/new/choose",mdxType:"Link"},"raising an issue here"),"."),Object(l.b)("br",null),Object(l.b)("p",null,"Anyways, keeping aside the above talk, I am trying my best to improve these notes. If anything\nI find misleading, I will update in later revisions of this site. Mostly I will write only those\nthings, which I have worked with and faced some issues before."),Object(l.b)("br",null),Object(l.b)("p",null,"Hope this helps you as well."),Object(l.b)("h3",null,"Some basics on Lifetimes:"),Object(l.b)("p",null,"Every reference in global context in ",Object(l.b)("inlineCode",{parentName:"p"},"rust")," has a lifetime\nof ",Object(l.b)("inlineCode",{parentName:"p"},"static"),", and by default we don't have to assign a specific\nlifetime to variables or global function args etc. ",Object(l.b)("inlineCode",{parentName:"p"},"static"),"\nlifetime defines that, that particular entity will live long enough,\ntill the main process dies. So, following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),'const foobar: &str = "Up here I have static lifetime";\n\nfn foo(param1: &str) {\n  println!("I am static: {}", param1);\n}\n\nfn main() {\n  let bar = &foobar;\n  println!("I am static as well: {}", bar);\n}\n')),Object(l.b)("p",null,"would result into something like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),'const foobar: &\'static str = "Up here I have static lifetime";\n\nfn foo(param1: &\'static str) {\n  println!("I am static: {}", param1);\n}\n\nfn main() {\n  let bar = &\'static foobar;\n  println!("I am static as well: {}", bar);\n}\n')),Object(l.b)("h3",null,"Passing Slices as arguments:"),Object(l.b)("p",null,"If details of the type is not essential, passing array like variables as a reference\nof generic slice is beneficial. For eg."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),'use std::fmt::Debug;\n\nfn check_array<T>(data: &[T])\nwhere\n  T: Debug,\n{\n  let mut i = 0;\n  for item in data.iter() {\n    println!("Element[{}]: {:?}", i, item);\n    i += 1;\n  }\n}\nfn check_str(data: &str) {\n  let mut i = 0;\n  for item in data.chars() {\n    println!("Element[{}]: {:?}", i, item);\n    i += 1;\n  }\n}\n\nfn main() {\n    let mut v = vec![1, 2, 3, 4];\n    let mut s = String::from("Test FOO");\n    check_array(&v);\n    check_str(&s);\n}\n')),Object(l.b)("p",null,"where, ",Object(l.b)("inlineCode",{parentName:"p"},"&str")," is a string slice, which means I could've passed part of the string as well,\ninstead of the whole ",Object(l.b)("inlineCode",{parentName:"p"},"String")," data, as ",Object(l.b)("inlineCode",{parentName:"p"},"check_str(&s[2..6])"),"."),Object(l.b)("h3",null,"How to drop struct properties manually."),Object(l.b)("p",null,"By default, managing memory is not required in Rust. But, there are cases, when this becomes\ncrucial, and Rust allows you to mess with memory when needed (still being safe)."),Object(l.b)("p",null,"For cases where we need to drop properties manually, there are many ways in Rust to do so.\nTwo of which are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"To use ",Object(l.b)("inlineCode",{parentName:"li"},"Option")),Object(l.b)("li",{parentName:"ul"},"To use ",Object(l.b)("inlineCode",{parentName:"li"},"ManuallyDrop"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example of using ",Object(l.b)("inlineCode",{parentName:"strong"},"Option")," to drop properties.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),"struct Foo {\n  baz: String;\n  bar: Option<String>;\n}\n\nimpl Drop for Foo {\n    fn drop(&mut self) {\n        self.bar = None;\n    }\n}\n")),Object(l.b)("p",null,"Above code drops ",Object(l.b)("inlineCode",{parentName:"p"},"bar")," before ",Object(l.b)("inlineCode",{parentName:"p"},"baz"),", which is different than the default behaviour of Rust,\nwhere Struct properties are dropped in the order they were defined, i.e. for above code ",Object(l.b)("inlineCode",{parentName:"p"},"baz"),"\nshould have been dropped before ",Object(l.b)("inlineCode",{parentName:"p"},"bar"),"."),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example of using ",Object(l.b)("inlineCode",{parentName:"strong"},"ManuallyDrop")," to drop properties.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),"use std::mem::ManuallyDrop;\n\nstruct Foo {\n  baz: String;\n  bar: ManuallyDrop<String>;\n}\n\nimpl Drop for Foo {\n    fn drop(&mut self) {\n        ManuallyDrop::drop(&mut self.bar);\n    }\n}\n")),Object(l.b)("p",null,"Above code does the same thing as was done using ",Object(l.b)("inlineCode",{parentName:"p"},"Option")," before."),Object(l.b)("hr",null),Object(l.b)("h2",null,"Cargo"),Object(l.b)("p",null,"Basics of ",Object(l.b)("inlineCode",{parentName:"p"},"cargo")," is very simple, and thus I like Rust the most, compared to ",Object(l.b)("inlineCode",{parentName:"p"},"C"),".\nI won't be writing on how to ",Object(l.b)("inlineCode",{parentName:"p"},"run")," or create a ",Object(l.b)("inlineCode",{parentName:"p"},"new")," project, but would like to\ntalk on some cargo features, which are not known if a beginner skip the Cargo Chapter\nin Rust Book."),Object(l.b)("h3",null,"Cargo Features"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"features")," is a wonderful option provided by Rust Cargo, which makes compiling your code\nconditionally. For Eg, If we want specific features to be enabled only for Linux, we\ncan do so easily using ",Object(l.b)("inlineCode",{parentName:"p"},"features")," option."),Object(l.b)("br",null),Object(l.b)("p",null,"For eg, In our journey of learning ",Object(l.b)("inlineCode",{parentName:"p"},"gfx-hal"),", we would be using multiple Graphics Backends,\nwhich should be compiled respective to which OS Platform we are working on. This is made possible\nby defining ",Object(l.b)("inlineCode",{parentName:"p"},"features")," in ",Object(l.b)("inlineCode",{parentName:"p"},"Cargo.toml")," file, and later when running the Project in dev mode\n",Object(l.b)("inlineCode",{parentName:"p"},"cargo run"),", we would pass the feature we need to be used for the platform."),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example ",Object(l.b)("inlineCode",{parentName:"strong"},"Cargo.toml"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'[features]\ndefault = []\nmetal = ["gfx-backend-metal"]\ndx12 = ["gfx-backend-dx12"]\nvulkan = ["gfx-backend-vulkan"]\n\n[dependencies.gfx-backend-vulkan]\nversion = "0.5.0"\nfeatures = ["x11"]\noptional = true\n\n[target.\'cfg(target_os = "macos")\'.dependencies.gfx-backend-metal]\nversion = "0.5.0"\noptional = true\n\n[target.\'cfg(windows)\'.dependencies.gfx-backend-dx12]\nversion = "0.5.0"\noptional = true\n')),Object(l.b)("p",null,"Once above is done, we can now use feature-toggles in our code, to remove part of code\nthat does not satisfy the ",Object(l.b)("inlineCode",{parentName:"p"},"feature"),". For Eg,"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rs"}),'#[cfg(feature = "dx12")]\nuse gfx_backend_dx12 as back;\n#[cfg(feature = "metal")]\nuse gfx_backend_metal as back;\n#[cfg(feature = "vulkan")]\nuse gfx_backend_vulkan as back;\n')),Object(l.b)("p",null,"And not the final part to run the code with features enabled."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"cargo run --features metal\n")),Object(l.b)("p",null,"Above code runs our code, enabling the ",Object(l.b)("inlineCode",{parentName:"p"},"metal")," feature-toggle, which compiles our\ncode for MacOS Platform. We can also pass more features in one go, if they are supported\nduring compilation, with comma separated values.")))}O.isMDXComponent=!0},Qetd:function(e,n,t){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},wx14:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return a}))},zAA7:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("Q88C"),r={"rust-cargo-basics":{key:"rust-cargo-basics",link:"/gfx-hal-initials/rust-cargo-basics",title:"Basics on Rust & Cargo",description:"Basics on Rust & Cargo",ogImage:"https://user-images.githubusercontent.com/11786283/81770497-0c77c000-94fe-11ea-95bc-44e5e432b1d8.jpg",tags:[a.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"display-window":{key:"display-window",link:"/gfx-hal-initials/display-window",title:"Display Window",description:"Displaying Window using winit and bind it to gfx-hal surface instance",ogImage:"https://user-images.githubusercontent.com/11786283/81770634-814afa00-94fe-11ea-9235-0684a37dd4ae.jpg",tags:[a.a.RUST],createdAt:new Date("2020/04/25 17:00:00"),updatedAt:new Date("2020/05/09 23:50:00"),isPublished:!1}}},zLVn:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return a}))}},[["0GHQ",0,1]]]);