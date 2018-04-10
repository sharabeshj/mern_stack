import React,{ Component } from 'react';
import PropTypes from 'prop-types';

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
				<div>
					{ this.props.options.map(opt => {
						return (
						<label key = {opt} >
							<input
							name = {this.props.setName}
							onChange = {this.props.controlFunc}
							value = {opt}
							checked = {this.props.selectedOptions.indexOf(opt) > -1 }
							type = {this.props.type}/>{opt}
						</label>
						)
					})}
				</div>
			</div>
			);
	}
}