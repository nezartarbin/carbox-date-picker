import setup_day_grid from './day-grid';
import { months } from '../utils/names';

function create_change_month_button(selected_time, text, offset, month_year_text, day_grid, input) {
    const change_month_button = document.createElement("button");
    Object.assign(change_month_button.style, {
        backgroundColor: "transparent",
        border: "none",
        fontSize: "20px",
        transform: "scale(1,1)",
        height: "30px",
        lineHeight: "30px",
    });

    change_month_button.addEventListener("mouseover", () => {
        change_month_button.style.cursor = "pointer";
    })

    change_month_button.addEventListener("click", () => {
        selected_time.set_time(new Date(selected_time.get_time().getFullYear(), selected_time.get_time().getMonth()+offset));
        setup_day_grid(day_grid, selected_time, input);
        month_year_text.textContent = months[selected_time.get_time().getMonth()] + " " + selected_time.get_time().getFullYear();
    })
    change_month_button.textContent = text;
    return change_month_button;
}

export default function setup_month_header(month_header, day_grid, selected_time, input) {
    const month_year_text = document.createElement("div");
    Object.assign(month_year_text.style, {
        width: "150px",
        display: "inline-block",
        fontWeight: "bold",
        marginBottom: "5px",
        height: "30px",
        lineHeight: "30px",
    });
    month_year_text.textContent = months[selected_time.get_time().getMonth()] + " " + selected_time.get_time().getFullYear();
    const backwardButton = create_change_month_button(selected_time, "<", -1, month_year_text, day_grid, input);
    const forwardButton = create_change_month_button(selected_time, ">", +1, month_year_text, day_grid, input);
    
    month_header.append(backwardButton, month_year_text, forwardButton);
    return selected_time;
}