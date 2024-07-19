import { defineStore } from "pinia"
import { ref,computed } from 'vue'

export const playListStore = defineStore('playList', () => {
	const playList = ref([])
	const playIndex = ref()
	const playItem = computed(() => {	
		return playList.value.length>0 ? playList.value[playIndex.value] : null
	})
	  
	return{
		playList,
		playItem,
		playIndex
	}
})