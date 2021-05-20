{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  type LatteCup = {
    shots: number;
    hasMilk: true;
  };
  type SweetCup = {
    shots: number;
    hasMilk: boolean;
    sweetness: string;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('steamming milk');
    }

    makeCoffee(shots: number): LatteCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }
  class SweetCoffeeMachine extends CoffeeMachine {
    private sugar: number = this.buyingSugar * 10;
    constructor(beans: number, public readonly buyingSugar: number) {
      super(beans);
    }
    private putSugar(numberOfSpoons: number) {
      console.log(`put ${numberOfSpoons} spoons of sugar`);
      this.sugar -= numberOfSpoons * 5;
      return `${numberOfSpoons} x sweet`;
    }

    makeSweetCoffee(shots: number, sugarSpoons: number): SweetCup {
      const coffee = super.makeCoffee(shots);
      const sweetness = this.putSugar(sugarSpoons);
      return { ...coffee, sweetness: sweetness };
    }
  }
  const latteMachine = new CoffeeLatteMachine(23, '시리얼');
  const sweetMachine = new SweetCoffeeMachine(23, 100);
  console.log(sweetMachine);
  const sweetCoffee = sweetMachine.makeSweetCoffee(2, 3);
  console.log(sweetCoffee);
}
