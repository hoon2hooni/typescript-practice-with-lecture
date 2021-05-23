{
interface Stack {
  //interface에서 get mtthod활용하는 방법 알아보기 
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

class Stack {
  //먼저 이렇게 다 선언을 해주어야함
  _stack: string[];
  size: number;

  constructor() {
    this._stack = [];
    this._size = 0;
  }
  
  get stack() {
    return this._stack;
  }
  
  push(value: string) {
    const pushedStack = [...this._stack, value];
    this._size += 1;
    this._stack = pushedStack;
    return this;
  }

  pop() {
    if (this.size < 1) {
      console.log("더이상 pop할 수 없습니다.")
      return this;
    }
    const poppedItem:string = this._stack[this.size-1]
    const popedStack = this._stack.slice(0, this.size - 1);
    this._stack = popedStack;
    this._size -= 1;
    return poppedItem;
  }
}
const a: Stack = new Stack();
a.push('아아').push('아이');
// a.pop().pop().pop(;
console.log(a.stack);

}