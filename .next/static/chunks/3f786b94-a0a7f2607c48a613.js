"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[269],{149:function(t,e,i){i.d(e,{iT:function(){return k},ko:function(){return v},s5:function(){return y}});var r=i(5862),a=i(7058),s=i(2147);let o="#4fa94d",n={"aria-busy":!0,role:"progressbar"},l=(0,s.ZP).div`
  display: ${t=>t.$visible?"flex":"none"};
`,d="http://www.w3.org/2000/svg",h=(0,s.F4)`
12.5% {
  stroke-dasharray: ${33.98873199462888}px, ${242.776657104492}px;
  stroke-dashoffset: -${26.70543228149412}px;
}
43.75% {
  stroke-dasharray: ${84.97182998657219}px, ${242.776657104492}px;
  stroke-dashoffset: -${84.97182998657219}px;
}
100% {
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492}px;
  stroke-dashoffset: -${240.34889053344708}px;
}
`;(0,s.ZP).path`
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492};
  stroke-dashoffset: 0;
  animation: ${h} ${1.6}s linear infinite;
`;let c=t=>["M"+t+" 0c0-9.94-8.06",t,t,t].join("-"),p=(t,e,i)=>{let r=Math.max(t,e),a=-i-r/2+1,s=2*i+r;return[a,a,s,s].join(" ")},k=({height:t=80,width:e=80,color:i=o,secondaryColor:a=o,ariaLabel:s="oval-loading",wrapperStyle:d,wrapperClass:h,visible:k=!0,strokeWidth:x=2,strokeWidthSecondary:u})=>(0,r.jsx)(l,{style:d,$visible:k,className:h,"data-testid":"oval-loading","aria-label":s,...n,children:(0,r.jsx)("svg",{width:e,height:t,viewBox:p(Number(x),Number(u||x),20),xmlns:"http://www.w3.org/2000/svg",stroke:i,"data-testid":"oval-svg",children:(0,r.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,r.jsxs)("g",{transform:"translate(1 1)",strokeWidth:Number(u||x),"data-testid":"oval-secondary-group",children:[(0,r.jsx)("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:20,stroke:a,strokeWidth:x}),(0,r.jsx)("path",{d:c(20),children:(0,r.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"})})]})})})}),x=[0,30,60,90,120,150,180,210,240,270,300,330],u=(0,s.F4)`
to {
   transform: rotate(360deg);
 }
`,f=(0,s.ZP).svg`
  animation: ${u} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,g=(0,s.ZP).polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`,y=({strokeColor:t=o,strokeWidth:e="5",animationDuration:i="0.75",width:s="96",visible:l=!0,ariaLabel:h="rotating-lines-loading"})=>{let c=(0,a.useCallback)(()=>x.map(t=>(0,r.jsx)(g,{points:"24,12 24,4",width:e,transform:`rotate(${t}, 24, 24)`},t)),[e]);return l?(0,r.jsx)(f,{xmlns:d,viewBox:"0 0 48 48",width:s,stroke:t,speed:i,"data-testid":"rotating-lines-svg","aria-label":h,...n,children:c()}):null},b=(0,s.F4)`
to {
   stroke-dashoffset: 136;
 }
`;(0,s.ZP).polygon`
  stroke-dasharray: 17;
  animation: ${b} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,(0,s.ZP).svg`
  transform-origin: 50% 65%;
`;let v=({visible:t=!0,height:e="80",width:i="80",wrapperClass:a="",wrapperStyle:s={},ariaLabel:o="progress-bar-loading",borderColor:l="#F4442E",barColor:h="#51E5FF"})=>t?(0,r.jsxs)("svg",{width:i,height:e,xmlns:d,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:a,style:s,"aria-label":o,"data-testid":"progress-bar-svg",...n,children:[(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{x:"0",y:"0",width:"100",height:"100",id:"lds-progress-cpid-5009611b8a418",children:(0,r.jsxs)("rect",{x:"0",y:"0",width:"66.6667",height:"100",children:[(0,r.jsx)("animate",{attributeName:"width",calcMode:"linear",values:"0;100;100",keyTimes:"0;0.5;1",dur:"1",begin:"0s",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"x",calcMode:"linear",values:"0;0;100",keyTimes:"0;0.5;1",dur:"1",begin:"0s",repeatCount:"indefinite"})]})})}),(0,r.jsx)("path",{fill:"none",strokeWidth:"2.7928",d:"M82,63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z",stroke:l}),(0,r.jsx)("path",{d:"M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z",fill:h,clipPath:"url(#lds-progress-cpid-5009611b8a418)"})]}):null}}]);