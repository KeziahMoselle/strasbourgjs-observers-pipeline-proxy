function plusOne (number) {
  return number + 1
}

function plusTwo (number) {
  return number + 2
}

const result = 0
  |> plusOne
  |> plusTwo

document.getElementById('result').innerText = result