import React,{ Component } from 'react';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup.js';
import SingleInput from '../components/SingleInput.js';
import TextArea from '../components/TextArea.js';
// import Select from '../components/Select';


export default class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);	
		this.handleFullNameChange = this.handleFullNameChange.bind(this);
		this.handleEthinicitySelection =this.handleEthinicitySelection.bind(this);
		this.handleRaceSelection = this.handleRaceSelection.bind(this);
		this.handleSexSelection = this.handleSexSelection.bind(this);
		this.handleAboutChange = this.handleAboutChange.bind(this);
		this.handleHeightChange = this.handleHeightChange.bind(this);
		this.handleWeightChange = this.handleWeightChange.bind(this);
		this.handleAboutChange = this.handleAboutChange.bind(this);
		this.handleStateChange = this.handleStateChange.bind(this);
		this.handleAgeChange = this.handleAgeChange.bind(this);
		this.state = {
					name : '',
					about :  '',
					state : '',
					age : 0,
					ethinicity : ["Hispanic","Non-Hispanic"],
					selectedEthinicity : [],
					race : ["American indian","Asian","Native Hawaiian","Black","White"],
					selectedRace : [],
					sex : ["Male","Female"],
					selectedSex : [],
					height : 0,
					weight : 0,
		}
	}

	handleFormSubmit(e){
		e.preventDefault();

		const formPayLoad = {
			name : this.state.name,
			about : this.state.about,
			state : this.state.state,
			age : this.state.age,
			ethinicity : this.state.ethinicity,
			race : this.state.race,
			sex : this.state.sex,
			height : this.state.height,
			weight : this.state.weight
		};

		console.log("send this in a POST request",formPayLoad);
		this.handleClearForm(e);
	}

	handleClearForm(e){
		e.preventDefault();
		this.setState({
			name : '',
			about : '',
			state : '',
			age : 0,
			selectedEthinicity : [],
			selectedRace : [],
			selectedSex : [],
			height : 0,
			weight : 0,
		});
	}
	handleFullNameChange(e){
		this.setState({ name : e.target.value });
	}
	handleEthinicitySelection(e){
		const newSelection = e.target.value;
		let newSelectionArray;

		if(this.state.ethinicity.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedEthinicity.filter(s => s !== newSelection)
		}else {
			newSelectionArray = [...this.state.selectedEthinicity,newSelection];
		}
		this.setState({selectedEthinicity : newSelectionArray});
	}
	handleRaceSelection(e){
		const newSelection = e.target.value;
		let newSelectionArray;

		if(this.state.race.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedRace.filter(s => s !== newSelection)
		}else {
			newSelectionArray = [...this.state.selectedRace,newSelection];
		}
		this.setState({selectedRace : newSelectionArray});
	}
	handleSexSelection(e){
		const newSelection = e.target.value;
		let newSelectionArray;

		if(this.state.sex.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedSex.filter(s => s !== newSelection)
		}else {
			newSelectionArray = [...this.state.selectedSex,newSelection];
		}
		this.setState({selectedSex: newSelectionArray});
	}
	handleAboutChange(e) {
		this.setState({ about : e.target.value });
	}
	handleStateChange(e){
		this.setState({state : e.target.value });
	}
	handleAgeChange(e){
		this.setState({age : e.target.value });
	}
	handleHeightChange(e){
		this.setState({height : e.target.value });
	}
	handleWeightChange(e){
		this.setState({weight : e.target.value });
	}
	render(){
		return(
			<form onSubmit = { this.handleFormSubmit }>
				<SingleInput
				inputType = {'text'}
				title = {'Your Name'}
				name = {'name'}
				controlFunc = {this.handleFullNameChange}
				content = {this.state.name}
				placeholder = {'type first and last name here'}/>
				<TextArea
				title = {'Write a short description about yourself'}
				rows = {20}
				resize = {false}
				content = {this.state.about}
				name = {'about'}
				controlFunc = {this.handleAboutChange}/>
				<SingleInput
				inputType = {'text'}
				title = {'State'}
				name = {'name'}
				controlFunc = {this.handleStateChange}
				content = {this.state.state}
				placeholder = {'type your state'}/>
				<SingleInput
				inputType = {'number'}
				title = {'Age'}
				name = {'age'}
				controlFunc = {this.handleAgeChange}
				content = {this.state.age}
				placeholder = {'type your age'}/>
				<CheckboxOrRadioGroup 
				title = {'Ethinicity'}
				setName = {'ethinicity'}
				type = {'radio'}
				controlFunc = {this.handleEthinicitySelection}
				options = {this.state.ethinicity}
				selectedOptions = {this.state.selectedEthinicity}/>
				<CheckboxOrRadioGroup
				title = {'Race'}
				setName = {'race'}
				type = {'radio'}
				controlFunc = {this.handleRaceSelection}
				options = {this.state.race}
				selectedOptions = {this.state.selectedRace}/>
				<CheckboxOrRadioGroup
				title = {'Sex'}
				setName = {'sex'}
				type = {'radio'}
				controlFunc ={this.handleSexSelection}
				options = {this.state.sex}
				selectedOptions = {this.state.selectedSex}/>
				<SingleInput
				inputType = {'number'}
				title = {'Height'}
				name = {'height'}
				controlFunc = {this.handleHeightChange}
				content = {this.state.height}
				placeholder = {'type your height'}/>
				<SingleInput
				inputType = {'number'}
				title = {'Weight'}
				name = {'weight'}
				controlFunc = {this.handleWeightChange}
				content = {this.state.weight}
				placeholder = {'type your weight'}/>
				<input type = "submit" value = "submit" />
				<button onClick = {this.handleClearForm} >Clear form</button>
			</form>
			);
	}
}
