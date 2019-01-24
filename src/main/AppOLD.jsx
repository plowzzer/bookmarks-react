import React, { Component } from 'react';

import {connect} from 'react-redux';

import BookmarkAdd from '../bookmark/BookmarkAdd';
import BookmarkList from '../bookmark/BookmarkList';
import BookmarkFilter from '../bookmark/BookmarkFilter';

import BookmarkService from'../services/bookmark.service';

import addImage from '../asstes/add-btn.svg'
import add_selectedImage from '../asstes/add-btn-selected.svg'
import filterImage from '../asstes/search-btn.svg'
import filter_selectedImage from '../asstes/search-btn-selected.svg'

/////////////////////////////////////

import Tabs from '../common/tab/tabs'
import TabsSelect from '../common/tab/tabsSelect'
import TabsButtons from '../common/tab/tabsButtons';
import TabsContent from '../common/tab/tabContent';

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
            <Tabs>
              <TabsSelect>
                <TabsButtons icon={filterImage} iconSelected={filter_selectedImage} alt="Select to filter bookmark"></TabsButtons>
                <TabsButtons icon={addImage} iconSelected={add_selectedImage} alt="Select to add bookmarks"></TabsButtons>
              </TabsSelect>
              <TabsContent>
                <BookmarkAdd addBookmark={this.props.addBookmark}/>
                <BookmarkFilter bookmarks={this.props.bookmarks} filterBookmark={this.props.filterBookmark}/>
              </TabsContent>
            </Tabs>

            <div className="uk-width-1-1">
              <BookmarkList/>
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
