import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Jotto from './Jotto';
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Jotto />
			</Provider>
		);
	}
}

export default App;
