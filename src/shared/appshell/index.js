import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class AppShell extends Component {
	render(){
		return(
			<div>
				<ul>
					<li>
						<NavLink activeStyle={{ fontWeight: 'bold' }} to={'/'}>
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={{ fontWeight: 'bold' }} to={'/catalog/1'}>
							CATALOG
						</NavLink>
					</li>
				</ul>
			</div>
		)
	}
}

export default AppShell