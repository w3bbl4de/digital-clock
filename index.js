const hourE1 = document.getElementById("Hour");
const minuteE1 = document.getElementById("Minute");
const secondeE1 = document.getElementById("Second");
const ampmE1 = document.getElementById("ampm");

function updateclock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM";

    if (h > 12){
        h = h - 12
        ampm = "PM"
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondeE1.innerText = s;
    ampmE1.innerText = ampm;
    setTimeout(()=>{
      void updateclock()
    }, 1000)


}
updateclock()