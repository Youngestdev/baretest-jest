// @ts-ignore

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.length == 0 ? "Not enough items!" : this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length > 0 ? false : true 
  }

  printStack() {
    let str = "";
    for ( let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ", ";
    }
    return str;
  }  

  clear() {
    while (this.items.length != 0) {
      this.items.pop()
    }
  }

  length() {
    return this.items.length
  }
}

module.exports = new Stack()
