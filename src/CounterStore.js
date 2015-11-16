var alt = require('./alt');
var CounterActions = require('./CounterActions');

class CounterStore {
  constructor() {
    this.counter = {count: 0};

    this.bindListeners({
      incrementCounter: CounterActions.INCREMENT_COUNTER
    });

	 this.exportPublicMethods({
		getCounter: this.getCounter
	 });
  }

  incrementCounter(num) {
    this.counter.count+= num;
  }

  getCounter(){
	  var { counter } = this.getState();
	  return counter;
  }
}

module.exports = alt.createStore(CounterStore, 'CounterStore');
