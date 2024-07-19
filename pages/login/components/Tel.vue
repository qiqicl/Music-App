<template>
	<uni-forms ref="form" :modelValue="formData" :rules="rules">
		<uni-forms-item name="tel">
			<uni-easyinput type="tel" v-model="formData.tel" placeholder="请输入手机号" />
		</uni-forms-item>
		<view class="code">
			<uni-forms-item name="code" class="codeInput">
				<uni-easyinput type="text" v-model="formData.code" placeholder="请输入验证码" />
			</uni-forms-item>
			<button @click="getCode">获取验证码</button>
		</view>
		<button @click="submit" class="login">登录</button>
	</uni-forms>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const formData = ref({
		tel: '',
		code: ''
	})
	const form = ref()
	const rules = ref({
		// 对name字段进行必填验证
		tel: {
			rules: [{
					required: true,
					errorMessage: '请输入手机号',
				},
				{
					pattern: /^1[3-9]\d{9}$/,
					errorMessage: '手机号格式不正确',
				}
			]
		},
		code: {
			rules: [{
					required: true,
					errorMessage: '请输入验证码',
				},
				{
					validateFunction: function(rule, value, data, callback) {
						console.log(value,formData.value.code)
						if (value !== formData.value.code) {
							callback('验证码不正确')
						}
						return true
					}
				}
			]
		}
	})
	const getCode = async() => {
		const code = await getCodeApi()
		console.log(code)
	}
	const getCodeApi = () =>{
		return new Promise((resolve,reject)=>{
			const time = new Date()*1
			const xhr = new XMLHttpRequest()
			xhr.open('get',`https://zyxcl.xyz/music/api/captcha/sent?timestamp=${time}&phone=${formData.value.tel}`)
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
			console.log('表单数据信息：', res);
		}).catch(err => {
			console.log('表单错误信息：', err);
		})
	}
</script>

<style lang="scss" scoped>
	.code {
		display: flex;
		justify-content: space-between;

		.codeInput {
			flex: 1;
		}

		button {
			height: 75rpx;
			line-height: 75rpx;
			margin-left: 10rpx;
			background: #BA4D47;
			color: white;
			margin-left: 20rpx;
			padding: 0 20rpx;
		}
	}
	::v-deep button{
		color: white;
		background: #BA4D47;
		height: 100rpx;
		line-height: 100rpx;
		padding: 0;
	}
	.lgoin {
		margin-top: 20rpx;
		background: #BA4D47;
		color: white;
	}
</style>