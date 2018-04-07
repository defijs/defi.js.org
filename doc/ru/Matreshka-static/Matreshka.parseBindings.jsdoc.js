/**
@method Matreshka.parseBindings
@module matreshka/parsebindings
@importance 3
@since 1.1
@summary Парсит DOM дерево, объявляя привязки свойств, заключенных в двойные фигурные скобки.
@desc Этот статичный метод работает так же, как и {@link Matreshka#parseBindings} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {$nodes} Коллекция обработанных DOM узлов, переданная в функцию в качестве аргумента
@see {@link Matreshka#parseBindings}
@example
const object = {};
const $node = Matreshka.parseBindings(object, `<h3>
        Hello, {{name}}
    </h3>`);
object.name = 'World';
*/
