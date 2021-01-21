/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var removedublicate = [];


    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    document.getElementById('run').addEventListener("click",function(){
        fruits.sort()

        for (let i = 0; i <fruits.length; i++) {
            if( fruits[i] !== fruits[i+1]){
                removedublicate.push(fruits[i])
            }
        }

        console.log(removedublicate)







    })

})();
