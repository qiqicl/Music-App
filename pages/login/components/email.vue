<template>
	<view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item name="email">
				<uni-easyinput type="text" v-model="formData.email" placeholder="请输入邮箱"
					@input="onFieldChange('email',formData.email)" />
			</uni-forms-item>
			<uni-forms-item name="pwd">
				<uni-easyinput type="text" v-model="formData.pwd" placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">提交</button>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const formData = ref({
		email: '',
		pwd: ''
	})
	const onFieldChange = (name, value) => {
		// console.log(name,value)
	}
	const form = ref()
	const rules = ref({
		// 对name字段进行必填验证
		email: {
			rules: [{
					format: 'email',
					errorMessage: '请输入正确的邮箱地址',
				},
				{
					required: true,
					errorMessage: '请输入正确的邮箱地址',
				}
			]
		},
		pwd: {
			rules: [{
				required: true,
				errorMessage: '请输入密码',
			}, ]
		}
	})
	const getEmail = async (email, pwd) => {
		const data = await getEmailApi(email, pwd)
		// console.log(data.account)
		
		uni.setStorageSync('key', `${encodeURIComponent(data.cookie)}`);

		// uni.getStorage({
		// 	key: 'key',
		// 	success: async(res)=> {
		// 		console.log(res.data);
		// 		const login = await getLoginApi(res.data)
		// 	}
		// });
		// const login = await getLoginApi()
	}
	// login/status
	const getEmailApi = (email, pwd) => {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest()
			xhr.open('get', `https://zyxcl.xyz/music/api/login?email=${email}&password=${pwd}`)
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
	const getLoginApi = (cur) => {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest()
			xhr.open('get', `https://zyxcl.xyz/music/api/login/status?curCookie=${cur}`)
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
	const submit = () => {
		form.value.validate().then(res => {
			getEmail(res.email, res.pwd)
			console.log('表单数据信息：', res);
			uni.switchTab({
				url: '/pages/index/index'
			});
		}).catch(err => {
			console.log('表单错误信息：', err);
		})
	}
</script>

<style lang="scss">

</style>