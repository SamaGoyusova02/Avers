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


    //Modal
    let overlay = document.getElementById('overlay')
    let modal = document.getElementById('modal')

    function openmodal(){
        overlay.style.display = 'flex'

        modal.style.display = 'flex'
        modal.style.transition = '.9s ease-in-out'
        overlay.style.transition = '.9s ease-in-out'
    }

    function closemodal(){
        overlay.style.display = 'none'
        modal.style.display = 'none'
        modal.style.transition = '.9s ease-in-out'
        overlay.style.transition = '.9s ease-in-out'
    }


    //Send news
    function sendToNews(){
        let newsimage = document.getElementById('newsimage')
        let newstitle = document.getElementById('newstitle')
        let newscontent = document.getElementById('newscontent')

        const newsimageValue = newsimage.value
        const newstitleValue = newstitle.value
        const newscontentValue = newscontent.value
        const NewsData = {
            "gallery" : newsimageValue ,
            "title" : newstitleValue , 
            "content" : newscontentValue
        }

        fetch("https://api142.nurlandev.click/api/news" ,{
            method : "POST" ,
            body : JSON.stringify(NewsData) ,
              headers: {
            "Accept": "application/json" ,
            "Content-Type": "application/json"
            
        }
        })
            modal.style.display = 'none'
            overlay.style.display = 'none'
            getNews()

    }

    
    let newstable = document.getElementById('newstable')
    function getNews(){
        newstable.innerHTML = ""
        fetch('https://api142.nurlandev.click/api/news')
        .then(res => res.json())
        .then(res => res.data.map(item =>
            newstable.innerHTML += `
             <tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.content}</td>
                <td class="flex justify-center "><img class="w-[50px] h-[50px]" src="${item.gallery}" /></td>
                 <td>
                 
                   <button onclick="deletenews(${item.id})"><i class="fa-solid fa-xmark text-xl text-red-700 font-[500]"></i></button>
                </td>
            </tr>
            `
        ))
    }

   getNews()

   function deletenews(id){
    fetch(`https://api142.nurlandev.click/api/news/${id}` , {
        method : "DELETE" , 
         headers: {
           "Accept": "application/json" 
        }
    })
    .then(res => res.json())
    .then(response => {
        if(response){
            getNews()
        }
    })
   }