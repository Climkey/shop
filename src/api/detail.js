import request from '@/utils/request'
import API from './constants'

/**
 * 根据id查询商品信
 * @param {*} id 商品的id
 * @returns 查询到的详情数据
 */
export const getDetail = id => request({
  url: API.API_GETS,
  params: {
    id,
  },
})
export const getDetailMore = id => request({
  url: API.API_GETSMORE,
  params: {
    id,
  },
})
