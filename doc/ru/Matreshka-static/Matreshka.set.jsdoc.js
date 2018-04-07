/**
@method Matreshka.set
@module matreshka/set
@importance 3
@since 1.1
@summary Устанавливает значение свойства, позволяя передать объект события в качестве третьего аргумента
@desc Этот статичный метод работает так же, как и {@link Matreshka#set} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Matreshka#set}
@example
const object = {};
Matreshka.set(object, 'x', 42, {
	someOption: true
});
*/
