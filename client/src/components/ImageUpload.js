import React,{Component} from 'react'
import axios from 'axios'

export default class IamgeUpload extends Component{
	constructor(props){
		super(props);
		
	}
	
	render() {
		let fileName = this.props.state;
		let $imagePreview = null;
		let src = '/image/'+fileName
		if(fileName){
			$imagePreview = (<img src={src} alt = "Not loaded"/>);
		}
		else {
			$imagePreview = (<p>No image</p>)
		}
		return (
			<div>
			<div>
				<input type = "file" name = "file" id = "file" onChange = {this.props.handleChange} />
				<label for="file">Choose File</label>
				<button onClick = {this.props.handleSubmit}>Submit</button>
			</div>
			<div>
				{$imagePreview}
			</div>
			</div>
			);
	}
}