import React, {Component} from 'react'
import {renderRoutes} from 'react-router-config'
import './content.less'

class Content extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	render() {
		return (
			<section>
				{this.props.children}
			</section>
		)
	}
}

export default Content