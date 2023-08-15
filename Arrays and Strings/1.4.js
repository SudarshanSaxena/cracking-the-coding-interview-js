// Palindrome permutation

// the actual question is if we can create a palindrome string from the given string


function checkIfPalindromeExists(string) {
  let hashMap = new Map()
  let foundOneOdd = 0

  for (let char of string) {
    hashMap.set(char, (hashMap.get(char) || 0) + 1)
  }

  for (let [key, value] of hashMap) {
    if (value % 2 != 0) {
      foundOneOdd += 1
    }
  }

  return foundOneOdd <= 1

}

console.log(checkIfPalindromeExists('abccba'))




