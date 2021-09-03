class EventEmitter {
  constructor() {
    this.targets = new WeakMap();
  }

  on(targetObject, handlers) {
    if (!this.targetObject.has(targetObject)) {
      this.targets.set(targetObject, {})
    }

    const targetHandlers = this.targets.get(targetObjects);
    Object.keys(targetHandlers).forEach((handlerName) => {
      targetHandlers[handlerName] = targetHandlers[handlerName] || [];
      targetHandlers[handlerName].push(handlers[handlerName].bind(targetObject));
    });
  }

  fire(targetObject, handlerName, args) {
    const targetHandlers = this.targets.get(targetObject);
    if (targetHandlers && targetHandlers[handlerName]) {
      targetHandlers[handlerName].forEach(handler => handler(args));
    }
  }
}