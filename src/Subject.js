class Subject {
  // List of observers functions
  observers = []

  // Add the function to the observers array
  subscribe (func) {
    this.observers.push(func)
  }

  // Remove the function from the observers
  unsubscribe (func) {
    this.observers = this.observers.filter(subscriber => subscriber !== func)
  }

  // Call all observers functions
  notify (data) {
    this.observers.forEach(observer => observer(data))
  }
}

export default Subject