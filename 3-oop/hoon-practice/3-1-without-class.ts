{
    // function makeCoffee(shotNum:number): string[]{
    //     let coffee: string[];
    //     coffee = addshot(shotNum, coffee);
    //     console.log(`your coffee here`);
    //     console.log(`it is made like ${coffee}`);
    //     return coffee
    // }

    // function addshot(shotNum:number, recipe:string[]): string[]{
    //     const coffeeShot:string = "shot";
    //     let _recipe:string[] = [...recipe];
    //     _recipe.push(coffeeShot)
    //     return _recipe
    // }

    // function orderCoffee(number:number): string[]{
    //     const coffee:string[] = makecoffee(number);
    //     return coffee;
    // }
    // orderCoffee(3);
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
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
    coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);

}   