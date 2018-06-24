function getDayName(dateString) {
    let date = new Date(dateString);
    let shortName = date.toDateString().split(" ")[0];
    return {
        "Sun": "Sunday",
        "Mon": "Monday",
        "Tue": "Tuesday",
        "Wed": "Wednesday",
        "Thu": "Thursday",
        "Fri": "Friday",
        "Sat": "Saturday"
    }[shortName];
}