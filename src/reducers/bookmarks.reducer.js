const stateStart = {
  bookmarks: [
    {title: "Pedro",link: "https://pedropizzo.com", tags: ["implementador", "desafio"]},
    {title: "Beblue",link: "https://bebllue.com", tags: ["empresa"]},
    {title: "Spartandesign",link: "https://spartandesign.com.br", tags: ["gregorio", "lar"]}
  ],
  filter: []
}

export function bookmark(state=stateStart, action){
  if(action.type === 'ADD_BOOKMARK'){
    //This action add a new Bookmark
    // let newArray = state.bookmarks.concat(action.bookmark)
    // return {
    //   bookmarks: newArray
    // }

    return {
      bookmarks: [...state.bookmarks, action.bookmark],
      filter: []
    }
  }

  if(action.type === 'REMOVE_BOOKMARK'){
    return {
      ...state,
      bookmarks: state.bookmarks.filter(bookmark => JSON.stringify(bookmark) !== JSON.stringify(action.bookmark)),
      filter: []
    }
  }

  if(action.type === 'FILTER_BOOKMARK'){
    // TODO -> FILTER BY TAGS NOT TITLE
    // let newArray = state.bookmarks.filter((bookmark) => {
    //   return bookmark.title.toLowerCase().includes(action.bookmark.toLowerCase())
    // })

    // return {
    //   bookmarks: state.bookmarks,
    //   filter: newArray
    // }

    // Works but full text
    const filter = action.bookmark;
    let filteredResult = state.bookmarks.filter((item) => {
      // return (item.tags.indexOf(filter) >= 0);
      return (item.tags.find(tag => tag.indexOf(filter) !== -1));
    });

    return {
      bookmarks: state.bookmarks,
      filter: filteredResult
    }
    
  }

  if(action.type === 'REMOVE_TAG'){
    // TODO -> REMOVE JUST THAT BOOKMARK TAG

    // let verifyBookmark = state.bookmarks.filter((bookmark) => {
    //   return JSON.stringify(bookmark) === JSON.stringify(action.bookmark)
    // })

    // console.log('this bookmark',verifyBookmark[0])
    
    // let verifyTag = verifyBookmark[0].tags.filter((tag) => {
    //   return tag !== action.tag
    // })

    // console.log(verifyTag)

    // return {
    //   verifyTag
    // }
  }

  return state;
}