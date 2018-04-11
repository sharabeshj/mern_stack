import React,{ Component } from 'react';
import SingleInput from '../components/SingleInput'
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup'
import TextArea from '../components/TextArea'
import axios from 'axios'
import ImageUpload from '../components/ImageUpload'
import { Tab,Tabs,Button } from 'react-materialize'

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
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
					file : '',
					fileName:'',
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
			fileName : this.state.fileName,
			name : this.state.name,
			about : this.state.about,
			state : this.state.state,
			age : this.state.age,
			ethinicity : this.state.selectedEthinicity[0],
			race : this.state.selectedRace[0],
			sex : this.state.selectedSex[0],
			height : this.state.height,
			weight : this.state.weight
		};

		console.log("send this in a POST request",formPayLoad);
		axios.post('/api/register',{headers : { 'Content-type' : 'application/x-www-form-urlencoded' },formPayLoad})
			.then(res => console.log(res))
			.catch(e => console.log(e));
		this.handleClearForm(e);
	}

	handleClearForm(e){
		e.preventDefault();
		this.setState({
			file : '',
			fileName: '',
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

		if(this.state.selectedEthinicity.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedEthinicity.filter(s => s !== newSelection)
			//console.log("hii");
		}else {
			newSelectionArray = [...this.state.selectedEthinicity,newSelection];
			//console.log("hello");
		}
		this.setState({selectedEthinicity : newSelectionArray});
	}
	handleRaceSelection(e){
		const newSelection = e.target.value;
		let newSelectionArray;

		if(this.state.selectedRace.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedRace.filter(s => s !== newSelection)
		}else {
			newSelectionArray = [...this.state.selectedRace,newSelection];
		}
		this.setState({selectedRace : newSelectionArray});
	}
	handleSexSelection(e){
		const newSelection = e.target.value;
		let newSelectionArray;

		if(this.state.selectedSex.indexOf(newSelection) > -1) {
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
	handleSubmit(e) {
		e.preventDefault();
		let formData = new FormData();
		formData.append('file',this.state.file);
		const config = {
			headers : { 'content-type' : 'multipart/form-data'}
		}
		axios.post('/upload',formData,config)
			.then(res => {
				console.log(res);
				// const data = JSON.parse(res);
				this.setState({ fileName : res.data.file.filename});
			})
			.catch(e => console.log(e));

	}
	handleChange(e) {
		e.preventDefault();
		this.setState({file : e.target.files[0]});	
		this.handleSubmit(e);	
	}
	render(){
		return(
			<form onSubmit = { this.handleFormSubmit }>
			<Tabs className = "tab-demo z-depth-1 ">
							<Tab title = "Introduction" tabWidth = {6} active>
								<ImageUpload handleChange = {this.handleChange} state = {this.state.fileName}/>
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
							</Tab>
							<Tab title = "Personal Information" tabWidth = {6}>
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
								<Button waves = "light"><input type = "submit" value = "submit" /></Button>
								<Button waves="light" onClick = {this.props.controlFunc8} >Clear form</Button>
							</Tab>
							</Tabs>
			</form>
			);
	}
}
