import { defineStore } from "pinia"
import { ref } from 'vue'

export const uesSearchStore = defineStore('searchStore', () => {
	const con = ref("")
	const data = ref()
	const getCode = async() => {
	  	data.value = await getCodeApi()
	}
	const getCodeApi = () =>{
		return new Promise((resolve,reject)=>{
			// const time = new Date()*1
			const xhr = new XMLHttpRequest()      /////search/suggest?keywords=海阔天空&type=mobile  /search/hot  https://zyxcl.xyz/music/api/search/suggest?keywords=%E5%BC%A0&type=mobile
			xhr.open('get','https://zyxcl.xyz/music/api/search/hot')
			xhr.onreadystatechange = function() {
				// 请求完成且响应状态为 200 表示成功
				if (xhr.readyState == 4 && xhr.status == 200) {
				  // 解析服务器响应的 JSON 数据
				  let data = JSON.parse(xhr.responseText);
				  console.log(data)
				  resolve(data)
				}
			  };
			xhr.send()
		})
	}
	
	const searchData = ref()
	const getSearchData = async() => {
	  	searchData.value = await getSearchApi()
	}
	const getSearchApi = () =>{
		return new Promise((resolve,reject)=>{
			// const time = new Date()*1
			const xhr = new XMLHttpRequest()      /////search/suggest?keywords=海阔天空&type=mobile  /search/hot  https://zyxcl.xyz/music/api/search/suggest?keywords=%E5%BC%A0&type=mobile
			xhr.open('get',`https://zyxcl.xyz/music/api/search/suggest?keywords=${con.value}&type=mobile`)
			xhr.onreadystatechange = function() {
				// 请求完成且响应状态为 200 表示成功
				if (xhr.readyState == 4 && xhr.status == 200) {
				  // 解析服务器响应的 JSON 数据
				  let searchData = JSON.parse(xhr.responseText);
				  console.log(searchData)
				  resolve(searchData)
				}
			  };
			xhr.send()
		})
	}
	
	const songsData = ref()
	const getSongsData = async() => {
	  	songsData.value = await getSongsApi()
	}
	const getSongsApi = () =>{
		return new Promise((resolve,reject)=>{
			// const time = new Date()*1
			const xhr = new XMLHttpRequest()      /////search/suggest?keywords=海阔天空&type=mobile  /search/hot  https://zyxcl.xyz/music/api/search/suggest?keywords=%E5%BC%A0&type=mobile
			xhr.open('get',`https://zyxcl.xyz/music/api/search?keywords=${con.value}`)
			xhr.onreadystatechange = function() {
				// 请求完成且响应状态为 200 表示成功
				if (xhr.readyState == 4 && xhr.status == 200) {
				  // 解析服务器响应的 JSON 数据
				  let songsData = JSON.parse(xhr.responseText);
				  console.log(songsData)
				  resolve(songsData)
				}
			  };
			xhr.send()
		})
	}
	  
	  return{
		  con,
		  getCode,
		  data,
		  getSearchData,
		  searchData,
		  songsData,
		  getSongsData
	  }
})