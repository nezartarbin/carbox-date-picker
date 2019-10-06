import setup_skeleton from './skeleton';
import setup_month_header from './month-header';
import setup_week_header from './week-header';
import setup_day_grid from './day-grid';



export default function generate(input) {
    const selected_time = {
        time: new Date(), //do not access or change this directly
        get_time() {
            return this.time;
        },
        set_time(new_time) {
            this.time = new_time;
        },
    }
    const [container, month_header, week_header, day_grid] = setup_skeleton(input.parentNode);
    setup_month_header(month_header, day_grid, selected_time, input);
    setup_week_header(week_header);
    setup_day_grid(day_grid, selected_time, input);
    return container;
}