/**
@method Matreshka.onDebounce
@module matreshka/ondebounce
@importance 3
@since 1.1
@summary Добавляет обработчик события, вызываемый лишь однажды за определенный промежуток времени
@desc Этот статичный метод работает так же, как и {@link Matreshka#onDebounce} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Matreshka#onDebounce}
@example
const object = {};
Matreshka.onDebounce(object, 'foo', evt => {
	//...
});
*/
