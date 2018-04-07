/**
@method Matreshka.on
@module matreshka/on
@importance 3
@since 1.1
@summary Добавляет обработчик события
@desc Этот статичный метод работает так же, как и {@link Matreshka#on} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Matreshka#on}
@example
const object = {};
Matreshka.on(object, 'foo', evt => {
	alert(evt.hello);
});

Matreshka.trigger(object, 'foo', { hello: 'World' });
*/
