<template>
	<view lass="songSinger">
		<!-- {{searchStore.searchData.result.songs}} -->
		<view class="songLast" v-for="(item,index) in songsData.result.songs" @click="goPlay(item,index)">
			<view>{{item.name}}</view>
			<view>{{item.album.name}}</view>
			<view>{{item.artists[0].name}} {{item.artists[1]? item.artists[1].name : ""}}</view>
		</view>
		<view class="songLast"></view>
	</view>
</template>

<script setup>
	import { playListStore } from "../../store/playList"
	import {defineProps, defineEmits} from "vue"
	const playList = playListStore()
	const props = defineProps(['songsData'])
	const goPlay = (item,index) => {
		uni.navigateTo({
			url:'/pages/player/player'
		})
		console.log(props.songsData.result.songs)
		playList.playList = props.songsData.result.songs
		playList.playIndex = index
	}
</script>

<style lang="scss" scoped>
	.songSinger{
		padding: 20rpx;
	}
	.songLast{
		width: 100%;
		height: 150rpx;
		padding: 0 40rpx;
		border-bottom: 4rpx dashed #ccc;
	}
</style>