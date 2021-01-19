/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"




    var date= new Date();

    var year=date.getFullYear();
    var getmonth=date.getMonth();
    var day=date.getDay();
    var monthday=date.getDate();
    var hour=date.getHours();
    var minutes=date.getMinutes();


    //month number to string conversion//

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var monthname= month[getmonth];
    //end//

    //weekday number to string conversion//

    var wday = new Array();
    wday[1] = "Monday";
    wday[2] = "Tuesday";
    wday[3] = "Wednesday";
    wday[4] = "Thursday";
    wday[5] = "Friday";
    wday[6] = "Saturday";
    wday[7] = "Sunday";

    var weekday = wday[day];
//end//



    let printdate= weekday +" "+monthday+" "+monthname+" "+ year + ", " + hour+"h"+minutes;




    document.getElementById("target").innerHTML=printdate;



})();
