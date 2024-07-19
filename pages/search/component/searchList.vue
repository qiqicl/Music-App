<template>
	<view class="searchList">
		<view class="searchSinger" v-for="item in searchData.result.allMatch" @click="abc(item.keyword)">{{item.keyword}}</view>
	</view>
</template>
// @click = emits/$emit('pushInp', 100)
<script setup>
	import {ref, defineProps, defineEmits} from "vue"
	import { useSearchStore } from "../../../store/searchDate.js"
	
	const searchStore = useSearchStore()
	const props = defineProps(['searchData'])
	const Emits = defineEmits(['pushInp'])
	const abc = (i) => {
		console.log(i)
		Emits('pushInp', i)
	}

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