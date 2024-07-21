import { defineStore } from "pinia"
import { ref } from 'vue'
import { getAllApi} from '../services'
export const useEveryStore = defineStore('everyStore', () => {
	    const all = ref([])
		const banners = ref([])
		const everyDay = ref([])
		const getAll = async () => {
			const res = await getAllApi()
			console.log(res);
			all.value = res.data.data.blocks
			// console.log(all.value[0].extInfo.banners)
			banners.value=all.value[0].extInfo.banners
			console.log(banners.value)
			everyDay.value=all.value[1].creatives[0].resources
			console.log(everyDay.value)
		}
		
	  return{
		  banners,
		  everyDay,
		  getAll
	}
})