/**
@member {object} Matreshka.parserBrackets
@module matreshka/parserbrackets
@importance 3
@since 1.5
@summary Содержит скобки для {@link Matreshka#parseBindings парсера}
@desc Объект ``parserBrackets`` позволяет изменить стандартный синтаксис парсера привязок. Он содержит два свойства: ``left`` (левая скобка, по умолчанию "{{") и ``right`` (правая скобка, по умолчанию "}}")
@example <caption>Заменяет поведение парсера, используя синтаксис ``[[=property]]`` вместо ``{{property}}``</caption>
Matreshka.parserBrackets.left = '[[=';
Matreshka.parserBrackets.right = ']]';
*/
