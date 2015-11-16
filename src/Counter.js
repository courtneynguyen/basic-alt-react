import React, {Component} from 'react';
import CounterActions from './CounterActions';

var Counter = class Counter extends Component{
	handleClick(){
		CounterActions.incrementCounter(1);
	}
	render(){
		return (
		<div>
			<h1>Counter: {this.props.counter.count}</h1>
			<button onClick={this.handleClick}>Increment Counter</button>
		</div>
	)}
}

module.exports = Counter;
