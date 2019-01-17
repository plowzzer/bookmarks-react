const stateStart = {
  bookmarks: [
    {title: "Pedro",link: "https://pedropizzo.com", tags: ["implementador", "desafio"]},
    {title: "Google",link: "https://google.com", tags: ["empresa", "pesquisa"]},
    {title: "Spartandesign",link: "https://spartandesign.com.br", tags: ["empresa"]}
  ],
  filter: []
}

export function bookmark(state=stateStart, action){
  if(action.type === 'ADD_BOOKMARK'){
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
    const filter = action.bookmark;
    let filteredResult = state.bookmarks.filter((item) => {
      return (item.tags.find(tag => tag.indexOf(filter) !== -1));
    });

    return {
      bookmarks: state.bookmarks,
      filter: filteredResult
    }
  }

  if(action.type === 'REMOVE_TAG'){
    let newState = state
    let index = newState.bookmarks.indexOf(action.bookmark)
    console.log(index)
  
    function removeTag(index, tag) {
      var tagIndx = newState.bookmarks[index].tags.indexOf(tag);
      newState.bookmarks[index].tags.splice(tagIndx, 1);
    };
  
    removeTag(index, action.tag);

    return {
      bookmarks: newState.bookmarks,
      filter: []
    }
  }

  return {
    bookmarks: state.bookmarks,
    filter: []
  }
}