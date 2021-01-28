/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {




    document.getElementById("target").innerText=localStorage.c;

    document.getElementById("increment").addEventListener("click",function(){

        if (localStorage.c) {
            localStorage.c = Number(localStorage.c) + 1}
        else {
            localStorage.c = 1;}
        document.getElementById("target").innerText = localStorage.c;

    })

})();


