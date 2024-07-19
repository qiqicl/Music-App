<template>
	<view class="content">
		<view class="Com">
			<view class="Com-a" v-for="item in everyStore.everyDay" >
				<view class="itemCom" @click="getSongs">
					<image :src="item.uiElement.image.imageUrl"></image>
					<view class="text">{{item.uiElement.mainTitle.title}}</view>
				</view>
			</view>
			<!-- <view class="Com-b">
				<view class="itemCom">
					<image src="https://p1.music.126.net/Shi7cRT1bDhwpVDM7AOFXg==/109951165265330616.jpg"></image>
					<view class="text">私人FM</view>
				</view>
			</view>
			<view class="Com-c">
				<view class="itemCom">
					<image src="https://p1.music.126.net/uG5p6CnwAHrLqOkaSeRlnA==/109951163986649164.jpg"></image>
					<view class="text">歌单</view>
				</view>
				
			</view>
			<view class="Com-d" @click="goTopList()">
				<view class="itemCom">
					<image src="https://p1.music.126.net/SDFC6A3X2wzUCavYyeGIOg==/109951163986649670.jpg"@click="getPaihang"></image>
					<view class="text">排行榜</view>
				</view>
			</view>
			<view class="Com-e">
				<view class="itemCom">
					<image src="https://p1.music.126.net/Kb4oK0m_ocs3FR3lo-r9yg==/109951167319110429.jpg"></image>
					<view class="text">有声书</view>
				</view>
			</view> -->
		</view>
   </view>

</template>

<script setup>
import { nextTick, ref,watch,onMounted } from 'vue'

import { getSongsApi, getPaihangApi } from '../../services'
import {useEveryStore}from "../../store/everyData.js"
const everyStore = useEveryStore()

const song = ref([])
const getSongs = async () =>{
	const res = await getSongsApi()
	nextTick(()=>{
		console.log(res);
	})
}

const getPaihang = async () =>{
	// const res = await getPaihangApi()
	nextTick(()=>{
		uni.navigateTo({
			url: `/pages/toplist/toplist`
		});
	})
}
// const props = defineProps(["everyDay1"])
// console.log(props.everyDay1)
// const everyDay = ref()
// watch(props.everyDay1,()=>{
// 	everyDay.value = props.everyDay1
// 	console.log(everyDay.value)
// },{deep:true})


const goTopList = () => {
	uni.navigateTo({
		url: `/pages/toplist/toplist`
	});
}

onMounted(()=>{
	everyStore.getAll()
	console.log(everyStore.everyDay)
})
// getSongs()
// getPaihang()
</script>

<style lang="scss" scoped>
	.Com {
		width: 100%;
		height: 160rpx;
		display: flex;
		}
	.Com-a, .Com-b, .Com-c,.Com-d,.Com-e{
		width: 25%;
		height: 160rpx;
	}
	
	.itemCom {
		width: 100rpx;
		height: 100rpx;
		background: #BA4D47;
		border-radius: 50rpx;
		margin: 20rpx;
		image {
			width: 100rpx;
			height: 100rpx;
		}
	}
	.text {
		width: 100%;
		text-align: center;
		font-size: 20rpx;
		color: rgb(51, 51, 51);
	}

</style>