import request from '@/request'

// 获取所有订单（管理员）
export function getOrderList(params: any) {
  return request({
    url: '/order/',
    method: 'get',
    params
  })
}

// 获取当前用户订单
export function getMyOrderList(params: any) {
  return request({
    url: '/order/my/',
    method: 'get',
    params
  })
} 