//open aside
let aside = document.getElementById('aside')
function openaside(){
    aside.style.left = '10px'
    aside.style.transition = '.9s ease-in-out'
}
function closeaside(){
    aside.style.left = '-100%'
    aside.style.transition = '.9s ease-in-out'
}

