// class CoffeeMachine {

//     constructor(){
//         this.coffeeBeans:Number = 10;
//         this.BEANS_GRAM_PER_SHOT = 7;
//     }
//     makeCoffee(shots: number): CoffeeCup {
//         if (this.coffeeBeans < shots * this.BEAN_GRAM_PER_SHOT){
//             throw new Error('Not enough Coffee Beans')
//         }
//         this.coffeeBeans -= shots* this.BEAN_GRAM_PER_SHOT;
//         return {
//             shots,
//             hasmilk:false;
//         }
//     } 
// }
{   
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    class CoffeeMaker {

        static BEANS_GRAM_PER_SHOT: number = 7;
        coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
        
        static makeMachine(coffeeBeans: number) {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            };

        }

    }
    const BEANS_GRAM_PER_SHOT: number = 7;
    let coffeeBeans: number = 0;

    function makeCoffee(shots: number): CoffeeCup {
        if(coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
        return {
            shots,
            hasMilk: false,
        };

    }
    const maker = new CoffeeMaker(32);
    console.log(maker);
    const maker2 = CoffeeMaker.makeMachine(100);
    

}