<template>

	<view class="songs">
		<view class="top"><view class="line"></view>推荐歌单</view>
		<view class="boxAll">
			<view class="box" v-for="item in list" :key="item.creativeId">
				<image :src="item.uiElement.image.imageUrl" @click="goDetail(item.creativeId)"></image>
				<view class="text">{{item.uiElement.mainTitle.title}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { getTuijianApi,getAllApi } from '../../services'
const list = ref([])


const getAll = async () => {
	const res = await getAllApi()
	console.log(res.data.data.blocks)
	list.value = res.data.data.blocks[2].creatives
}
// 调tuijian的接口
const getTuijian = async () =>{
	const res = await getTuijianApi()
	// console.log(res);
	// list.value = res.data.playlists
	// console.log(list.value)
}
const goDetail = (id) => {
	console.log(id)
	uni.navigateTo({
		url: `/pages/songlist/songlist?id=${id}`
	});
}
getAll()
getTuijian()
	
</script>

<style lang="scss" scoped>
	.songs {
		width: 100%;
		height: 450rpx;
		margin-top: 20rpx;
		overflow-x: auto;
		overflow-y: hidden;
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
	.boxAll {
		width: 100%;
		height: 450rpx;
		display: flex;
		overflow-x: scroll;
		scrollbar-width: none;
		scrollbar-color: transparent;
	}
	.box {
		width: 320rpx;
		height: 400rpx;
		padding: 10rpx;
		image {
			width: 300rpx;
			height: 300rpx;
			border-radius: 20rpx;
			margin-left: 10rpx;
		}
	}
	.text {
		width: 100%;
		height: 30rpx;
		font-size: 28rpx;
		font-weight: 500;
	}
	
</style>