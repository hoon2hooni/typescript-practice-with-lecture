{
    const num: number = -6;

const str: string = "hello";

const bool: boolean = false;

//undefined만 선언된 변수가는 없음

let age: number | undefined;

age = undefined;
age = 1;


let person: null; 

person = null;
pereson = 1;

let person2: string | null;

//보편적으로 undefined를 많이 넣음
//데이터가 있거나 없가나 할때는 null을 사용하는게 더 맞음


//이렇게도 많이 나옴
function find(): number | undefined {

}
//unknown
//알수 없을때 ; 이거 좀 나쁜 냄새 가능하면 안쓴느게 좋아요
//타입이 없는 자바스크립트와 연동할때 사요악능
//자바스크립트에서 리턴하는 타입이 모를때 unknown을 사용할 경우있음
//왠만하면 쓰지말자..

let notSure: unknown = 0;
//any 
//어떤것도 이것도 똥임.. 가능하면 안쓰는게 좋다.
//unknown은 좀 잘 모르겠어 겸손 ...한느낌
//any는 너무 당당한 뉘앙스 가능하면 안쓰는게 좋음

let anything: any = 0;
anything = "hello";

}

//void 함수인데 아무것도 리턴하지 않으면 void타입
//return 할때 void는 생략가능 회사에 따라 따라가면댐

function print():void {
    console.log("hello");
    return;
}

let unusable:void = undefined;// 이거 똥;;

// never 에러 핸들링 편에 자세히 알려드림
//어플리케이션에서 정말 ;;
//message -> server(log)
//에러를 떤지면 어플리케이션 죽음 리턴하는 거 없음

//never는 절대 리턴할 수 없음
function throwError(message: string): never {
    
    while(true){

    }
}

let obj: object:
fucntion acceptsom