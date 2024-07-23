<template>
	<view class="player">
		<view class="section" :style="backImg">
		</view>
		<view class="disc">
			<view class="song">
				<view class="pole">
					<image src="../../assets/needle-ab-63009d3f.png" mode=""></image>
				</view>
				<view class="vinyl">
					<image src="../../assets/disc-23c9ad09.png" mode=""></image>
					<view class="songImg">
						<image :src="play.playItem.al?.picUrl || play.playItem.album.artist.img1v1Url" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view>
			<view class="range">
				{{curTime}}
				<!-- <input type="range" :value="count" @change="change" /> -->
				<slider :value="count" @change="change" activeColor="#FFCC33" backgroundColor="#000000" block-color="#8A6DE9" block-size="20" />
				{{timeRange}}
			</view>
			<view class="audio">
				<view>
					<image src="../../assets/zuo.png" mode=""></image>
				</view>
				<view @click="isPlay">
					<image src="../../assets/zanting.png" mode="" v-if="run"></image>
					<image src="../../assets/icon_play.png" mode="" v-else></image>
				</view>
				<image src="../../assets/you.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script setup>
	// /playlist/cover/update?id=3143833470&imgSize=200
	import {
		playListStore
	} from "../../store/playList"
	import {
		ref,
		watch,
		computed
	} from "vue"
	import {
		onLoad
	} from "@dcloudio/uni-app"
	const music = ref()
	const run = ref(true)
	const timeRange = ref(0)
	const storage = ref(decodeURIComponent(uni.getStorageSync('key')))
	const play = playListStore()
	const isPlay = () => {
		run.value = !run.value
	}
	const allTime = ref()
	const time = ref()
	const count = ref(0)
	const cur = ref(0)
	const curTime = computed(() => {
		return parseInt(cur.value/60) + ":" + (cur.value%60>=10?cur.value%60:'0'+cur.value%60)
	})
	watch(run, () => {
		if (run.value) {
			time.value = setInterval(()=>{
				cur.value++
				count.value = 100/(allTime.value)*cur.value
			},1000)
			play.playFun()
		} else {
			clearInterval(time.value)
			play.pauseFun()
		}
	})
	watch(cur,()=>{
		play.currentTime = cur.value
		// console.log(play.currentTime)
		if(cur.value === parseInt(allTime.value)){
			clearInterval(time.value)
			cur.value = 0
			time.value = setInterval(()=>{
				cur.value++
				count.value = 100/(allTime.value)*cur.value
			},1000)
		}
	})
	const change = (e) => {
		play.currentTime = Math.ceil((parseInt(allTime.value)*e.detail.value/100))
		cur.value = play.currentTime
		console.log(play.currentTime)
		play.currentChange()
	}
	// console.log(play.playFun)
	console.log(play.playItem)
	console.log(play.playIndex)
	console.log(play.playSongs)
	// play.playSongs.push(play.playItem)
	const backImg = ref({
		backgroundImage: `url(${play.playItem.al?.picUrl || play.playItem.album.artist.img1v1Url})`
	})
	uni.setNavigationBarTitle({
		title: play.playItem.name,
		success: () => {
			console.log('标题设置成功');
		},
	})
	
	// /song/url/v1?id=33894312&level=standard
	const getSong = () => {
		uni.request({
			url: `https://zyxcl.xyz/music/api/song/url/v1?id=${play.playItem.id}&level=standard&cookie=${storage}`,
			success: (res) => {
				console.log(res.data);
				music.value = res.data.data[0].url
				allTime.value = res.data.data[0].time/1000
				timeRange.value = parseInt(res.data.data[0].time/1000/60) + ":" + ((res.data.data[0].time/1000%60).toString().split(".")[0]>=10?(res.data.data[0].time/1000%60).toString().split(".")[0]:'0'+(res.data.data[0].time/1000%60).toString().split(".")[0])
				console.log(music.value)
				time.value = setInterval(()=>{
					cur.value++
					count.value = 100/(allTime.value)*cur.value
				},1000)
				if (play.playUrl !== music.value) {
					play.playUrl = music.value
					play.destroyMusic()
					play.playMusic()
					play.add()
				}

				console.log(play.playUrl, music.value)
			}
		});
	}
	// const getSongApi = () => {
	// 	// return new Promise((resolve, reject) => {
	// 	// 	const time = new Date() * 1
	// 	// 	const xhr = new XMLHttpRequest()
	// 	// 	xhr.open('get', `https://zyxcl.xyz/music/api/playlist/cover/update?id=3143833470&imgSize=200`)
	// 	// 	xhr.onreadystatechange = () => {
	// 	// 		// 请求完成且响应状态为 200 表示成功
	// 	// 		if (xhr.readyState == 4 && xhr.status == 200) {
	// 	// 			// 解析服务器响应的 JSON 数据
	// 	// 			let data = JSON.parse(xhr.responseText);
	// 	// 			resolve(data)
	// 	// 			// formData.value.code = data
	// 	// 		}
	// 	// 	};
	// 	// 	xhr.send()
	// 	// })
	// }
	getSong()
</script>

<style lang="scss">
	.player {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
		position: relative;
	}

	.songImg {
		width: 400rpx;
		height: 400rpx;
		top: 420rpx;
		left: 180rpx;
		position: absolute;
		overflow: hidden;
		border-radius: 50%;

		image {
			width: 400rpx;
			height: 400rpx;
		}
	}

	.disc {
		position: absolute;
		z-index: 3;

		.pole {
			>image {
				position: absolute;
				top: 100rpx;
				left: 300rpx;
				width: 300rpx;
				z-index: 2;
			}
		}

		.vinyl {
			position: relative;

			>image {
				user-select: none;
				display: block;
				position: absolute;
				width: 640rpx;
				height: 640rpx;
				top: 300rpx;
				left: 60rpx;
			}
		}
	}

	.section {
		flex: 1;
		user-select: none;
		font-size: 16px;
		color: var(--UI-FG-0);
		margin: 0;
		overflow: hidden;
		-webkit-tap-highlight-color: transparent;
		display: block;
		position: relative;
		width: 100%;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		transform: scale(1.5);
		filter: blur(30px);
	}

	.audio {
		display: flex;
		height: 60rpx;
		width: 600rpx;
		position: absolute;
		justify-content: space-between;
		bottom: 100rpx;
		left: calc(50% - 300rpx);

		image {
			width: 60rpx;
			height: 60rpx;
		}
	}

	.range {
		position: absolute;
		bottom: 200rpx;
		justify-content: space-between;
		display: flex;
		left: calc(50% - 300rpx);
		width: 600rpx;
		color: white;
		align-items: center;
		slider{
			flex: 1;
		}
	}
</style>