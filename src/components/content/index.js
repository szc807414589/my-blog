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
				{/*<div className="section_left">1</div>*/}
				{/*<div className="section_middle">*/}
					{this.props.children}
				{/*</div>*/}
				{/*<div className="section_right">2</div>*/}
			</section>
		)
	}
}

export default Content