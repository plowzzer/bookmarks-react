import React, { Component } from 'react'
import { connect } from 'react-redux'
import UIkit from 'uikit'
import { bindActionCreators } from 'redux'
import If from '../common/operator/if'

import { addBookmark } from './bookmarkActions'

class BookmarkAdd extends Component{

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

      let string = tags.split(" ");
      var stringArray = [];
      for(var i =0; i < string.length; i++){
        stringArray.push(string[i]);
      }
      
      this.props.addBookmark(
        {
          title: title,
          link: link,
          tags: stringArray
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
    const selected = this.props.tab.selected === this.props.id
    return(
      <If test={selected}>
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
      </If>
    )
  }
}

const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToPtops = dispatch => bindActionCreators({addBookmark}, dispatch)
export default connect(mapStateToProps, mapDispatchToPtops)(BookmarkAdd)