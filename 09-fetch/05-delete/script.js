/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {



        var newrequest =  new Request('http://localhost:63342/javascript-exercises/_shared/api.json')
            fetch(newrequest)
            .then(response=>response.json())
            .then(data => {
                document.getElementById('run').addEventListener('click', function () {
                    var getvalue = document.getElementById('hero-id').value
                    data.heroes.forEach(remove)
                    function remove(item) {
                        if (item.id === parseInt(getvalue)) {
                            console.log("Hero "+item.id+" removed")
                           var idx = data.heroes.indexOf(item);
                            data.heroes.splice(idx, 1);
                        }
                    }
                    console.log(data);
             })
        })
})();
