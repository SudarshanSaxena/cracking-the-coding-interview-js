// URLify

function convertToUrlString(string) {
  let strArray = string.split(" ")

  let urlStr = strArray.join("%20")

  return urlStr
}

console.log(convertToUrlString("hello world"))
