// Arrow function
const createArray = <T>(param: T): T[] => {
    return [param]
}

const res = createArray<string>('Bangladesh')
const res1 = createArray<number>(120)
const res2 = createArray<{name: string, age: number}>({name: 'bangladesh', age: 50})