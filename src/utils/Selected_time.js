export default function () {
    this.time= new Date(), //do not access or change this directly
    this.get_time = function() {
        return this.time;
    };
    this.set_time = function(new_time) {
        this.time = new_time;
    };
}