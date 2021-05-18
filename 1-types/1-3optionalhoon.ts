{
    function printName(firstName: string, lastName?: string){
    console.log(firstName);
    console.log(lastName);
    }
    printName("steve");

    function printMessage(message: string = 'default message'){
        console.log(message);
    }
    printMessage();

    // function addNumbers(*args) {
    //     const array = [...*args];
    //     array.reduce((prev, curr) => prev + curr ,0)
    // }
    let a  = [1,2,3];

    console.log(a.reduce((prev,curr) => prev + curr, 0));

}   