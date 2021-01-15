import axios from 'axios'
import { PostType } from '../redux/posts/@types'

export const postsApi = {
  fetchPosts(): Promise<PostType[]> {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(({ data }) => data)
  },
  loadMore(): Promise<PostType[]> {
    return new Promise(r => {
      r([{ id: Date.now().toString(), title: new Date().toLocaleTimeString() }])
    })
  },
}
