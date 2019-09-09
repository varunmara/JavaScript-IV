/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class Fruit {
    constructor(attrs) {
        this.type = attrs.type;
        this.name = attrs.name;
        this.isRipe = attrs.isRipe;
        this.calories = attrs.calories;
    }

    shipped(destination) {
        console.log(`Shipping ${this.name} to ${destination}`);
    };

    calculateCals() {
        console.log(`Calories in ${this.name} are ${this.calories * 200}`);
    };
}

class Banana extends Fruit {
    constructor(bananaAttrs) {
        super(bananaAttrs);
        this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
    }

    checkIfMonkeysLikeIt() {
        if (this.doMonkeysLikeIt) {
            return true;
        } else {
            return false;
        }
    };
}


class Kiwi extends Fruit {
    constructor(kiwiAttrs) {
        super(kiwiAttrs);
    }

    checkIfFuzzy() {
        if (this.isFuzzy) {
            return true;
        } else {
            return false;
        }
    };
}

const newBanana = new Banana({
    doMonkeysLikeIt: true,
    type: 'Tree',
    name: 'Banana',
    isRipe: false,
    calories: 0.1
});

const newKiwi = new Kiwi({
    isFuzzy: true,
    type: 'Tree',
    name: 'Kiwi',
    isRipe: false,
    calories: 0.7
});

console.log(newBanana.shipped('Alaska'));
console.log(newKiwi.shipped('Colorado'));
console.log(newBanana.checkIfMonkeysLikeIt());
console.log(newKiwi.checkIfFuzzy());
console.log(newBanana.calculateCals());
console.log(newKiwi.calculateCals());
