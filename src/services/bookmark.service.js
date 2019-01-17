export default class BookmarkService {

  static addBookmark(bookmark){
    return dispatch => {
      dispatch({type: 'ADD_BOOKMARK', bookmark})
      return bookmark
    }
  }

  static removeBookmark(bookmark){
    return dispatch => {
      dispatch({type: 'REMOVE_BOOKMARK', bookmark})
      return bookmark
    }
  }

  static filterBookmark(bookmark){
    return dispatch => {
      dispatch({type: 'FILTER_BOOKMARK', bookmark})
      return bookmark
    }
  }

  static removeTag(bookmark, tag){
    return dispatch => {
      dispatch({type: 'REMOVE_TAG', bookmark, tag})
      return dispatch
    }
  }
  
}