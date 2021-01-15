import { call, put, takeLatest } from 'redux-saga/effects'
import { postsActionCreators } from '.'
import { postsApi } from '../../services/posts'
import { appActionCreators } from '../app'
import { AlertStatus } from '../app/@types'
import { PostType } from './@types'
import { LOAD_MORE_POSTS, REQUEST_POSTS } from './types'

export function* postsSaga() {
  yield takeLatest(REQUEST_POSTS, fetchPostsWorker)
  yield takeLatest(LOAD_MORE_POSTS, loadMorePosts)
}

function* fetchPostsWorker() {
  try {
    yield put(postsActionCreators.showLoader())
    const payload: PostType[] = yield call(postsApi.fetchPosts)
    yield put(postsActionCreators.setPosts(payload))
  } catch (error) {
    yield put<any>(
      appActionCreators.showAlert({
        status: AlertStatus.WARNING,
        message: 'Something went wrong: ' + error.message,
      })
    )
  } finally {
    yield put(postsActionCreators.hideLoader())
  }
}

function* loadMorePosts() {
  yield put(postsActionCreators.showLoader())
  const posts = yield call(postsApi.loadMore)
  yield put(postsActionCreators.addPosts(posts))
  yield put(postsActionCreators.hideLoader())
}
