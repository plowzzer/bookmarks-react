// import { toastr } from 'react-redux-toastr'
// import { reset as resetForm, initialize } from 'redux-form'

const INITIAL_VALUES = [
  {
    id: 1,
    title: 'Pedro',
    link: 'www.pedropizzo.com',
    tags: ['Teste', 'testes']
  },
  {
    id: 2,
    title: 'Pedro',
    link: 'www.pedropizzo.com',
    tags: ['Teste', 'testes']
  }
]

const BOOKMARK_LIST = 'BOOKMARK_LIST'
const BOOKMARK_ADD = 'BOOKMARK_ADD'
const BOOKMARK_REMOVE = 'BOOKMARK_REMOVE'
const BOOKMARK_TAG_REMOVE = 'BOOKMARK_TAG_REMOVE'

export function getList(){
  return {
    type: BOOKMARK_LIST, payload: INITIAL_VALUES
  }
}

export function addBookmark(bookmark){
  return {
    type: BOOKMARK_ADD, payload: bookmark
  }
}

export function removeBookmark(bookmark){
  return {
    type: BOOKMARK_REMOVE, payload: bookmark
  }
}

export function removeTag(bookmark, tag){
  return dispatch => {
    dispatch ({type: BOOKMARK_TAG_REMOVE, payload: {bookmark, tag}})
    return dispatch
  }
}