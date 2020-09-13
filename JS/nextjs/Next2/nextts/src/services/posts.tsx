const POSTS_API_URL = process.env.API_URL+'/posts'

function get(url) {
  return fetch(url)
}

export function getPosts() {
  return get(POSTS_API_URL)
}

export function getPost(id) {
  return get(POSTS_API_URL + '/' + id)
}