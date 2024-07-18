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
