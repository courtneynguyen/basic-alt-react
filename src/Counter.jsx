var React = require('react');
import CounterActions from './CounterActions';

var Counter = React.createClass({
	handleClick(){
		CounterActions.incrementCounter(1);
	},
	render(){
		return (
		<div>
			<h1>Counter: {this.props.counter.count}</h1>
			<button onClick={this.handleClick}>Increment Counter</button>
		</div>
	)}
});

module.exports = Counter;
