<template>
	<view class="mine">
		<view class="header">
			<view class="user">
				<image src="../../static/logo.png" mode=""></image>
				<view class="nickname">你好</view>
				<view class="desc">
					<view class="desc_tag"><text>123</text>关注</view>
					<view class="desc_tag"><text>123</text>粉丝</view>
					<view class="desc_tag"><text>123</text>等级</view>
					<view class="desc_tag"><text>123</text>听歌</view>
				</view>
			</view>
		</view>
		<view class="main">
			<view class="lists">
				<view class="list">
					<view class="pic">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<view class="list_item">
						<text class="listName">喜欢的音乐</text>
						<text class="rec">0 首 0 次播放</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

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
			background-color: tomato;
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

</style>
