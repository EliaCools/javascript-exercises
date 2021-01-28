/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


/*
function timer() {
    for (let i = 0; i < 10; i++) {
        var a=1
        var b=2
        var c =3

        setInterval(timer,300)
        if(i===2){
            return a.toString();

        }else if(i===3){
            return b.toString();

        }else if(i===4){
            return c.toString();

        }
    }

}
    document.getElementById('part-one').setAttribute("value",timer())

*/




    var buttons = document.querySelectorAll("button");




    function randomint(min,max){
        min =Math.ceil(460)
        max=Math.floor(499)
        return Math.floor(Math.random()*(max-min)+min)
    }
    function randomint2(min,max){
        min =Math.ceil(0)
        max=Math.floor(99)
        return Math.floor(Math.random()*(max-min)+min)
    }






    for (let i = 0; i <buttons.length ; i++) {

        buttons[i].addEventListener("click",function(){

            if (buttons[i]===document.getElementById("fix-part-one")){
                document.getElementById('part-one').value=randomint();

            }else  if  (buttons[i]===document.getElementById("fix-part-two")){
                document.getElementById('part-two').value=randomint2();



            }else if (buttons[i]===document.getElementById("fix-part-three")){
                document.getElementById('part-three').value=randomint2();



            }else if (buttons[i]===document.getElementById("fix-part-four")){
                document.getElementById('part-four').value=randomint2();

            }
            var num1 =  document.getElementById('part-one').value
            var num2 =  document.getElementById('part-two').value
            var num3 =  document.getElementById('part-three').value
            var num4 =  document.getElementById('part-four').value



            document.getElementById('target').innerText=num1.padStart(4,'+')+num2.padStart(2,'0')+num3.padStart(2,'0')+num4.padStart(2,'0');



        })


    }





})();
