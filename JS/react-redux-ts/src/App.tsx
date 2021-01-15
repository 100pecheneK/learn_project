import React from 'react'
import Alerts from './components/Alerts'
import FetchedPosts from './components/FetchedPosts'
import PostForm from './components/PostForm'
import Posts from './components/Posts'

function App() {
  return (
    <>
      <div className='container pt-3'>
        <div className='row'>
          <div className='col'>
            <h2>Post form</h2>
            <PostForm />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h2>Posts</h2>
            <Posts />
          </div>
          <div className='col'>
            <h2>Fetched Posts</h2>
            <FetchedPosts/>
          </div>
        </div>
      </div>
      <Alerts/>
    </>
  )
}

export default App
