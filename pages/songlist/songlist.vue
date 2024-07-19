<script setup>
import { nextTick, ref ,reactive } from 'vue'
import { onLoad } from "@dcloudio/uni-app"
const data = ref([])

onLoad((option) => {
	const getData = async() => {
		// console.log(getDataApi())
		await nextTick()
		data.value = await getDataApi()
		console.log(data.value)
	}
	const getDataApi = () =>{
		return new Promise((resolve,reject)=>{
			const time = new Date()*1
			const xhr = new XMLHttpRequest()
			xhr.open('get',`http://121.89.213.194:5001/playlist/detail?id=${option.id}`)
			xhr.onreadystatechange = function() {
				// 请求完成且响应状态为 200 表示成功
				if (xhr.readyState == 4 && xhr.status == 200) {
				  // 解析服务器响应的 JSON 数据
				  let data = JSON.parse(xhr.responseText);
				  // console.log(data)
				  resolve(data)
				}
			  };
			xhr.send()
		})
	}
	getData()
})

console.log(data)

const arName = (arr) => {
	let name = []
	arr.forEach((i) => {
		name.push(i.name)
	})
	return name.join(" / ")
}

</script>

<template>
	<view class="songList">
		<view class="songList_top" :style="{backgroundImage:`url(${data.playlist?.coverImgUrl})`}">
			<view class="songList_top_box">
				<view class="songList_top_info">
					<view class="songList_top_info_img">
						<image :src="data.playlist?.coverImgUrl" mode=""></image>
					</view>
					<view class="songList_top_info_right">
						<view class="songList_name">{{data.playlist?.name}}</view>	
						<view class="songlist_creator">
							<image :src="data.playlist?.creator.avatarUrl" mode=""></image>
							<text>{{data.playlist?.creator.nickname}}</text>
						</view>
					</view>
				</view>
				<view class="description">
					{{data.playlist?.description}}
				</view>
				<view class="btns">
					<view class="btn"><uni-icons type="undo-filled" size="25"></uni-icons>{{data.playlist?.shareCount}}</view>
					<view class="btn"><uni-icons type="chat-filled" size="25"></uni-icons>{{data.playlist?.commentCount}}</view>
					<view class="btn"><uni-icons type="folder-add-filled" size="25"></uni-icons>{{data.playlist?.subscribedCount}}</view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="songList_all"> <uni-icons type="checkbox" size="25"></uni-icons> 播放全部( {{data.playlist?.tracks.length}} )</view>
			<view class="songList_item" v-for=" (item,index) in data.playlist?.tracks " :key="item.id">
				<view class="songList_item_count">{{index+1}}</view>
				<view class="songList_item_content">
					<view class="songName">{{item.name}}</view>
					<view class="songAr">
						{{arName(item.ar)}}
					</view>
				</view>
				<uni-icons type="right" size="20"></uni-icons>
			</view>
		</view>
	</view>
</template>


<style lang="scss" scoped>
view{
	box-sizing: border-box;
}
.songList{
	width: 100vw;
	height: 100vh;
	overflow: auto;
	.songList_top{
		height: 445rpx;
		background-position: center;
		.songList_top_box{
			padding: 30rpx;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, .75);
			.songList_top_info{
				display: flex;
				.songList_top_info_img{
					width: 240rpx;
					height: 240rpx;
					image{
						width: 240rpx;
						height: 240rpx;
						border-radius: 15rpx;
					}
				}
				.songList_top_info_right{
					margin-left: 35rpx;
					.songList_name{
						font-weight: 700;
						color: white;
					}
					.songlist_creator{
						display: flex;
						align-items: center;
						margin-top: 30rpx;
						image{
							width: 50rpx;
							height: 50rpx;
							border-radius: 50%;
						}
						text{
							margin-left: .5rem;
							flex: 1;
							overflow: hidden;
							font-size: 12px;
							color: white;
						}
					}
				}
			}
			.description{
				font-size: 12px;
				margin: 20rpx 0;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: white;
			}
			.btns{
				display: flex;
				color: white;
				.btn{
					flex: 1;
					margin-right: 30rpx;
					height: 70rpx;
					border-radius: 35rpx;
					background: rgba(255, 255, 255, .2);
					font-size: 24rpx;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.uni-icons::before{
					color: white;
				}
			}
		}
	}
}
.songList_all{
	display: flex;
	align-items: center;
	position: relative;
	padding: 24rpx 30rpx;
	font-size: 28rpx;
	.uni-icons::before{
		color: #c84341;
		margin-right: 20rpx;
	}
}
.list >view::before{
	  content: '';
	  position: absolute;
	  width: 200%;
	  height: 200%;
	  top: 0;
	  left: 0;
	  border-bottom: 1px solid #999;
	  transform: scale(0.5); 
	  transform-origin: 0 0;
	  box-sizing: border-box;		
	}
.songList_item{
	display: flex;
	align-items: center;
	padding: 24rpx 30rpx;
	position: relative;
	.songList_item_count{
		width: 80rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 32rpx;
	}
	.songList_item_content{
		flex: 1;
		.songName{
			font-size: 28rpx;
			color: #3b4144;
		}
		.songAr{
			color: #999;
			font-size: 24rpx;
			margin-top: 10rpx;
		}
	}
	>.uni-icons::before{
		color: #999;
	}
}
</style>
