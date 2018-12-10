import React, {Component} from 'react'
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