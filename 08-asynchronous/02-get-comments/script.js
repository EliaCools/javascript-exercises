/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

document.getElementById('run').addEventListener('click',function(){

window.lib.getPosts(article)

function article(error, articles){
        if(error !==null){
            console.log(error)
        }else{
            let articleId = articles.id
            articles.forEach(comments)

            function comments(item) {
                console.log(item)
                window.lib.getComments(articleId, callback)

                function callback(error, comments){
                    if (error !==null){
                        console.log(error)
                    }else{
                        item.comments=comments
                    }
                }
            }
        }
}
})
})();


