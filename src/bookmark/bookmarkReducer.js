const INITIAL_STATE = {list: []}

const BOOKMARK_LIST = 'BOOKMARK_LIST'
const BOOKMARK_ADD = 'BOOKMARK_ADD'
const BOOKMARK_REMOVE = 'BOOKMARK_REMOVE'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKMARK_LIST:
      return { ...state, list: action.payload }

    case BOOKMARK_ADD:
      return { bookmarks: [...state.bookmarks, action.bookmark] }

    case BOOKMARK_REMOVE:
      return {...state, list: state.list.filter(bookmark => bookmark.id !== action.payload.id)}

    default:
      return state
  }
}

