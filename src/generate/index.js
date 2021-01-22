/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
 
import setup_skeleton from './skeleton';
import setup_month_header from './month-header';
import setup_week_header from './week-header';
import setup_day_grid from './day-grid';
import Selected_time from '../utils/Selected_time';

export default function generate(input) {
    const selected_time = new Selected_time();
    const [container, month_header, week_header, day_grid] = setup_skeleton(input.parentNode);
    setup_month_header(month_header, day_grid, selected_time, input);
    setup_week_header(week_header);
    setup_day_grid(day_grid, selected_time, input);
    return container;
}