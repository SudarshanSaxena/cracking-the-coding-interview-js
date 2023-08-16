// find substring using sliding window O(n)

function checkIfSubString(string1, string2) { // string2 will always be the smaller one or equal one
  let left = 0
  let right = string2.length

  while (left < right) {
    if (string1.charAt(left) != string2.charAt(left)) {
      left++
      right = left + string2.length
    } else {
      left++
    }

    if (left == right) {
      return true
    }

    if (right > string1.length) {
      return false
    }

  }
}

console.log(checkIfSubString('abcd', 'abd'))

