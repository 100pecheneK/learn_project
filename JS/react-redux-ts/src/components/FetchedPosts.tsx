import React from 'react'
import { useSelector } from 'react-redux'
import {
  postsActionCreators,
  postsActions,
  postsSelectors,
} from '../redux/posts'
import { useTypedDispatch } from '../redux/store'
import Post from './Post'

export default function FetchedPosts() {
  const dispatch = useTypedDispatch()
  const posts = useSelector(postsSelectors.fetchedPosts)
  const isLoading = useSelector(postsSelectors.isLoading)

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (!posts.length) {
    return (
      <button
        onClick={() => {
          dispatch(postsActionCreators.requestPosts())
        }}
        className='btn btn-primary'
      >
        Load
      </button>
    )
  }

  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}
