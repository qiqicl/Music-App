<template>
	<view class="scan">
		<image :src="img" alt="" />
	</view>
</template>

<script setup>
	// https://zyxcl.xyz/music/api/login/qr/key?timestamp=1721298962928
	// https://zyxcl.xyz/music/api/login/qr/create?timestamp=1721298963112&key=1e3f26dc-bcb0-4aac-8025-6bcc20e57310&qrimg=qrimg
	// /login/qr/check
	import {
		onBeforeUnmount,
		onUnmounted,
		ref
	} from "vue"
	const img = ref()
	const time = ref()
	const getQRCode = async () => {
		const key = await getKeyApi()
		const data = await getQRCodeApi(key.data.unikey)
		img.value = data.data.qrimg
		time.value = setInterval(async () => {
			const check = await getCheckApi(key.data.unikey)
			console.log(check)
			if (check.code === 803) {
				// 这一步会返回cookie
				uni.setStorageSync('key', `${encodeURIComponent(check.cookie)}`);
				clearInterval(time.value)
				uni.switchTab({
					url: '/pages/index/index'
				});
			}
		}, 1000)
	}
	onBeforeUnmount(()=>{
		clearInterval(time.value)
	})
	const getKeyApi = () => {
		return new Promise((resolve, reject) => {
			const time = new Date() * 1
			const xhr = new XMLHttpRequest()
			xhr.open('get', `https://zyxcl.xyz/music/api/login/qr/key?timestamp=${time}`)
			xhr.onreadystatechange = () => {
				// 请求完成且响应状态为 200 表示成功
				if (xhr.readyState == 4 && xhr.status == 200) {
					// 解析服务器响应的 JSON 数据
					let data = JSON.parse(xhr.responseText);
					resolve(data)
					// formData.value.code = data
				}
			};
			xhr.send()
		})
	}
	const getQRCodeApi = (key) => {
		return new Promise((resolve, reject) => {
			const time = new Date() * 1
			const xhr = new XMLHttpRequest()
			xhr.open('get',
				`https://zyxcl.xyz/music/api/login/qr/create?timestamp=${time}&key=${key}&qrimg=qrimg`)
			xhr.onreadystatechange = () => {
				// 请求完成且响应状态为 200 表示成功
				if (xhr.readyState == 4 && xhr.status == 200) {
					// 解析服务器响应的 JSON 数据
					let data = JSON.parse(xhr.responseText);
					resolve(data)
					// formData.value.code = data
				}
			};
			xhr.send()
		})
	}
	const getCheckApi = (key) => {
		return new Promise((resolve, reject) => {
			const time = new Date() * 1
			const xhr = new XMLHttpRequest()
			xhr.open('get', `https://zyxcl.xyz/music/api/login/qr/check?timestamp=${time}&key=${key}`)
			xhr.onreadystatechange = () => {
				// 请求完成且响应状态为 200 表示成功
				if (xhr.readyState == 4 && xhr.status == 200) {
					// 解析服务器响应的 JSON 数据
					let data = JSON.parse(xhr.responseText);
					resolve(data)
					// formData.value.code = data
				}
			};
			xhr.send()
		})
	}
	getQRCode()
</script>

<style scoped lang="scss">
	.scan {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	image {
		width: 600rpx;
		height: 600rpx;

	}
</style>