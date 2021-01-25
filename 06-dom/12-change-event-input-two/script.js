/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('pass-one').addEventListener("input",function(){

        var a  = document.getElementById('pass-one').value.length;
        var b = document.getElementById('pass-one').value;
       var array =  b.split("");
        array.forEach(checker)

       function checker(item){
          if(isNaN(item)===false)  {
             b=1
              b+=b;
          }
        }
        if(a>=8 && b>=2 ){
            document.getElementById('validity').innerText="Ok";
        }
        else{
            document.getElementById('validity').innerText="Not ok";
        }
    })

})();
