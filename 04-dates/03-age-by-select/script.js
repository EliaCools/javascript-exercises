/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click",function(){

        // retrieve input date//

        let day= document.getElementById("dob-day").value;
        //month's start from zero, so I have to put them in right format//
        let getMonth= document.getElementById("dob-month").value;
        let month= getMonth-1;
        let year=document.getElementById("dob-year").value;

        //retrieve input date end//
        //retrieve today date//
        let today =new Date();
        let thisday=today.getDay();
        let thismonth=today.getMonth();
        let thisyear= today.getFullYear();
        //end//

        let monthdifference=thismonth-month;


        let age=thisyear-year;

        if(monthdifference<0){
            age-=1
        }


       alert("your age is " +age)



    })





})();
