import request1 from '@/utils/request1'

const getBanners = () =>
  request1({
    url: '/store/api/product/ipbanner?type=1',
    method: 'GET',
  }).then(data => data)
const getTopics = () =>
  request1({
    url: '/store/api/firstPage/v1/gettopics?type=2',
    method: 'GET',
  }).then(data => data)
const getBaoKuan = () =>
  request1({
    url: '/store/api/allProduct/gets?limit=20&offset=0',
    method: 'GET',
  }).then(data => data)
export {
  getBanners,
  getTopics,
  getBaoKuan,
}
