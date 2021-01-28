/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

        var a = document.getElementById("target").innerText;
        var paragraph= document.createElement('p');
        var material =  document.querySelector('.material');
        material.appendChild(paragraph);

       var substring =  a.split("")

    function increase1() {
        var am = 14;
        span.style.fontSize = am + "px";
    }
    function increase2() {
        var am = 18;
        span.style.fontSize = am + "px";
    }
    function increase3() {
        var am = 22;
        span.style.fontSize = am + "px";
    }
    function increase4() {
        var am = 26;
        span.style.fontSize = am + "px";
    }
    function increase5() {
        var am = 29;
        span.style.fontSize = am + "px";
    }function increase6() {
        var am = 33;
        span.style.fontSize = am + "px";
    }function increase7() {
        var am = 30;
        span.style.fontSize = am + "px";
    }

    for (let i = 0; i <substring.length ; i++) {
        var span = document.createElement('span');
        var textnode1 = document.createTextNode(substring[i])

        if((i+1)%12===1||(i+1)%12===0) {
            increase1();
        }else if((i+1)%12===2||(i+1)%12===11){
            increase2();
        }else if((i+1)%12===3||(i+1)%12===10) {
            increase3();
        }else if((i+1)%12===4||(i+1)%12===9) {
            increase4();
        }else if((i+1)%12===5||(i+1)%12===8) {
            increase5();
        }else if((i+1)%12===6) {
            increase6();
        }else if((i+1)%12===7) {
            increase7();
        }

        span.appendChild(textnode1)
        paragraph.appendChild(span)

    }
     document.getElementById("target").innerText="";









})();

