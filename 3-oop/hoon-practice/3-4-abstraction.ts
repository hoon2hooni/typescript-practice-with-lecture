{   
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    //public
    //private 어떤 누구라도 이 외부에서  접근 할 수 없
    
    //protected 나중에 상속을 할때 외부에서는 접근할땐 접근할수 없지만
    //상속할 때는 가능
    
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }
    interface CommercialCoffeeMaker {
        makeCoffee(shots: number);
    }

    class CoffeeMachine implements CoffeeMaker {

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
        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!')
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
        }

        private preheat() {
            console.log('heating up');
        }

        private extract(shots: number): CoffeeCup { 
            console.log(`Pulling ${shots} ....`)
            return {
                shots,
                hasMilk: false;
            }

        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }

    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(200);
    
    maker.fillCoffeeBeans(20);
    console.log(maker);
    
    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
    maker2.
    }
    

}