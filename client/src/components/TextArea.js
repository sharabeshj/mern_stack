import React,{ Component } from 'react';
import PropTypes from 'prop-types'
import { Row,Input } from 'react-materialize'

export default class TextArea extends Component {
	constructor(props) {
		super(props);
	}
	static propTypes = {
		title : PropTypes.string.isRequired,
		rows : PropTypes.number.isRequired,
		content : PropTypes.string.isRequired,
		resize : PropTypes.bool,
		placeholder : PropTypes.string,
		controlFunc : PropTypes.func.isRequired,
	};
	render() {
		return (
			<Row>
				<Input
				s= {6}
				label = {this.props.title}
				type = 'textarea'
				style = {this.props.resize ? null : {resize : 'none'}}
				name = {this.props.name}
				rows = {this.props.rows}
				values = {this.props.content}
				onChange = {this.props.controlFunc}
				placeholder = {this.props.placeholder}/>
			</Row>
			);
	}
}