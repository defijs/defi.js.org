/**
@function defi.off
@module defi/off
@fires removeevent
@fires removeevent:NAME
@summary Deletes an event handler
@desc It deletes a handler which has been created before. All arguments (except of a target object of course) are optional. You can delete both all the events (without passing event names) and separate ones (having passed only the event name, the event name and the handler).

@see {@link defi.on}
@see {@link defi.trigger}

@param {object} obj - A target object
@param {eventNames} [names] - An event name or a an array of event names
@param {eventHandler} [callback] - A function-handler
@returns {object} obj
@example
defi.off(obj, 'change:x');
defi.off(obj, ['change:x', 'bind']);
@example <caption>The deletion of all events</caption>
defi.off(obj);
@example <caption>The deletion of an event with definite handler</caption>
const handler = function() {
	//...
}
defi.on(obj, 'change:x', handler);
defi.off(obj, 'change:x', handler);
*/
