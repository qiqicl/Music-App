  export const request = (url, options = {}) => {
    return new Promise((resolve, reject) => {
      uni.request({
        url,
		withCredentials	:true,
        ...options,
        success: resolve,
        fail: reject
      })
    })
  }
  // 调所有的接口

	const host ='https://zyxcl.xyz/music/api'

  export const getAllApi = () => {
    return request(`${host}/homepage/block/page?cookie=${decodeURIComponent(uni.getStorageSync('key'))}`)
  }
  export const getBannersApi = () => {
    return request('https://zyxcl.xyz/music/api/banner')
  }
  // 每日推荐接口
  export const getSongsApi = () => {
    return request(`${host}/recommend/songs`)
  }
  // 排行榜接口
  export const getPaihangApi = () => {
    return request(`${host}/toplist/detail`)
  }
  // 推荐歌单
  export const getTuijianApi = () => {
    return request(`${host}/top/playlist?limit=6`)
  }

  // 雷达歌单   精品歌单接口
  export const getJingpinApi = () => {
    return request(`${host}/top/playlist?limit=6`)
  }
  // 排行榜接口
  export const getTopListApi = () => {
    return request(`${host}/toplist/detail`)
  }
  
  // 视频合辑
  export const getHejiApi = () => {
    return request(`${host}/video/timeline/recommend`)
  }
	// 流行接口
	export const getFashionApi = () => {
	  return request(`${host}/personalized/newsong?cookie=${decodeURIComponent(uni.getStorageSync('key'))}`)
	}
  
  // 歌单详情
  export const getSongListApi = (id) => {
    return request(`${host}/playlist/detail?id=${id}`)
  }
  
  // 歌单评论
  // getCommentApi
  export const getCommentApi = (id) => {
    return request(`http://121.89.213.194:5001/comment/playlist?id=${id}`)
  }

