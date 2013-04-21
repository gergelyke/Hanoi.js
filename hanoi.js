/* global setTimeout */

var Hanoi = (function () {

	var _solve,
		_interval = 1000,
		_eventStore = [],
		_changes = [],
		_setInterval,
		_on,
		_emitChange,
		_isEmitting = false;

	_setInterval = function _setInterval (time) {
		_interval = time;
	};

	_on = function _on (event, callback) {
		_eventStore[event] = callback;
	};

	_emitChange = function _emitChange () {
		if(_changes.length) {
			_eventStore['change'](_changes.shift());
			setTimeout(function () {
				_emitChange();
			},_interval);
		}
	}

	_solve = function _solve (_stackSize, startPole, endPole) {
		var intermediatePole;

		if(!startPole) {
			startPole = 1;
		}
		if(!endPole) {
			endPole = 3;
		}
		
		intermediatePole = 6 - startPole - endPole;
		
		if (_stackSize== 0){
			return; 
		}

		_solve(_stackSize - 1, startPole, intermediatePole);

		_changes.push({
			disk: _stackSize,
			from: startPole,
			to: endPole
		});
		_solve(_stackSize - 1, intermediatePole, endPole);

		if(!_isEmitting) {
			_isEmitting = true;
			_emitChange();
		}

	};

	return {
		solve: _solve,
		setInterval: _setInterval,
		on: _on
	};
});