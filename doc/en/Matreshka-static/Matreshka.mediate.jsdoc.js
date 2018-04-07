/**
@method Matreshka.mediate
@module matreshka/mediate
@importance 3
@since 1.1
@summary Transforms property value on its changing
@desc This static method works the same as {@link Matreshka#mediate} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {object} The first argument
@see {@link Matreshka#mediate}
@example
const object = {};
Matreshka.mediate(object, 'x', String);
object.x = 42;
alert(typeof object.x); // string
*/
