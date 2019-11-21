import Observable from './Observable.js'

// Create a new instance of Observable
const Observer = new Observable()

// Declare DOM elements
const usernameInput = document.getElementById('usernameInput')
const usernameSubscribe = document.getElementById('usernameSubscribe')
const usernameUnsubscribe = document.getElementById('usernameUnsubscribe')
const usernameValue = document.getElementById('usernameValue')

// Utility function
function updateValue (value) {
  usernameValue.textContent = value
}

// Subscribe to the event
Observer.subscribe(updateValue)

// Listen to the event and notify all subscribers
usernameInput.addEventListener('keyup', (event) => {
  Observer.notify(event.target.value)
})