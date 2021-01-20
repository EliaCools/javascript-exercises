/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementById('run').addEventListener('click',function(){
        //getting input userinput of year//
        let enteryear = document.getElementById('year').value;
        let year = parseInt(enteryear);

        //set array for, for loop//
        let months = new Array();
        months[0] = 0;
        months[1] = 1;
        months[2] = 2;
        months[3] = 3;
        months[4] = 4;
        months[5] = 5;
        months[6] = 6;
        months[7] = 7;
        months[8] = 8;
        months[9] = 9;
        months[10] = 10;
        months[11] = 11;




        //set array for screen output//
        var date2 = new Array();
        date2[0] = "January";
        date2[1] = "February";
        date2[2] = "March";
        date2[3] = "April";
        date2[4] = "May";
        date2[5] = "June";
        date2[6] = "July";
        date2[7] = "August";
        date2[8] = "September";
        date2[9] = "October";
        date2[10] = "November";
        date2[11] = "December";

        //set date for friday the 13th//
        let date = 13;


        for (let x = 0; x <12 ; x++) {
            //array loop for new date//
            let month = months[x];
            //array loop for screen output//
            let monthNames = date2[x];
            let date1 = new Date(year, month, date).getDay();


            if(date1===5) {

               alert("There is a friday the 13th in: " + monthNames);
            }
        }





































    })






})();
