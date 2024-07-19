<template>
	<view class="player">
		<view class="section"
			style="background-image: url(&quot;http://p1.music.126.net/uicjMeijprOJqVYEwY2ZQw==/109951169524907299.jpg&quot;);">
			<view class="disc">
				<view class="song">
					<view class="pole">
						<image src="../../assets/needle-ab-63009d3f.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	// /playlist/cover/update?id=3143833470&imgSize=200
	import {
		ref
	} from "vue"
	uni.setNavigationBarTitle({
		title: "歌名",
		success: () => {
			console.log('标题设置成功');
		},
	})
	const getImg = async () => {
		const code = await getImgApi()
		console.log(code)
	}
	const getImgApi = () => {
		// return new Promise((resolve, reject) => {
		// 	const time = new Date() * 1
		// 	const xhr = new XMLHttpRequest()
		// 	xhr.open('get', `https://zyxcl.xyz/music/api/playlist/cover/update?id=3143833470&imgSize=200`)
		// 	xhr.onreadystatechange = () => {
		// 		// 请求完成且响应状态为 200 表示成功
		// 		if (xhr.readyState == 4 && xhr.status == 200) {
		// 			// 解析服务器响应的 JSON 数据
		// 			let data = JSON.parse(xhr.responseText);
		// 			resolve(data)
		// 			// formData.value.code = data
		// 		}
		// 	};
		// 	xhr.send()
		// })
	}
	getImg()
</script>

<style lang="scss">
	.player {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
	}

	.section {
		flex: 1;
		user-select: none;
		font-size: 16px;
		color: var(--UI-FG-0);
		margin: 0;
		overflow: hidden;
		-webkit-tap-highlight-color: transparent;
		display: block;
		position: relative;
		width: 100%;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		transform: scale(1.5);
		filter: blur(30px);
	}
</style>