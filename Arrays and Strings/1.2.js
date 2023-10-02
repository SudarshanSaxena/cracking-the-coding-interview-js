// Check permutation - if string1 can be made from string 2

function checkPermutation(string1, string2) {
  let hashMap1 = new Map()
  let hashMap2 = new Map()

  for (let char of string1) {
    hashMap1.set(char, (hashMap1.get(char) || 0) + 1)
  }
  for (let char of string2) {
    hashMap2.set(char, (hashMap2.get(char) || 0) + 1)
  }

  if (hashMap1.size != hashMap2.size) return false

  for (let [key, value] of hashMap1) {
    if (!hashMap2.has(key) || hashMap2.get(key) != value) return false
  }

  return true

}


console.log(checkPermutation('abc', 'cab'))
