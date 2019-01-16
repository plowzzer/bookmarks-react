import React, { Component } from 'react'

export default class BookmarkList extends Component{

  remove(bookmark) {
    this.props.removeBookmark(bookmark)
  }

  render(){
    return(
      <div className="uk-margin-large-top">
        <ul className="uk-list">
          {
            this.props.bookmarks.map(bookmark => {
              return(
                <li key={bookmark.title} className="bookmarkItem">
                  <h4 className="bookmark-title">{bookmark.title}</h4>
                  <a className="bookmark-link" href="#">{bookmark.link}</a>
                  <p className="bookmark-tag">{bookmark.tags}</p>
                  <button onClick={() => this.remove(bookmark)}>DELETE</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}