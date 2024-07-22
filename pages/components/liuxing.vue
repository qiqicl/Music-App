<template>
	<view class="fashion">
		<view class="top"><view class="line"></view>流行 | 经典 | 民谣 热门榜单</view>
		<view class="con">
			<view class="con-a" v-for="(item,index) in list" :key="item.id">
				<image class="leftTu" :src="item.picUrl" mode=""></image>
				<view class="right">
					<view class="right1">
						<view class="tit">{{item.name}}</view>
						<view class="name">{{item.song.artists[0].name}} {{item.song.artists[1]?.name}}</view>
					</view>
					<view class="right2">
						<view class="left-triangle" @click="goSong(item,index)"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { getFashionApi } from '../../services'
	import {nextTick, ref} from 'vue'
	import { playListStore } from "../../store/playList"
	const list = ref([])
	const playList = playListStore()
	// 调Fashion的接口
	const getFashion = async () =>{
		const res = await getFashionApi()
			list.value = res.data.result
	}
	getFashion()
	const goSong = (item,index) => {
		uni.navigateTo({
			url:"/pages/player/player"
		})
		playList.playList = list.value
		playList.playIndex = index
	}
</script>

<style lang="scss" scoped>
	.fashion {
		width: 100%;
		height: 500rpx;
	}
	.top {
		width: 100%;
		height: 38rpx;
		font-size: 32rpx;
		color: rgb(51, 51, 51);
		display: flex;
	}
	.line {
		width: 8rpx;
		height: 26rpx;
		background: #BA4D47;
		border-radius: 15rpx;
		margin: 8rpx  16rpx 0 20rpx;
	}
	.leftTu {
		width: 80rpx;
		height: 80rpx;
		margin: 20rpx;
	}
	.rightTu {
		width: 80rpx;
		height: 90rpx;
		margin-top: 30rpx;
	}
	.con {
		width: 100%;
		height: 405rpx;
		overflow-x: scroll;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		scrollbar-width: none;
		scrollbar-color: transparent;
	}
	.con-a {
		box-sizing: border-box;
		flex-shrink: 0;
		width: 100vw;
		height: 135rpx;
		display: flex;
		padding: 20rpx;
		padding-bottom:0;
	}
	.left-triangle {
	  width: 0;
	  height: 0;
	  border-top: 24rpx solid transparent; /* 透明边框 */
	  border-left: 24rpx solid black; /* 右侧边框 */
	  border-bottom: 24rpx solid transparent; /* 透明边框 */
	  margin: 50rpx;
	}
	.right {
		width: calc(100% - 80rpx);
		display: flex;
	}
	.right1 {
		flex: 1;
	}
	.tit {
		margin-top: 20rpx;
	}
	.name {
		font-size: 24rpx;
		margin-top: 10rpx;
		color: #999999;
	}
	.right2 {
		float: right;
		display: flex;
	}
</style>