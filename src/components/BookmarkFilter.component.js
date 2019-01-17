import React, { Component } from 'react'

export default class BookmarkFilter extends Component{

  filter = (e) => {
    e.preventDefault();
    
    this.props.filterBookmark(this.search.value)
  }

  render(){
    return(
      <form className="uk-grid-small" data-uk-grid onSubmit={this.filter}>
        <div className="uk-width-1-1">
          <input className="uk-input" type="text" placeholder="Search by title" ref={input => this.search = input} onChange={this.filter} />
        </div>    
      </form>
    )
  }
}