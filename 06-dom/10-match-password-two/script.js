/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener("click",function(){
        let a = document.getElementById("pass-one")
        let b = document.getElementById("pass-two")
        if(a.value !== b.value){
            a.setAttribute("class","error");
            b.setAttribute("class","error");
        }
         else{
            a.removeAttribute("class","error");
            b.removeAttribute("class","error");
        }
    })


})();
