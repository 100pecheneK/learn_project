import { PostType } from './@types'
import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_LOADER,
} from './types'

export const createPost = (post: PostType) => ({
  type: CREATE_POST,
  payload: { ...post },
})

export const fetchPosts = (posts: PostType[]) => ({
  type: FETCH_POSTS,
  payload: posts,
})
export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })

export const requestPosts = () => ({ type: REQUEST_POSTS })
