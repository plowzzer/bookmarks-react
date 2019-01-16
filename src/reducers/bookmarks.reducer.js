const stateStart = {
  bookmarks: [
    {title: "Pedro",link: "pedropizzo.com", tags: "teste"},
    {title: "Beblue",link: "bebllue.com", tags: "teste"},
    {title: "Spartandesign",link: "spartandesign.com", tags: "teste"}
  ]
}

export function bookmark(state=stateStart, action){
  if(action.type === 'ADD_BOOKMARK'){
    //This action add a new Bookmark
    let newArray = state.bookmarks.concat(action.bookmark)
    return {
      bookmarks: newArray
    }

    // return {
    //   bookmarks: [...state.bookmarks, action.bookmark]
    // }
  }

  if(action.type === 'REMOVE_BOOKMARK'){
    return {
      ...state,
      bookmarks: state.bookmarks.filter(bookmark => JSON.stringify(bookmark) !== JSON.stringify(action.bookmark))
    }
  }

  if(action.type === 'FILTER_BOOKMARK'){
     let newArray = state.bookmarks.filter((bookmark) => {  
      return bookmark.title.toLowerCase().includes(action.bookmark.toLowerCase())
    })

    return {
      bookmarks: state.bookmarks,
      filter: newArray
    }
  
  }

  return state;
}