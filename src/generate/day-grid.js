import format_date_output from '../utils/format_date_output';

export default function setup_day_grid(day_grid, selected_time, input) {
    while (day_grid.firstChild) {
        day_grid.removeChild(day_grid.firstChild);
    }

    let clicked_cell = null;

    let weekday_of_1st_of_month = new Date(selected_time.get_time().getFullYear(), selected_time.get_time().getMonth(),1).getDay();
    let total_days_in_month = new Date(selected_time.get_time().getFullYear(), selected_time.get_time().getMonth() + 1, 0).getDate();

    for (let i=0;i<weekday_of_1st_of_month; i++) { //empty cells
        const day_cell = document.createElement("div");
        Object.assign(day_cell.style, {
            width: "40px",
            height: "34px",
        });
        day_grid.appendChild(day_cell)
    }

    for (let i=0; i<total_days_in_month; i++) { //non-empty cells
        const day_cell = document.createElement("div");
        day_cell.date = new Date(selected_time.get_time().getFullYear(), selected_time.get_time().getMonth(), 1+i);
        day_cell.textContent = day_cell.date.getDate();
        Object.assign(day_cell.style, {
            textAlign: "center",
            width: "40px",
            height: "40px",
            lineHeight: "40px",
            borderRadius: "50%",
        });
        day_cell.addEventListener("mouseenter", () => {
            if (clicked_cell !== day_cell) day_cell.style.backgroundColor = "#2ba7ff";
        });
        day_cell.addEventListener("mouseleave", () => {
            if (clicked_cell !== day_cell) day_cell.style.backgroundColor = "";
        });
        day_cell.addEventListener("click", (e) => {
            if (clicked_cell !== null) 
                Object.assign(clicked_cell.style, {
                    backgroundColor: "",
                    color: "",
                });
            Object.assign(day_cell.style, {
                backgroundColor: "#005aeb",
                color: "#FFF",
            });
            clicked_cell = day_cell;
            input.value = format_date_output(e.target.date);
        });
        day_grid.appendChild(day_cell);
    }
}