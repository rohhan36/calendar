const datesRef = document.querySelector(".dates");
const monthsRef = document.querySelector("#months");
const yearsRef = document.querySelector("#years");
const prevRef = document.querySelector(".previous");
const nextRef = document.querySelector(".next");

const today = new Date();
const currMonth = today.getMonth();
const currYear = today.getFullYear();

for (let i = currYear - 5; i <= currYear + 5; i++) {
    const year = document.createElement("option");
    year.innerText = i;
    year.setAttribute("value", i);

    if (i === currYear) {
        year.setAttribute("selected", "selected");
    }
    yearsRef.appendChild(year);
}

document.querySelectorAll(".month").forEach((month) => {
    if (+month.value === currMonth) {
        month.setAttribute("selected", "selected");
    }
});

const renderDates = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();
    console.log(days);
    console.log(month);
    console.log(year);
    datesRef.innerHTML = "";
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        datesRef.appendChild(empty);
    }

    for (let i = 1; i <= days; i++) {
        const date = document.createElement("div");
        date.innerHTML = i;
        date.classList.add("date");
        datesRef.appendChild(date);
    }
};

monthsRef.addEventListener("change", () => {
    renderDates(+monthsRef.value, +yearsRef.value);
});

yearsRef.addEventListener("change", () => {
    renderDates(+monthsRef.value, +yearsRef.value);
});

prevRef.addEventListener("click", () => {
    let prevMonth = +monthsRef.value === 0 ? 11 : +monthsRef.value - 1;
    let prevYear = +monthsRef.value === 0 ? +yearsRef.value - 1 : +yearsRef.value;

    monthsRef.value = prevMonth + "";
    yearsRef.value = prevYear + "";

    renderDates(prevMonth, prevYear);
});

nextRef.addEventListener("click", () => {
    let nextMonth = +monthsRef.value === 11 ? 0 : +monthsRef.value + 1;
    let nextYear = +monthsRef.value === 11 ? +yearsRef.value + 1 : +yearsRef.value;

    monthsRef.value = nextMonth + "";
    yearsRef.value = nextYear + "";

    renderDates(nextMonth, nextYear);
});

renderDates(currMonth, currYear);
