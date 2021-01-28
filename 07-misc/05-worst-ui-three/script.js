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
   var buttons = document.querySelectorAll("button");

    var valuebutton1 = parseInt(document.getElementById("part-one").value)
    var datamaxbutton1 = document.getElementById("part-one").getAttribute("data-max");

    var valuebutton2 = parseInt(document.getElementById("part-two").value)
    var valuebutton3 = parseInt(document.getElementById("part-three").value)
    var valuebutton4 = parseInt(document.getElementById("part-four").value)

    function counter1(){
        if(valuebutton1>=datamaxbutton1){
            valuebutton1 = 460;
        }else {
            let numberincr = valuebutton1 += 1
            document.getElementById('part-one').value=numberincr.toString();
        }}
    var interval1 = setInterval(counter1,80)

    function counter2(){
        if(valuebutton2>=99){
            valuebutton2=0
        }else {
            let numberincr = valuebutton2 += 1
            document.getElementById('part-two').value=numberincr.toString().padStart(2,"0");
        }
    }
    var interval2 = setInterval(counter2,70)

    function counter3(){
        if(valuebutton3>=99){
            valuebutton3=0
        }else {
            let numberincr = valuebutton3 += 1
            document.getElementById('part-three').value=numberincr.toString().padStart(2,"0");
        }
    }
    var interval3 = setInterval(counter3,50)

        function counter4(){
        if(valuebutton4>=99){
            valuebutton4=0
        }else {
            let numberincr = valuebutton4 += 1
            document.getElementById('part-four').value=numberincr.toString().padStart(2,"0");
        }
    }
    var interval4 = setInterval(counter4,15)



    for (let i = 0; i <buttons.length ; i++) {

        buttons[i].addEventListener("click", function () {

            if (buttons[i] === document.getElementById("fix-part-one")) {
                let newvalue = document.getElementById('part-one').value
                document.getElementById('part-one').setAttribute("value", newvalue)
                document.getElementById("fix-part-one").setAttribute("disabled", "disabled")
                clearInterval(interval1)
            } else if (buttons[i] === document.getElementById("fix-part-two")) {
                let newvalue = document.getElementById('part-two').value
                document.getElementById('part-two').setAttribute("value", newvalue);
                document.getElementById("fix-part-two").setAttribute("disabled", "disabled")
                clearInterval(interval2)

            } else if (buttons[i] === document.getElementById("fix-part-three")) {
                let newvalue = document.getElementById('part-three').value
                document.getElementById('part-three').setAttribute("value", newvalue);
                document.getElementById("fix-part-three").setAttribute("disabled", "disabled")
                clearInterval(interval3)

            } else if (buttons[i] === document.getElementById("fix-part-four")) {
                let newvalue = document.getElementById('part-four').value;
                document.getElementById('part-four').setAttribute("value", newvalue)
                document.getElementById("fix-part-four").setAttribute("disabled", "disabled")
                clearInterval(interval4)
            }

            number1 = document.getElementById("part-one").getAttribute("value");
            number2 = document.getElementById("part-two").getAttribute("value")
            number3 = document.getElementById("part-three").getAttribute("value")
            number4 = document.getElementById("part-four").getAttribute("value")


            document.getElementById('target').innerText = number1.padStart(4, "+") + number2 + number3 + number4;
        })
    }

})();
