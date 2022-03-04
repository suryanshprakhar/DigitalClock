function time() {
    const time = new Date;
    let hours = time.getHours()
    let am_pm = "AM"
    if (hours > 12) {
        hours -= 12;
        if (hours < 10) {
            document.getElementById('hour-display').innerText = "0" + hours;
        }
        else {
            document.getElementById('hour-display').innerText = hours;
        }
        document.getElementById('meridiem-display').innerText = "PM";
        am_pm = "PM"
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
    let timeArr = [hours, mins, secs, am_pm];
    return function () {
        return timeArr;
    }
}
setInterval(time, 1000)
function partytime() {
    document.getElementById('wakeup-note').innerText = 'Wake Up Time : ' + document.getElementById('wakeuptime').value
    document.getElementById('lunch-note').innerText = 'Lunch Time : ' + document.getElementById('lunchtime').value
    document.getElementById('nap-note').innerText = 'Nap Time : ' + document.getElementById('naptime').value
    document.getElementById('night-note').innerText = 'Night Time : ' + document.getElementById('nighttime').value
}
function imgFucn() {
    let tempTime = time()();
    if (document.getElementById('wakeuptime').value.slice(0, 2) <= tempTime[0] && document.getElementById('wakeuptime').value.slice(7, 9) > tempTime[0] && tempTime[3] == document.getElementById('wakeuptime').value.slice(-2)) {
        document.getElementById('img').src = "morning_window.jpg"
        document.getElementById('imgText').innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
        document.getElementById('greetText').innerText = "GOOD MORNING!! WAKE UP !!"

    }
    if (document.getElementById('lunchtime').value.slice(0, 2) <= tempTime[0] && document.getElementById('lunchtime').value.slice(7, 9) > tempTime[0] && tempTime[3] == document.getElementById('lunchtime').value.slice(-2)) {
        document.getElementById('img').src = "lunch-image.png"
        document.getElementById('imgText').innerText = "LET'S HAVE SOME LUNCH"
        document.getElementById('greetText').innerText = "GOOD AFTERNOON!! TAKE SOME SLEEP"
    }
    if (document.getElementById('naptime').value.slice(0, 2) <= tempTime[0] && document.getElementById('naptime').value.slice(7, 9) > tempTime[0] && tempTime[3] == document.getElementById('naptime').value.slice(-2)) {
        document.getElementById('img').src = "nap-image.jpg"
        document.getElementById('imgText').innerText = "STOP YAWNING, GET SOME TEA ITS JUST EVENING!"
        document.getElementById('greetText').innerText = "GOOD EVENING!!"
    }
    if (document.getElementById('nighttime').value.slice(0, 2) <= tempTime[0] && document.getElementById('nighttime').value.slice(7, 9) > tempTime[0] && tempTime[3] == document.getElementById('nighttime').value.slice(-2)) {
        document.getElementById('img').src = "goodnight-image.jpg"
        document.getElementById('imgText').innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
        document.getElementById('greetText').innerText = "GOOD NIGHT!!"
    }
}
