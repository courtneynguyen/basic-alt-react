import alt from './alt';
import CounterActions from './CounterActions';

class CounterStore {
	constructor(){
		this.counter = {count: 0};

		this.bindListeners({
			handleIncrementCounter: CounterActions.INCREMENT_COUNTER
		});
	}

// prototype methods on this class are called action handlers
	handleIncrementCounter(num){
		console.log('received num ', num);
		this.counter.count = this.counter.count++;
	}

	static getCounter(){
		return this.counter;
	}
}

module.exports = alt.createStore(CounterStore, 'CounterStore');
