<script setup>
import { nextTick, ref ,reactive} from 'vue'
const data = ref([])



const getData = async() => {
	// console.log(getDataApi())	await nextTick()
	data.value = await getDataApi()
	console.log(data.value)}const getDataApi = () =>{	return new Promise((resolve,reject)=>{		const time = new Date()*1		const xhr = new XMLHttpRequest()		xhr.open('get',`http://121.89.213.194:5001/toplist/detail`)		xhr.onreadystatechange = function() {			// 请求完成且响应状态为 200 表示成功			if (xhr.readyState == 4 && xhr.status == 200) {			  // 解析服务器响应的 JSON 数据			  let data = JSON.parse(xhr.responseText).list;			  // console.log(data)			  resolve(data)			}		  };		xhr.send()	})}
getData()

const goDetail = ref((id) => {
	console.log(id)
	uni.navigateTo({
		url: `/pages/songlist/songlist?id=${id}`
	});
})

</script>

<template>
	<view>
		<view class="topList">
			<view class="topTitle">官方榜</view>
			<view class="top">
				<view class="topList_item"
				v-for="item in data.filter((i,index) =>  index <= 3)"
				:key="item.name"
				@click="goDetail(item.id)"
				>
					<view class="card_header">
						<view class="card_header_left">
							<view class="card_header_left_img">
								<image :src="item.coverImgUrl" mode=""></image>
							</view>
							<view class="card_header_left_content">
								<text class="topList_name">{{item.name}}</text>
								<text class="topList_count">{{item.playCount}}</text>
							</view>
						</view>
						<view class="card_header_right">
							{{item.updateFrequency}}
						</view>
					</view>
					<view class="card_list">
						<view class="card_list_item" v-for="(item,index) in item.tracks">
							<text>{{index+1}}</text>
							<text>{{item.first}}</text>
							 -{{item.second}}
						</view>
					</view>
				</view>
			</view>
			<view class="topTitle">其他榜单</view>
			<view class="else">
				<view class="else_img" v-for="item in data.filter((i,index) =>  index > 3)">
					<image :src="item.coverImgUrl" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>


<style lang="scss" scoped>
	
.top{
	padding-right: 30rpx;
}

.topList{
	width: 100%;
	padding: 30rpx;
	.topTitle{
		font-size: 28rpx;
	}
	.topList_item{
		margin: 30rpx 30rpx 30rpx 0;
		padding: 0px 20rpx;
		box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 3px 1px;
		height: 310rpx;
		.card_header{
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px #DCDCDC solid;
			padding: 10px;
			.card_header_left{
				display: flex;
				align-items: center;
				.card_header_left_img image{
					width: 80rpx;
					height: 80rpx;
					border-radius: 8rpx;
					margin-right: 20rpx;
				}
				.card_header_left_content{
					display: flex;
					flex-direction: column;
					.topList_name{
						font-size: 15px;
						color: #3a3a3a;
					}
					.topList_count{
						font-size: 24rpx;
						margin-top: 10rpx;
						color: #909399;
					}
				}
			}
			.card_header_right{
				font-size: 24rpx;
				color: #909399;
			}
		}
		.card_list{
			padding: 20rpx;
			.card_list_item{
				line-height: 22px;
				font-size: 12px;
				line-height: 24px;
				display: flex;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			text{
				font-weight: 700;
				margin-right: 10rpx;
				flex-shrink: 0;
			}
		}
	}
}
.else{
	margin-left: -10rpx;
	box-sizing: border-box;
}
.else_img{
	width: 236rpx;
	height: 236rpx;
	padding: 16rpx;
	display: inline-block;
	box-sizing: border-box;
	image{
		width: 204rpx;
		height: 204rpx;
	}
}

</style>
