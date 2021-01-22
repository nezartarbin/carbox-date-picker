/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

export default function () {
    this.time= new Date(), //do not access or change this directly
    this.get_time = function() {
        return this.time;
    };
    this.set_time = function(new_time) {
        this.time = new_time;
    };
}