import {
	defineStore
} from "pinia"
import {
	ref,
	computed,
	watch
} from 'vue'

export const playListStore = defineStore('playList', () => {
	const playList = ref([])
	const playIndex = ref()
	const playItem = computed(() => {
		return playList.value.length > 0 ? playList.value[playIndex.value] : null
	})
	const playSongs = ref([])
	const playUrl = ref('')
	let innerAudioContext = null
	const currentTime = ref(0)
	const playMusic = () => {
		innerAudioContext = uni.createInnerAudioContext();
		innerAudioContext.autoplay = true;
		innerAudioContext.src = playUrl.value
		innerAudioContext.loop = true
		// // innerAudioContext.play()
		innerAudioContext.currentTime = currentTime.value
		innerAudioContext.onPlay(() => {
			console.log('开始播放');
		});
		innerAudioContext.onError((res) => {
			console.log(res.errMsg);
			console.log(res.errCode);
		});
	}
	const currentChange = () => {
		innerAudioContext.currentTime = currentTime.value
	}
	const destroyMusic = () => {
		innerAudioContext?.pause();
		innerAudioContext?.destroy()
		innerAudioContext = null
	}
	const pauseFun = () => {
		innerAudioContext?.pause();
	}
	const playFun = () => {
		innerAudioContext?.play();
	}
	const add = () => {
		playSongs.value.push(playItem.value)
	}
	return {
		playList,
		playItem,
		playIndex,
		playUrl,
		playSongs,
		playMusic,
		destroyMusic,
		pauseFun,
		playFun,
		add,
		currentTime,
		currentChange
	}
})