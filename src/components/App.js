import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

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

	//Gives a gallery on the first loading
	componentDidMount() {
		this.handleSearch();
	}

	//When the url changes due to links and have a keyword it will call a search on it
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			if (this.props.match.params.keyword) {
				this.handleSearch(this.props.match.params.keyword);
			}
		}
	}

	//Gets the data, default is about europe
	handleSearch = (query = 'europe') => {
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
			<div className="App">
				<Search handleSearch={this.handleSearch} />
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
		);
	}
}
export default App;
