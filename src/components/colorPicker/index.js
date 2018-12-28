import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import { Button } from '../ui'
import './colorPicker.less'

export default class ColorPicker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: props.color,
			displayColorPicker: "none",
			SketchPickerWidth: '250px'
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleClose = this.handleClose.bind(this)
	}
	
	handleClick() {
		let { displayColorPicker, color } = this.state
		displayColorPicker = displayColorPicker === "none" ? "block" : "none"
		this.setState({ displayColorPicker })
	}
	
	handleChange(value) {
		let color = value.hex
		this.setState({
			color
		},()=>{
			window.less.modifyVars(
					{
						'@primary-color': value.hex,
						'@link-color': value.hex,
						'@btn-primary-bg': value.hex,
					}
				)
				.then(() => { })
				.catch(error => {
					// message.error(`Failed to update theme`);
					console.log(error)
				});
		})
	}
	
	handleClose() {
		this.setState({ displayColorPicker: 'none' })
	}
	
	render() {
		return (
			<div className="colorPickerContainer">
				<Button
					onClick={ this.handleClick }
					style={{
						backgroundColor: this.state.color
					}}
				>
					{ this.state.color }
				</Button>
				<div className="pickerContainer"
				     style={{ display: this.state.displayColorPicker }}
				>
					<div className='cover' onClick={this.handleClose}/>
					<SketchPicker
						color={this.state.color}
						onChange={this.handleChange}
						width={this.state.SketchPickerWidth}
					/>
				</div>
			</div>
		)
	}
}