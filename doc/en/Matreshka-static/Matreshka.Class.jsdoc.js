/**
@method Matreshka.Class
@module matreshka/class
@importance 2
@summary An implementation of classes based on the prototype inheritance
@desc The ``Class`` function allows to use the classic OOP when ECMAScript 2015 classes cannot be used somehow.

@param {object} prototype - Methods and properties
@param {object} [statics] - Static methods and properties

@returns {class} class (a class constructor to be exact)
@example
const A = Matreshka.Class({
	method1() { ... }
});

const B = Matreshka.Class({
	// B is inherited from A
	extends: A,
	method2() { ... }
});

const C = Matreshka.Class({
	// С is inherited from B
	extends: B,
	method2() {
		// calling the parent method
		B.prototype.method2.apply(this, arguments);
	},
	method3(a, b) { ... }
});

const D = Matreshka.Class({
	// D is inherited from C
	extends: C,
	method3() {
		// calling the parent method
		C.prototype.method2.call(this, arguments);
	}
});

@example <caption>Passing an object with static methods and properties</caption>
const MyClass = Matreshka.Class({
	method() { ... }
}, {
	staticProp: 'foo',
	staticMethod() {
		return 'bar';
	}
});

alert(MyClass.staticProp); // foo
alert(MyClass.staticMethod()); // bar
*/
