import React from 'react'
import BookmarkTag from './BookmarkTag'

export default props => (
  <li key={bookmark.id} className="bookmarkItem">
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