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

    //Send

    function sendtoServices(){
        let servicesimage = document.getElementById('servicesimage')
        let servicestitle = document.getElementById('servicestitle')
        let servicesdesc = document.getElementById('servicesdesc')

        const formData = new FormData()
        formData.append("description" , servicesdesc.value)
        formData.append("title" , servicestitle.value)
        if(servicesimage.files[0]){
            formData.append( "image" , servicesimage.files[0])
        }


        fetch('https://api142.nurlandev.click/api/services' , {
            method : "POST" ,
            body: formData ,
            headers : {"accept" : "application/json"}
        })
        .then(res =>res.json())
        .then(response => {

             if(response){
                 servicesdesc.value = ""
                servicestitle.value = ""
                servicesimage.value = ""
                modal.style.display = 'none'
                overlay.style.display = 'none'
                alert('Uğurla əlavə edildi !')
                getServicesData()
            }
        })
    }

    let servicesdata = document.getElementById('servicesdata')
    function getServicesData(){
        servicesdata.innerHTML = ""
        fetch('https://api142.nurlandev.click/api/services')
        .then(res => res.json())
        .then(response => response.data.map(item =>
            servicesdata.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.description}</td>
                <td><img src="https://api142.nurlandev.click/public/${item.image}"/></td>
                <td>
                   <button onclick="deleteServices(${item.id})"><i class="fa-solid fa-xmark text-xl text-red-700 font-[500]"></i></button>
               </td>
                </tr>
            `
        ))
        
    }
    getServicesData()

    function deleteServices(id){
        fetch(`https://api142.nurlandev.click/api/services/${id}`,{
            method : "DELETE" ,
            headers : {"accept" : "application/json"}
        })
        .then(res => res.json())
        .then(response => {
            if(response){
                alert('Uğurla silindi !')
                getServicesData()
            }
        })
    }