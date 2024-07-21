<script setup>
const props = defineProps(["comment","isComment"])
const emit = defineEmits([ "offComment" ]);
const off = () => {
  emit('offComment');
}
</script>

<template>
	<view class="box" >
		<view class="off" @click="off"></view>
		<view class="comment">
			<view class="comment_top">最新评论</view>
			<view class="comment_item" v-for=" (item,index) in props.comment.comments " :key="item.id" @click="goPlayer(index)">
				<view class="comment_item_img">
					<image :src="item.user.avatarUrl" mode=""></image>
				</view>
				<view class="comment_item_content">
					<view class="userName">{{item.user.nickname}}</view>
					<view class="userComment">
						{{item.content}}
					</view>
				</view>
				<uni-icons type="right" size="20"></uni-icons>
			</view>
		</view>
	</view>
</template>



<style lang="scss" scoped>
.box{
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, .6);
	.off{
		flex: 1;
	}
	.comment{
		width: 100%;
		height: 70%;
		background-color: white;
	}
}
.comment{
	overflow: auto;
}
.comment_top{
	padding: 24rpx 30rpx;
	display: flex;
	align-items: center;
	position: relative;
}
.comment >view::before{
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
	  pointer-events: none;
	}
.comment_item{
	display: flex;
	align-items: center;
	padding: 24rpx 30rpx;
	position: relative;
	.comment_item_img{
		width: 80rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 32rpx;
		margin-right: 20rpx;
		image{
			width: 80rpx;
			height: 80rpx;
		}
	}
	.comment_item_content{
		flex: 1;
		.userName{
			font-size: 28rpx;
			color: #3b4144;
		}
		.userComment{
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