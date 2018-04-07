/**
@member {object} Matreshka.parserBrackets
@module matreshka/parserbrackets
@importance 3
@since 1.5
@summary Contains brackets for {@link Matreshka#parseBindings bindings parser}
@desc ``parserBrackets`` object allows to change default syntax of the parser. It contains two properties: ``left`` (left bracket, "{{" by default) and ``right`` (right bracket, "}}" by default)
@example <caption>Use syntax  ``[[=property]]`` instead of ``{{property}}``</caption>
Matreshka.parserBrackets.left = '[[=';
Matreshka.parserBrackets.right = ']]';
*/
