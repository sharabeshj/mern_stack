import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { Row,Input } from 'react-materialize'

export default class CheckboxOrRadioGroup extends Component {
	constructor(props){
		super(props);
	}
	static propTypes = {
		title : PropTypes.string.isRequired,
		type : PropTypes.oneOf(['checkbox','radio']).isRequired,
		setName : PropTypes.string.isRequired,
		options : PropTypes.array.isRequired,
		selectedOptions : PropTypes.array,
		controlFunc : PropTypes.func.isRequired,
	};
	render() {
		return (
			<div>
				<label>{this.props.title}</label>
				<Row>
					{ this.props.options.map(opt => {
						return (
						<label key = {opt} >
							<Input
							name = {this.props.setName}
							onChange = {this.props.controlFunc}
							value = {opt}
							label = {opt}
							checked = {this.props.selectedOptions.indexOf(opt) > -1 }
							type = {this.props.type}/>
						</label>
						)
					})}
				</Row>
			</div>
			);
	}
}