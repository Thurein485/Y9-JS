function updateClock() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "AM";
    
    // for 12hr format and am/pm
    if (h>12) {
        h = h-12;
        ampm = "PM";
    }
    //ternary operator
    h<10? "0"+h: h;
    m = m<10? "0"+m: m;
    s = s<10? "0"+s: s;

    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;
    document.getElementById("ampm").innerHTML = ampm;
}
setInterval(updateClock, 1000);