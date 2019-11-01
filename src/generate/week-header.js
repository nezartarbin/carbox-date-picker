import { weekdays_abbr } from '../utils/names';

export default function setup_week_header(week_header) {
    for (let i=0;i<7;i++) {
        const weekday = document.createElement("div");
        weekday.textContent = weekdays_abbr[i];
        weekday.className = "cell-dimensions";
        week_header.appendChild(weekday);
    }
}