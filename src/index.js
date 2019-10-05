import { months, weekdays_abbr } from './names';
import './style.css';

function generate(main, selected_time) {
    const [container, month_header, week_header, day_grid] = setup_skeleton(main);
    setup_month_header(month_header, day_grid, selected_time);
    setup_week_header(week_header);
    setup_day_grid(day_grid, selected_time);
    return container;
}

function setup_skeleton(parent) {
    const container = document.createElement("div");
    const month_header = document.createElement("div");
    const week_header = document.createElement("div");
    const day_grid = document.createElement("div");

    month_header.className = "width-280px center-align";
    day_grid.className = "width-280px flex wrap";
    week_header.className = "width-280px flex wrap";
    container.className = "width-280px display-none";

    container.addEventListener("click", e => e.stopPropagation())

    container.appendChild(month_header);
    container.appendChild(week_header);
    container.appendChild(day_grid);
    parent.parentNode.insertBefore(container, parent.nextSibling);
    parent.appendChild(container);

    return [container, month_header, week_header, day_grid];
}

function setup_month_header(month_header, day_grid, selected_time) {
    const month_span = document.createElement("span");
    month_span.textContent = months[selected_time.getMonth()];
    const buttons = {
        back: document.createElement("button"),
        front: document.createElement("button")
    };

    for (let i=0,keys=["back","front"], text=["<", ">"]; i<2; i++) {
        add_change_month_event_listener(selected_time, month_span, day_grid, buttons[keys[i]], i);
        buttons[keys[i]].textContent = text[i];
        month_header.appendChild(buttons[keys[i]]);
    }
    
    month_header.insertBefore(month_span, buttons.front)

}

function setup_week_header(week_header) {
    for (let i=0;i<7;i++) {
        const weekday = document.createElement("div");
        weekday.textContent = weekdays_abbr[i];
        weekday.className = "cell-dimensions";
        week_header.appendChild(weekday);
    }
}

function setup_day_grid(day_grid, selected_time) {
    while (day_grid.firstChild) {
        day_grid.removeChild(day_grid.firstChild);
    }

    let weekday_of_1st_of_month = new Date(selected_time.getFullYear(), selected_time.getMonth(),1).getDay();
    let total_days_in_month = new Date(selected_time.getFullYear(), selected_time.getMonth() + 1, 0).getDate();

    for (let i=0;i<weekday_of_1st_of_month;i++) {
        const day_cell = document.createElement("div");
        day_cell.className = "cell-dimensions";
        day_grid.appendChild(day_cell)
    }

    for (let i=0; i<total_days_in_month; i++) {
        const day_cell = document.createElement("div");
        day_cell.textContent = new Date(selected_time.getFullYear(), selected_time.getMonth(), 1+i).getDate();
        day_cell.className = "cell-dimensions";
        day_grid.appendChild(day_cell);
    }
}

function add_change_month_event_listener(selected_time, month_span, day_grid, button, i) {
    const offset = [-1,+1];
    button.addEventListener("click", e => {
        selected_time = new Date(selected_time.getFullYear(), selected_time.getMonth()+offset[i]);
        setup_day_grid(day_grid, selected_time);
        month_span.textContent = months[selected_time.getMonth()];
    })
}

// ** EXECUTED CODE: **

const inputs = document.getElementsByClassName("carbox-picker");
const current_time = new Date();

for (let i = 0, len = inputs.length; i < len; i++) {
    let selected_time = new Date(current_time.getTime());
    let container = generate(inputs[i].parentNode, selected_time);
    inputs[i].addEventListener("click", e => e.stopPropagation());
    inputs[i].addEventListener("focus", e => {
        container.style.display = "block";
    })
    
    window.addEventListener("click", e => {
        container.style.display = "none";
    })
}