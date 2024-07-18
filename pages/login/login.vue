<template>
	<view class="login">
		<view class="tab">
			<van-tabs v-model:active="active">
				<van-tab title="手机号登录" class="tab">
					<Tel/>
				</van-tab>
				<van-tab title="邮箱登录" class="tab">
					<Email/>
				</van-tab>
				<van-tab title="扫码登录" class="tab">
					<Scan/>
				</van-tab>
			</van-tabs>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import Tel from './components/Tel.vue'
	import Email from './components/Email.vue'
	import Scan from './components/Scan.vue'
	const active = ref(0)
	
</script>

<style lang="scss">
	.login {
		padding: 20rpx;
	}

	
</style>