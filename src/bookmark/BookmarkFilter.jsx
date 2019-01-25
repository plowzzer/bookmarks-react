import React, { Component } from 'react'

import If from '../common/operator/if'

import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'


import myInput from '../common/form/input'

class BookmarkFilter extends Component{

  render(){
    const selected = this.props.tab.selected === this.props.id
    const { handleSubmit } = this.props
    return(
      <If test={selected}>
        <form onSubmit={handleSubmit}>
          <Field name="search" component={myInput} placeholder="Filtrar por tag" type="text" />
        </form>     
      </If>
    )
  }

}

BookmarkFilter = reduxForm({form: 'BookmarkFilter', destroyOnUnmount: false})(BookmarkFilter)

const mapStateToProps = state => {
  return {tab: state.tab}
}

export default connect(mapStateToProps)(BookmarkFilter)