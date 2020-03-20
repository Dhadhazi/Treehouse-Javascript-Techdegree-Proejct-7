import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from './Search';
import QuickLinks from './QuickLinks';
import Gallery from './Gallery';
import NoPage from './NoPage';

class App extends Component {
	constructor() {
		super();
		this.state = {
			photos: [],
			loading: true,
			title: ''
		};
	}

	//Checks if the route is /search/anything, if yes get the keyword and initate the search, otherwise just call search for trees
	componentDidMount() {
		const regex = new RegExp('^/search/.+');
		if (regex.test(window.location.pathname)) {
			const query = window.location.pathname.split('/');
			this.handleSearch(query[2]);
		}
		else {
			this.handleSearch();
		}
	}

	//Gets the data, default is about trees
	handleSearch = (query = 'tree') => {
		fetch(
			`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=1478888a4d85ae309e235cf5324675ee&tags=${query}&per_page=12&page=1&format=json&nojsoncallback=1`
		)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					loading: false,
					title: query,
					photos: responseData.photos.photo
				});
			})
			.catch((error) => {
				console.log('Error fetching the data', error);
			});
	};

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Search />
					<QuickLinks />
					<Switch>
						<Route
							exact
							path={[
								'/',
								'/search/:query'
							]}
						>
							{this.state.loading ? (
								<p>Loading...</p>
							) : (
								<Gallery data={this.state.photos} title={this.state.title} />
							)}
						</Route>
						<Route component={NoPage} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
export default App;
