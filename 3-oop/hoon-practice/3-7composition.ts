{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup:
  }

  //싸구려 우유 거품기
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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFrother: CheapMilkSteamer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }
  //싸구려 우유 거품기 만들기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk... ');
    }
    makeMilk(cup: CoffeeCup): CoffeCup {
      this.steamMilk();
      return {
        ...cup,
        hasmilk: true,
      };
    }
  }
  //설탕 제조기
  class AutomaticSugarMixer implements SugarProvider {
    private getSuger() {
      console.log('Getting some sugar from candy');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(
      private beans: number,
      private sugar: SugarProvider,
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: CheapMilkSteamer,
      private sugar: SugarProvider
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const milkAdded = this.milk.makeMilk(coffee);
      return this.sugar.addSugar(milkAdded);
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
  const cheapMilkMaker = new CheapMilkSteamer();
  const candySugar = new AutomaticSugarMixer();
  const sweetMachine = new SweetCoffeeLatteMachine(12, candySugar);
  const latteMachine = new CaffeLatteMachine(12, "SS", cheapMilkMaker);
  const SweetLatteMachine = new SweetCaffeeLatteMachine(
    12,
    cheapMilkMaker,
    candySugar,
  )
  machines.forEach((machine) => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  });
}

//스윗 머신은요 캔디머신 
// 동일한  
// 내가 원하는 부품을 가져와서 서로다른 객체를 만들 수 있음

// 내가 원하는 용도에 다라서 다르게 만ㄷ르수 있다.

// 라떼 머신은 그냥 라떼머신.
// 콜드 밀크 레이커르 ㄹ전달해줌
// 우리가 원하는 기능들을 조립해서 내가 어떤 커피 기곌르 만들껀지
// 결정할 수 있음

// 많이 와닿았았으면 좋겠음
// 우리가 필요한 기능들을 각각 클래스로둠
// 인터페이스 계약된 애들만 원한ㄹ떄마다 ㅁ원하는 부품을 끼워서 원하느 용도에 맞게 씀

// 우리가 원하는 밀크메이커와 이렇게 
// 많은 종류의 커피머신이 필요없음

// 저렇게 만ㄷ르 필요가 없음

// 스윗 커피머신을 복사해서 과감하게 지워버림

//노밀크와
//노슈거 구현함

