/**
@method Matreshka.selectAll
@module matreshka/selectall
@importance 3
@since 1.1
@summary Возвращает элементы из песочницы, соответствующие селектору
@desc Этот статичный метод работает так же, как и {@link Matreshka#selectAll} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {$nodes} найденные элементы
@see {@link Matreshka#selectAll}
@example
const object = {};
Matreshka.bindNode(object, 'sandbox', '.app');
Matreshka.selectAll(object, '.my-element');
*/
