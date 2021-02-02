/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    var newRequest = new Request('http://localhost:63342/javascript-exercises/_shared/api.json')

    fetch(newRequest)
        .then(response=>response.json())
        .then(data=>{

            document.getElementById('run').addEventListener('click',function(){
                if(document.getElementById("hero-name").value==="" ||document.getElementById("hero-alter-ego").value===""||document.getElementById("hero-powers").value==="" ){
                    console.error("No hero added because not all fields were filled in ")
                    console.log(data)
                }else {
                    let l = data.heroes.length
                    var b = {}
                    b.id = l + 1;
                    b.name = document.getElementById("hero-name").value
                    b.alterEgo = document.getElementById("hero-alter-ego").value
                    var c = document.getElementById("hero-powers").value.split(",")
                    b.abilities = c;

                    data.heroes.push(b)

                    console.log("Congratulations, new hero added to team")
                    console.log(data)
                }


        })


        })

})();
