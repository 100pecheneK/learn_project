import { InferValueTypes } from '../../@types'
import * as postsActionCreators from '../action-creators'

export type PostType = {
  id?: string
  title: string
}
export type PostsInitialStateType = {
  posts: PostType[]
  fetchedPosts: PostType[]
  isLoading: boolean
}

export type PostsActionTypes = ReturnType<
  InferValueTypes<typeof postsActionCreators>
>
