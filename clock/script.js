const clock = document.getElementById('clock')


function showTime(){

    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let formathours = convertFormat(hours)

    hours = checkTime(hours)

    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds)

    clock.innerHTML = `${hours}:${minutes}:${seconds} ${formathours}`

}

function convertFormat(time){
    let format = 'AM'
    if(time >= 12){
        format = 'PM'
    }
    return format; 
}


function checkTime(time){
    if(time>12){
        time = time - 12; 
    }
    if (time === 0){
        time = 12; 
    }
    return time 
}

function addZero(time){
    if(time<10){
        time = "0" + time
    }
    return time 
}

showTime()

setInterval(showTime,1000)