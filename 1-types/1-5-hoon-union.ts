{


    //unionType : OR

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction :Direction) {
        console.log(direction);
    }
    move('up')
    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;
    
    //function login-> success, fail;
    //내작성
    // type success = true;
    // type fail = false;
    // type LoginResult = success | fail;
    
    // function login (id:string) LoginReuslt: {

    //     idValid(id) ? success:success   : fail 
    // }
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type Failstate ={
        reason: string;
    }
    type LoginState = SuccessState | Failstate;
    function login(): LoginState {
        return {
            response: {
                body: ="logged in!"
            },
        };

    }
    //퀴즈 로그인 출력할꺼야
    // success -> 성공이모지 body 
    // fail -> cry reason

    function printLoginState(state: :LoginState): void {
        
        if('response' in state) {
            console.log(`${state.response.body}`)
        }   else {
            console.log()
        }
    }




}