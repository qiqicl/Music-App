
<script setup>
import { nextTick, ref ,reactive } from 'vue'

const data = ref([])
const detailData = ref([])
const playList = ref([])
const storage = ref(decodeURIComponent(uni.getStorageSync('key')))


const getData = async() => {	await nextTick()
	data.value = await getDataApi()
	uni.request({
		url:`https://zyxcl.xyz/music/api/user/detail?uid=${data.value.data.data.account.id}`,	
		withCredentials	:true,
		success: (res) => {
			// console.log(res.data);
			detailData.value = res.data
		}
	})
	uni.request({
		url:`https://zyxcl.xyz/music/api/user/playlist?uid=${data.value.data.data.account.id}`,	
		withCredentials	:true,
		success: (res) => {
			console.log(res.data);
			playList.value = res.data
		}
	})}

const getDataApi = () =>{	return new Promise((resolve,reject)=>{
		let data = uni.request({
			url:"https://zyxcl.xyz/music/api/login/status",
			withCredentials	:true
		})
		resolve(data)	})}

getData()


const goLogin = () =>{
	uni.navigateTo({
		url: `/pages/login/login`
	});
}

const goDetail = ref((id) => {
	console.log(id)
	uni.navigateTo({
		url: `/pages/songlist/songlist?id=${id}`
	});
})



</script>

<template>
	<view class="mine" v-if="storage">
		<view class="header">
			<view class="user"  :style="{backgroundImage:`url(${detailData.profile?.backgroundUrl})`}">
				<image :src="data.data?.data.profile.avatarUrl" mode=""></image>
				<view class="nickname">{{data.data?.data.profile.nickname}}</view>
				<view class="desc">
					<view class="desc_tag"><text>{{detailData.profile?.follows}}</text>关注</view>
					<view class="desc_tag"><text>{{detailData.profile?.followeds}}</text>粉丝</view>
					<view class="desc_tag"><text>LV{{detailData.level}}</text>等级</view>
					<view class="desc_tag"><text>{{detailData.listenSongs}}</text>听歌</view>
				</view>
			</view>
		</view>
		<!-- {{data.data.data}} -->
		<view class="main">
			<view class="lists">
				<view class="list" v-for="list in playList.playlist" @click="goDetail(list.id)">
					<view class="pic">
						<image :src="list.coverImgUrl" mode=""></image>
					</view>
					<view class="list_item">
						<text class="listName">{{list.name}}</text>
						<text class="rec">{{list.trackCount}} 首 {{list.playCount}} 次播放</text>
					</view>
				</view>
			</view>
		</view>
	</view>
	<button  v-else @click="goLogin">去登录</button>
</template>


<style lang="scss">
	
	.mine{
		width: 100%;
		height: 100%;
		overflow: auto;
		.user{
			width: 100%;
			height: 420rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.nickname{
				color: #fff;
				font-weight: 700;
				margin-top: 25rpx;
			}
			>image{
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
				margin-top: 60rpx;
			}
			.desc{
				display: flex;
				margin-top: 20rpx;
				.desc_tag{
					color: #cfc4c4;
					font-size: 14px;
					display: flex;
					align-items: center;
					font-size: 14px;
					margin: 0 10px;
					text{
						font-weight: 700;
						color: #fff;
						margin-right: 10px;
					}
				}
			}
		}
		.main{
			width: 100%;
			// height: 100%;
			.lists{
				width: 100%;
				// height: 100%;
				.list{
					display: flex;
					padding: 24rpx 30rpx;
					position: relative;
					&::before{
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
					.pic{
						width: 80rpx;
						height: 80rpx;
						margin-right: 36rpx;
						image{
							width: 100%;
							height: 100%;
						}
					}
					.list_item{
						display: flex;
						flex-direction: column;
						justify-content: center;
						.listName{
							font-size: 28rpx;
							color: #3b4144;
						}
						.rec{
							color: #999;
							font-size: 12px;
						}
					}
				}
			}
		}
	}
	.user{
		background-position: center;
	}

</style>
