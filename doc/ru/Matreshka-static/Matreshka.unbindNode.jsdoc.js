/**
@method Matreshka.unbindNode
@module matreshka/unbindnode
@importance 3
@since 1.1
@summary Разрывает связь между свойством и HTML элементом
@desc Этот статичный метод работает так же, как и {@link Matreshka#unbindNode} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Matreshka#unbindNode}
@example
const object = {};
Matreshka.unbindNode(object, 'x', '.my-node');
*/
