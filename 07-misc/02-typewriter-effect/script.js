/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var a = document.getElementById("target").innerText;
    var paragraph= document.createElement('p');
    paragraph.style.fontSize="20px";
    paragraph.style.fontFamily="Lucida Sans Typewriter"

    var textarray= a.split("");
        function typer() {
            let c =  textarray.shift()
            var textnode = document.createTextNode(c);
            paragraph.appendChild(textnode)

            if (c.length<=textarray.length){
                setTimeout(typer, Math.random()*250)
            }else{}
        }
        typer()

    var material = document.querySelector('.material');
    material.appendChild(paragraph);


    document.getElementById('target').innerText="";






})();
