function generate(main) {
    const [container, month_header, week_header, day_grid] = setup_skeleton(main);
    setup_month_header(month_header, day_grid);
    setup_week_header(week_header);
    setup_day_grid(day_grid);
    return container;
}

const names = {
    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    weekdays_abbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    months_abbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
}

function setup_skeleton(parent) {
    const container = document.createElement("div");
    const month_header = document.createElement("div");
    const week_header = document.createElement("div");
    const day_grid = document.createElement("div");

    month_header.className = "month-header";
    day_grid.className = "day-grid flex wrap";
    week_header.className = "week-header flex wrap";
    container.style.display = "none";

    container.addEventListener("click", e => e.stopPropagation())

    container.appendChild(month_header);
    container.appendChild(week_header);
    container.appendChild(day_grid);
    parent.parentNode.insertBefore(container, parent.nextSibling);
    parent.appendChild(container);

    return [container, month_header, week_header, day_grid];
}

function setup_month_header(month_header, day_grid) {
    const month_span = document.createElement("span");
    month_span.textContent = names.months[selected_time.getMonth()];
    const buttons = {
        back: document.createElement("button"),
        front: document.createElement("button")
    };

    for (let i=0,keys=["back","front"], text=["<", ">"]; i<2; i++) {
        add_change_month_event_listener(month_span, day_grid, buttons[keys[i]], i);
        buttons[keys[i]].textContent = text[i];
        month_header.appendChild(buttons[keys[i]]);
    }
    
    month_header.insertBefore(month_span, buttons.front)

}

function setup_week_header(week_header) {
    for (let i=0;i<7;i++) {
        const weekday = document.createElement("div");
        weekday.textContent = names.weekdays_abbr[i];
        weekday.className = "weekday";
        week_header.appendChild(weekday);
    }
}

function setup_day_grid(day_grid) {
    while (day_grid.firstChild) {
        day_grid.removeChild(day_grid.firstChild);
    }

    let weekday_of_1st_of_month = new Date(selected_time.getFullYear(), selected_time.getMonth(),1).getDay();
    let total_days_in_month = new Date(selected_time.getFullYear(), selected_time.getMonth() + 1, 0).getDate();

    for (let i=0;i<weekday_of_1st_of_month;i++) {
        const day_cell = document.createElement("div");
        day_cell.className = "day_cell";
        day_grid.appendChild(day_cell)
    }

    for (let i=0; i<total_days_in_month; i++) {
        const day_cell = document.createElement("div");
        day_cell.textContent = new Date(selected_time.getFullYear(), selected_time.getMonth(), 1+i).getDate();
        day_cell.className = "day-cell";
        day_grid.appendChild(day_cell);
    }
}

function add_change_month_event_listener(month_span, day_grid, button, i) {
    const offset = [-1,+1];
    button.addEventListener("click", e => {
        selected_time = new Date(selected_time.getFullYear(), selected_time.getMonth()+offset[i]);
        setup_day_grid(day_grid);
        month_span.textContent = names.months[selected_time.getMonth()];
    })
}

// ** EXECUTED CODE: **

const main = document.querySelector("main");
const input = document.querySelector("input[type=text]");
const current_time = new Date();
let selected_time = current_time;
let container = generate(main);

input.addEventListener("click", e => e.stopPropagation());

input.addEventListener("focus", e => {
    container.style.display = "";
})

window.addEventListener("click", e => {
    container.style.display = "none";
})