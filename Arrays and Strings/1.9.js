// substring rotation

function checkIfSubStringRotation(string1, string2) {
  let index = 0
  let firstHalf = ''
  let secondHalf = ''
  let combinedString = ''

  while (index < string1.length) {
    if (string1.charAt(index) != string2.charAt(index)) {
      index++
    }
  }


  for (let i = 0; i < index; i++) {
    firstHalf += `${string1.charAt(i)}`
  }

  for (let i = index; i < string1.length; i++) {
    secondHalf += `${string1.charAt(i)}`
  }


  combinedString = `${string1}${string1}`

  return checkIfSubString(combinedString, string2)
}

function checkIfSubString(string1, string2) { // string2 will always be the smaller one or equal one
  let left = 0
  let right = string2.length
  let index = 0

  while (left < right) {
    if (string1.charAt(left) != string2.charAt(index)) {
      left++
      right = left + string2.length
      index = 0
    } else {
      left++
      index++
    }

    if (left == right) {
      return true
    }

    if (right > string1.length) {
      return false
    }

  }
}

console.log(checkIfSubStringRotation('watterbottle', 'erbottlewat'))
