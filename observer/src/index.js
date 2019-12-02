import Subject from './Subject.js'

// Create a new instance of Subject
const subject = new Subject()

// Listen to the event and notify all subscribers
document.getElementById('usernameInput')
  .addEventListener('keyup', event => subject.notify(event.target.value))

// Loop through all our paragraphs
for (const observerElement of document.querySelectorAll('.observer')) {
  // Create a unique function
  function update (value) {
    observerElement.querySelector('p').textContent = value
  }

  // Subscribe the function
  subject.subscribe(update)

  // Click on the subscribe btn
  observerElement.querySelector('.btn-subscribe')
    .addEventListener('click', () => {
      subject.subscribe(update)
    })

  // Click on the unsubscribe btn
  observerElement.querySelector('.btn-unsubscribe')
    .addEventListener('click', () => subject.unsubscribe(update))
}




  
  /*=============================================
  =            Styling purpose                  =
  =============================================*/

// Loop through all our paragraphs
for (const observerElement of document.querySelectorAll('.observer')) {
  observerElement.classList.add('on')
  disableBtn(observerElement, '.btn-subscribe')

  // Click on the subscribe btn
  observerElement.querySelector('.btn-subscribe')
    .addEventListener('click', () => {
      observerElement.classList.add('on')
      observerElement.classList.remove('off')
      disableBtn(observerElement, '.btn-subscribe')
      enableBtn(observerElement, '.btn-unsubscribe')
    })

  // Click on the unsubscribe btn
  observerElement.querySelector('.btn-unsubscribe')
    .addEventListener('click', () => {
      observerElement.classList.add('off')
      observerElement.classList.remove('on')
      enableBtn(observerElement, '.btn-subscribe')
      disableBtn(observerElement, '.btn-unsubscribe')
    })
}

function disableBtn (element, selector) {
  element.querySelector(selector)
    .setAttribute('disabled', 'true')
}

function enableBtn (element, selector) {
  element.querySelector(selector)
    .removeAttribute('disabled')
}