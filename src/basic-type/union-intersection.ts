type NoobDeveloper = {
    name: string
}

// type JuniorDeveloper = {
//     name: string,
//     expertise: string,
//     experience: number
// }

type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number 
}

// enum Level {
//     junior = 'junior',
//     mid = 'mid',
//     senior = 'senior'
// }

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number,
    level: 'low' | 'mid' | 'senior'
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Fahad Hossain",
    expertise: 'Javascript',
    experience: 2,
}

const proDeveloper: NextLevelDeveloper = {
    name: "Fahad Hossain",
    expertise: 'MERN',
    experience: 3,
    leadershipExperience: 2,
    level: 'mid'
}

