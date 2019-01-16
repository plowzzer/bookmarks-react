import React, { Component } from 'react'
import UIkit from 'uikit'

export default class BookmarkAdd extends Component{

  addNew = (e) => {
    e.preventDefault();
    
    const title = this.title.value
    const link = this.link.value
    const tags = this.tags.value

    //Warnings
    if(!title){
      UIkit.notification("The title cannot be empty", {status:'warning'})
    }
    if(!link){
      UIkit.notification("The link cannot be empty", {status:'warning'})
    }
    if(!tags){
      UIkit.notification("The tags cannot be empty", {status:'warning'})
    }

    if(title && link && tags){
      
      this.props.addBookmark(
        {
          title: title,
          link: link,
          tags: tags
        }
      )

      //Restarting the inputfields
      this.title.value = ''
      this.link.value = ''
      this.tags.value = ''
      this.title.focus();
      
    }
  }

  render(){
    return(
      <form className="uk-grid-small" data-uk-grid onSubmit={this.addNew}>
        <div className="uk-width-1-3">
          <input className="uk-input" type="text" placeholder="Title" ref={input => this.title = input} />
        </div>
        <div className="uk-width-1-3">
          <input className="uk-input" type="text" placeholder="Link" ref={input => this.link = input} />
        </div>
        <div className="uk-width-1-3">
          <input className="uk-input" type="text" placeholder="Tags" ref={input => this.tags = input} />
        </div>      
        <button className="uk-hidden"  type="submit"></button>       
      </form>
    )
  }
}