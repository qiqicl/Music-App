<script setup>
import { nextTick, ref ,reactive } from 'vue'
const storage = ref(decodeURIComponent(uni.getStorageSync('key')))
const data = ref([])
const emit = defineEmits([ "offUser" ]);
const off = () => {
  emit('offUser');
}

const getUserDate = async () => {
	data.value = await uni.request({
		url:`https://zyxcl.xyz/music/api/login/status?cookie=${storage.value}`,
		// withCredentials	:true
	})
}
getUserDate()

const goLogin = () =>{
	uni.navigateTo({
		url: `/pages/login/login`
	});
}
</script>


<template>
	<view class="box">
		<view class="aside">
			<view class="user" v-if="storage">
				<image :src="data?.data?.data.profile.avatarUrl" mode=""></image>
				<text>{{ data?.data?.data.profile.nickname }}</text>
			</view>
			<button v-else @click="goLogin">去登陆</button>
		</view>
		<view class="off" @click="off"></view>
	</view>
</template>


<style lang="scss" scoped>
	.box{
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, .6);
		display: flex;
		position: fixed;
		top: 0;
		right: 0;
		.aside{
			width: 70%;
			height: 100%;
			background-color: white;
		}
		.off{
			flex: 1;
		}
	}
	.user{
		display: flex;
		padding-top: 100rpx;
		image{
			width: 90rpx;
			height: 90rpx;
		}
	}
	button{
		margin-top: 100rpx;
	}
</style>