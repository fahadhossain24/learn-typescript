
interface CrushInterface<T, U = null> {
    name: string,
    husband: T,
    wife?: U
}
interface HusbandInterface {
    name: string,
    address: string,
    job: 'business man' | 'Developer'
}

const myCrush1 : CrushInterface<boolean, boolean> = {
    name: 'Fahad',
    husband: false,
    wife: true,
}

const myCrush2 : CrushInterface<HusbandInterface, boolean> = {
    name: 'Fahad',
    husband: {
        name: 'Rofiq',
        address: 'Dhaka',
        job: 'Developer'
    },
    wife: true
}

type GenericTuple1<X, Y> = [X, Y]

const relation1: GenericTuple<string, string> = ["Fahad", "unknown"]

const relationWithSalary1: GenericTuple<{age: number, salary: number}, string> = [
    {
        age: 21, 
        salary: 25000 
    },
    'Fahad Hossain'
]

console.log(relationWithSalary)