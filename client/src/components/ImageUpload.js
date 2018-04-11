import React,{Component} from 'react'
import axios from 'axios'
import { Row,Col,MediaBox } from 'react-materialize'
export default class IamgeUpload extends Component{
	constructor(props){
		super(props);
		
	}
	
	render() {
		let fileName = this.props.state;
		let src = '/image/'+fileName
		
		return (
				<Row>
				<Col s={2}>
				<MediaBox src={src} width = "200" alt = "Upload to view" caption = "Your Upload"/>
				</Col>
				<Col s={4}>
				<label for = "file" > Choose Profile Picture </label>
				<input type = "file" name = "file" id = "file" onChange = {this.props.handleChange}/>
				</Col>
				</Row>
			);
	}
}