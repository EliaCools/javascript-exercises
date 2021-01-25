/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let table = document.createElement('table');
    document.getElementById('target').appendChild(table);
    let b =0
    for (let i = 0; i <10 ; i++) {
        let row = document.createElement('tr');
        table.appendChild(row);
        b+=1

        for (let j = 1; j <11 ; j++) {
            let column = document.createElement('td');

            column.innerText = b*j;
            row.appendChild(column);
        }


    }

})();
