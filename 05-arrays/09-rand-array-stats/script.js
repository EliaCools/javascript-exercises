/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').addEventListener("click",function(){
        var numbers=[]

        for (let i = 0; i <10 ; i++) {
            numbers.push(Math.floor(Math.random()*100))
        }

        for (let i = 1; i <=numbers.length ; i++) {
            document.getElementById('n-'+i).innerHTML= numbers[i-1];
        }

        document.getElementById('min').innerHTML=(Math.min(...numbers))
        document.getElementById('max').innerHTML=(Math.max(...numbers))

        var a = numbers.reduce(sum);
        function sum(total, num){
            return total + num;
        }
        document.getElementById('sum').innerHTML=a;
        document.getElementById('average').innerHTML= a/numbers.length;
    })
})();
