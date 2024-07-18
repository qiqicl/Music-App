<template>
	<view class="fashion">
		<view class="top"><view class="line"></view>流行 | 经典 | 民谣 热门榜单</view>
		<view class="con">
			<view class="con-a">
				<image class="leftTu" src="../../assets/tu1.png" mode=""></image>
				<view class="right">
					<view class="right1">
						<view class="tit">你想要的</view>
						<view class="name">颜人中</view>
					</view>
					<view class="right2">
						<view class="left-triangle"></view>
						<image class="rightTu" src="../../assets/tu1.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="con-a">
				<image class="leftTu" src="../../assets/tu1.png" mode=""></image>
				<view class="right">
					<view class="right1">
						<view class="tit">你想要的</view>
						<view class="name">颜人中</view>
					</view>
					<view class="right2">
						<view class="left-triangle"></view>
						<image class="rightTu" src="../../assets/tu1.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="con-a">
				<image class="leftTu" src="../../assets/tu1.png" mode=""></image>
				<view class="right">
					<view class="right1">
						<view class="tit">你想要的</view>
						<view class="name">颜人中</view>
					</view>
					<view class="right2">
						<view class="left-triangle"></view>
						<image class="rightTu" src="../../assets/tu1.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
</script>

<style>
	.fashion {
		width: 100%;
		height: 540rpx;
	}
	.top {
		width: 100%;
		height: 38rpx;
		font-size: 32rpx;
		color: rgb(51, 51, 51);
		display: flex;
	}
	.line {
		width: 8rpx;
		height: 26rpx;
		background: #BA4D47;
		border-radius: 15rpx;
		margin: 8rpx  16rpx 0 20rpx;
	}
	.leftTu {
		width: 80rpx;
		height: 80rpx;
		margin: 20rpx;
	}
	.rightTu {
		width: 80rpx;
		height: 90rpx;
		margin-top: 30rpx;
	}
	.con {
		width: 100%;
		height: 522rpx;
	}
	.con-a {
		width: 100%;
		height: 135rpx;
		display: flex;
		padding: 20rpx;
		padding-bottom:0;
	}
	.left-triangle {
	  width: 0;
	  height: 0;
	  border-top: 24rpx solid transparent; /* 透明边框 */
	  border-left: 24rpx solid black; /* 右侧边框 */
	  border-bottom: 24rpx solid transparent; /* 透明边框 */
	  margin: 50rpx;
	}
	.right {
		width: calc(100% - 80rpx);
		display: flex;
	}
	.right1 {
		flex: 1;
	}
	.tit {
		margin-top: 20rpx;
	}
	.name {
		font-size: 24rpx;
		margin-top: 10rpx;
		color: #999999;
	}
	.right2 {
		float: right;
		display: flex;
	}
</style>