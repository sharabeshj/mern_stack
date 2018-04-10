import React,{ Component } from 'react';
import PropTypes from 'prop-types';

export default class SingleInput extends Component {
	constructor(props){
		super(props);
	}
	static propTypes = {
		inputType : PropTypes.oneOf(['text','number']).isRequired,
		title : PropTypes.string.isRequired,
		name : PropTypes.string.isRequired,
		controlFunc : PropTypes.func.isRequired,
		content : PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
			]).isRequired,
	};
	render() {
		return (
			<div>
				<label>{this.props.title}</label>
				<input 
				name = {this.props.name}
				type = {this.props.inputType}
				value = {this.props.content}
				onChange = {this.props.controlFunc}
				placeholder = {this.props.placeholder}/>
			</div>
			);
	}
} 