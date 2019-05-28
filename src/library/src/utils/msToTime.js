function msToTime(s) {
    var ss = s;
    
    var ms = ss % 1000;
    ss = (ss - ms) / 1000;
    var secs = ss % 60;
    ss = (ss - secs) / 60;
    var mins = ss % 60;
    var hrs = (ss - mins) / 60;

    return {
        hours: hrs,
        minutes: mins,
        seconds: secs
    }
}