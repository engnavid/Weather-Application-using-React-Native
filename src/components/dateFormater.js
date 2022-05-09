export const dateFormater = (date) => {
    date = date + '';
    const months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
    const month = parseInt(date.slice(4, 6))
    const day = parseInt(date.slice(6,))

    return months[month] + " " + day;
}

export const todayDate = () => {
    objToday = new Date(),
        weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
        dayOfWeek = weekday[objToday.getDay()],
        dayOfMonth = (objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(),
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear();
    return today = dayOfWeek + " " + dayOfMonth + " " + curMonth + ", " + curYear;

}