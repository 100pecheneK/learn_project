import { call, put, takeEvery } from 'redux-saga/effects'
import { ThunkAction } from 'redux-thunk'
import { ActionTypes, InitialStateType } from './@types'
import { appActions } from './app'
import { postsActionCreators } from './posts'
import { PostType } from './posts/@types'
import { REQUEST_POSTS } from './posts/types'
import { AlertStatus } from './app/@types'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, fetchPostsWorker)
}

function* fetchPostsWorker() {
  try {
    yield put(postsActionCreators.showLoader())
    const payload: PostType[] = yield call(fetchPosts)
    yield put(postsActionCreators.fetchPosts(payload))
  } catch (error) {
    yield put<any>(
      appActions.addAlert({
        status: AlertStatus.WARNING,
        message: 'Something went wrong: ' + error.message,
      })
    )
  } finally {
    yield put(postsActionCreators.hideLoader())
  }
}

async function fetchPosts(): Promise<PostType[]> {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  )
  return await res.json()
}
