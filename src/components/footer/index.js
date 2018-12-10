import React, {Component} from 'react'

export default class FooterBar extends Component {
	constructor(props){
		super(props)
		this.state={}
	}
	render(){
		return(
			<div style={{height:'200px',background:'#000',color:'#E6E6E6'}}>
				this is footer
			</div>
		)
	}
}