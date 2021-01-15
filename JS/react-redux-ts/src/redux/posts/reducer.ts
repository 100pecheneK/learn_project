import { PostsInitialStateType, PostsActionTypes } from './@types'
import {
  CREATE_POST,
  SET_POSTS,
  HIDE_LOADER,
  SHOW_LOADER,
  LOAD_MORE_POSTS,
  ADD_POSTS,
} from './types'
import produce, { Draft } from 'immer'

const initialState: PostsInitialStateType = {
  posts: [],
  fetchedPosts: [],
  isLoading: false,
}

export const reducer = produce(
  (draft: Draft<PostsInitialStateType>, action: PostsActionTypes) => {
    switch (action.type) {
      case CREATE_POST:
        draft.posts.push(action.payload)
        break
      case SET_POSTS:
        draft.fetchedPosts = action.payload
        break
      case ADD_POSTS:
        draft.fetchedPosts.push(...action.payload)
        break
      case SHOW_LOADER:
        draft.isLoading = true
        break
      case HIDE_LOADER:
        draft.isLoading = false
        break
    }
  },
  initialState
)
