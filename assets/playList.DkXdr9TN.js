import{g as l,r as e,U as a,Y as u}from"./index-B7mrdbYj.js";const n=l("playList",(()=>{const l=e([]),n=e(),o=a((()=>l.value.length>0?l.value[n.value]:null)),r=e([]),s=e("");let p=null;const t=e(0);return{playList:l,playItem:o,playIndex:n,playUrl:s,playSongs:r,playMusic:()=>{p=u(),p.autoplay=!0,p.src=s.value,p.loop=!0,p.currentTime=t.value,p.onPlay((()=>{console.log("开始播放")})),p.onError((l=>{console.log(l.errMsg),console.log(l.errCode)}))},destroyMusic:()=>{null==p||p.pause(),null==p||p.destroy(),p=null},pauseFun:()=>{null==p||p.pause()},playFun:()=>{null==p||p.play()},add:()=>{r.value.push(o.value)},currentTime:t,currentChange:()=>{p.currentTime=t.value}}}));export{n as p};
