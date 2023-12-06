
type GenericTuple<X, Y> = [X, Y]

const relation: GenericTuple<string, string> = ["Fahad", "unknown"]

const relationWithSalary: GenericTuple<{age: number, salary: number}, string> = [
    {
        age: 21, 
        salary: 25000 
    },
    'Fahad Hossain'
]

console.log(relationWithSalary)


type StudentsInfo<T> = Array<T>;

const studentsInfo: StudentsInfo<number> = [1, 2, 3, 4, 5];
const studentsInfo1: StudentsInfo<string> = ['1', '2', '3', '4'];
const studentsInfo2: StudentsInfo<boolean> = [true, false];
const studentsInfo3: StudentsInfo<{name: string, roll: number}> = [
    {
        name: "Fahad",
        roll: 12
    },
    {
        name: 'Ahad',
        roll: 136
    }
]