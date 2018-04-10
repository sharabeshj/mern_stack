import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<header>
					<nav>
						<ul>
							<li><Link to = '/'>Introduction</Link></li>
							<li><Link to = '/next'>Personal Information</Link></li>
						</ul>
					</nav>
				</header>
			</div>
			)
	}
}