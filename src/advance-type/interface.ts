 
 type User = {
    name: string,
    age: number
 };

  const userWithTypeAlias : User = {
    name: 'Fahad',
    age: 21
 }

 interface IUser {
    name: string,
    age: number
 };

 interface IExtendedUser extends IUser {
    role: string
; }

 const userWithInterface : IExtendedUser = {
    name: 'Fahad',
    age: 21,
    role: 'Admin'
 };


 type AddNumber = (num1: number, num2: number) => number;

 const addNumber : AddNumber = (num1, num2) => {
    return num1 + num2;
 }

 type Roll = number[]
 interface IRoll {
    [index:number]: string
 }
 const roll: IRoll = ['1', '2', '3'];

