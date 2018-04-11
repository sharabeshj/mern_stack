import React,{ Component } from 'react';
import SubForm1 from './SubForm1'
import SubForm2 from './SubForm2'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import ImageUpload from '../components/ImageUpload'

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
	}
	render(){
		return(
			<div>
			<form onSubmit = { this.handleFormSubmit }>
				<Switch>
					<Route exact path = '/' render = {() => (<SubForm1 fileName = {this.state.fileName} imgControlFunc1 = {this.handleChange} imgControlFunc2 = {this.handleSubmit} name = {this.state.name} controlFunc1 = {this.handleFullNameChange} controlFunc2 = {this.handleAboutChange} about = {this.state.about}/>)}/>
					<Route path = '/next' render = {() => (<SubForm2 controlFunc1 = {this.handleStateChange} state = {this.state.state} controlFunc2 = {this.handleAgeChange} age = {this.state.age} controlFunc3 = {this.handleEthinicitySelection} ethinicity = {this.state.ethinicity} selectedEthinicity = {this.state.selectedEthinicity} 
						controlFunc4 = {this.handleRaceSelection} race = {this.state.race} selectedRace = {this.state.selectedRace}
						controlFunc5 = {this.handleSexSelection} sex = {this.state.sex} selectedSex = {this.state.selectedSex}
						controlFunc6 = {this.handleHeightChange} height = {this.state.height} controlFunc7 = {this.handleWeightChange} weight = {this.state.weight}
						controlFunc8 = {this.handleClearForm}/>)}/> 
				</Switch>
				
			</form>
			</div>
			);
	}
}
