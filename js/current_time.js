$(document).ready(function() {
    setInterval(function() {
        let now = new Date();

        //format date
        let secs = "";
        let mins = "";
        let hour = "";
        let mill = "";
        let ampm = "";

        if(now.getSeconds() <= 9)
            secs = "0" + now.getSeconds();
        else
            secs = now.getSeconds();

        if(now.getHours() > 12) {
            hour = now.getHours() - 12;
            ampm = " PM";
        } else {
            hour = now.getHours();
            ampm = " AM";
        }

        if(now.getMinutes() <= 9)
            mins = "0" + now.getMinutes();
        else
            mins = now.getMinutes();

        //mainly exists to look cool
        if(Math.round(now.getMilliseconds() / 10) <= 9) {
            mill = "0" + Math.round(now.getMilliseconds() / 10)
        } else {
            mill = Math.round(now.getMilliseconds() / 10)
        }

        $('#time').html("<center>" + hour + ":" + mins + ":" + secs + "." + mill + ampm + "</center>"); //actually updates time
    }, 90);
});
