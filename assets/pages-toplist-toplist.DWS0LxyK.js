import{r as a,c as l,w as s,j as e,i as t,o as c,a as d,b as o,d as u,e as _,F as r,n,t as i,f,p}from"./index-1jdLL0FB.js";import{c as m}from"./index.FZrEkoxb.js";import{_ as g}from"./_plugin-vue_export-helper.BCo6x5W8.js";const v=g({__name:"toplist",setup(g){const v=a([]),h=async()=>{let a=await m();return console.log(a),a.data.list};(async()=>{await e(),v.value=await h(),console.log(v.value)})();const k=a((a=>{console.log(a),n({url:`/pages/songlist/songlist?id=${a}`})}));return(a,e)=>{const n=t,m=f,g=p;return c(),l(n,null,{default:s((()=>[d(n,{class:"topList"},{default:s((()=>[d(n,{class:"topTitle"},{default:s((()=>[o("官方榜")])),_:1}),d(n,{class:"top"},{default:s((()=>[(c(!0),u(r,null,_(v.value.filter(((a,l)=>l<=3)),(a=>(c(),l(n,{class:"topList_item",key:a.name,onClick:l=>k.value(a.id)},{default:s((()=>[d(n,{class:"card_header"},{default:s((()=>[d(n,{class:"card_header_left"},{default:s((()=>[d(n,{class:"card_header_left_img"},{default:s((()=>[d(m,{src:a.coverImgUrl,mode:""},null,8,["src"])])),_:2},1024),d(n,{class:"card_header_left_content"},{default:s((()=>[d(g,{class:"topList_name"},{default:s((()=>[o(i(a.name),1)])),_:2},1024),d(g,{class:"topList_count"},{default:s((()=>[o(i(a.playCount),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),d(n,{class:"card_header_right"},{default:s((()=>[o(i(a.updateFrequency),1)])),_:2},1024)])),_:2},1024),d(n,{class:"card_list"},{default:s((()=>[(c(!0),u(r,null,_(a.tracks,((a,e)=>(c(),l(n,{class:"card_list_item"},{default:s((()=>[d(g,null,{default:s((()=>[o(i(e+1),1)])),_:2},1024),d(g,null,{default:s((()=>[o(i(a.first),1)])),_:2},1024),o(" -"+i(a.second),1)])),_:2},1024)))),256))])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}),d(n,{class:"topTitle"},{default:s((()=>[o("其他榜单")])),_:1}),d(n,{class:"else"},{default:s((()=>[(c(!0),u(r,null,_(v.value.filter(((a,l)=>l>3)),(a=>(c(),l(n,{class:"else_img",onClick:l=>k.value(a.id)},{default:s((()=>[d(m,{src:a.coverImgUrl,mode:""},null,8,["src"])])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-45601948"]]);export{v as default};
