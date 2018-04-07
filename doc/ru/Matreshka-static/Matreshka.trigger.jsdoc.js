/**
@method Matreshka.trigger
@module matreshka/trigger
@importance 3
@since 1.1
@summary Генерирует событие
@desc Этот статичный метод работает так же, как и {@link Matreshka#trigger} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Matreshka#trigger}
@example
const object = {};
Matreshka.on(object, 'foo', evt => {
	alert(evt.hello);
});

Matreshka.trigger(object, 'foo', { hello: 'World' });
*/
