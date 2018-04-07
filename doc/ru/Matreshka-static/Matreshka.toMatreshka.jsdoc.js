/**
@method Matreshka.toMatreshka
@oldlink #!Matreshka.to
@module matreshka/tomatreshka
@importance 3
@since 1.1
@summary Функция, конвертирующая произвольную структуру объектов и массивов в экземпляры {@link Matreshka.Object} и {@link Matreshka.Array}
@returns {matreshka} новосозданный экземпляр ``Matreshka``
@example
const mk = Matreshka.toMatreshka({
	a: 1,
	b: {
		c: 2
	},
	d: [{e: 1}, {e: 2}, {e: 3}]
});
*/
