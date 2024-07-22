<template>
	<view class="player">
		<view class="section"
			:style="backImg">
		</view>
		<view class="disc">
			<view class="song">
				<view class="pole">
					<image src="../../assets/needle-ab-63009d3f.png" mode=""></image>
				</view>
				<view class="vinyl">
					<image src="../../assets/disc-23c9ad09.png" mode=""></image>
					<view class="songImg">
						<image :src="play.playItem.al.picUrl" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view>
			<view class="audio">
				
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
		ref
	} from "vue"
	const storage = ref(decodeURIComponent(uni.getStorageSync('key')))
	const play = playListStore()
	console.log(play.playList)
	console.log(play.playItem)
	console.log(play.playIndex)
	const backImg = ref({
		backgroundImage:`url(${play.playItem.al.picUrl})`
	})
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	innerAudioContext.src = '';
	innerAudioContext.onPlay(() => {
	  console.log('开始播放');
	});
	if (innerAudioContext) {
	  try {
	    innerAudioContext.pause();
	    innerAudioContext.destroy()
	    innerAudioContext = null
	  } catch (e) {
	    //TODO handle the exception
	  }
	}
	uni.setNavigationBarTitle({
		title: play.playItem.name,
		success: () => {
			console.log('标题设置成功');
		},
	})
	// /song/url/v1?id=33894312&level=standard
	const getSong= () => {
		uni.request({
		    url: `https://zyxcl.xyz/music/api/song/url/v1?id=${play.playItem.id}&level=standard`,
		    success: (res) => {
		        console.log(res.data);
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
	.songImg{
		width: 400rpx;
		height: 400rpx;
		top: 420rpx;
		left: 180rpx;
		position: absolute;
		overflow: hidden;
		border-radius: 50%;
		image{
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
</style>