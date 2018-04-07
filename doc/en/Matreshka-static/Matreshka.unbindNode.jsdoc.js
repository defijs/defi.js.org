/**
@method Matreshka.unbindNode
@module matreshka/unbindnode
@importance 3
@since 1.1
@summary Breaks a binding between given property and HTML node
@desc This static method works the same as {@link Matreshka#unbindNode} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {object} The first argument
@see {@link Matreshka#unbindNode}
@example
const object = {};
Matreshka.unbindNode(object, 'x', '.my-node');
*/
