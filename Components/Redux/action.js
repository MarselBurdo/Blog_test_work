import * as types from './types'

export const showPosts = () => async dispatch => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
  const resF = await resp.json()
  dispatch({
    type: types.SHOW_POSTS,
    payload: resF
  })
}
