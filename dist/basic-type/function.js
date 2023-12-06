"use strict";
// normal function
function sum(a, b) {
    return a + b;
}
;
const result = sum(2, 4);
// console.log(result);
// arrow function
const sum1 = (a, b = 10) => {
    return a + b;
};
const result1 = sum1(5);
// console.log(result1);
const arr = [1, 2, 3, 4, 5];
const newSqureArr = arr.map((elem) => elem * elem);
const person = {
    name: 'Fahad',
    balance: 100,
    addBalance(money) {
        return `My update balance is ${this.balance + money}`;
    },
};
// console.log(person.addBalance(50))
const myfriend = ['jabbar', 'kabir'];
const myNewFriend = ['rafiq', 'sakib'];
const myTotalFriends = [...myfriend, ...myNewFriend];
// console.log(myTotalFriends);
const [friend1, friend2] = myfriend;
// console.log(friend1, friend2)
const greetFriends = (...friends) => {
    friends.forEach((friend) => {
        console.log(`Hi ${friend}`);
    });
};
const introduction = {
    fullName: 'Fahad Hossain',
    age: 21,
    address: 'Dagonbhuiyan, Feni'
};
const { fullName: string } = introduction;
console.log(string);
