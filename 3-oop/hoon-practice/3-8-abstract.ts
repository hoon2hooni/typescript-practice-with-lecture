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
      console.log('cleaning the machine...๐งผ');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... ๐ฅ');
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
      console.log('Steaming some milk... ๐ฅ');
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

//์์ํด๋์ค์์ ์ํผ๋ฅผ ํธ์ถํ์ง ์์์๋ ์์
//๋ถ๋ชจํด๋์ค์์ ์์์ ํ์๋ ๊ธ์ใฃใด๋ฉ๊ณผ ์ผ๋๊ฑธ ๋์น?์ ์์

//์ด๋ฐ๊ฒ๋ค์ ์กฐ๊ธ ์์?ํ๊ฒ ํ๊ณ? ์ถ์ผ๋ฉด abstractํด๋์ค๋ฅผ ๋ง๋ค ์ ์์

//ํค์๋ ์์ abstract๋ฅผ ๋ถ์ด๋ฉด  

//๋ฌ๋ผ์?ธ์ผ ํ๋ ๋ถ๋ถ์ด ์์ผ๋ฉด
//ํจ์์ผ๋ฏ์ด ๋ญ์ง ์ด๋ ์ธ์๋ฅผ ๋ฐ์์ ์ด๋ค ๊ฒใ๋ฅด ์ค์ผํ๋์ง
//abstract๋ ๊ณตํต์?์ธ ๊ธฐ๋ฅ ์ํํ๊ณ? ๋ฌ๋ผ์ง๋ ๋ถ๋ถ ์ธ๋ฐ ๊ผญ ๊ตฌํํด์ผํ๋ ๋ถ๋ถ์ ๋งํด์ค์์
//๊ฐ๋ฅํ๋ฉด composition์ ์ฐ๋ ์ด์? 

//ํ๋ก์?ํธ๋ฅผ ํ?๋ ์์ ๊ต์ฅํ ์?์ฉํ?๋ ๋ ์์
