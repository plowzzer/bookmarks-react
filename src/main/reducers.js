import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import tabReducer from '../common/tab/tabReducer'
import bookmarkReducer from '../bookmark/bookmarkReducer';

const rootReducer = combineReducers({
  tab: tabReducer,
  bookmarks: bookmarkReducer,
  form: formReducer,
  toastr: toastrReducer
})

export default rootReducer