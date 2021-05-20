interface Stack {
  //interface에서 get mtthod활용하는 방법 알아보기
  //들미코딩 엘린님 size ㅓ떻게 했는지 보기!
  readonly size: number;
  push(value: string): void;
  pop(): string;
}
//한번 만들어지면 절대 변경 불가능 !
type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
}

/* 내가 계속 실수한 부분
optional 줄때 
변수명 ?: string; 이렇게 주어야하는데
변수명 :?string 이렇게 줌 계속 오류났었음

*/

class StackImpl implements Stack {
  //여기서 size는 readonly로 해주면 안됨 왜냐하면 
  //push해줄때마다 하나식 변경해야하는데 readonly로 해주면 변경이 
  //되지 않음

  private _size: number = 0;
  //이거 이해 못하겠다 더 보자.
  private head?: StackNode
  get size() {
    return this._size;
  }

  push(value: string) {
    //readonly로 StackNode의 변수 변경을 지켜주기 위해 만들면서 바로 다음걸 가리키게 함
    const node: StackNode = { value, next: this.head }
    //그 다음 head를 추가된 노드를 가리키게함
    this.head = node;
    //난 ++this._size 라고 선언함 이거 차이 확인해 보자
    this._size++;
  }

  //내코드는 여기서 string | undefiend로 정의해줬음
  //근데 그려면 사용하는 사람이 유효성 검사를 해야함 
  //에러를 던져주는게 더 좋아요

  pop(): string {
    /*여기서 null 체클르 해주는 이유는? 
      타입스크립트는 자바스크립트로 컴파일될때 변환됨
      이때 this.head === undefined 로 강하게 할경우
      null로 변환되는걸 처리를 못할수도 있음 
      == 로 할경우 null과 undefined는 같은것으로 처리됨 
      이런 예외처리르 하기위해 이렇게 해두었음
    */
    if (this.head == null) {
      throw new Error('This stack was already empty!')
    }
    const node = this.head;
    //head가 지금 head의 다음것을 가리키게함
    this.head = node.next;
    this._size--;
    return node.value;
  }

}
const stack = new StackImpl();
stack.push("가")
stack.push("나")
stack.push("다")
while (stack.size !== 0) {
  console.log(stack.pop());
}