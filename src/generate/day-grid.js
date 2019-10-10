import format_date_output from '../format_date_output';

export default function setup_day_grid(day_grid, selected_time, input) {
    while (day_grid.firstChild) {
        day_grid.removeChild(day_grid.firstChild);
    }

    let weekday_of_1st_of_month = new Date(selected_time.get_time().getFullYear(), selected_time.get_time().getMonth(),1).getDay();
    let total_days_in_month = new Date(selected_time.get_time().getFullYear(), selected_time.get_time().getMonth() + 1, 0).getDate();

    for (let i=0;i<weekday_of_1st_of_month; i++) { //empty cells
        const day_cell = document.createElement("div");
        day_cell.className = "cell-dimensions";
        day_grid.appendChild(day_cell)
    }

    for (let i=0; i<total_days_in_month; i++) { //non-empty cells
        const day_cell = document.createElement("div");
        day_cell.date = new Date(selected_time.get_time().getFullYear(), selected_time.get_time().getMonth(), 1+i);
        day_cell.textContent = day_cell.date.getDate();
        day_cell.className = "cell-dimensions";
        day_cell.addEventListener("click", (e) => {
            input.value = format_date_output(e.target.date);
        })
        day_grid.appendChild(day_cell);
    }
}