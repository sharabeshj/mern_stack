import React,{ Component } from 'react';

export default class SingleInput extends Component {
	constructor(props){
		super(props);
	}
	static propTypes = {
		inputType : React.PropTypes.oneof(['text','number']).isRequired,
		title : React.PropTypes.string.isRequired,
		name : React.PropTypes.string.isRequired,
		controlFunc : React.PropTypes.func.isRequired,
		content : React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.number,
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