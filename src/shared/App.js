import React, { Component } from 'react';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './NoMatch';
import AppShell from './appshell';

class App extends Component {

	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
				<AppShell />
				<Switch>
					{ routes.map(({path, exact, component: C, ...rest})=> (
						<Route
							key={ path }
							path={ path }
							exact={ exact }
							render={(props)=> (
								<C {...props} {...rest} />
							)}
						/>
					)) }
					<Route render={(props)=> <NoMatch/>}/>
				</Switch>
			</div>
		)
	}
}

export default App