// Algo to determine if all charaters are unique in a string

function checkIfUnique(string) {
  let duplicateFlag = false
  const hashMap = new Map()

  for (let char of string) {
    hashMap.set(char, (hashMap.get(char) || 0) + 1)
  }

  for (const [key, value] of hashMap) {
    if (value > 1) return true
  }
}

console.log(checkIfUnique('abca'))
