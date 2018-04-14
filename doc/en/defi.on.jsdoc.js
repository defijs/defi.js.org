/**
@method defi.on
@importance 1
@fires addevent
@fires addevent:NAME
@summary Adds an event handler
@desc The method adds an event handler for an object. Refer to the complete list of possible events with the description here: {@link #typedef-eventNames}.

@see {@link defi.off}
@see {@link defi.trigger}
@param {object} obj - A target object
@param {eventNames} names - An event name or some names which are separated by a space (for example, ``"change:x ajaxcomplete change:y"``)
@param {eventHandler} callback - A function which is caused by the event
@param {boolean} [triggerOnInit=false] - If ``triggerOnInit`` argument equals ``true``, the handler will be called immediately after event initialization.
@returns {object} obj
@example
defi.on(obj, 'foo', () => {
	alert('Custom Event is fired');
});

defi.trigger(obj, 'foo');

@example <caption>Calling a handler immediately after event initialization</caption>
// Displays "bar" at once and waits for a firing of "foo" event
defi.on(obj, 'foo', () => {
	alert('bar');
}, true);
*/

/**
@method defi.on
@importance 2
@variation 2
@since 1.1
@summary Alternative syntax: "eventname-handler" pairs
@desc In the {@link defi.on} method the object with the key-element pairs can be passed to avoid multiple invocation of the method and reduce your code.
@param {object} obj - A target object
@param {object} evtnameHandlerObject - An object where keys are event names and values are event handlers
@param {boolean} [triggerOnInit=false] - If ``triggerOnInit`` argument  equals ``true``, all handlers will be called immediately after event initialization.
@param {object} obj - A target object

@example
defi.on(obj, {
	'custom': evt => ...,
	'click::x': evt => ...,
	'change:y': evt => ...,
});
*/