
<template>
	<view class="app">
		<view class="search">
			<uni-icons type="bars" size="30"></uni-icons>
			<view class="input" @click="goSearch"></view>
		</view>
		<view class="content">
			
		</view>
	</view>
</template>


<script setup>
	import { ref } from "vue"
	import { uesSearchStore } from "../../../Music-App/stroe/searchDate"
	import { useRouter, useRoute } from "vue-router"
	const searchStore = uesSearchStore()
	const router = useRouter()
	const route = useRoute()
	const goSearch = () => {
		router.push("/pages/search/search")
    }
</script>


<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		width: 750rpx;
	}
	.search{
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 20rpx 40rpx;
		align-items: center;
		height: 100rpx;
	}
	.input{
		width: 600rpx;
		height: 60rpx;
	    border: 2rpx solid #005500;
	}
</style>

