const stateStart = {
  bookmarks: [
    {title: "Pedro",link: "pedropizzo.com", tags: "teste"}
  ]
}

export function bookmark(state=stateStart, action){
  if(action.type === 'ADD_BOOKMARK'){
    //This action add a new Bookmark
    return {
      bookmarks: [...state.bookmarks, action.bookmark]
    }
  }

  if(action.type === 'REMOVE_BOOKMARK'){
    return {
      ...state,
      bookmarks: state.bookmarks.filter(bookmark => JSON.stringify(bookmark) !== JSON.stringify(action.bookmark))
    }
  }

  return state;
}