import React,{ Component } from 'react';

export default class TextArea extends Component {
	constructor(props) {
		super(props);
	}
	static propTypes = {
		title : React.PropTypes.string.isRequired,
		rows : React.PropTypes.number.isRequired,
		content : React.PropTypes.string.isRequired,
		resize : React.PropTypes.bool,
		placeholder : React.PropTypes.string,
		controlFunc : React.PropTypes.func.isRequired,
	};
	render() {
		return (
			<div>
				<label>{ this.props.title }</label>
				<textarea 
				style = {this.props.resize ? null : {resize : 'none'}}
				name = {this.props.name}
				rows = {this.props.rows}
				values = {this.props.content}
				onChange = {this.props.controlFunc}
				placeholder = {this.props.placeholder}/>
			</div>
			);
	}
}