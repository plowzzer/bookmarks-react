import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabActions'

class TabsButtons extends Component {
	componentWillMount(){
		this.props.selectTab('filter')
	}

	render() {
		const selected = this.props.tab.selected === this.props.target
		return(
			<button className='action-buttons' onClick={() => this.props.selectTab(this.props.target)}>
				{selected ? <img src={this.props.iconSelected} alt={this.props.alt}/> : <img src={this.props.icon} alt={this.props.alt}/>}
			</button>
		)
	}
}

const mapStateToProps = state => ({tab : state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabsButtons)