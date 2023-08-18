class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")


a.next = b
b.next = c
c.next = d


printAllNodes(root){
  const current = root

  while (current.next != null) {
    console.log(current.val)
    current = current.next
  }
}
