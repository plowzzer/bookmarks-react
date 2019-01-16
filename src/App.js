import React, { Component } from 'react';

import {connect} from 'react-redux';

import BookmarkAdd from './components/BookmarkAdd.component';
import BookmarkList from './components/BookmarkList.component';
import BookmarkFilter from './components/BookmarkFilter.component';

import BookmarkService from'./services/bookmark.service';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="uk-container uk-flex uk-flex-middle uk-flex-center fullscreen">
          <div className="main uk-width-1-1">
            
            <BookmarkAdd addBookmark={this.props.addBookmark}/>
            <BookmarkFilter bookmarks={this.props.bookmarks} filterBookmark={this.props.filterBookmark}/>
            <BookmarkList bookmarks={this.props.bookmarks} removeBookmark={this.props.removeBookmark}/>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {bookmarks : state.bookmark.bookmarks}
};

const mapDispatchToProps = dispatch => {
  return {
    addBookmark : (bookmark) => {
      dispatch(BookmarkService.addBookmark(bookmark));      
    },
    removeBookmark : (bookmark) => {
      dispatch(BookmarkService.removeBookmark(bookmark))
    },
    filterBookmark : (bookmark) => {
      dispatch(BookmarkService.filterBookmark(bookmark))
    }
  }
}

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default AppContainer;
