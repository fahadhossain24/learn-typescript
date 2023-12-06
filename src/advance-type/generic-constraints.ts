
interface IMyInfo {
    name: string,
    age: number,
    salary: number,
}
const myInfo: IMyInfo = {
    name: "Fahad",
    age: 21,
    salary: 25000,
}

const addMeInMyCrushMind = <T extends {name: string, age: number, salary: number}>(myInfo: T): T => {
    const crush = 'labiba';
    const newData = {...myInfo, crush};
    return newData;
}

const res3 = addMeInMyCrushMind<IMyInfo>(myInfo);
