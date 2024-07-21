  export const request = (url, options = {}) => {
    return new Promise((resolve, reject) => {
      uni.request({
        url,
        ...options,
        success: resolve,
        fail: reject
      })
    })
  }
  // 调所有的接口

	const host ='https://zyxcl.xyz/music/api'

  export const getAllApi = () => {
    return request(`${host}/homepage/block/page`)
  }
  export const getBannersApi = () => {
    return request(`http://121.89.213.194:5001/banner`)
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
    return request(`${host}/personalized?limit=6`)
  }

  // 雷达歌单   精品歌单接口
  export const getJingpinApi = () => {
    return request(`${host}/related/playlist`)
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
	  return request(`${host}/personalized/newsong`)
	}