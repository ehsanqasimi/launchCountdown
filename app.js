let day = 8
let dayElement = document.querySelector('.day')

let hour = 24
let hourElement = document.querySelector('.hour')

let min = 0
let minElement = document.querySelector('.min')

let sec = 0
let secElement = document.querySelector('.sec')


setInterval(() => {
    sec--
    if (sec <= 0) {
        sec = 59
        min--
        if (min <= 0) {
            min = 59
            hour--
            if (hour <= 0) {
                hour = 24
                day--
            }
        }
    }
    secElement.textContent = sec
    minElement.textContent = min
    hourElement.textContent = hour
    dayElement.textContent = day

}, 1000)



// setInterval(() => {
//     sec--
//     if (sec <= 0) {
//         sec = 60
//         min--
//     } else if(min <= 0) {
//         min = 60
//         hour--
//     } else if(hour <= 0) {
//         hour = 24
//         day--
//     }




//     secElement.textContent = sec
//     minElement.textContent = min
//     hourElement.textContent = hour
//     dayElement.textContent = day

// }, 1000)