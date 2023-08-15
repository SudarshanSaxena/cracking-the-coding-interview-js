// string compression

function compressString(string) {
  let hashMap = new Map()

  for (let char of string) {
    hashMap.set(char, (hashMap.get(char) | 0) + 1)
  }

  let compressedString = ''

  for (let [key, value] of hashMap) {
    compressedString += `${key}${value}`
  }

  if (string.length <= compressedString.length) {
    return string
  } else {
    return compressedString
  }
}

console.log(compressString('abcd'))
