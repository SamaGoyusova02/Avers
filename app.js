let menubar = document.getElementById('menubar')
let mark = document.getElementById('mark')
function menubaropenclose(){
    if(menubar.style.top == '-100%'){
        menubar.style.top = '90px'
        menubar.style.transition = '.9s ease-in-out'
        mark.classList.remove('fa-bars')
        mark.classList.add('fa-xmark')
        

    }
    else{
        menubar.style.top = '-100%'
        menubar.style.transition = '.9s ease-in-out'
        mark.classList.remove('fa-xmark')
        mark.classList.add('fa-bars')
    }
}

