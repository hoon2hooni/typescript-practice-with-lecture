{
  interface Stack {
    //interface에서 get mtthod활용하는 방법 알아보기
    //들미코딩 엘린님 size ㅓ떻게 했는지 보기!
    size: number;
    push(value: string): this;
    pop(): string;
  }

  // type Node = {
  //   value: null | string;
  //   pointer: null | Node;
  // }
  
  class Node {

    value: null | string;
    pointer: Node | undefined;

    constructor(value :string | null) {
      this.value = value;
      this.pointer = undefined;
    };
  }

  class StackImpl implements Stack {
    size: number = 0;
    header: Node;
  
    constructor() {
      this.size = 0;
      this.header = new Node(null);
    }
    
    push(value: string): this {
      const nextNode = new Node(value);
      nextNode.pointer = this.header;
      this.header = nextNode;
      ++this.size
      return this
    }

    private isEmpty(): boolean {
      if (this.size === 0) {
        return true;
      }
      return false;
    }
    pop(): string | null{
      if (this.isEmpty()) {
        console.log("빈 배열입니다")
        return null;
      }
      //여기서 this.header의 경우 null도 될수있고 Node도 될수있따
      //이로 인해 
  
      const endValue = this.header.value;
      if (typeof (this.header.pointer) === "object") {
        this.header = this.header.pointer;
        --this.size
      }
      return endValue;
    }
  }
  const stact = new StackImpl();
  stact.push("3");
  stact.push("3");
  stact.pop()
  stact.pop()
  console.log(stact.pop());
  console.log(stact);
}

// class LinkedList {

//   header: Node

// }
// class Stack {

// }
