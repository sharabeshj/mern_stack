import React,{Component} from 'react'
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup.js';
import SingleInput from '../components/SingleInput.js';
import TextArea from '../components/TextArea.js';

export default class SubForm2 extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
				<div>
				<SingleInput
				inputType = {'text'}
				title = {'State'}
				name = {'name'}
				controlFunc = {this.props.controlFunc1}
				content = {this.props.state}
				placeholder = {'type your state'}/>
				<SingleInput
				inputType = {'number'}
				title = {'Age'}
				name = {'age'}
				controlFunc = {this.props.controlFunc2}
				content = {this.props.age}
				placeholder = {'type your age'}/>
				<CheckboxOrRadioGroup 
				title = {'Ethinicity'}
				setName = {'ethinicity'}
				type = {'radio'}
				controlFunc = {this.props.controlFunc3}
				options = {this.props.ethinicity}
				selectedOptions = {this.props.selectedEthinicity}/>
				<CheckboxOrRadioGroup
				title = {'Race'}
				setName = {'race'}
				type = {'radio'}
				controlFunc = {this.props.controlFunc4}
				options = {this.props.race}
				selectedOptions = {this.props.selectedRace}/>
				<CheckboxOrRadioGroup
				title = {'Sex'}
				setName = {'sex'}
				type = {'radio'}
				controlFunc ={this.props.controlFunc5}
				options = {this.props.sex}
				selectedOptions = {this.props.selectedSex}/>
				<SingleInput
				inputType = {'number'}
				title = {'Height'}
				name = {'height'}
				controlFunc = {this.props.controlFunc6}
				content = {this.props.height}
				placeholder = {'type your height'}/>
				<SingleInput
				inputType = {'number'}
				title = {'Weight'}
				name = {'weight'}
				controlFunc = {this.props.controlFunc7}
				content = {this.props.weight}
				placeholder = {'type your weight'}/>
				<input type = "submit" value = "submit" />
				<button onClick = {this.props.controlFunc8} >Clear form</button>
				</div>
			)
	}
}