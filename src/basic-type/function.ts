
// normal function
function sum(a: number, b: number): number{
    return a + b;
};

const result: number = sum(2, 4)
// console.log(result);

// arrow function
const sum1 = (a: number, b: number = 10): number => {
    return a + b;
};

const result1: number = sum1(5);
// console.log(result1);

const arr = [1, 2, 3, 4, 5];
const newSqureArr: number[] = arr.map((elem: number): number => elem * elem)

type Person = {
    name: string,
    balance: number,
    addBalance(money: number): void
}

const person: Person = {
    name: 'Fahad',
    balance: 100,
    addBalance(money) {
        return `My update balance is ${this.balance + money}`
    },
}
// console.log(person.addBalance(50))


const myfriend: string[] = ['jabbar', 'kabir'];
const myNewFriend: string[] = ['rafiq', 'sakib'];

const myTotalFriends: string[] = [...myfriend, ...myNewFriend]
// console.log(myTotalFriends);

const [friend1, friend2] = myfriend;
// console.log(friend1, friend2)

const greetFriends = (...friends: string[]): void => {
    friends.forEach((friend: string): void => {
        console.log(`Hi ${friend}`)
    });
}

// greetFriends('Fahad', 'Hossain', 'Patwary', 'Shafiq', 'kamal')

type Introduction = {
    fullName: string,
    age: number,
    address: string
}

const introduction: Introduction = {
    fullName: 'Fahad Hossain',
    age: 21,
    address: 'Dagonbhuiyan, Feni'
};

const {fullName: string} = introduction;
console.log(string)

