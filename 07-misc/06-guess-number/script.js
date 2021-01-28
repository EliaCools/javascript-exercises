/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var x = Math.floor(Math.random()*100)
    var input=document.createElement('input')
    input.setAttribute("id","guess")
    input.style.marginLeft="30%";
    var node = document.createElement("textnode");
    input.appendChild(node)
    var div= document.createElement('div');
    div.setAttribute("id","guesscontainer")
    div.appendChild(input);
    var section = document.querySelector('.explain');
    section.appendChild(div)




    console.log(x);


 document.getElementById("guess").addEventListener("keydown",function(e){
     if (e.key === 'Enter') {
         var userguess = parseInt(input.value)
         var b=1
         b+=b

         if(userguess>x){
             alert("lower")
         }else if(userguess<x){
             alert("higher")
         }else if(userguess===x){
             alert("correct!")
             alert("you needed "+b+" guesses ");
         }

     }
 })






})();
