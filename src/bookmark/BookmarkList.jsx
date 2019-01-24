import React, { Component } from 'react'

import trash_can from '../asstes/trash-can.svg'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, removeBookmark } from './bookmarkActions'

import BookmarkTag from './BookmarkTag'

class BookmarkList extends Component {

  componentWillMount() {
    this.props.getList()
  }

  remove(bookmark) {
    this.props.removeBookmark(bookmark)
  }

  renderList(){
    const list = this.props.list || []
    return list.map(bookmark => (
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
    ))
  }

  render(){
    console.log(this.props.list)
    return(
      <ul className="uk-list">
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = state => ({list: state.bookmarks.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, removeBookmark}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList)