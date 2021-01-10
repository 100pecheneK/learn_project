import { RootState } from '../@types'

export const posts = (state: RootState) => state.postsReducer.posts
export const fetchedPosts = (state: RootState) =>
  state.postsReducer.fetchedPosts
export const isLoading = (state: RootState) => state.postsReducer.isLoading
