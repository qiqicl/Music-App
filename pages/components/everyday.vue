<template>
	<view class="content">
		<view class="Com">
			<view class="Com-a" v-for="item in everyStore.everyDay" >
				<view class="itemCom" @click="getSongs">
					<image :src="item.uiElement.image.imageUrl"></image>
					<view class="text">{{item.uiElement.mainTitle.title}}</view>
				</view>
			</view>
			
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
	uni.navigateTo({
		url:"/pages/toplist/toplist"
	})
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
	.Com-a {
		width: 25%;
		height: 160rpx;
		margin-left: 10rpx;
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