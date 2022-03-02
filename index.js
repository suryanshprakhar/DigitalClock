function time() {
    const time = new Date;
    let hours = time.getHours()
    if (hours > 12) {
        hours -= 12;
        if(hours < 10){
            document.getElementById('hour-display').innerText ="0" + hours;
        }
        else{
            document.getElementById('hour-display').innerText = hours;
        }
        document.getElementById('meridiem-display').innerText = "PM";
    }
    else {
        if (hours == 0) hours = 12;
        if (hours < 10) {
            document.getElementById('hour-display').innerText = '0' + hours;
        }
        else {
            document.getElementById('hour-display').innerText = hours;
        }
        document.getElementById('meridiem-display').innerText = "AM";
    }
    let mins = time.getMinutes()
    if (mins < 10) {
        document.getElementById('mins-display').innerText = "0" + mins;
    }
    else {
        document.getElementById('mins-display').innerText = mins;
    }
    let secs = time.getSeconds()
    if (secs < 10) {
        document.getElementById('secs-display').innerText = "0" + secs;
    }
    else {
        document.getElementById('secs-display').innerText = secs;
    }
}
setInterval(time, 1000)
function partytime() {
    const time = new Date;
    let hours = time.getHours();
    document.getElementById('wakeup-note').innerText = 'Wake Up Time : ' + document.getElementById('wakeuptime').value
    document.getElementById('lunch-note').innerText = 'Lunch Time : ' + document.getElementById('lunchtime').value
    document.getElementById('nap-note').innerText = 'Nap Time : ' + document.getElementById('naptime').value
    document.getElementById('night-note').innerText = 'Night Time : ' + document.getElementById('nighttime').value
    let tempTime = hours;
    let am_pm = "AM"
    if (tempTime > 12) {
        tempTime -= 12;
        am_pm = "PM"
    }
    console.log(tempTime)
    console.log(document.getElementById('wakeuptime').value.slice(0, 2))
    console.log(document.getElementById('wakeuptime').value.slice(7, 9))
    console.log(am_pm == document.getElementById('wakeuptime').value.slice(-2))
    if (document.getElementById('wakeuptime').value.slice(0, 2) <= tempTime && document.getElementById('wakeuptime').value.slice(7, 9) > tempTime && am_pm == document.getElementById('wakeuptime').value.slice(-2)) {
        document.getElementById('img').src = "morning_window.jpg"
        document.getElementById('imgText').innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
        document.getElementById('greetText').innerText = "GOOD MORNING!! WAKE UP !!"

    }
    if (document.getElementById('lunchtime').value.slice(0, 2) <= tempTime && document.getElementById('lunchtime').value.slice(7, 9) > tempTime && am_pm == document.getElementById('lunchtime').value.slice(-2)) {
        document.getElementById('img').src = "lunch-image.png"
        document.getElementById('imgText').innerText = "LET'S HAVE SOME LUNCH"
        document.getElementById('greetText').innerText = "GOOD AFTERNOON!! TAKE SOME SLEEP"
    }
    if (document.getElementById('naptime').value.slice(0, 2) <= tempTime && document.getElementById('naptime').value.slice(7, 9) > tempTime && am_pm == document.getElementById('naptime').value.slice(-2)) {
        document.getElementById('img').src = "nap-image.jpg"
        document.getElementById('imgText').innerText = "STOP YAWNING, GET SOME TEA ITS JUST EVENING!"
        document.getElementById('greetText').innerText = "GOOD EVENING!!"
    }
    if (document.getElementById('nighttime').value.slice(0, 2) <= tempTime && document.getElementById('nighttime').value.slice(7, 9) > tempTime && am_pm == document.getElementById('nighttime').value.slice(-2)) {
        document.getElementById('img').src = "goodnight-image.jpg"
        document.getElementById('imgText').innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
        document.getElementById('greetText').innerText = "GOOD NIGHT!!"
    }
}
