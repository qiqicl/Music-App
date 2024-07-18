<template>
	<view class="search">
		<uni-icons type="search" size="30" color="#666"></uni-icons>
		<input class="searchInp" placeholder="请输入要搜索的歌曲/歌手" v-model="searchStore.con" @input="focus" @keydown="keydowns"/>
		<view class="close" @click="searchStore.con=''"  v-if="searchStore.con!==''">x</view>
		<view class="cancal" v-if="searchStore.con!==''">取消</view>
	</view>
	<view class="history">
		<view class="searchHistory">搜索历史</view>
		<uni-icons type="trash" size="25" color="#666"></uni-icons>
	</view>
	<view class="historyCon">
		<view class="text">刘德华</view>
	</view>
	<view class="history">
		<view class="hotHistory">热门搜索</view>
	</view>
	<view class="hotCon">
		<view v-for="(item, index) in searchStore.data.result.hots" class="hotText" ><view :class="[ 'hotNum','num' + (index + 1)]">{{index + 1}}.</view>{{item.first}}</view>
	</view>
	
	<view class="sL" v-if="flag===1">
		<searchList  :searchData="searchStore.searchData"/>
	</view>
	<view class="songs" v-if='flag===2'>
		<songSinger :songsData="searchStore.songsData"/>
	</view>
	
</template>

<script setup>
	import { ref } from "vue"
	import  searchList from "../../component/searchList.vue"
	import  songSinger from "../../component/songSinger.vue"
	import { uesSearchStore } from "../../../Music-App/stroe/searchDate"
	const searchStore = uesSearchStore()
	const flag = ref(0)
	searchStore.getCode()
	 const keydowns = (e) => {
	 	const key = e.code
		flag.value = 2
		searchStore.getSongsData()
	 }
	 const focus = () =>{
		 flag.value = 1
		 searchStore.getSearchData()
	 }
</script>

<style lang="scss" scoped>
	.search{
		height: 60rpx;
		display: flex;
		padding: 20rpx 20rpx;
		background: pink;
		background: #F8F8F8;
	}
	.searchInp{
		width: 400rpx;
		height: 50rpx;
		padding: 0 30rpx;
		border-radius: 15rpx;
		flex: 1;
	}
	.cancal{
		padding-left: 15rpx;
		width: 70rpx;
		height: 60rpx;
		line-height: 60rpx;
	}
	.close{
		margin-top: 15rpx;
		width: 30rpx;
		height: 30rpx;
		text-align: center;
		line-height: 30rpx;
		border-radius: 50%;
		background: #666;
		color: #ffffff;
	}
	.history{
		display: flex;
		justify-content: space-between;
		margin-top: 20rpx;
		.searchHistory{
			margin-left: 20rpx;
			border-left: 10rpx solid darkred;
			height: 30rpx;
			line-height: 30rpx;
			padding-left: 20rpx;
		}
	}
	.historyCon{
		display: flex;
		flex-wrap: wrap;
	}
	.text{
		height: 50rpx;
		width: 100rpx;
		background: #DDDDDD;
		border-radius: 100rpx;
		line-height: 50rpx;
		text-align: center;
		font-size: 24rpx;
		margin: 20rpx 15rpx;
	}
	.hotHistory{
		margin-left: 20rpx;
		border-left: 10rpx solid darkred;
		height: 30rpx;
		line-height: 30rpx;
		padding-left: 20rpx;
	}
	.hotCon{
		margin-top: 50rpx;
	}
	.hotText{
		display: flex;
		margin: 15rpx 15rpx;
	}
	.num1{
		color: #C94442;
	}
	.num2{
		color: #C94442;
	}
	.num3{
		color: #C94442;
	}
	.sL, .songs{
		position: absolute;
		top: 100rpx;
		width: 100%;
		height: calc(100% - 100rpx);
		background: #ffffff;
	}
</style>