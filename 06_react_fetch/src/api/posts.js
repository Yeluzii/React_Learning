import { get,put,post,del } from "./request"

export const getPosts = (params) => {
    return get('/posts',  params )
  }
  
  export const getPostById = (id) => {
    return get(`/posts/${id}`)
  }
  
  export const createPost = (data) => {
    return post('/posts', data)
  }
  
  export const updatePost = (id, data) => {
    return put(`/posts/${id}`, data)
  }
  
  export const deletePost = (id) => {
    return del(`/posts/${id}`)
  }