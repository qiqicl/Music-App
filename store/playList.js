import {
	defineStore
} from "pinia"
import {
	ref,
	computed
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
	const playMusic = () => {
		innerAudioContext = uni.createInnerAudioContext();
		innerAudioContext.autoplay = true;
		innerAudioContext.src = playUrl.value
		innerAudioContext.loop = true
		// // innerAudioContext.play()
		innerAudioContext.onPlay(() => {
			console.log('开始播放');
		});
		innerAudioContext.onError((res) => {
			console.log(res.errMsg);
			console.log(res.errCode);
		});
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
		add
	}
})