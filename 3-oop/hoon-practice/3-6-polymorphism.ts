{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  type LatteCup = {
    shots: number;
    hasMilk : true;
  };
  type LeftoverIngredientAtCoffeeMachine {
    coffeeBeans: number;
    sugars: number;
    milk: number;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(leftOverAtMachine: LeftoverIngredientAtCoffeeMachine) {
      this.coffeeBeans = leftOverAtMachine.coffeeBeans;
      this.sugars = leftOverAtMachine.sugars;
      this.milk = leftOverAtMachine.milk;
    }

    static makeMachine(leftOverAtMachine: LeftoverIngredientAtCoffeeMachine): CoffeeMachine {
      return new CoffeeMachine(leftOverAtMachine);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧼');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  class CoffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string){
      super(beans);
    }
    private steamMilk(): void {
      console.log('steamming milk');
    }

    makeCoffee(shots:number) :LatteCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee, 
        hasMilk :true}
    }
  }
  class SweetCoffeeMachine extends CoffeeMachine {
    private static SUGAR_GRAMM_PER_SPOON: number = 10;
    private static sugar:number = 0;
  2
    constructor(beans:number, sugarSpoons: number){
      super(beans);
      this.sugarSpoons = sugarSpoons;
      this.sugar = 0;
    }
    private putSugar(){
      this.sugar 
    }
    makeCoffee(shots:number) {
      const coffee = super.makeCoffee(shots);
      
    }
  }
  const latteMachine = new CoffeeLatteMachine(23,'시리얼');
  console.log(latteMachine.serialNumber);
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  
}