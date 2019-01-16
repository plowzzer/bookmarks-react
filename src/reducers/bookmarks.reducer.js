const stateStart = [
  {
    title: 'Pedro Pizzo',
    link: 'https://pedropizzo.com',
    tags: 'teste'
  }
]

export function bookmark(state=stateStart, action){
  if(action.type === 'ADD_BOOKMARK'){
    //This action add a new Bookmark
    let newObject = [action.bookmark]
    let newArray = newObject.concat(state);

    return newArray
  }

  if(action.type === 'REMOVE_BOOKMARK'){
    let newArray = []
    newArray = state
    
    let removeObject = action.bookmark
    let index = newArray.findIndex(obj => obj === removeObject)
    newArray.splice(index, 1);

    console.log(index, newArray)
    
    return newArray
  }

  return state;
}