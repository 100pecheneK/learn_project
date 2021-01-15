import { getActionTypes, InferValueTypes } from '../../@types'
import * as postsActionCreators from '../actionCreators'

export type PostType = {
  id?: string
  title: string
}
export type PostsInitialStateType = {
  posts: PostType[]
  fetchedPosts: PostType[]
  isLoading: boolean
}

export type PostsActionTypes = getActionTypes<typeof postsActionCreators>
// export type PostsActionTypes = ReturnType<
//   InferValueTypes<typeof postsActionCreators>
// >
