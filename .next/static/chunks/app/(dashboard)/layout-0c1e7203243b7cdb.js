(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{2196:function(e,n,t){Promise.resolve().then(t.bind(t,3180)),Promise.resolve().then(t.bind(t,3613)),Promise.resolve().then(t.bind(t,6545)),Promise.resolve().then(t.bind(t,3749)),Promise.resolve().then(t.bind(t,5508)),Promise.resolve().then(t.bind(t,7074)),Promise.resolve().then(t.bind(t,9791)),Promise.resolve().then(t.bind(t,5808))},3613:function(e,n,t){"use strict";var i=t(7437),o=t(5656),s=t(8024),r=t(3520);let a=(0,s.ZP)("div")(e=>{let{theme:n}=e;return{zIndex:"var(--mui-zIndex-fab)",position:"fixed",insetInlineEnd:n.spacing(10),insetBlockEnd:n.spacing(14)}});n.default=e=>{let{children:n,className:t}=e,s=(0,r.Z)({threshold:400,disableHysteresis:!0});return(0,i.jsx)(o.Z,{in:s,children:(0,i.jsx)(a,{className:t,onClick:()=>{let e=document.querySelector("body");e&&e.scrollIntoView({behavior:"smooth"})},role:"presentation",children:n})})}},3749:function(e,n,t){"use strict";t.d(n,{default:function(){return m}});var i=t(7437),o=t(6800),s=t.n(o),r=t(6463),a=t(1634),c=t(8646),l=t(8493),u=t(3211);function d(){let e=(0,c._)(["\n  padding: ","px;\n  ","\n\n  &:has(.",") {\n    display: flex;\n    overflow: hidden;\n  }\n"]);return d=function(){return e},e}let h=l.Z.main(d(),u.Z.layoutPadding,e=>{let{isContentCompact:n}=e;return n&&"\n    margin-inline: auto;\n    max-inline-size: ".concat(u.Z.compactContentWidth,"px;\n  ")},a.kV.contentHeightFixed);var m=e=>{let{children:n}=e,{settings:t}=(0,r.r)(),o="compact"===t.contentWidth,c="wide"===t.contentWidth;return(0,i.jsx)(h,{isContentCompact:o,className:s()(a.jU.content,"flex-auto",{["".concat(a.jU.contentCompact," is-full")]:o,[a.jU.contentWide]:c}),children:n})}},5508:function(e,n,t){"use strict";var i=t(8646),o=t(8493),s=t(1634);function r(){let e=(0,i._)(["\n  &:has(.",">.",") {\n    max-block-size: 100dvh;\n  }\n"]);return r=function(){return e},e}let a=o.Z.div(r(),s.jU.content,s.kV.contentHeightFixed);n.default=a},7074:function(e,n,t){"use strict";var i=t(7437),o=t(1444),s=t(4892),r=t(511),a=t(1134);n.default=()=>{let e=(0,o.I0)(),n=(0,o.v9)(e=>e.menu.menuState),t=n=>{e((0,a.eu)(n))};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"phone-menu not-for-screen",children:[(0,i.jsx)(s.Z,{className:"phone-menu-btn",onClick:()=>t("about"),children:(0,i.jsx)(r.Z,{variant:"h5",className:"about"==n?"active":"not-active",children:"About"})}),(0,i.jsx)(s.Z,{className:"phone-menu-btn",onClick:()=>t("resume"),children:(0,i.jsx)(r.Z,{variant:"h5",className:"resume"==n?"active":"not-active",children:"Resume"})}),(0,i.jsx)(s.Z,{className:"phone-menu-btn",onClick:()=>t("portfolio"),children:(0,i.jsx)(r.Z,{variant:"h5",className:"portfolio"==n?"active":"not-active",children:"Portfolio"})}),(0,i.jsx)(s.Z,{className:"phone-menu-btn",onClick:()=>t("jobs"),children:(0,i.jsx)(r.Z,{variant:"h5",className:"jobs"==n?"active":"not-active",children:"Jobs"})})]})})}},1134:function(e,n,t){"use strict";t.d(n,{CK:function(){return s},eu:function(){return o}});let i=(0,t(1116).oM)({name:"menu",initialState:{menuState:"about"},reducers:{setMenuState:(e,n)=>{e.menuState=n.payload}}}),{setMenuState:o}=i.actions,s=i.reducer}},function(e){e.O(0,[132,808,365,238,320,52,853,160,58,971,23,744],function(){return e(e.s=2196)}),_N_E=e.O()}]);