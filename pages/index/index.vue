
<template>
	<view class="app">
		<view class="search">
			<uni-icons type="bars" size="30"></uni-icons>
			<uni-search-bar @confirm="search" @input="input" class="input"></uni-search-bar>
		</view>
		<view class="content">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
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
	}
</style>