import React, { Component } from 'react'
import {connect} from 'react-redux';

import BookmarkTag from './BookmarkTag.component'
import BookmarkService from '../services/bookmark.service'

import trash_can from '../asstes/trash-can.svg'


export class BookmarkList extends Component{

  remove(bookmark) {
    this.props.removeBookmark(bookmark)
  }

  render(){
    if( this.props.filter !== undefined ){
      return(
        <div className="uk-margin-top">
          <ul className="uk-list">
            {
              this.props.filter.map(bookmark => {
                return(
                  <li key={bookmark.title} className="bookmarkItem">
                    <h4 className="bookmark-title">{bookmark.title}</h4>
                    <a className="bookmark-link" href={bookmark.link} rel="noopener noreferrer" target="_blank">{bookmark.link}</a>
                    
                    <ul className="bookmark-tag">
                      {
                        bookmark.tags.map(tag => {
                          return <BookmarkTag tag={tag} bookmark={bookmark} removeTag={this.props.removeTag}/>
                        })
                      }
                    </ul>
                    
                    <button className="delete-btn" onClick={() => this.remove(bookmark)}>
                      <img src={trash_can} alt="delete icon"/> DELETE
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      )
    } else {
      return(
        <div className="uk-margin-top">
          <ul className="uk-list">
            {
              this.props.bookmarks.map(bookmark => {
                return(
                  <li key={bookmark.title} className="bookmarkItem">
                    <h4 className="bookmark-title">{bookmark.title}</h4>
                    <a className="bookmark-link" href={bookmark.link} rel="noopener noreferrer" target="_blank">{bookmark.link}</a>
                                   
                    <ul className="bookmark-tag">
                      {
                        bookmark.tags.map(tag => {
                          return <BookmarkTag tag={tag} bookmark={bookmark} removeTag={this.props.removeTag}/>
                        })
                      }
                    </ul>
                    
                    <button className="delete-btn" onClick={() => this.remove(bookmark)}>
                      <img src={trash_can} alt="delete icon"/> DELETE
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
};

const mapDispatchToProps = dispatch => {
  return {
    removeTag : (bookmark, tag) => {
      dispatch(BookmarkService.removeTag(bookmark, tag))
    }
  }
}

const BookmarkListContainer = connect(mapStateToProps,mapDispatchToProps)(BookmarkList);

export default BookmarkListContainer;
