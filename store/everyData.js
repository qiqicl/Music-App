import { defineStore } from "pinia"
import { ref } from 'vue'
import { getAllApi} from '../services'
export const useEveryStore = defineStore('everyStore', () => {
	    const all = ref([])
		const banners = ref([])
		const everyDay = ref([])
		const songs = ref([])
		const getAll = async () => {
			const res = await getAllApi()
			all.value = res.data.data.blocks
			// 将数据存入本地存储 
			localStorage.setItem('all', JSON.stringify(all.value))
			// 获取本地存储数据 
			const allData = ref(JSON.parse(localStorage.getItem('all')))  
			// console.log(allData.value)
			//banners
			banners.value=allData.value[0].extInfo.banners
			// console.log(banners.value)
			//everyDay
			everyDay.value=allData.value[1].creatives[0].resources
			// console.log(everyDay.value)
			//songs
			songs.value=allData.value[3].creatives
		}

		
		
		
	  return{
		  banners,
		  everyDay,
		  getAll
	}
})