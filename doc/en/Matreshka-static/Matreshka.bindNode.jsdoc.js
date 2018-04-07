/**
@method Matreshka.bindNode
@module matreshka/bindnode
@importance 3
@since 1.1
@summary Binds a property of an object to HTML node, implementing two-way data binding
@desc This static method works the same as {@link Matreshka#bindNode} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {object} The first argument
@see {@link Matreshka#bindNode}
@example
const object = {};
Matreshka.bindNode(object, 'x', '.my-node');
*/
