// one edit away

function checkIfOndeEditAway(string1, string2) {
  if (Math.abs(string1.length - string2.length) > 1) {
    return false
  } else {
    if (string1.length == string2.length) {
      return checkifOneReplace(string1, string2)
    }

    if (string1.length > string2.length) {
      return checkIfOneAddOrRemove(string1, string2)
    }

    if (string2.length > string1.length) {
      return checkIfOneAddOrRemove(string1, string2)
    }
  }
}

function checkifOneReplace(string1, string2) {
  let foundDifference = false

  let index = 0

  while (index < string1.length) {


    if (string1.charAt(index) != string2.charAt(index)) {
      if (foundDifference) {
        return false
      }
      foundDifference = true
    }
    index++
  }

  return true
}

function checkIfOneAddOrRemove(longerString, shorterString) {
  let foundDifference = false
  let index1 = 0
  let index2 = 0

  while (index1 < longerString.length) {

    if (longerString.charAt(index1) != shorterString.charAt(index2)) {
      if (foundDifference) {
        return false
      }
      foundDifference = true
      index1++
    } else {
      index1++
      index2++
    }
  }
  return true
}


console.log(checkIfOndeEditAway('pale', 'pbke'))
