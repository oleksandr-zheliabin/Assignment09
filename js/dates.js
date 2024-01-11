//STEP 1 - Create an application that gets the number of days in a month. Display that result within the console window.

// let d = new Date()
// const daysCount = (y, m) => new Date(y, m, 0).getDate();

// let y = d.getFullYear()
// let m = d.getMonth() + 1

// console.log('There are ' + daysCount(y, m) + ' days in this month.')

//STEP 2 - Create an application that gets the month name from a particular date. Display that result within the console 
//         window.

// let d = new Date().getMonth()
// const list = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// console.log('Today is ' + list[d])

//STEP 3 - Create an application that tests whether a date is a weekend. Display that result within the console window.

// let d = new Date().getDay()

// if (d === 0 || d === 6) {
//     console.log('Today is a weekend')
// } else {
//     console.log('Today is a weekday')
// }


//STEP 4 - Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console 
//         window should display Monday.

// let d = new Date(Date.now() - (24 * 60 * 60 * 1000))
// d = d.toString().slice(0, 3)

// function dayName(d) {
//     switch (d) {

//         case 'Mon':
//             return 'Monday'

//         case 'Tue':
//             return 'Tuesday'

//         case 'Wed':
//             return 'Wednesday'

//         case 'Thu':
//             return 'Thursday'
        
//         case 'Fri':
//             return 'Friday'

//         case 'Sat':
//             return 'Saturday'

//         case 'Sun':
//             return 'Sunday'
        
//     }
// }

// console.log(dayName(d))

//STEP 5 - Create an application that gets the current day of the week. The twist here is that I want only the first 
//         letter of the day. If today is Tuesday, the letter T should be displayed in the console window.

// let d = new Date()
// console.log(d.toString().slice(0, 1))
