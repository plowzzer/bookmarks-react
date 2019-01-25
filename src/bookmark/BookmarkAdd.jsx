import React, { Component } from 'react'
import If from '../common/operator/if'

import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import myInput from '../common/form/input'

class BookmarkAdd extends Component{

  render(){
    const selected = this.props.tab.selected === this.props.id
    const {handleSubmit} = this.props;
    return(
      <If test={selected}>
        <form data-uk-grid onSubmit={handleSubmit}>
          <div className="uk-width-1-3">
            <Field name="title"component={myInput} type="text" placeholder="Title" />
          </div>
          <div className="uk-width-1-3">
            <Field name="link"component={myInput} type="text" placeholder="Link" />
          </div>
          <div className="uk-width-1-3">
            <Field name="tags"component={myInput} type="text" placeholder="Tags" />
          </div>      
          <button className="uk-hidden"  type="submit"></button>       
        </form>
      </If>
    )
  }
}

BookmarkAdd = reduxForm({form: 'BookmarkAdd', destroyOnUnmount: false})(BookmarkAdd)
const mapStateToProps = state => ({tab: state.tab})

export default connect(mapStateToProps)(BookmarkAdd)