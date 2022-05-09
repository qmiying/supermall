import { request } from "./request";

// 请求首页home轮播图和推荐的数据的方法
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
// 请求首页home选项卡下的数据的方法
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}