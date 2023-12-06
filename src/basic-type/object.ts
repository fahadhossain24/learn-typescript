
type User1 = {
    name: string,
    age: number,
    isMerried: boolean,
    wife?: string,
    readonly company: string
}
const user1: User1 = {
    name: 'korim',
    age: 25,
    isMerried: false,
    wife: 'sokina',
    company: 'Programming hero'
}
console.log(user1)
// user1.company = 'Programming hero bangladesh'