import React, {Component} from 'react';
import CounterStore from './CounterStore';
import CounterActions from './CounterActions';

export default class Counter extends Component {
	constructor(){
		super();
		this.state = CounterStore.getState();
		console.log('constructing, ', this.state);
	}

	componentDidMount(){
		CounterStore.listen(this.handleClick);
	}

	componentWillUnmount(){
		CounterStore.unlisten(this.handleClick);
	}

	handleClick(syntheticMouseClick){
		// CounterStore.getCounter();
		CounterActions.incrementCounter(1).defer();
	}

	render(){
		return (
			<div>
				<h1>{this.state.counter.count}</h1>
				<button onClick={this.handleClick}>Increment Counter</button>
			</div>
		);
	}
}
