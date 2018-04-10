import React,{ Component } from 'react'
import SingleInput from '../components/SingleInput.js';
import TextArea from '../components/TextArea.js';

export default class SubForm1 extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
				<div>
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
				</div>
			)
	}
}