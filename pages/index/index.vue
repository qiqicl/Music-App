<<<<<<< HEAD
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

<style lang="scss" scoped>
	.app {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
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
=======
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
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

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
>>>>>>> main
</style>
