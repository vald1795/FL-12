/* eslint-disable no-unused-vars */
function isleapYear(date) {
    // eslint-disable-next-line no-unused-vars
    let dateCurrent;
    if (typeof date === 'string') {
        let a = Date.parse(date);
        if (isNaN(a)) {
            console.log('Invalid Date')
            return
        } else {
            dateCurrent = a;
        }
    }
    dateCurrent = date;
    let yearExist = new Date(date);
    console.log(yearExist)
    if (!yearExist) {
        console.log('Invalid Date');
        return
    } else {
        let year = yearExist.getFullYear();
        let yearLeep = new Date(year, 1, 29);
        if (yearLeep) {
            console.log(`${year} is a leap year`)
        } else {
            console.log(`${year} is not a leap year`)
        }
    }
}