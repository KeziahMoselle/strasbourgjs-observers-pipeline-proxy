const list = document.getElementById('list')
const observer = new MutationObserver(onMutation)
const options = {
  attributes: true,
  childList: true,
  subtree: true
}

function onMutation (mutationsList, observer) {
  for (const mutation of mutationsList) {
    console.log(mutation.type)
    // attributes
    // characterData
    // childList
  }
}

observer.observe(list, options)

// Insert new list items
document.getElementById('add-item').addEventListener('click', () => {
  list.insertAdjacentHTML('beforeend', `<li>
    Another item !
  </li>`)
})

// Add class to the last item
document.getElementById('add-class').addEventListener('click', () => {
  const lastIndex = list.children.length - 1
  list.children[lastIndex].classList.add('added')
})

document.getElementById('unobserve').addEventListener('click', () => {
  observer.disconnect()
})

document.getElementById('observe').addEventListener('click', () => {
  observer.observe(list, options)
})
