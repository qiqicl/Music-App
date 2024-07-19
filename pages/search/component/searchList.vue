<template>
	<view class="searchList">
		<view class="searchSinger" v-for="item in searchData.result.allMatch">{{item.keyword}}</view>
	</view>
</template>

<script setup>
	import {ref} from "vue"
	const props = defineProps(['searchData'])
	// const searchList = ref(props.searchData.value)
	// console.log(searchList.value)
</script>

<style  lang="scss" scoped>
	.searchList{
		padding: 20rpx;
	}
	.searchSinger{
		width: 100%;
		height: 60rpx;
		padding: 0 40rpx;
		border-bottom: 4rpx dashed #ccc;
	}
</style>