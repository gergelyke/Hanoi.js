Hanoi.js
========

The Tower of Hanoi recursive javascript implementation

Usage:

 ```javascript

var hanoi = new Hanoi();

//How fast the change events will fire
hanoi.setInterval(2000);

//Set up the callbacks for changes
hanoi.on('change', function (data) {
	console.log(data);
});

//Set the number of disks on the first pile, and solve the Hanoi-Tower
hanoi.solve(5);
 ```
