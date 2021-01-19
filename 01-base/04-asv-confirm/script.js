/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


loop()
    function loop() {
    {
        let age = prompt("what is your age?");
        let gender = prompt("What is your gender?");
        let town = prompt("In what Town do you live?")
        var right = confirm("Your age: " + age + "," +   " Your Gender: " + gender +","   +  " Your town: " + town +","  );

        if(right===true){

        }

        else{
            loop();
        }

    }
}


})();
