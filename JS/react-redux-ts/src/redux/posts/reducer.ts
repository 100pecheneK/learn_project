import { PostsActionTypes, PostsInitialStateType } from './@types'
import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER } from './types'

const initialState = {
  posts: [],
  fetchedPosts: [],
  isLoading: false,
}

export const reducer = (
  state: PostsInitialStateType = initialState,
  action: PostsActionTypes
): PostsInitialStateType => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      }
    case FETCH_POSTS:
      return {
        ...state,
        fetchedPosts: action.payload,
      }
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      }
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}
