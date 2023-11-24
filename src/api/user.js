import request from '@/utils/request'
// 登录请求
export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    // 传入token参数给后台，然后根据这个token获取用户信息
    data
  })
}

// 获取用户信息，在这里加上之前或者在后端加入token判断
export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    // 传入token参数给后台，然后根据这个token获取用户信息
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
