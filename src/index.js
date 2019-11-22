import Subject from './Subject.js'

// Create a new instance of Observable
const subject = new Subject()

// Declare DOM elements
const usernameInput = document.getElementById('usernameInput')
const usernameValue = document.getElementById('usernameValue')

// Utility function
function updateValue (value) {
  usernameValue.textContent = value
}

// Subscribe to the event
subject.subscribe(updateValue)

// Listen to the event and notify all subscribers
usernameInput.addEventListener('keyup', (event) => {
  subject.notify(event.target.value)
})