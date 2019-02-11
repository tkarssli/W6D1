function sum() {
    const input = Array.from(arguments);
    let result = 0;

    input.forEach(el => {
        result += el
    })
    return result;

}

// console.log(sum(1, 2, 3, 4))


function sumSpread(...input) {
    let result = 0;

    input.forEach(el => {
        result += el
    })
    return result;

}

// console.log(sumSpread(1, 2, 3, 4))


Function.prototype.myBind = function (context, ...bindArgs) {
    return (...callArgs) => {
        this.apply(context, [...bindArgs, ...callArgs]);
    }
}

Function.prototype.myBind2 = function (context) {
    const bindArgs = Array.from(arguments).slice(1)
    const fn = this;
    return function () {
        const callArgs = Array.from(arguments)
        fn.apply(context, bindArgs.concat(callArgs));
    }
}
class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}
const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

function curriedSum(numArgs) {
    const numbers = [];

    function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length < numArgs) {
            return _curriedSum;
        } else {
            return numbers.reduce((acc, val) => {
                return acc + val
            })
        }
    }
    return _curriedSum;
}
// const res = curriedSum(4);
// console.log(res(5));
// console.log(res(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
    const argArray = [];

    _helper = (arg) => {
        argArray.push(arg)
        if (argArray.length < numArgs) {
            return _helper
        } else {
            return this.apply(this, argArray)
        }
    }
    return _helper
}

const total = sum.curry(4)
console.log(total(1)(2)(3)(4))