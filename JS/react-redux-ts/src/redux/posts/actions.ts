import { AppThunk } from '../@types'
import { hideLoader, showLoader } from './action-creators'
import { PostType } from './@types'
import * as actionCreators from './action-creators'
import { appActions } from '../app'
import { AlertStatus } from '../app/@types'

export const fetchPosts = (): AppThunk => async dispatch => {
  dispatch(showLoader())
  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    )
    const posts: PostType[] = await res.json()
    dispatch(actionCreators.fetchPosts(posts))
  } catch (e) {
    dispatch(
      appActions.addAlert({
        status: AlertStatus.WARNING,
        message: 'Something went wrong: ' + e.message,
        time: 5000,
      })
    )
  } finally {
    dispatch(hideLoader())
  }
}
