import React, { Component } from 'react';

class Catalog extends Component {
	constructor(props){
		super(props)
		let repos;
		if (__isBrowser__){
			repos = window.__INITIAL_DATA__
			delete window.__INITIAL_DATA__
		}else{
			repos = props.staticContext.data
		}
		this.state = {
			repos,
		}
	}
	render(){
		console.log(this.state.repos)
		return(
			<div>
				Catalog
			</div>
		)
	}
}

export default Catalog