import React, { Component } from 'react';

import {connect} from 'react-redux';

import BookmarkAdd from './components/BookmarkAdd.component';
import BookmarkList from './components/BookmarkList.component';
import BookmarkFilter from './components/BookmarkFilter.component';

import BookmarkService from'./services/bookmark.service';

import addImage from './asstes/add-btn.svg'
import add_selectedImage from './asstes/add-btn-selected.svg'
import filterImage from './asstes/search-btn.svg'
import filter_selectedImage from './asstes/search-btn-selected.svg'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {operator: 'add'};
  }

  changeTo(newOperator){
    this.setState({operator: newOperator});
  }

  render() {
    let switcher = true
    if(this.state.operator === 'add'){ switcher = true } else { switcher = false }  
    
    return (
      <div className="App">
        <div className="uk-container uk-flex uk-flex-middle uk-flex-center fullscreen">
          <div className="main uk-width-1-1">
            <div className="uk-grid-medium" data-uk-grid>

              <div className="uk-width-auto">
                <button className="action-buttons" onClick={() => this.changeTo('add')}>
                  {switcher ? <img src={add_selectedImage} alt="Add selected"/> : <img src={addImage} alt="Select to add bookmarks"/>}
                </button>

                <button className="action-buttons" onClick={() => this.changeTo('filter')}>
                  {switcher ? <img src={filterImage} alt="Filter selected"/> : <img src={filter_selectedImage} alt="Select to filter bookmarks"/>}
                </button>
              </div>
              
              <div className="uk-width-expand">
                {switcher ? (
                  <BookmarkAdd addBookmark={this.props.addBookmark}/>
                ) : (
                  <BookmarkFilter bookmarks={this.props.bookmarks} filterBookmark={this.props.filterBookmark}/>
                )}
              </div>
            </div>

            <div className="uk-width-1-1">
              <BookmarkList bookmarks={this.props.bookmarks} filter={this.props.filter} removeBookmark={this.props.removeBookmark} removeTag={this.props.removeTag}/>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookmarks : state.bookmark.bookmarks,
    filter : state.bookmark.filter
  }
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
    },
    removeTag : (tag) => {
      dispatch(BookmarkService.removeTag(tag))
    }
  }
}

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default AppContainer;
