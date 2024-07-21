<template>
	<view class="playlist">
		<image src="../../assets/播放.png" mode=""></image>播放全部{{}}
	</view>
	<view class="list">
		<view v-for="(item,index) in list" @click="goPlay(item,index)">
			<view>
				{{index+1}}{{item.name}}
			</view>
			<view class="singer">
				<view v-for="it in item.ar">
					{{it.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	import { playListStore } from "../../store/playList"
	const playList = playListStore()
	const storage = ref(decodeURIComponent(uni.getStorageSync('key')))
	const goPlay = (item,index) => {
		uni.navigateTo({
			url:'/pages/player/player',
			
		})
		playList.playList = list.value
		playList.playIndex = index
	}
	const list = ref([])
	uni.request({
		url: `https://zyxcl.xyz/music/api/recommend/songs?cookie=${storage.value}`,
		// withCredentials	:true,
		success: (res) => {
			console.log(res.data);
			list.value = res.data.data.dailySongs
		}
	})
</script>

<style lang="scss">
	.playlist {
		height: 60rpx;
		border-bottom: 1rpx solid #eee;
		display: flex;
		align-items: center;

		image {
			width: 40rpx;
			height: 40rpx;
			margin: 0 20rpx;
		}
	}

	.list {
		>view {
			border-bottom: 1rpx solid #eee;
			padding: 10rpx;
		}
		.singer{
			display: flex;
			color: #aaa;
			align-items: center;
			view{
				padding-right:10rpx;
				&:not(:first-child){
					padding: 0 10rpx;
				}
				&:not(:last-child){
					border-right: 1rpx solid #aaa;
				}
			}
		}
	}
</style>