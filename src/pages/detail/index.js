import React, {Component} from 'react'

class Detail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false
		}
	}
	render(){
		return(
			<div>
				this is detail
				<br/>
				need login
			</div>
		)
	}
}
export default Detail