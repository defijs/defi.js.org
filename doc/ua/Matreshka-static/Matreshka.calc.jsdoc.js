/**
@method Matreshka.calc
@module matreshka/calc
@oldlink #!Matreshka.linkProps
@importance 3
@since 1.1
@summary Створює залежність значення одної властивості від значень інших
@desc Цей статичний метод працює так само, як і {@link Matreshka#calc} та всі його варіації, але приймає в якості першого аргументу будь JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Matreshka#calc}
@example
const object = {};
object.a = 40;
object.b = 2;
Matreshka.calc(object, 'sum', ['a', 'b'], (a, b) => a + b);
alert(object.sum); // 42
*/
