<template>
	<view class="content">
		<view class="Com">
			<view class="Com-a">
				<view class="itemCom" @click="getSongs">
					<image src="https://p1.music.126.net/4DpSgAVpJny4Ewf-Xw_WQQ==/109951163986641971.jpg"></image>
					<view class="text">每日推荐</view>
				</view>
			</view>
			<view class="Com-b">
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
					<image src="https://p1.music.126.net/SDFC6A3X2wzUCavYyeGIOg==/109951163986649670.jpg"></image>
					<view class="text">排行榜</view>
				</view>
			</view>
			<view class="Com-e">
				<view class="itemCom">
					<image src="https://p1.music.126.net/Kb4oK0m_ocs3FR3lo-r9yg==/109951167319110429.jpg"></image>
					<view class="text">有声书</view>
				</view>
			</view>
		</view>
   </view>

</template>

<script setup>
import { nextTick, ref } from 'vue'
const song = ref([])
import { getSongsApi } from '../../services'

const getSongs = async () =>{
	const res = await getSongsApi()
	nextTick(()=>{
		console.log(res);
	})
	
	// song.value = res.data.data
	// console.log(song.value)
}

const goTopList = () => {
	uni.navigateTo({
		url: `/pages/toplist/toplist`
	});
}

// getSongs()
</script>

<style>
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