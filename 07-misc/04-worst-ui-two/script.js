/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


            var buttons = document.querySelectorAll("button");

    var number1 = parseInt(document.getElementById('part-one').innerText);
    var number2 = parseInt(document.getElementById('part-two').innerText);
    var number3 = parseInt(document.getElementById('part-three').innerText);
    var number4  = parseInt(document.getElementById('part-four').innerText);
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener("click",function(){

                    if(buttons[i]===document.getElementById('part-one')){
                        if(number1<499)
                        number1 +=1
                    }
                    else if(buttons[i]===document.getElementById('part-two')){
                        if(number2<99){
                            number2 +=1
                        }

                    }
                    if(buttons[i]===document.getElementById('part-three')){
                       if(number3<99){
                           number3 +=1
                       }

                    }
                    else if(buttons[i]===document.getElementById('part-four')){
                        if(number4<99){
                            number4 +=1
                        }

                    }
                    var numstr1=number1.toString()
                    var numstr2=number2.toString()
                    var numstr3=number3.toString()
                    var numstr4=number4.toString()


                    document.getElementById('part-one').innerText=numstr1;
                    document.getElementById('part-two').innerText=numstr2.padStart(2,"0");
                    document.getElementById('part-three').innerText=numstr3.padStart(2,"0");
                    document.getElementById('part-four').innerText=numstr4.padStart(2,"0");

                    document.getElementById('target').innerText=numstr1.padStart(4,"+")+numstr2.padStart(2,'0')+numstr3.padStart(2,'0')+numstr4.padStart(2,'0');
                })





             }






















})();
