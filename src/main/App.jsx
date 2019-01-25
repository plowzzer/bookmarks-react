import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { filter } from '../bookmark/bookmarkActions'

import BookmarkAdd from '../bookmark/BookmarkAdd';
import BookmarkList from '../bookmark/BookmarkList';
import BookmarkFilter from '../bookmark/BookmarkFilter';

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

  render() {    
    return (
      <div className="App">
        <div className="uk-container uk-flex uk-flex-middle uk-flex-center fullscreen">
          <div className="main uk-width-1-1">
            <Tabs>
              <TabsSelect>
                <TabsButtons target={'filter'} icon={filterImage} iconSelected={filter_selectedImage} alt="Select to filter bookmark"></TabsButtons>
                <TabsButtons target={'add'} icon={addImage} iconSelected={add_selectedImage} alt="Select to add bookmarks"></TabsButtons>
              </TabsSelect>
              <TabsContent>
                <BookmarkFilter id={'filter'} bookmarks={this.props.bookmarks} onChange={this.props.filter}/>
                <BookmarkAdd id={'add'} addBookmark={this.props.addBookmark}/>
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


const mapDispatchToProps = dispatch => bindActionCreators({ filter }, dispatch)
export default connect(null, mapDispatchToProps)(App)