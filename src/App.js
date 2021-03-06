import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<h1>Redux</h1>
				<Message></Message>
				<Button></Button>
			</div>
		);
	}
}

App = connect()(App);

class Message extends Component {
	constructor(props) {
		super(props);

	}

	style = {
		fontSize: '20pt',
		padding: '20px 5px',
	}

	render() {
		return(
			<p style={this.style}>
				{this.props.message}: {this.props.counter}
			</p>
		);
	}
}

Message = connect((state) => state)(Message);

class Button extends Component {
	style = {
		fontSize: '16pt',
		padding: '5px 10px'
	}

	constructor(props) {
		super(props);
		this.doAction = this.doAction.bind(this);
	}

	doAction(event) {
		if(event.shiftKey) {
			this.props.dispatch({ type: 'DECREMENT' });
		} else if(event.ctrlKey) {
			this.props.dispatch({ type: 'RESET' });
		} else {
			this.props.dispatch({ type: 'INCREMENT' });
		}
	}

	render() {
		return(
			<button style={this.style} onClick={this.doAction}>
				CLICK
			</button>
		);
	}
}

Button = connect()(Button);

export default App;
