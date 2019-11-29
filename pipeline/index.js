function doubleSay (str) {
  return `${str}, ${str}`
}

function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1)
}

function append (str, char) {
  return str + char
}

// Now ❌
const result = append(append(capitalize(doubleSay("hello")), '!'), '?')

// Tomorrow ✔️
const pipeResult = "hello"
  |> doubleSay
  |> capitalize
  |> (_ => append(_, '!')) // Arrow functions
  |> append(?, '?') // Partial Application proposal



document.getElementById('pipe-result').innerText = pipeResult
document.getElementById('result').innerText = result