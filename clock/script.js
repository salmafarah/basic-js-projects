const clock = document.querySelector('#clock')


function showTime(){

    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    clock.innerHTML = `hours:minutes:seconds`

}