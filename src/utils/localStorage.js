export const setStorageToken = (token) => {
  localStorage.setItem('Blog-Token', token)
}
export const getStorageToken = () => {
  return localStorage.getItem('Blog-Token') || ''
}

export const setStoragePosts = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts))
}

export const getStoragePosts = () => {
  const posts = localStorage.getItem('posts')
  return posts ? JSON.parse(posts) : []
}
