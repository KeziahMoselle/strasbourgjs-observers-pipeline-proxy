class Observable {
  observers = []

  subscribe (func) {
    this.observers.push(func)
  }

  unsubscribe (func) {
    this.observers = this.observers.filter(subscriber => subscriber !== func)
  }

  notify (data) {
    this.observers.forEach(observer => observer(data))
  }
}

export default Observable