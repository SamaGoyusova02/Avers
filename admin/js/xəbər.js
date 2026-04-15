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

        const formData = new FormData()
        formData.append("title" , newstitle.value)
        formData.append("content" , newscontent.value)
        if(newsimage.files[0]){
            formData.append("main_image" , newsimage.files[0])
        }

        fetch('https://api142.nurlandev.click/api/news' , {
            method : "POST" ,
            body : formData ,
            headers : {"accept" : "application/json"}
        })
        .then(res => res.json())
        .then(response => {
           if(response){
             newsimage.value = ""
            newstitle.value = ""
            newscontent.value = ""
            getNewsData()
           modal.style.display = 'none'
           overlay.style.display = 'none'
           }
        } )

    }

    let newstable = document.getElementById('newstable')
    function getNewsData(){
        newstable.innerHTML = ""
        fetch('https://api142.nurlandev.click/api/news')
        .then(res => res.json())
        .then(response => response.data.map(item =>
            newstable.innerHTML += `
           <tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.content}</td>
                <td><img src="https://api142.nurlandev.click/public/img/news/${item.main_image}"/></td>
                
                     <td>
                            <button onclick="deletenews(${item.id})"><i class="fa-solid fa-xmark text-xl text-red-700 font-[500]"></i></button>
                    </td>
            
            </tr>

            `
        ))
    }

    getNewsData()

    function deletenews(id){
        fetch(`https://api142.nurlandev.click/api/news/${id}` , {
            method : "DELETE" ,
           headers: {
           "Accept": "application/json" 
        } 
        })
         .then(res  => res.json())
        .then(response => {
            if(response){
                alert("Uğurla silindi !")
                getNewsData()
            }
        })
    }