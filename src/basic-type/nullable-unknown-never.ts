
const searchName = (value: string | null): void => {
    if(value === null){
        console.log('there is nothing to search');
    }else{
        console.log('searching');
    }
}

// searchName(null)

const getCarSpeedToMeterPerSecond = (speed: unknown): void => {
    if(typeof speed === 'number'){
        const convertedSpeed: number = (speed * 1000) / 3600;
        console.log(convertedSpeed)
    }
    if(typeof speed === 'string'){
        const value: string = speed.split(' ')[0]
        const convertedSpeed: string = ((Number(value) * 1000) / 3600).toString()
        console.log(convertedSpeed)
    }
}

// getCarSpeedToMeterPerSecond(10);
// getCarSpeedToMeterPerSecond('10 kmh-1')

const throwError = (message: string): never => {
    throw new Error(message);
}

// throwError('an error occurred')