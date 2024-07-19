<template>
	<view class="app1">
		<view class="search">
			<uni-icons type="bars" size="30" color="rgb(94, 109, 130)"></uni-icons>
			<view class="input" @click="goSearch">
				<view class="inpAll">
					<uni-icons type="search" size="20" color="rgb(192, 196, 204)"></uni-icons>
					<view class="sousuo">搜索</view>
				</view>
			</view>
		</view>
		<view class="uni-margin-wrap" style="border-radius: 20rpx;">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration" style="width: 100%;height: 240rpx !important ;">
				<swiper-item v-for="item in everyStore.banners" :key="item.bannerId"
					style="width: 100%;height: 260rpx !important ;">
					<view class="swiper-item uni-bg-red">
						<image :src="item.pic" mode="widthFix" class="img"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<everyday :everyDay1="everyDay"/>
		<songs />
		<liuxing />
		<leida />

		<!-- <zhuanshu />
		<heji /> -->

	</view>
</template>

<script setup>
	import {ref} from 'vue'
	import {getBannersApi} from '../../services'
	import songs from '../components/songs.vue'
	import liuxing from '../components/liuxing.vue'
	import everyday from '../components/everyday.vue'
	import leida from '../components/leida.vue'
	import zhuanshu from '../components/zhuanshu.vue'
	import heji from '../components/heji.vue'
	import {useSearchStore} from "../../../MusicApp/store/searchDate"
	import {useRouter,useRoute} from "vue-router"
	import {useEveryStore}from "../../store/everyData.js"
	
	
	const everyStore = useEveryStore()
	const searchStore = useSearchStore()
	const router = useRouter()
	const route = useRoute()
	const title = ref('Hello')
	const background = ref(['color1', 'color2', 'color3'])
	const indicatorDots = ref(true)
	const autoplay = ref(true)
	const interval = ref(2000)
	const duration = ref(500)
	const goSearch = () => {
		router.push("/pages/search/search")
	}
	const changeIndicatorDots = e => {
		indicatorDots.value = !indicatorDots.value
	}
	const changeAutoplay = e => {
		autoplay.value = !autoplay.value
	}
	const intervalChange = e => {
		interval.value = e.target.value
	}
	const durationChange = e => {
		duration.value = e.target.value
	}
	
	

	// // 调banners的接口
	// const getBanners = async () => {
	// 	const res = await getBannersApi()
	// 	// console.log(res);
	// 	banners.value = res.data.banners
	// 	// console.log(banners.value)
	// }

    everyStore.getAll()
	
	
</script>

<style lang="scss">
	.uni-icons {
		margin-right: 20rpx;
	} 

	.search {
		width: 100%;
		display: flex;
		padding: 20rpx 40rpx;
		align-items: center;
		height: 100rpx;
	}

	.input {
		width: 600rpx;
		height: 60rpx;
		border-radius: 20rpx;
		background-color: rgb(238, 238, 238);
		display: flex;
	}
	.sousuo {
		font-size: 28rpx;
		color: #b3b3b3!important;
	}
	.inpAll {
		display: flex;
		margin: 0 auto;
		line-height: 60rpx;
	}

	.uni-margin-wrap {
		width: 750rpx;
		border-radius: 10rpx;
		overflow: hidden;
		padding: 0 25rpx;
		box-sizing: border-box;
		::v-deep img{
			width: 710rpx;
		}
	}

	.img {
		width: 750rpx;
	}

	::v-deep .uni-swiper-wrapper {
		height: 250rpx;
	}

	::v-deep .uni-swiper-dots {
		margin-bottom: 20rpx;
	}

	.swiper {
		width: 100%;
		height: 550rpx;
		border-radius: 20rpx;
		overflow: hidden;

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

	.app1 {
		padding: 0 0 110rpx;
	}

</style>