/**
@method Matreshka.once
@module matreshka/once
@importance 3
@since 1.1
@summary Adds event handler which can be called only once
@desc This static method works the same as {@link Matreshka#once} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {object} The first argument
@see {@link Matreshka#once}
@example
const object = {};
Matreshka.once(object, 'foo', evt => {
	//...
});
*/
