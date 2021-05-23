/* 내가 계속 실수한 부분
optional 줄때
변수명 ?: string; 이렇게 주어야하는데
변수명 :?string 이렇게 줌 계속 오류났었음

*/
var StackImpl = /** @class */ (function () {
    function StackImpl() {
        //여기서 size는 readonly로 해주면 안됨 왜냐하면 
        //push해줄때마다 하나식 변경해야하는데 readonly로 해주면 변경이 
        //되지 않음
        this._size = 0;
    }
    Object.defineProperty(StackImpl.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    StackImpl.prototype.push = function (value) {
        //readonly로 StackNode의 변수 변경을 지켜주기 위해 만들면서 바로 다음걸 가리키게 함
        var node = { value: value, next: this.head };
        //그 다음 head를 추가된 노드를 가리키게함
        this.head = node;
        //난 ++this._size 라고 선언함 이거 차이 확인해 보자
        this._size++;
    };
    //내코드는 여기서 string | undefiend로 정의해줬음
    //근데 그려면 사용하는 사람이 유효성 검사를 해야함 
    //에러를 던져주는게 더 좋아요
    StackImpl.prototype.pop = function () {
        /*여기서 null 체클르 해주는 이유는?
          타입스크립트는 자바스크립트로 컴파일될때 변환됨
          이때 this.head === undefined 로 강하게 할경우
          null로 변환되는걸 처리를 못할수도 있음
          == 로 할경우 null과 undefined는 같은것으로 처리됨
          이런 예외처리르 하기위해 이렇게 해두었음
        */
        if (this.head == null) {
            throw new Error('This stack was already empty!');
        }
        var node = this.head;
        //head가 지금 head의 다음것을 가리키게함
        this.head = node.next;
        this._size--;
        return node.value;
    };
    return StackImpl;
}());
var stack = new StackImpl();
stack.push("가");
stack.push("나");
stack.push("다");
while (stack.size !== 0) {
    console.log(stack.pop());
}
//다
//나
//가
