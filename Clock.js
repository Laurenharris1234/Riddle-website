function getTime() {
    var timeContainer = document.getElementById('time');
    timeContainer.innerHTML = "";
    var date = new Date();
    var hours = date.getHours();
    hours = formatTime(hours);
    var minutes = date.getMinutes();
    minutes = formatTime(minutes);
    var seconds = date.getSeconds();
    seconds = formatTime(seconds);
    var aTag = document.createElement("a");
    aTag.style.display = 'inline';
    var node = document.createTextNode(hours + ":" + minutes + ":" + seconds);
    aTag.appendChild(node);
    timeContainer.appendChild(aTag);
    setTimeout(getTime, 1000);
}

function formatTime(time) {
    if (parseInt(time.toString()) < 10) {
        return "0" + time;
    }
    return time;
}

window.addEventListener('load', getTime);