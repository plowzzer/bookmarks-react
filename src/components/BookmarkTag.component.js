import React, { Component } from 'react'

export default class BookmarkList extends Component{
  removeTag(bookmark, tag){
    this.props.removeTag(bookmark, tag)
  }

  render(){
    // return <li className="single-tag">teste</li>
    return <li className="single-tag" onClick={() => this.removeTag(this.props.bookmark, this.props.tag)}>{this.props.tag}</li>
  }
}
