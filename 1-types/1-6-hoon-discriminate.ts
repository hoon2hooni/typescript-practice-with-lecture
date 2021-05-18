{
    type = SuccessState ={
        result: 'success';
    }
    type = FailState = {
        result: 'fail';
        reason: 
    }
    function printLoginState(state: LoginState) {
        if ('response' in state) {
          console.log(`🎉 ${state.response.body}`);
        } else {
          console.log(`😭 ${state.reason}`);
        }
      }

    function printLoginState(state: LoginState) {
        if (state.result === 'success') {

        } else {
            
        }
    }
  

}