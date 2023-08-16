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

console.log(checkIfSubStringRotation('watterbottle', 'erbottlewat'))
