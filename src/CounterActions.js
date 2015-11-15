import alt from './alt';

class CounterActions {
	incrementCounter(num){
		this.dispatch(num);
	}
}

module.exports = alt.createActions(CounterActions);
