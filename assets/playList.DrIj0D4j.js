import{g as l,r as a,U as e,X as o}from"./index-Bbf9cxZ9.js";const s=l("playList",(()=>{const l=a([]),s=a(),u=e((()=>l.value.length>0?l.value[s.value]:null)),n=a([]),p=a("");let r=null;return{playList:l,playItem:u,playIndex:s,playUrl:p,playSongs:n,playMusic:()=>{r=o(),r.autoplay=!0,r.src=p.value,r.loop=!0,r.onPlay((()=>{console.log("开始播放")})),r.onError((l=>{console.log(l.errMsg),console.log(l.errCode)}))},destroyMusic:()=>{null==r||r.pause(),null==r||r.destroy(),r=null},pauseFun:()=>{null==r||r.pause()},playFun:()=>{null==r||r.play()},add:()=>{n.value.push(u.value)}}}));export{s as p};