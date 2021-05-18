{   
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    //public
    //private 어떤 누구라도 이 외부에서  접근 할 수 없
    
    //protected 나중에 상속을 할때 외부에서는 접근할땐 접근할수 없지만
    //상속할 때는 가능

    class CoffeeMaker {

        private static BEANS_GRAM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
        
        static makeMachine(coffeeBeans: number) {
            return new CoffeeMaker(coffeeBeans);
        }
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
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

    const maker = CoffeeMaker.makeMachine(200);
    maker.fillCoffeeBeans(20);
    console.log(maker);
    const maker2 = CoffeeMaker.makeMachine(100);

    class User {
        get fullName(): string {
            return `${firstName} ${lastName}`;
        }
        private internalAge = 4;
        
        get age(): number {
            return this.internalAge;
        }
        
        set age(num: number) {
            if (num < 0 ) {
                throw new Error("Age can't be lower than zero")
            }
            this.internalAge = num;
        }

        constructor(private firstName: string,private lastName: string) {    
        }
        const user = new User('steve', 'Jobs');
        user.fullName 
    }
    

}