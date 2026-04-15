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



    //SEND
     function sendToTeam(){
        let teamname = document.getElementById('teamname')
        let teamposition = document.getElementById('teamposition')
        let teamimage = document.getElementById('teamimage')

        const formData = new FormData()
        formData.append('status', '1')
        formData.append('name' , teamname.value)
        formData.append('position' , teamposition.value)

        if(teamimage.files[0]){
            formData.append('image' , teamimage.files[0])
        }

        fetch('https://api142.nurlandev.click/api/leaders' , {
            method: "POST",
            body: formData,
           headers : {"accept" : "application/json"}
        })
          .then(res => res.json())
          
          .then(responese => {
            console.log(responese);
            
            if(responese){
                teamname.value = ""
                teamposition.value = ""
                teamimage.value = ""
            modal.style.display = 'none'
           overlay.style.display = 'none'
           getTeamData()
           
            }
          })
    }


    let teamdata = document.getElementById('teamdata')
    function getTeamData(){
            teamdata.innerHTML = ""
        fetch('https://api142.nurlandev.click/api/leaders')
        .then(response => response.json())
        .then(response => response.data.map(item => 
            teamdata.innerHTML += `
                <tr>
                   <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.position}</td>
                    <td><img  src="https://api142.nurlandev.click/public/img/leaders/${item.image}" /></td>
                    <td>
                            <button onclick="deleteSlider(${item.id})"><i class="fa-solid fa-xmark text-xl text-red-700 font-[500]"></i></button>
                        </td>
                    </tr>
            `
        ))
    }
    getTeamData()

  function deleteSlider(id){
    fetch(`https://api142.nurlandev.click/api/leaders/${id}` ,{
        method: "DELETE" ,
        headers: {
           "Accept": "application/json" 
        }  })
       .then(res => res.json())
       .then(responese => {
        if(responese){
             getTeamData()
        }
        
       })
  }
 