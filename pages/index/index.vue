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
				<swiper-item v-for="item in banners" :key="item.encodeID"
					style="width: 100%;height: 260rpx !important ;">
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

		<!-- <zhuanshu />
		<heji /> -->

	</view>
</template>

<script setup>
	import {ref} from 'vue'
	import {getBannersApi, getAllApi} from '../../services'
	import songs from '../components/songs.vue'
	import liuxing from '../components/liuxing.vue'
	import everyday from '../components/everyday.vue'
	import leida from '../components/leida.vue'
	import zhuanshu from '../components/zhuanshu.vue'
	import heji from '../components/heji.vue'
	import {
		uesSearchStore
	} from "../../../MusicApp/stroe/searchDate"
	import {
		useRouter,
		useRoute
	} from "vue-router"
	const searchStore = uesSearchStore()
	const router = useRouter()
	const route = useRoute()
	const goSearch = () => {
		router.push("/pages/search/search")
	}

	const title = ref('Hello')
	const background = ref(['color1', 'color2', 'color3'])
	const indicatorDots = ref(true)
	const autoplay = ref(true)
	const interval = ref(2000)
	const duration = ref(500)

	const banners = ref([])
    const all = ref([])

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
	
	
	const getAll = async () => {
		const res = await getAllApi()
		console.log(res);
		all.value = res.data.data.blocks
		console.log(all.value)
	}
	// 调banners的接口
	const getBanners = async () => {
		const res = await getBannersApi()
		// console.log(res);
		banners.value = res.data.banners
		// console.log(banners.value)
	}



    getAll()
	getBanners()
</script>

<style lang="scss">
	// .app {
	// 	display: flex;
	// 	flex-direction: column;
	// 	justify-content: space-between;
	// 	height: 100%;
	// 	width: 750rpx;
	// }
	.uni-icons {
		margin-right: 20rpx;
	} 

	.search {
		width: 100%;
		display: flex;
		// justify-content: space-between;
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
		::v-deep img{
			width: 710rpx;
		}
		// padding:30rpx
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

	.app1 {
		padding: 0 0 110rpx;
	}

</style>