import axios from "axios"

export const postApi = {
  getPosts: async() => {
    const data = await axios.get('/mock/posts')
    return data.data
  }
}