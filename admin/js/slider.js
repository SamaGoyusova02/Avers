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
    function sendToslider(){
        let slidertitle = document.getElementById('slidertitle')
        let slidercontent = document.getElementById('slidercontent')
        let sliderimage = document.getElementById('sliderimage')

        const formData = new FormData()
        
        formData.append('title' , slidertitle.value)
        formData.append('description' , slidercontent.value)
        
        if(sliderimage.files[0]){
            formData.append('image' , sliderimage.files[0])
        }

        fetch("https://api142.nurlandev.click/api/sliders", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
          .then(res => res.json())
          .then(responese => {
            if(responese){
                slidertitle.value = ""
                slidercontent.value = ""
                sliderimage.value = ""
           getData()
           modal.style.display = 'none'
           overlay.style.display = 'none'
            }
          })
    }


    let sliderdata = document.getElementById('sliderdata')
    function getData(){
            sliderdata.innerHTML = ""
        fetch('https://api142.nurlandev.click/api/sliders')
        .then(responese => responese.json())
        .then(responese => responese.data.map(item => 
            sliderdata.innerHTML += `
                <tr>
                   <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.description}</td>
                    <td><img class="w-[50px] h-[40px]" src="https://api142.nurlandev.click/public/img/sliders/${item.image}" /></td>
                    <td>
                            <button onclick="deleteSlider(${item.id})"><i class="fa-solid fa-xmark text-xl text-red-700 font-[500]"></i></button>
                        </td>
                    </tr>
            `
        ))
    }
    getData()

  function deleteSlider(id){
    fetch(`https://api142.nurlandev.click/api/sliders/${id}` ,{
        method: "DELETE" ,
        headers: {
           "Accept": "application/json" 
        }  })
       .then(res => res.json())
       .then(responese => {
        if(responese){
             getData()
        }
        
       })
  }
 