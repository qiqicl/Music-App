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
  

  export const getAllApi = () => {
    return request('https://zyxcl.xyz/music/api/homepage/block/page')
  }
  export const getBannersApi = () => {
    return request('http://121.89.213.194:5001/banner')
  }
  // 每日推荐接口
  export const getSongsApi = () => {
    return request('https://zyxcl.xyz/music/api/recommend/songs')
  }
  // 排行榜接口
  export const getPaihangApi = () => {
    return request('https://zyxcl.xyz/music/api/toplist/detail')
  }
  // 推荐歌单
  export const getTuijianApi = () => {
    return request('https://zyxcl.xyz/music/api/personalized?limit=6')
  }

  // 雷达歌单   精品歌单接口
  export const getJingpinApi = () => {
    return request('https://zyxcl.xyz/music/api/related/playlist')
  }
  
  // 视频合辑
  export const getHejiApi = () => {
    return request('https://zyxcl.xyz/music/api/video/timeline/recommend')
  }