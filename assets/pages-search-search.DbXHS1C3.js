import{r as a,_ as s}from"./uni-app.es.5UAtLl_S.js";import{o as e,c as l,w as t,d as o,F as n,e as c,b as r,t as u,i,a as d,n as g,r as p,x as h,l as _,u as m,I as f,C as y}from"./index-Bpi0htza.js";import{u as v}from"./searchDate._DOUCFIL.js";import{_ as k}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{p as D}from"./playList.DTC5jBMx.js";const S=k({__name:"searchList",props:["searchData"],emits:["pushInp"],setup(a,{emit:s}){v();const d=s;return(s,g)=>{const p=i;return e(),l(p,{class:"searchList"},{default:t((()=>[(e(!0),o(n,null,c(a.searchData.result.allMatch,(a=>(e(),l(p,{class:"searchSinger",onClick:s=>{return e=a.keyword,console.log(e),void d("pushInp",e);var e}},{default:t((()=>[r(u(a.keyword),1)])),_:2},1032,["onClick"])))),256))])),_:1})}}},[["__scopeId","data-v-541739b0"]]),C=k({__name:"searchSongSinger",props:["songsData"],setup(a){const s=D(),p=a;return(h,_)=>{const m=i;return e(),l(m,{lass:"songSinger"},{default:t((()=>[(e(!0),o(n,null,c(a.songsData.result.songs,((a,o)=>(e(),l(m,{class:"songLast",onClick:a=>((a,e)=>{g({url:"/pages/player/player"}),console.log(p.songsData.result.songs),s.playList=p.songsData.result.songs,s.playIndex=e})(0,o)},{default:t((()=>[d(m,null,{default:t((()=>[r(u(a.name),1)])),_:2},1024),d(m,null,{default:t((()=>[r(u(a.album.name),1)])),_:2},1024),d(m,null,{default:t((()=>[r(u(a.artists[0].name)+" "+u(a.artists[1]?a.artists[1].name:""),1)])),_:2},1024)])),_:2},1032,["onClick"])))),256)),d(m,{class:"songLast"})])),_:1})}}},[["__scopeId","data-v-36eb82b5"]]),I=k({__name:"search",setup(g){const k=v(),D=p(0),I=p(JSON.parse(localStorage.getItem("searchMemory")));k.getCode();const x=()=>{const a=I.value.findIndex((a=>a.name===k.con));a>-1?(I.value.splice(a,1),x(),localStorage.setItem("searchMemory",JSON.stringify(I.value))):(I.value.unshift({name:k.con}),localStorage.setItem("searchMemory",JSON.stringify(I.value)),console.log(I.value))},w=async a=>{const s=a.code;D.value=2,await k.getSongsData(),"Enter"===s&&x()},L=()=>{D.value=1,k.getSearchData()},b=()=>{I.value=[],localStorage.setItem("searchMemory",JSON.stringify(I.value)),console.log(I.value)},j=()=>{D.value=0,k.con=""},M=async a=>{D.value=2,k.con=a,await k.getSongsData(),x()};return(g,p)=>{var v;const N=a(h("uni-icons"),s),J=f,O=i;return e(),o(n,null,[d(O,{class:"search"},{default:t((()=>[d(N,{type:"search",size:"30",color:"#666"}),d(J,{class:"searchInp",placeholder:"请输入要搜索的歌曲/歌手",modelValue:m(k).con,"onUpdate:modelValue":p[0]||(p[0]=a=>m(k).con=a),onInput:L,onKeydown:w},null,8,["modelValue"]),""!==m(k).con?(e(),l(O,{key:0,class:"close",onClick:j},{default:t((()=>[r("x")])),_:1})):_("",!0),""!==m(k).con?(e(),l(O,{key:1,class:"cancal",onClick:j},{default:t((()=>[r("取消")])),_:1})):_("",!0)])),_:1}),0!==(null==(v=I.value)?void 0:v.length)?(e(),l(O,{key:0,class:"history"},{default:t((()=>[d(O,{class:"searchHistory"},{default:t((()=>[r("搜索历史")])),_:1}),d(N,{type:"trash",size:"25",color:"#666",onClick:b})])),_:1})):_("",!0),d(O,{class:"historyCon"},{default:t((()=>[(e(!0),o(n,null,c(I.value,(a=>(e(),l(O,{class:"text",onClick:s=>(async a=>{D.value=2,k.con=a,await k.getSongsData(),x()})(a.name)},{default:t((()=>[r(u(a.name),1)])),_:2},1032,["onClick"])))),256))])),_:1}),d(O,{class:"history"},{default:t((()=>[d(O,{class:"hotHistory"},{default:t((()=>[r("热门搜索")])),_:1})])),_:1}),d(O,{class:"hotCon"},{default:t((()=>{var a;return[(e(!0),o(n,null,c(null==(a=m(k).data)?void 0:a.data,((a,s)=>(e(),l(O,{class:"hotText"},{default:t((()=>[d(O,{class:y(["hotNum","num"+(s+1)])},{default:t((()=>[r(u(s+1)+".",1)])),_:2},1032,["class"]),d(O,{onClick:s=>M(a.searchWord)},{default:t((()=>[r(u(a.searchWord),1)])),_:2},1032,["onClick"])])),_:2},1024)))),256))]})),_:1}),1===D.value?(e(),l(O,{key:1,class:"sL"},{default:t((()=>[d(S,{searchData:m(k).searchData,onPushInp:M},null,8,["searchData"])])),_:1})):_("",!0),2===D.value?(e(),l(O,{key:2,class:"songs"},{default:t((()=>[d(C,{songsData:m(k).songsData},null,8,["songsData"])])),_:1})):_("",!0)],64)}}},[["__scopeId","data-v-7a91c440"]]);export{I as default};