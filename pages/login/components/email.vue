<template>
	<view>
			<uni-forms ref="form" :modelValue="formData" :rules="rules">
				<uni-forms-item label="姓名" name="name">
					<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
				</uni-forms-item>
				<uni-forms-item label="邮箱" name="email">
					<input class="input" v-model="formData.email" type="text" placeholder="请输入邮箱" @input="binddata('email',$event.detail.value)" />
				</uni-forms-item>
			</uni-forms>
			<button @click="submit">Submit</button>
		</view>
</template>

<script setup>
	
</script>

<style lang="scss">
	
</style>