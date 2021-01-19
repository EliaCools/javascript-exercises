/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    for (let i = 0; i <100 ; i++) {

        let a = i+1;
        let buzz = a % 5;
        let fizz = a % 3 ;

        if (fizz === 0 && buzz === 0){
            console.log("fizzbuzz");
        }

        else if (fizz === 0){
            console.log("fizz");
        }

        else if (buzz ===0) {
            console.log("buzz");
        }

        else{
            console.log(a);
        }



    }











})();
