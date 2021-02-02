/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click',function(){
        var firstRequest = new Request('http://localhost:63342/javascript-exercises/_shared/api.json')

        fetch(firstRequest)

        fetch(firstRequest)
            .then(function(Response){return Response.json()})

            .then(function(Data){

                for (let j = 0; j < Data.heroes.length ; j++) {
                    var template = document.getElementById('tpl-hero')
                    var clone = template.content.cloneNode(true)
                    document.getElementById('target').appendChild(clone)
                    document.getElementsByClassName("name")[j].innerText= Data.heroes[j].name;
                    document.getElementsByClassName("alter-ego")[j].innerText= Data.heroes[j].alterEgo;
                    var newarray=[]
                    for (let i = 0; i <Data.heroes[j].abilities.length ; i++) {
                        newarray.push(Data.heroes[j].abilities[i])
                    }
                    document.getElementsByClassName("powers")[j].innerText= newarray;

                }

            })
    })




})();
