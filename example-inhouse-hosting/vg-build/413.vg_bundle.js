"use strict";(self.webpackChunkcustom_vf_nextjs=self.webpackChunkcustom_vf_nextjs||[]).push([[413],{1413:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var a=t(5861),s=t(885),o=t(4687),u=t.n(o),r=t(8676),c=t(1148),l=t(7294),i=t(5392),d=t(3260),f=t(381),v=t.n(f),g=l.createElement;const m=function(e){var n=(0,r.useRuntime)(),t=n.confirmedBucket,o=n.runtime,f=l.useState(""),m=(0,s.Z)(f,2),p=m[0],x=m[1],I=l.useState(!1),k=(0,s.Z)(I,2),b=k[0],y=k[1];return l.useEffect((function(){if(p)y(!0);else{var n=new WebSocket("".concat((0,c.IO)({region:"voiceglow-eu"===t?"eu":"na"}),"/flowise")),s="";n.onopen=function(){var c;n.send(JSON.stringify({agentId:o.variables.ID,convoId:o.userID,flowisePayload:null===(c=e.message)||void 0===c||null===(c=c.item)||void 0===c?void 0:c.payload,bucket:t})),n.onmessage=function(e){var n,t=JSON.parse(e.data);"chunk"===t.type&&null!=t&&null!==(n=t.payload)&&void 0!==n&&n.chunk&&(x((function(e){return e+t.payload.chunk})),s+=t.payload.chunk)},n.onclose=(0,a.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,(0,r.handlePushMessageNoInteract)({agentID:o.variables.ID,userID:o.userID,action:null,origin:"web-chat",messages:[{type:"text",item:{payload:{message:s}},ts:v()().unix(),from:"bot",mask:{turnIndex:e.turnIndex,messageIndex:e.messageIndex}}],bucket:t,vf_variables:{flowise_response:s}});case 3:case"end":return n.stop()}}),n)})))}}}),[]),p&&!b?g(d.Z,{className:" vg-p-6 vg-rounded-tl-[25px] vg-rounded-bl-[25px] vg-rounded-tr-[25px] vg-rounded-br-[5px] vg-justify-self-end vg-message-text-bot",item:{type:"text",payload:{message:""},ts:v()().unix(),from:"bot"},text:p,key:"flowise_res_".concat(e.turnIndex,"_").concat(e.messageIndex)}):b?null:g(i.default,{variant:"no-avatar"})}}}]);