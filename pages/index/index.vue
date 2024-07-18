<template>
	<view class="app">
		<view class="search">
			<uni-icons type="bars" size="30"></uni-icons>
			<uni-search-bar @confirm="search" @input="input" class="input"></uni-search-bar>
		</view>
		<view class="uni-margin-wrap" style="border-radius: 20rpx;">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration" style="width: 100%;height: 240rpx !important ;">
				<swiper-item v-for="item in banners" :key="item.encodeID"style="width: 100%;height: 260rpx !important ;" >
					<view class="swiper-item uni-bg-red">
						<image :src="item.imageUrl" mode="widthFix" class="img"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<everyday />
		<songs />
		<liuxing />
		<leida />
		
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { getBannersApi } from '../../services'
import songs from '../components/songs.vue'
import liuxing from '../components/liuxing.vue'
import everyday from '../components/everyday.vue'
import leida from '../components/leida.vue'

const title = ref('Hello')
const background = ref(['color1', 'color2', 'color3'])
const indicatorDots = ref(true)
const autoplay = ref(true)
const interval = ref(2000)
const duration = ref(500)

const banners = ref([])


const changeIndicatorDots = e => {
	indicatorDots.value = !indicatorDots.value
}
const changeAutoplay = e =>{
	autoplay.value = !autoplay.value
}
const intervalChange = e =>{
	interval.value = e.target.value
}
const durationChange = e => {
	duration.value = e.target.value
}
// 调banners的接口
const getBanners = async () =>{
	const res = await getBannersApi()
	console.log(res);
	banners.value = res.data.banners
	console.log(banners.value)
}



getBanners()



</script>

<style lang="scss" scoped>
	.app {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		// height: 100%;
		overflow-y: scroll;
		padding-bottom: 120rpx;
		// width: 100%;
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
	
	.uni-margin-wrap {
		width: 750rpx;
		border-radius: 20rpx;
		overflow: hidden;
	}
	.swiper{
		
	}	
	.img {
		width: 750rpx;
	}
	::v-deep .uni-swiper-wrapper{
		height: 250rpx;
	}
	::v-deep .uni-swiper-dots{
		margin-bottom: 20rpx;
	}
	.swiper {
		height: 550rpx;
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		border-radius: 50rpx;
	}
	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}
	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}
	.info {
		position: absolute;
		right: 20rpx;
	}
	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
	
</style>