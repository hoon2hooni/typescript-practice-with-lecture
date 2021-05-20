{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    protected abstract extract(shots: number): CoffeeCup {
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    protected extract(shots: number): CoffeeCup{
      this.steamMilk();
      return {
        shots,
        hasMilk: true
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup{
      this.();
      return {
        shots,
        hasMilk: true
      };
    } 
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach(machine => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  });
}

//자식클래스에서 수퍼를 호출하지 않을수도 있음
//부모클래스에서 예상을 했었던 글아ㅣㄴ딩과 일너걸 놓칠수 있음

//이런것들을 조금 안전하게 하고 싶으면 abstract클래스를 만들 수 있음

//키워드 앞에 abstract를 붙이면  

//달라져야 하는 부분이 있으면
//함수일므이 뭔지 어던 인자를 받아서 어떤 것ㅇ르 줘야하는지
//abstract는 공통적인 기능 수행하고 달라지는 부분 인데 꼭 구현해야하는 부분을 말해줄수있
//가능하면 composition을 쓰는 이유 

//프로젝트를 할때 상속 굉장히 유용할때 도 있음
