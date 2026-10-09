const container = document.querySelector(".calendar-days");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const dpDay = document.querySelector("#selectedDate");
 
let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
let longMonth = date.toLocaleString('default', { month: 'long' });
let todayDate = date.getDate();
let todayMonth = date.getMonth();
let todayYear = date.getFullYear();
 
let events = JSON.parse(localStorage.getItem("events")) || {};
 
// Calendar header initial set
document.getElementById("monthYear").innerHTML = longMonth + " " + year;
 
showCalender();
// prev btn
prevBtn.addEventListener("click", function () {
    month--;
 
    if (month < 0) {
        month = 11;
        year--;
    }
 
    showCalender();
 
    longMonth = new Date(year, month).toLocaleString('default', {
        month: 'long'
    });
 
    document.getElementById("monthYear").innerHTML = longMonth + " " + year;
});
 
// next btn
nextBtn.addEventListener("click", function () {
    month++;
 
    if (month > 11) {
        month = 0;
        year++;
    }
 
    showCalender();
 
    longMonth = new Date(year, month).toLocaleString('default', {
        month: 'long'
    });
 
    document.getElementById("monthYear").innerHTML = longMonth + " " + year;
});
 
function showCalender() {
    container.innerHTML = "";
 
    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();
 
    let dayNumber = 1;
 
    for (let week = 0; week < 6; week++) {
        // Creating row
        const row = document.createElement("div");
        row.classList.add("row", "g-0");
 
        // Putting days in row
        for (let wd = 0; wd < 7; wd++) {
            const day = document.createElement("button");
            day.classList.add("day", "btn", "border", "rounded-0");
 
            // Creating empty button before month starts or after month ends
            if ((week === 0 && wd < firstDay) || dayNumber > daysInMonth) {
                day.innerHTML = "";
            }
            // Adding the number/day in the button
            else {
                day.innerHTML = dayNumber;

                const dateKey = year + "-" + String(month + 1).padStart(2, '0') + "-" + String(dayNumber).padStart(2, '0');

                if (events[dateKey] && events[dateKey].length > 0) {
                    day.classList.add("event-day");
                }

                if (
                    dayNumber === todayDate &&
                    month === todayMonth &&
                    year === todayYear
                ) {
                    day.classList.add("today", "active");
                    setTimeout(() => day.click(), 0);
                }
 
                // Date click listener
                day.addEventListener("click", function () {
                    document.querySelectorAll(".day").forEach(function (button) {
                        button.classList.remove("active");
                    });
 
                    const currentDay = day.innerHTML;
                   
                    // Format month and day to always have two digits (e.g., "05" instead of "5")
                    const formattedMonth = String(month + 1).padStart(2, '0');
                    const formattedDay = String(currentDay).padStart(2, '0');
 
                    dpDay.innerHTML = year + "-" + formattedMonth + "-" + formattedDay;
                    day.classList.add("active");
 
                    // Render events for newly selected date
                    renderEvents();
                });
 
                dayNumber++;
            }
 
            row.appendChild(day);
        }
 
        container.appendChild(row);
 
        // Stop running after all days have been rendered
        if (dayNumber > daysInMonth) {
            break;
        }
    }
}
 
const eventTitle = document.querySelector("#eventTitle");
const addEvent = document.querySelector("#addEvent");
const eventList = document.querySelector("#eventList");
 
function renderEvents() {
    eventList.innerHTML = "";
    const selectedDate = dpDay.innerText;
 
    if (selectedDate && events[selectedDate]) {
        events[selectedDate].forEach((eventText, index) => {
            const li = document.createElement("li");
            li.textContent = eventText;
            eventList.appendChild(li);
 
            // trash btn
            const trashBtn = document.createElement("div");
            trashBtn.innerHTML = `<i class="bi bi-trash-fill"></i>`
            li.appendChild(trashBtn);
 
            trashBtn.addEventListener("click", function () {
 
                events[selectedDate].splice(index, 1);
               
                saveEvents();

                eventTitle.value = "";
                renderEvents();
                showCalender();
            });
        });
 
    }
}
 
 
function createEvent() {
    const selectedDate = dpDay.innerText;
    const title = eventTitle.value.trim();
 
    if (!selectedDate) {
        alert("Please select a date first!");
        return;
    }
 
    if (!title) {
        alert("Please enter an event title!");
        return;
    }
 
    if (!events[selectedDate]) {
        events[selectedDate] = [];
    }
 
    events[selectedDate].push(title);
 
    saveEvents();
 
    eventTitle.value = "";
    renderEvents();
    showCalender();
}
 
addEvent.addEventListener("click", createEvent);
function saveEvents() {
    localStorage.setItem("events", JSON.stringify(events));
}