export class Stack {
  data: string[];
  top: number;

  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(str: string) {
    this.data[this.top] = str;
    this.top = this.top + 1;
  }

  peek(): string {
    return this.data[this.top - 1];
  }

  isEmpty(): boolean {
    return this.top === 0;
  }

  pop(): string | undefined {
    if (!this.isEmpty()) {
      this.top = this.top - 1;
      return this.data.pop();
    } else {
      throw new Error('array is not set');
    }
  }
}

export default function isValid(str: string): boolean {
  const stack = new Stack();

  for (let c of str) {
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else if (c === ')' && !stack.isEmpty() && stack.peek() === '(') {
      stack.pop();
    } else if (c === ']' && !stack.isEmpty() && stack.peek() === '[') {
      stack.pop();
    } else if (c === '}' && !stack.isEmpty() && stack.peek() === '{') {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.isEmpty();
}

// console.log(isValid(str));

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
