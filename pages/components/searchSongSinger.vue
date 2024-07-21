<template>
	<view lass="songSinger">
		<!-- {{searchStore.searchData.result.songs}} -->
		<view class="songLast" v-for="item in songsData.result.songs">
			<view>{{item.name}}</view>
			<view>{{item.album.name}}</view>
			<view>{{item.artists[0].name}} {{item.artists[1]? item.artists[1].name : ""}}</view>
		</view>
		<view class="songLast"></view>
	</view>
</template>

<script setup>
	import {defineProps, defineEmits} from "vue"
	const props = defineProps(['songsData'])
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