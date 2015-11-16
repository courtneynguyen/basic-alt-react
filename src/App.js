import React, {Component} from 'react';
import CounterStore from './CounterStore';
// var Counter = require('./Counter.jsx');
import Counter from './Counter';
var AltContainer = require('alt/AltContainer');


export default class App extends Component{
	render(){
		return(
		<AltContainer store={CounterStore}>
			<Counter />
		</AltContainer>
	)}
}
