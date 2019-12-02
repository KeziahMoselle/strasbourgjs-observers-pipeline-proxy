const target = {}

const handler = {
  get (target, property) {
    setText('get', `[[Get]] on ${property}`)
    return target[property]
  },
  set (obj, prop, value) {
    setText('set', `[[Set]] on ${prop} to ${value}`)
    return obj[prop] = value
  }
}

const proxy = new Proxy(target, handler)

proxy.a = 1

const b = proxy.a

document.getElementById('target').innerText = JSON.stringify(target, null, 2)

function setText (el, value) {
  console.log(value)
  document.getElementById(el).innerText = value
}