import React, { Component } from 'react'

import If from '../common/operator/if'

import { connect } from 'react-redux'

class BookmarkFilter extends Component{

  filter = (e) => {
    e.preventDefault();
    
    this.props.filterBookmark(this.search.value)
  }

  render(){
    const selected = this.props.tab.selected === this.props.id
    return(
      <If test={selected}>
        <form className="uk-grid-small" data-uk-grid onSubmit={this.filter}>
          <div className="uk-width-1-1">
            <input className="uk-input" type="text" placeholder="Search by tag" ref={input => this.search = input} onChange={this.filter} />
          </div>    
        </form>
      </If>
    )
  }
}

const mapStateToProps = state => ({tab: state.tab})
export default connect(mapStateToProps)(BookmarkFilter)