// 获取当前用户信息（假设从 localStorage 或全局 store 获取）
export function getCurrentUser() {
  const userStr = localStorage.getItem('user')
  if (!userStr) return null
  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}

// 判断当前用户是否为管理员
export function isAdminUser() {
  const user = getCurrentUser()
  return user && (user.role === 'ADMIN' || user.is_admin)
} 