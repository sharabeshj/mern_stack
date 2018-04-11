import React,{ Component } from 'react'
import SingleInput from '../components/SingleInput.js';
import TextArea from '../components/TextArea.js';
import ImageUpload from '../components/ImageUpload'
import { Link } from 'react-router-dom'
// import FileUpload from '../components/FileUpload'

export default class SubForm1 extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
				<div>
				<ImageUpload handleChange = {this.props.imgControlFunc1} handleSubmit = {this.props.imgControlFunc2} state = {this.props.fileName}/>
				<SingleInput
				inputType = {'text'}
				title = {'Your Name'}
				name = {'name'}
				controlFunc = {this.props.controlFunc1}
				content = {this.props.name}
				placeholder = {'type first and last name here'}/>
				 <TextArea
				title = {'Write a short description about yourself'}
				rows = {20}
				resize = {false}
				content = {this.props.about}
				name = {'about'}
				controlFunc = {this.props.controlFunc2}/>
				<Link to = '/next'><button>proceed</button></Link>
				</div>
			)
	}
}