const INITIAL_STATE = {list: []}

const BOOKMARK_LIST = 'BOOKMARK_LIST'
const BOOKMARK_ADD = 'BOOKMARK_ADD'
const BOOKMARK_REMOVE = 'BOOKMARK_REMOVE'
const BOOKMARK_TAG_REMOVE = 'BOOKMARK_TAG_REMOVE'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKMARK_LIST:
      return { ...state, list: action.payload }

    case BOOKMARK_ADD:
      return { bookmarks: [...state.bookmarks, action.bookmark] }

    case BOOKMARK_REMOVE:
      return {...state, list: state.list.filter(bookmark => bookmark.id !== action.payload.id)}

    case BOOKMARK_TAG_REMOVE:
      let newState = state
      let index = newState.list.indexOf(action.payload.bookmark)
    
      function removeTag(index, tag) {
        var tagIndx = newState.list[index].tags.indexOf(tag);
        newState.list[index].tags.splice(tagIndx, 1);
      };
    
      removeTag(index, action.payload.tag);

      return { ...state, list: newState.list }

    default:
      return state
  }
}

