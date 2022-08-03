import dayjs from "dayjs";

export function getLaunchTimestamp(timestamp) {
    const launchTimestampDayJs = dayjs(timestamp)
    const currentDayJs = dayjs()

    if(launchTimestampDayJs.isBefore(currentDayJs)){
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00',
        }
    }
    return {
        seconds: getLaunchTimeSeconds(currentDayJs, launchTimestampDayJs),
        minutes: getLaunchTimeMinutes(currentDayJs, launchTimestampDayJs),
        hours: getLaunchTimeHours(currentDayJs, launchTimestampDayJs),
        days: getLaunchTimeDays(currentDayJs, launchTimestampDayJs),
    }
}

function getLaunchTimeSeconds(currentDayJs, launchTimestampDayJs) {
    const seconds = launchTimestampDayJs.diff(currentDayJs, 'seconds') % 60
    // return seconds
    return padWithZeros(seconds, 2)
}

function getLaunchTimeMinutes(currentDayJs, launchTimestampDayJs) {
    const minutes = launchTimestampDayJs.diff(currentDayJs, 'minutes') % 60
    // return minutes
    return padWithZeros(minutes, 2)
}
function getLaunchTimeHours(currentDayJs, launchTimestampDayJs) {
    const hours = launchTimestampDayJs.diff(currentDayJs, 'hours') % 24
    // return hours
    return padWithZeros(hours, 2)
}
function getLaunchTimeDays(currentDayJs, launchTimestampDayJs) {
    const days = launchTimestampDayJs.diff(currentDayJs, 'days')
    return padWithZeros(days, 2)
    // return days.toString()
}

// Add Zero(0) before 
function padWithZeros(number, minLength) {
    const numberString = number.toString()

    if(numberString.length >= minLength){
        return numberString
    }
    // + means concatenate 
    return "0".repeat(minLength - numberString.length) + numberString
}