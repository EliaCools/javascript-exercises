/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click",function(){

        var color=document.getElementById("color").value;

        if(color ==="red"){
            document.body.style.backgroundColor="red";
        }

        else if(color ==="blue"){
            document.body.style.backgroundColor="blue";
        }

        else if(color ==="yellow"){
            document.body.style.backgroundColor="yellow";
        }

        else if(color ==="orange"){
            document.body.style.backgroundColor="orange";
        }

        else if(color ==="green"){
            document.body.style.backgroundColor="green";
        }






    })


})();
