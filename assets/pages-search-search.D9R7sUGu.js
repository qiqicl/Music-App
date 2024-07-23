import{r as a,_ as s}from"./uni-app.es.kLm2IEHr.js";import{o as e,c as l,w as t,d as o,F as n,e as c,b as r,t as u,i as d,a as i,n as g,r as p,x as h,l as m,u as _,I as f,C as v}from"./index-B7mrdbYj.js";import{u as y}from"./searchDate.CENM0vta.js";import{_ as k}from"./plugin-vueexport-helper.BCo6x5W8.js";import{p as D}from"./playList.DkXdr9TN.js";const S=k({__name:"searchList",props:["searchData"],emits:["pushInp"],setup(a,{emit:s}){y();const i=s;return(s,g)=>{const p=d;return e(),l(p,{class:"searchList"},{default:t((()=>[(e(!0),o(n,null,c(a.searchData.result.allMatch,(a=>(e(),l(p,{class:"searchSinger",onClick:s=>{return e=a.keyword,console.log(e),void i("pushInp",e);var e}},{default:t((()=>[r(u(a.keyword),1)])),_:2},1032,["onClick"])))),256))])),_:1})}}},[["__scopeId","data-v-541739b0"]]),C=k({__name:"searchSongSinger",props:["songsData"],setup(a){const s=D(),p=a;return(h,m)=>{const _=d;return e(),l(_,{lass:"songSinger"},{default:t((()=>{var d;return[(e(!0),o(n,null,c(null==(d=a.songsData)?void 0:d.result.songs,((a,o)=>(e(),l(_,{class:"songLast",onClick:a=>((a,e)=>{g({url:"/pages/player/player"}),console.log(p.songsData.result.songs[e]),s.playList=[p.songsData.result.songs[e]],s.playIndex=0})(0,o)},{default:t((()=>[i(_,null,{default:t((()=>[r(u(a.name),1)])),_:2},1024),i(_,null,{default:t((()=>[r(u(a.album.name),1)])),_:2},1024),i(_,null,{default:t((()=>[r(u(a.artists[0].name)+" "+u(a.artists[1]?a.artists[1].name:""),1)])),_:2},1024)])),_:2},1032,["onClick"])))),256)),i(_,{class:"songLast"})]})),_:1})}}},[["__scopeId","data-v-ce20d3cf"]]),I=k({__name:"search",setup(g){const k=y(),D=p(0),I=p(JSON.parse(localStorage.getItem("searchMemory"))||[]);k.getCode();const x=()=>{const a=I.value.findIndex((a=>a.name===k.con));a>-1?(I.value.splice(a,1),x(),localStorage.setItem("searchMemory",JSON.stringify(I.value))):(I.value.unshift({name:k.con}),localStorage.setItem("searchMemory",JSON.stringify(I.value)),console.log(I.value))},w=async a=>{const s=a.code;D.value=2,await k.getSongsData(),"Enter"===s&&x()},L=()=>{D.value=1,k.getSearchData()},j=()=>{I.value=[],localStorage.setItem("searchMemory",JSON.stringify(I.value)),console.log(I.value)},M=()=>{D.value=0,k.con=""},N=async a=>{D.value=2,k.con=a,await k.getSongsData(),x()};return(g,p)=>{var y;const b=a(h("uni-icons"),s),J=f,O=d;return e(),o(n,null,[i(O,{class:"search"},{default:t((()=>[i(b,{type:"search",size:"30",color:"#666"}),i(J,{class:"searchInp",placeholder:"请输入要搜索的歌曲/歌手",modelValue:_(k).con,"onUpdate:modelValue":p[0]||(p[0]=a=>_(k).con=a),onInput:L,onKeydown:w},null,8,["modelValue"]),""!==_(k).con?(e(),l(O,{key:0,class:"close",onClick:M},{default:t((()=>[r("x")])),_:1})):m("",!0),""!==_(k).con?(e(),l(O,{key:1,class:"cancal",onClick:M},{default:t((()=>[r("取消")])),_:1})):m("",!0)])),_:1}),0!==(null==(y=I.value)?void 0:y.length)?(e(),l(O,{key:0,class:"history"},{default:t((()=>[i(O,{class:"searchHistory"},{default:t((()=>[r("搜索历史")])),_:1}),i(b,{type:"trash",size:"25",color:"#666",onClick:j})])),_:1})):m("",!0),i(O,{class:"historyCon"},{default:t((()=>[(e(!0),o(n,null,c(I.value,(a=>(e(),l(O,{class:"text",onClick:s=>(async a=>{D.value=2,k.con=a,await k.getSongsData(),x()})(a.name)},{default:t((()=>[r(u(a.name),1)])),_:2},1032,["onClick"])))),256))])),_:1}),i(O,{class:"history"},{default:t((()=>[i(O,{class:"hotHistory"},{default:t((()=>[r("热门搜索")])),_:1})])),_:1}),i(O,{class:"hotCon"},{default:t((()=>{var a;return[(e(!0),o(n,null,c(null==(a=_(k).data)?void 0:a.data,((a,s)=>(e(),l(O,{class:"hotText"},{default:t((()=>[i(O,{class:v(["hotNum","num"+(s+1)])},{default:t((()=>[r(u(s+1)+".",1)])),_:2},1032,["class"]),i(O,{onClick:s=>N(a.searchWord)},{default:t((()=>[r(u(a.searchWord),1)])),_:2},1032,["onClick"])])),_:2},1024)))),256))]})),_:1}),1===D.value?(e(),l(O,{key:1,class:"sL"},{default:t((()=>[i(S,{searchData:_(k).searchData,onPushInp:N},null,8,["searchData"])])),_:1})):m("",!0),2===D.value?(e(),l(O,{key:2,class:"songs"},{default:t((()=>[i(C,{songsData:_(k).songsData},null,8,["songsData"])])),_:1})):m("",!0)],64)}}},[["__scopeId","data-v-bd0d611d"]]);export{I as default};
