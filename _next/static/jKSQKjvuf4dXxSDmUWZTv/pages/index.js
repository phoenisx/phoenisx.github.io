(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"23aj":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return me}));var o=a("q1tI"),n=a.n(o),r=a("8Kt/"),i=a.n(r),c=a("nOHt"),l=a("R/WZ"),s=a("Ji2X"),d=a("y+Nh"),u=a("rePB"),m=a("YFqc"),p=a.n(m),f=a("/Tr7"),g=a("jIYg");function b(e,t){Object(g.a)(2,arguments);var a=Object(f.a)(e),o=Object(f.a)(t),n=a.getTime()-o.getTime();return n<0?-1:n>0?1:n}function h(e,t){Object(g.a)(2,arguments);var a=Object(f.a)(e),o=Object(f.a)(t),n=b(a,o),r=Math.abs(function(e,t){Object(g.a)(2,arguments);var a=Object(f.a)(e),o=Object(f.a)(t);return 12*(a.getFullYear()-o.getFullYear())+(a.getMonth()-o.getMonth())}(a,o));a.setMonth(a.getMonth()-n*r);var i=n*(r-(b(a,o)===-n));return 0===i?0:i}function v(e,t){Object(g.a)(2,arguments);var a=function(e,t){Object(g.a)(2,arguments);var a=Object(f.a)(e),o=Object(f.a)(t);return a.getTime()-o.getTime()}(e,t)/1e3;return a>0?Math.floor(a):Math.ceil(a)}var y=a("iSMj");function w(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t=t||{})t.hasOwnProperty(a)&&(e[a]=t[a]);return e}({},e)}var k=a("JCDJ"),j=1440,O=2520,C=43200,S=86400;function x(e,t,a){Object(g.a)(2,arguments);var o=a||{},n=o.locale||y.a;if(!n.formatDistance)throw new RangeError("locale must contain formatDistance property");var r=b(e,t);if(isNaN(r))throw new RangeError("Invalid time value");var i,c,l=w(o);l.addSuffix=Boolean(o.addSuffix),l.comparison=r,r>0?(i=Object(f.a)(t),c=Object(f.a)(e)):(i=Object(f.a)(e),c=Object(f.a)(t));var s,d=v(c,i),u=(Object(k.a)(c)-Object(k.a)(i))/1e3,m=Math.round((d-u)/60);if(m<2)return o.includeSeconds?d<5?n.formatDistance("lessThanXSeconds",5,l):d<10?n.formatDistance("lessThanXSeconds",10,l):d<20?n.formatDistance("lessThanXSeconds",20,l):d<40?n.formatDistance("halfAMinute",null,l):d<60?n.formatDistance("lessThanXMinutes",1,l):n.formatDistance("xMinutes",1,l):0===m?n.formatDistance("lessThanXMinutes",1,l):n.formatDistance("xMinutes",m,l);if(m<45)return n.formatDistance("xMinutes",m,l);if(m<90)return n.formatDistance("aboutXHours",1,l);if(m<j){var p=Math.round(m/60);return n.formatDistance("aboutXHours",p,l)}if(m<O)return n.formatDistance("xDays",1,l);if(m<C){var x=Math.round(m/j);return n.formatDistance("xDays",x,l)}if(m<S)return s=Math.round(m/C),n.formatDistance("aboutXMonths",s,l);if((s=h(c,i))<12){var R=Math.round(m/C);return n.formatDistance("xMonths",R,l)}var T=s%12,D=Math.floor(s/12);return T<3?n.formatDistance("aboutXYears",D,l):T<9?n.formatDistance("overXYears",D,l):n.formatDistance("almostXYears",D+1,l)}var R,T,D=a("9jPY"),E=a("ofer"),A=a("eD//"),I=a("tVbE"),N=a("30+C"),M=a("oa/T"),P=a("o4QW"),L=a("Z3vd"),H=a("RYGM");!function(e){e[e.CREATED_AT=0]="CREATED_AT"}(R||(R={})),function(e){e[e.ASC=0]="ASC",e[e.DESC=1]="DESC"}(T||(T={}));var J=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T.ASC,o=[];switch(t){case R.CREATED_AT:o=e.map((function(e){return e})).sort((function(e,t){return a===T.ASC?+e.createdAt-+t.createdAt:+t.createdAt-+e.createdAt}))}return o},_=n.a.createElement,q=Object(l.a)((function(e){return{root:Object(u.a)({margin:"0 auto",padding:"32px 16px",width:"90%"},e.breakpoints.down("xs"),{width:"100%",padding:0}),heading:{display:"flex",justifyContent:"center",fontFamily:"'Oswald', sans-serif",fontWeight:200,marginBottom:32},item:{"& + &":{marginTop:32}},tags:{fontSize:14,marginBottom:12},tagItem:{"& + &":{marginLeft:8}},title:{display:"block",textAlign:"center",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",color:"".concat(e.palette.secondary.dark),padding:"0 0 16px",fontFamily:"'Oswald', sans-serif",fontWeight:300},description:{display:"-webkit-box","-webkit-line-clamp":3,"-webkit-box-orient":"vertical",overflow:"hidden"},dates:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",color:"#aaa",fontSize:"0.8rem",marginBottom:16}}})),z=function(e,t){return e.tags.map((function(e){return _(D.a,{key:e,className:t.tagItem,label:e,size:"small"})}))};function $(){var e=q(),t=J(H.a,R.CREATED_AT,T.DESC);return _("div",{className:e.root},_(E.a,{className:e.heading,variant:"h2"},"Archives"),_(A.a,{component:"nav","aria-label":"main mailbox folders"},t.map((function(t){return _(I.a,{className:e.item,key:t.key},_(N.a,{className:e.root,elevation:4},_(M.a,null,_("div",{className:e.tags},z(t,e)),_(E.a,{className:e.title,variant:"h4",component:"h2"},t.title),_("div",{className:e.dates},_("span",null,"Updated: ",x(t.updatedAt,new Date)," ago"),_("span",null,"Created: ",x(t.createdAt,new Date)," ago")),_(E.a,{className:e.description,variant:"body2",component:"p"},t.description)),_(P.a,null,_(p.a,{href:t.link},_(L.a,{disabled:!t.isPublished,color:"primary",fullWidth:!0},_("b",null,"Visit"))))))}))))}var V=a("PsDL"),B=a("wx14"),F=a("LXLv"),W=a.n(F),U=a("JkEI"),X=a.n(U),G=a("y9eO"),Y=a.n(G),K=a("lJuC"),Q=a.n(K),Z=n.a.createElement,ee=function(e){return Z("svg",Object(B.a)({"aria-hidden":"true",focusable:"false","data-icon":"stack-overflow",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 384 512"},e),Z("path",{fill:"inherit",d:"M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"}))},te=[{key:"twitter",mode:"light",link:"https://twitter.com/phoenisx_",color:"rgb(29, 161, 242)",icon:W.a},{key:"github",mode:"light",link:"https://github.com/phoenisx",color:"#24292e",icon:X.a},{key:"stackoverflow",mode:"light",link:"https://stackoverflow.com/users/2849127/phoenisx",color:"#adb5bd",icon:ee},{key:"gmail",mode:"light",link:"mailto:sub14biswas@gmail.com",color:"#D44638",icon:Y.a},{key:"linkedin",mode:"light",link:"https://www.linkedin.com/in/phoenisx/",color:"#0077b5",icon:Q.a}],ae=[{key:"twitter",mode:"dark",link:"https://twitter.com/phoenisx_",color:"rgb(29, 161, 242)",icon:W.a},{key:"github-light",mode:"dark",link:"https://github.com/phoenisx",color:"#f2f2f2",icon:X.a},{key:"stackoverflow",mode:"dark",link:"https://stackoverflow.com/users/2849127/phoenisx",color:"#adb5bd",icon:ee},{key:"gmail",mode:"dark",link:"mailto:sub14biswas@gmail.com",color:"#D44638",icon:Y.a},{key:"linkedin",mode:"dark",link:"https://www.linkedin.com/in/phoenisx/",color:"#0088d7",icon:Q.a}],oe=a("FbnM"),ne=a("WZHV"),re=n.a.createElement,ie=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",margin:"0 auto",padding:"32px 16px"},title:{fontFamily:"'Oswald', sans-serif",fontWeight:200},description:{marginTop:16,wordSpacing:3,lineHeight:1.7,fontWeight:400,color:"dark"===e.palette.type?e.palette.common.white:"#666"},highlight:{color:"".concat(e.palette.primary.light),fontWeight:"bold"},socialWrapper:{display:"flex",justifyContent:"center",width:"100%",padding:16}}}));function ce(){var e=ie(),t=Object(oe.a)().darkMode?ae:te;return re("div",{className:e.root},re(ne.a,{hideRootNav:!0}),re("img",{height:"100%",src:"/images/logo-small.png",alt:"Shub's logo"}),re(E.a,{className:e.title,variant:"h2",color:"primary"},"Subroto Biswas"),re(E.a,{variant:"subtitle1",className:e.description},"Subroto Biswas is a working professional, currently working at \xa0",re("span",{className:e.highlight},"upGrad"),", as a Senior Software Engineer. This site is about his work, learnings and research. He is interested in various kinds of Graphics programming and is a student by heart. Most of his professional work, involves Web Development, using Javascript and ReactJS, but he is also quite fond of Graphics and in his leisure time he works on Game Dev and Render engines using Rust Lang."),re("div",{className:e.socialWrapper},t.map((function(e){return re(V.a,{key:e.key,href:e.link,target:"_blank",color:"secondary","aria-label":e.key},re(e.icon,{style:{fill:e.color}}))}))))}var le=a("UYwG"),se=a("iXN3"),de=n.a.createElement,ue=Object(l.a)({root:{position:"relative",minHeight:"100vh",padding:"32px 0 64px"}});function me(){var e=ue(),t=Object(c.useRouter)(),a=Object(le.a)(t);return de(n.a.Fragment,null,de(i.a,null,de("meta",{name:"twitter:card",content:"summary_large_image"}),de("meta",{name:"twitter:creator",content:"@Shub7241"}),de("meta",{name:"twitter:site",content:"@Shub7241"}),de("meta",{name:"twitter:url",content:a}),de("meta",{name:"twitter:title",content:"Subroto's Homepage"}),de("meta",{name:"twitter:description",content:"Subroto's Homepage! Get to know him via his Work"}),de("meta",{name:"twitter:image",content:"https://user-images.githubusercontent.com/11786283/82110060-1c3f1080-9759-11ea-81f0-e8457b3b914a.jpg?2"}),de("meta",{name:"twitter:image:src",content:"https://user-images.githubusercontent.com/11786283/82110060-1c3f1080-9759-11ea-81f0-e8457b3b914a.jpg?2"}),de("meta",{property:"og:type",content:"article"}),de("meta",{property:"og:title",content:"Subroto's Homepage"}),de("meta",{property:"og:site_name",content:"Subroto"}),de("meta",{property:"og:url",content:a}),de("meta",{property:"og:image",content:"https://user-images.githubusercontent.com/11786283/82110060-1c3f1080-9759-11ea-81f0-e8457b3b914a.jpg?2"}),de("meta",{property:"article:published_time",content:"2019-11-14"}),de("meta",{property:"article:author",content:"https://twitter.com/Shub7241"}),de("title",null,"Home | Shub"),de("meta",{name:"description",content:"Subroto's Homepage! Get to know him via his Work"}),de("meta",{name:"keywords",content:"Subroto, Subroto Biswas, Shub, Blog, Articles, Archives, ReactJS, Rust, Javascript, CSS3, upGrad, Software Engineer, Developer, Programmer, Graphics, Games, Rendering"})),de(s.a,{maxWidth:"md",className:e.root},de(d.a,null),de(ce,null),de($,null),de(se.a,{title:"Subroto's Homepage",text:a,url:a})))}},"8/g6":function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=r.default.memo(r.default.forwardRef((function(t,a){return r.default.createElement(i.default,(0,n.default)({ref:a},t),e)})));0;return a.muiName=i.default.muiName,a};var n=o(a("pVnL")),r=o(a("q1tI")),i=o(a("UJJ5"))},"9jPY":function(e,t,a){"use strict";var o=a("wx14"),n=a("Ff2n"),r=a("q1tI"),i=a.n(r),c=(a("17x9"),a("iuhU")),l=a("HR5l");var s=function(e,t){var a=i.a.memo(i.a.forwardRef((function(t,a){return i.a.createElement(l.a,Object(o.a)({ref:a},t),e)})));return a.muiName=l.a.muiName,a}(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})),d=a("H2TA"),u=a("ye/S"),m=a("bfFb"),p=a("NqtD"),f=a("VD++");function g(e){return"Backspace"===e.key||"Delete"===e.key}var b=r.forwardRef((function(e,t){var a=e.avatar,i=e.classes,l=e.className,d=e.clickable,u=e.color,b=void 0===u?"default":u,h=e.component,v=e.deleteIcon,y=e.disabled,w=void 0!==y&&y,k=e.icon,j=e.label,O=e.onClick,C=e.onDelete,S=e.onKeyDown,x=e.onKeyUp,R=e.size,T=void 0===R?"medium":R,D=e.variant,E=void 0===D?"default":D,A=Object(n.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),I=r.useRef(null),N=Object(m.a)(I,t),M=function(e){e.stopPropagation(),C&&C(e)},P=!(!1===d||!O)||d,L="small"===T,H=h||(P?f.a:"div"),J=H===f.a?{component:"div"}:{},_=null;if(C){var q=Object(c.a)("default"!==b&&("default"===E?i["deleteIconColor".concat(Object(p.a)(b))]:i["deleteIconOutlinedColor".concat(Object(p.a)(b))]),L&&i.deleteIconSmall);_=v&&r.isValidElement(v)?r.cloneElement(v,{className:Object(c.a)(v.props.className,i.deleteIcon,q),onClick:M}):r.createElement(s,{className:Object(c.a)(i.deleteIcon,q),onClick:M})}var z=null;a&&r.isValidElement(a)&&(z=r.cloneElement(a,{className:Object(c.a)(i.avatar,a.props.className,L&&i.avatarSmall,"default"!==b&&i["avatarColor".concat(Object(p.a)(b))])}));var $=null;return k&&r.isValidElement(k)&&($=r.cloneElement(k,{className:Object(c.a)(i.icon,k.props.className,L&&i.iconSmall,"default"!==b&&i["iconColor".concat(Object(p.a)(b))])})),r.createElement(H,Object(o.a)({role:P||C?"button":void 0,className:Object(c.a)(i.root,l,"default"!==b&&[i["color".concat(Object(p.a)(b))],P&&i["clickableColor".concat(Object(p.a)(b))],C&&i["deletableColor".concat(Object(p.a)(b))]],"default"!==E&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[b]],w&&i.disabled,L&&i.sizeSmall,P&&i.clickable,C&&i.deletable),"aria-disabled":!!w||void 0,tabIndex:P||C?0:void 0,onClick:O,onKeyDown:function(e){e.currentTarget===e.target&&g(e)&&e.preventDefault(),S&&S(e)},onKeyUp:function(e){e.currentTarget===e.target&&(C&&g(e)?C(e):"Escape"===e.key&&I.current&&I.current.blur()),x&&x(e)},ref:N},J,A),z||$,r.createElement("span",{className:Object(c.a)(i.label,L&&i.labelSmall)},j),_)}));t.a=Object(d.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(u.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(u.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(u.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(u.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(u.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(u.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(u.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(u.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(u.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(u.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(u.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(u.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(u.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(b)},Bldr:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("23aj")}])},JkEI:function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,o(a("8/g6")).default)(n.default.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub");t.default=r},LXLv:function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,o(a("8/g6")).default)(n.default.createElement("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");t.default=r},MquD:function(e,t,a){"use strict";var o=a("q1tI"),n=o.createContext({});t.a=n},Q88C:function(e,t,a){"use strict";var o;a.d(t,"a",(function(){return o})),function(e){e.TUTORIAL="tutorial",e.PROJECT="project",e.RESEARCH="research",e.RUST="rust",e.JS="javascript",e.REACT="reactjs",e.GFX_HAL="gfx-hal"}(o||(o={}))},RYGM:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return s}));var o=a("q1tI"),n=a.n(o),r=a("Q88C"),i=a("Swb2"),c=n.a.createElement,l={"rust-reference":{key:"rust-reference",link:"/rust-reference",title:"Advance Rust Reference",titleString:"Advance Rust Reference",description:"Some advance concepts in Rust that were difficult for me to understand.       This Doc is trying to keep a reference of all those topics, for me to take       a reference from later for easier understanding",ogImage:"https://user-images.githubusercontent.com/11786283/82665354-47da6300-9c51-11ea-87c7-bb996eb79de1.jpg",tags:[r.a.RUST],createdAt:new Date("2020/05/22 17:25:00"),updatedAt:new Date("2020/05/22 17:25:00"),isPublished:!0},"performance-reactjs":{key:"performance-reactjs",link:"/performance-reactjs",title:"Performance Improvements in JS and ReactJS",titleString:"Performance Improvements in JS and ReactJS",description:"Recent Performance related findings of mine, which I am jotting down here for later reference",ogImage:"https://user-images.githubusercontent.com/11786283/81769128-6f675800-94fa-11ea-99d6-57dc42166eaa.jpg",tags:[r.a.RESEARCH,r.a.JS,r.a.REACT],createdAt:new Date("2020/05/07 09:15:00"),updatedAt:new Date("2020/05/09 23:15:00"),isPublished:!0},"upload-client-logs":{key:"upload-client-logs",link:"/upload-client-logs",title:"Client Browser Log to your Server",titleString:"Client Browser Log to your Server",description:"Sometimes (like to get details on performance) there is a requirement to log data       from end-user's browser to you own servers, for which this note will talk about.",ogImage:"https://user-images.githubusercontent.com/11786283/81769041-37601500-94fa-11ea-98f7-f353dca53e6b.jpg",tags:[r.a.PROJECT,r.a.JS,r.a.REACT],createdAt:new Date("2020/04/29 08:30:00"),updatedAt:new Date("2020/05/09 12:30:00"),isPublished:!0},"word-counter":{key:"word-counter",link:"/word-counter",title:"Word Counter in Rust",titleString:"Word Counter in Rust",description:"Just a fun bin script for my project, to count words in my MDX files.",ogImage:"https://user-images.githubusercontent.com/11786283/81768977-fd8f0e80-94f9-11ea-8425-953f8639d80e.jpg",tags:[r.a.PROJECT,r.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"gfx-hal-basics":{key:"gfx-hal-basics",link:"/gfx-hal-initials",title:c("span",null,"Learn to Draw a Cube using\xa0",c(i.a,null,"gfx-hal")),titleString:"Learn to Draw a Cube using gfx-hal",description:"Learn to draw a cube using gfx-hal. Also understand       concepts of Vulkan while learning to draw a cube",ogImage:"https://user-images.githubusercontent.com/11786283/81768708-514d2800-94f9-11ea-95d3-36796815a31f.jpg",tags:[r.a.TUTORIAL,r.a.RUST],createdAt:new Date("2020/04/26 10:00:00"),updatedAt:new Date("2020/04/26 16:00:00"),isPublished:!0},"astro-v2":{key:"astro-v2",link:"/astro-v2",title:"Astro Blaster v2 in Rust",titleString:"Astro Blaster v2 in Rust",description:"A very minimal game making tutorial in Rust using ggez",ogImage:"https://user-images.githubusercontent.com/11786283/81768159-f1a24d00-94f7-11ea-83e3-8b9212d4851c.jpg",tags:[r.a.TUTORIAL,r.a.RUST],createdAt:new Date("2020/04/10"),updatedAt:new Date("2020/04/12"),isPublished:!0}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,a){return Object.prototype.hasOwnProperty.call(e,a)&&t.push(e[a]),t}),[])}(l)},UJJ5:function(e,t,a){"use strict";a.r(t);var o=a("HR5l");a.d(t,"default",(function(){return o.a}))},"eD//":function(e,t,a){"use strict";var o=a("wx14"),n=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),l=a("MquD"),s=r.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,d=e.component,u=void 0===d?"ul":d,m=e.dense,p=void 0!==m&&m,f=e.disablePadding,g=void 0!==f&&f,b=e.subheader,h=Object(n.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),v=r.useMemo((function(){return{dense:p}}),[p]);return r.createElement(l.a.Provider,{value:v},r.createElement(u,Object(o.a)({className:Object(i.a)(c.root,s,p&&c.dense,!g&&c.padding,b&&c.subheader),ref:t},h),b,a))}));t.a=Object(c.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(s)},lJuC:function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,o(a("8/g6")).default)(n.default.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");t.default=r},o4QW:function(e,t,a){"use strict";var o=a("wx14"),n=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),l=r.forwardRef((function(e,t){var a=e.disableSpacing,c=void 0!==a&&a,l=e.classes,s=e.className,d=Object(n.a)(e,["disableSpacing","classes","className"]);return(r.createElement("div",Object(o.a)({className:Object(i.a)(l.root,s,!c&&l.spacing),ref:t},d)))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(l)},"oa/T":function(e,t,a){"use strict";var o=a("wx14"),n=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),l=r.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,d=Object(n.a)(e,["classes","className","component"]);return(r.createElement(s,Object(o.a)({className:Object(i.a)(a.root,c),ref:t},d)))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},tVbE:function(e,t,a){"use strict";var o=a("wx14"),n=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),l=a("VD++");var s=a("bfFb"),d=a("MquD"),u=a("i8i4"),m="undefined"===typeof window?r.useEffect:r.useLayoutEffect,p=r.forwardRef((function(e,t){var a=e.alignItems,c=void 0===a?"center":a,p=e.autoFocus,f=void 0!==p&&p,g=e.button,b=void 0!==g&&g,h=e.children,v=e.classes,y=e.className,w=e.component,k=e.ContainerComponent,j=void 0===k?"li":k,O=e.ContainerProps,C=(O=void 0===O?{}:O).className,S=Object(n.a)(O,["className"]),x=e.dense,R=void 0!==x&&x,T=e.disabled,D=void 0!==T&&T,E=e.disableGutters,A=void 0!==E&&E,I=e.divider,N=void 0!==I&&I,M=e.focusVisibleClassName,P=e.selected,L=void 0!==P&&P,H=Object(n.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),J=r.useContext(d.a),_={dense:R||J.dense||!1,alignItems:c},q=r.useRef(null);m((function(){f&&q.current&&q.current.focus()}),[f]);var z,$,V=r.Children.toArray(h),B=V.length&&(z=V[V.length-1],$=["ListItemSecondaryAction"],r.isValidElement(z)&&-1!==$.indexOf(z.type.muiName)),F=r.useCallback((function(e){q.current=u.findDOMNode(e)}),[]),W=Object(s.a)(F,t),U=Object(o.a)({className:Object(i.a)(v.root,y,_.dense&&v.dense,!A&&v.gutters,N&&v.divider,D&&v.disabled,b&&v.button,"center"!==c&&v.alignItemsFlexStart,B&&v.secondaryAction,L&&v.selected),disabled:D},H),X=w||"li";return b&&(U.component=w||"div",U.focusVisibleClassName=Object(i.a)(v.focusVisible,M),X=l.a),B?(X=U.component||w?X:"div","li"===j&&("li"===X?X="div":"li"===U.component&&(U.component="div")),r.createElement(d.a.Provider,{value:_},r.createElement(j,Object(o.a)({className:Object(i.a)(v.container,C),ref:W},S),r.createElement(X,U,V),V.pop()))):r.createElement(d.a.Provider,{value:_},r.createElement(X,Object(o.a)({ref:W},U),V))}));t.a=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(p)},y9eO:function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,o(a("8/g6")).default)(n.default.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email");t.default=r}},[["Bldr",0,1,2,3,4]]]);