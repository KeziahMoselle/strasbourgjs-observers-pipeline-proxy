const observers = Symbol('observers')

function makeObservable (target) {
  target[observers] = []

  target.observe = function (func) {
    this[observers].push(func)
  }

  return new Proxy(target, {
    set (target, property, value) {
      // Reflect.set(target, property, value)
      // Equal to : target[property] = value
      const success = Reflect.set(...arguments)

      if (success) {
        target[observers].forEach(observer => observer(property, value))
      }

      return success
    }
  })
}

const user = makeObservable({})

user.observe((key, value) => {
  log(`[[Set]] ${key}=${value}`)
})

user.name = 'John'

setTimeout(() => {
  user.lang = 'JavaScript'
}, 1500);

function log (content) {
  console.log(content)
  document.getElementById('log').innerText = content
  document.getElementById('target').innerText = JSON.stringify(user, null, 2)
}