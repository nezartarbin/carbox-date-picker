/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
 
import { weekdays_abbr } from '../utils/names';

export default function setup_week_header(week_header) {
    for (let i=0;i<7;i++) {
        const weekday = document.createElement("div");
        weekday.textContent = weekdays_abbr[i];
        Object.assign(weekday.style, {
            textAlign: "center",
            width: "40px",
            height: "40px",
            color: "#696969",
            lineHeight: "40px",
        });
        week_header.appendChild(weekday);
    }
}