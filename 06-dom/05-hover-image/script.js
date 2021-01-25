/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var img =document.getElementsByTagName('img')[0];
    var hover =img.getAttribute('data-hover');
    var source = img.getAttribute('src');

    img.addEventListener("mouseover",function(){
        img.removeAttribute(source)
         img.setAttribute('src',hover);

        setTimeout(function(){
            img.setAttribute('src',source)
        },1000)

    },false)

})();
