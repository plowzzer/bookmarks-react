import React, { Component } from 'react'

import trash_can from '../asstes/trash-can.svg'

class BookmarkList extends Component {

  componentWillMount() {
    // this.props.getList()
  }

  remove(){
    console.log('teste')
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
              return 'Delete'
              // return <BookmarkTag tag={tag} bookmark={bookmark} removeTag={this.props.removeTag}/>
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
    return(
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}

// const mapStateToProps = state => ({list: state.bookmark.list})
// const mapDispatchToProps = dispatch => bindActionCreators({getList, filterList}, dispatch)
// export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList)
export default BookmarkList