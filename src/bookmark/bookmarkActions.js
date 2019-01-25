// import { toastr } from 'react-redux-toastr'
// import { reset as resetForm, initialize } from 'redux-form'
import UIkit from 'uikit'

const INITIAL_VALUES = [
  {
    id: 1,
    title: 'Pedro',
    link: 'www.pedropizzo.com',
    tags: ['Aplicante', 'Desafio']
  },
  {
    id: 2,
    title: 'Pedro',
    link: 'www.pedropizzo.com',
    tags: ['Console', 'Teste']
  }
]

const BOOKMARK_LIST = 'BOOKMARK_LIST'
const BOOKMARK_ADD = 'BOOKMARK_ADD'
const BOOKMARK_REMOVE = 'BOOKMARK_REMOVE'
const BOOKMARK_TAG_REMOVE = 'BOOKMARK_TAG_REMOVE'
const BOOKMARK_FILTER = 'BOOKMARK_FILTER'

export function getList(){
  return {
    type: BOOKMARK_LIST, payload: INITIAL_VALUES
  }
}

// export function addBookmark(bookmark){
//   return {
//     type: BOOKMARK_ADD, payload: bookmark
//   }
// }

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

export function filter(values){
  return dispatch => {
    dispatch ({type: BOOKMARK_FILTER, payload: values})
    return dispatch
  }
}

export function add(values){
  const title = values.title
  const link = values.link
  const tagsStrings = values.tags

  //Warnings
  if(!title){
    UIkit.notification("The title cannot be empty", {status:'warning'})
  }
  if(!link){
    UIkit.notification("The link cannot be empty", {status:'warning'})
  }
  if(!tagsStrings){
    UIkit.notification("The tags cannot be empty", {status:'warning'})
  }
  
  if(title && link && tagsStrings){
    let string = tagsStrings.split(" ");
    var tags = [];
    for(var i =0; i < string.length; i++){
      tags.push(string[i]);
    }

    let id = 1+Math.random()*321
    
    return dispatch => {
      dispatch({type: BOOKMARK_ADD, payload: {id,title,link,tags}})
      return dispatch
    }
    
  }
}