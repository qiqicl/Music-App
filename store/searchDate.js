import { defineStore } from "pinia"
import { ref } from 'vue'

export const useSearchStore = defineStore('searchStore', () => {
	const con = ref("")
	const data = ref()
	const getCode = async() => {
	  	data.value = await getCodeApi()
	}
	const getCodeApi = () =>{
		return new Promise((resolve,reject)=>{
			const xhr = new XMLHttpRequest()
			xhr.open('get','https://zyxcl.xyz/music/api/search/hot/detail')
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
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
			const xhr = new XMLHttpRequest() 
			xhr.open('get',`https://zyxcl.xyz/music/api/search/suggest?keywords=${con.value}&type=mobile`)
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
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
			const xhr = new XMLHttpRequest()
			xhr.open('get',`https://zyxcl.xyz/music/api/search?keywords=${con.value}`)
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
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