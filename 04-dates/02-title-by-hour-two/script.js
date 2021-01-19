/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();


    //putting this first so it will test the most specific values first //
     if(h===17 && m>=30){
        document.getElementById("target").innerHTML="Good evening";
     }

    else if(h<=17){
    document.getElementById("target").innerHTML="Hello";
    }


    else if(h>17){
        document.getElementById("target").innerHTML="Good evening";

    }





})();
