(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"30MA":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=n.n(o),l=n("7ljp"),c=n("k333"),s=(i.a.createElement,function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}}),u=s("PolkaContainer"),p=s("H1"),b=s("Blockquote"),d=s("InlineCode"),f=s("Link"),m={},g="wrapper";function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(g,Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(u,{mdxType:"PolkaContainer"},Object(l.b)(p,{updatedAt:c.b["word-counter"].updatedAt,wordCount:564,mdxType:"H1"},"Word Counter"),Object(l.b)("p",null,"This is a fun script, that I am trying out to learn rust. Also benifitting myself,\nwith a script that will automate to get an approx. count of words from my MDX notes,\nwhich later on will help me to get the read time per notes."),Object(l.b)(b,{type:"warn",mdxType:"Blockquote"},"The Word Counter code is written in 2hrs time, and is not optimal. It uses brute force to remove templates matched by different ",Object(l.b)(d,{mdxType:"InlineCode"},"regex"),"expressions, one by one in sequence. I will someday improve this script, to use AST for better perfomance and accurate results.",Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("i",null,"References to read later:",Object(l.b)("br",null),Object(l.b)(f,{href:"https://github.com/syntax-tree/unist#syntax-tree",target:"_blank",mdxType:"Link"},"Syntax Tree"),Object(l.b)(f,{href:"https://ruslanspivak.com/lsbasi-part1/",target:"_blank",mdxType:"Link"},"Let's build an Interpreter"),"\xa0and\xa0",Object(l.b)(f,{href:"https://compilers.iecc.com/crenshaw/",target:"_blank",mdxType:"Link"},"Let's build a Compiler"),".")),Object(l.b)("h2",null,"Code Breakup"),Object(l.b)("p",null,"First of all, I am using ",Object(l.b)("inlineCode",{parentName:"p"},"regex")," crate, which is offical crate support by Rust."),Object(l.b)("p",null,"Using ",Object(l.b)("inlineCode",{parentName:"p"},"regex")," is simple and it uses ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/google/re2/wiki/Syntax"}),"RE2")," syntax,\nwhich is a superset for Javascript ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"}),"RegExp"),"."),Object(l.b)("p",null,"Reading data from ",Object(l.b)("inlineCode",{parentName:"p"},"stdin"),", required as we will use our build as a pipe function later:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rs"}),"use std::io::{self, Read};\n...\nlet mut buffer = String::new();\nio::stdin().read_to_string(&mut buffer)?;\n...\n")),Object(l.b)("p",null,"Now we need few regular expressions to be pre-compiled, so as to use them later"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rs.true"}),'use regex::{Regex, RegexBuilder, Captures};\n...\nlet re1 = Regex::new(r"<\\s*[^>]*>(.*?)<\\s*/.*\\s*>").unwrap();\nlet re2 = Regex::new(r"<\\s*[^>]*/?>|<\\s*/.*\\s*>").unwrap();\nlet re3 = RegexBuilder::new(r"^(`{3}\\w)[^`]*(`{3})$")\n    .multi_line(true)\n    .dot_matches_new_line(true)\n    .build()\n...\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Line 3.")," creates a regex for all HTML Container Tags, extracting out the inner strings,\nso as to word count them later."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Line 4.")," creates a regex from all HTML Empty Tags and previously uncatched Opening/Closing Tags."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Line 5.")," helps to create a multi-line flagged regexp, so as to match all the Code Blocks."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Note: Code Diff Blocks are still remaining to be checked. Currently the content inside Code\nDiff block will be part of Word counts.")),Object(l.b)("p",null,"All the above regex will later on be used to replace their matches with empty string,\nso as to remove them. \ud83c\udf89 \u270c\ufe0f"),Object(l.b)("h3",null,"Some more regex:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rs"}),'let return_to_space = Regex::new(r"\\n").unwrap();\nlet space_re = Regex::new(r"\\s").unwrap();\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"return_to_space")," regex will be used to remove all the remaing ",Object(l.b)("inlineCode",{parentName:"p"},"return"),"s from the output string,\nthat we will get, using previous regex."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"space_re")," regex, will later on be used to filter out extra spaces, so as to improve word count\naccuracy."),Object(l.b)("h3",null,"Final Regex to extract Words"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rs"}),'let word_counter_re = RegexBuilder::new(r"[^\\s#\\*]*")\n  .multi_line(true)\n  .dot_matches_new_line(true)\n  .build()\n  .unwrap();\n')),Object(l.b)("p",null,"Do note, above regex is not for pure words, as in our ",Object(l.b)("inlineCode",{parentName:"p"},"mdx")," files, we have inline code-snippets,\nand more stuff, which breaks if ",Object(l.b)("inlineCode",{parentName:"p"},"\\w+")," is directly used. Thus we needed to get all chars which are\nnot space, ",Object(l.b)("inlineCode",{parentName:"p"},"#")," and ",Object(l.b)("inlineCode",{parentName:"p"},"*"),". I know, this regex might be incomplete, or needs more chars for proper filter,\nbut for now it's fine as we need approximate results, not accurate."),Object(l.b)("br",null),Object(l.b)("p",null,"Finally, using the above regex and filtering our extra spaces, we can get an approximate\ncount of all the words present in our Notes, so as to later on generate Read Time for\nour Notes."),Object(l.b)("br",null),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"You can find full code, for this note, ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Shub1427/shub1427.github.io/tree/react/scripts/src/bin/word-counter.rs"}),"here"),".")),Object(l.b)("hr",null)))}O.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,l({ref:t},s,{components:n})):a.a.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[b]="string"===typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("zLVn");function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Oxpd:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/word-counter",function(){return n("30MA")}])},Q88C:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.TUTORIAL="tutorial",e.RUST="rust"}(r||(r={}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},k333:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n("Q88C"),a={"upload-client-logs":{key:"upload-client-logs",link:"/upload-client-logs",title:"Client Browser Log to your Server",description:"Sometimes (like to get details on performance) there is a requirement to log data       from end-user's browser to you own servers, for which this note will talk about.",tags:[r.a.TUTORIAL,r.a.RUST],createdAt:new Date("2020/04/29 08:30:00"),updatedAt:new Date("2020/04/28 22:30:00"),isPublished:!1},"word-counter":{key:"word-counter",link:"/word-counter",title:"Word Counter in Rust",description:"Just a fun bin script for my project, to count words in my MDX files.",tags:[r.a.TUTORIAL,r.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"gfx-hal-basics":{key:"gfx-hal-basics",link:"/gfx-hal-initials",title:"Basics on Vulkan using gfx-hal",description:"Reference Notes for me (and others) to help get started with Rust and Vulkan",tags:[r.a.TUTORIAL,r.a.RUST],createdAt:new Date("2020/04/26 10:00:00"),updatedAt:new Date("2020/04/26 16:00:00"),isPublished:!1},"astro-v2":{key:"astro-v2",link:"/astro-v2",title:"Astro Blaster v2 in Rust",description:"A very minimal game making tutorial in Rust using ggez",tags:[r.a.TUTORIAL,r.a.RUST],createdAt:new Date("2020/04/10"),updatedAt:new Date("2020/04/12"),isPublished:!1}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,n){return Object.prototype.hasOwnProperty.call(e,n)&&t.push(e[n]),t}),[])}(a)},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}},[["Oxpd",0,1]]]);