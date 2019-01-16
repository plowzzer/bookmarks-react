import React, { Component } from 'react'
import UIkit from 'uikit'

export default class BookmarkFilter extends Component{

  filter = (e) => {
    e.preventDefault();
    
    const search = this.search.value

    this.props.filterBookmark(search)

    // if(title && link && tags){
      
    //   this.props.addBookmark(
    //     {
    //       title: title,
    //       link: link,
    //       tags: tags
    //     }
    //   )

    //   //Restarting the inputfields
    //   this.title.value = ''
    //   this.link.value = ''
    //   this.tags.value = ''
    //   this.title.focus();
      
    // }
  }

  render(){
    return(
      <form className="uk-grid-small" data-uk-grid onSubmit={this.filter}>
        <div className="uk-width-1-1">
          <input className="uk-input" type="text" placeholder="Search by title" ref={input => this.search = input} />
        </div>    
      </form>
    )
  }
}