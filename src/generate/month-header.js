import setup_day_grid from './day-grid';
import { months } from './names';

export default function setup_month_header(month_header, day_grid, selected_time, input) {
    const month_span = document.createElement("span");
    month_span.textContent = months[selected_time.getMonth()];
    const buttons = {
        back: document.createElement("button"),
        front: document.createElement("button")
    };

    for (
            let
                i=0,
                keys=["back","front"],
                text=["<", ">"],
                offset=[-1,+1];
            i<2;
            i++
        ) {
        buttons[keys[i]].addEventListener("click", e => {
            console.log(selected_time);
            selected_time = new Date(selected_time.getFullYear(), selected_time.getMonth()+offset[i]);
            setup_day_grid(day_grid, selected_time, input);
            month_span.textContent = months[selected_time.getMonth()];
        })
        buttons[keys[i]].textContent = text[i];
        month_header.appendChild(buttons[keys[i]]);
    }
    
    month_header.insertBefore(month_span, buttons.front)
    return selected_time;
}