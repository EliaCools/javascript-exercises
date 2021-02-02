/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('run').addEventListener('click',function(){
        let firstRequest = new Request('http://localhost:63342/javascript-exercises/_shared/api.json')

        fetch(firstRequest)
            .then(function(Response){return Response.json()})
            .then(function(Data){ console.log(Data)})
    })

})();
