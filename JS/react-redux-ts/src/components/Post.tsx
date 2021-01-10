import React from 'react'
import { PostType } from '../redux/posts/@types'

type PostProps = {
  post: PostType
}
// TODO: Сделать отдельную страницу для этого с использованием мемоизированного селектора
export default function Post({ post }: PostProps) {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{post.title}</h5>
      </div>
    </div>
  )
}
