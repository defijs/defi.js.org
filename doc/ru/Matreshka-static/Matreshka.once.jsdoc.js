/**
@method Matreshka.once
@module matreshka/once
@importance 3
@since 1.1
@summary Добавляет обработчик события, который может быть вызван однажды
@desc Этот статичный метод работает так же, как и {@link Matreshka#once} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Matreshka#once}
@example
const object = {};
Matreshka.once(object, 'foo', evt => {
	//...
});
*/
