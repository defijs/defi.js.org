/**
@method Matreshka.bindNode
@module matreshka/bindnode
@importance 3
@since 1.1
@summary Связывает свойство объекта с HTML элементом
@desc Этот статичный метод работает так же, как и {@link Matreshka#bindNode} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Matreshka#bindNode}
@example
const object = {};
Matreshka.bindNode(object, 'x', '.my-node');
*/
