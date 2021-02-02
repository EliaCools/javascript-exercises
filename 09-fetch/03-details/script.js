/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    var list = document.getElementsByTagName("ol")[0]

    var template = document.getElementById('tpl-hero')
    var clone = template.content.cloneNode(true)
    document.getElementById('run').addEventListener('click',function(){



        var firstRequest = new Request('http://localhost:63342/javascript-exercises/_shared/api.json')
        fetch(firstRequest)
        fetch(firstRequest)
            .then(function(Response){return Response.json()})
            .then(function(Data){
             let j =   document.getElementById('hero-id').value

                if(parseInt(j)>=Data.heroes.length){
                   alert("Hero not in database");

                }else {
                    list.setAttribute('start',j)
                    document.getElementById('target').appendChild(clone)
                    document.getElementsByClassName("name")[0].innerText = Data.heroes[j].name;
                    document.getElementsByClassName("alter-ego")[0].innerText = Data.heroes[j].alterEgo;
                    var newarray = []
                    for (let i = 0; i < Data.heroes[j].abilities.length; i++) {
                        newarray.push(Data.heroes[j].abilities[i])
                    }
                    document.querySelector(".powers").innerText = newarray;
                }
            })
    })
})();
