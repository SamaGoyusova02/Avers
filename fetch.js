let slidercontainer = document.getElementById('slidercontainer')
fetch('https://api142.nurlandev.click/api/sliders')
.then(res => res.json())
.then(response => response.data.map(item =>
    slidercontainer.innerHTML += `
         <swiper-slide style="background: url('https://api142.nurlandev.click/public/img/sliders/${item.image}') center/cover; width: 100%; height: 100vh;"> 
                    <div class="bg-black/70 w-[100%] h-[100%] ">
                        <div class="flex justify-between items-center mx-5">
                            <div class="hidden md:block lg:flex">
                                <div class="flex flex-col gap-5 I pl-4">
                                    <p class="w-[40px] h-[40px] rounded-[50%] border border-[#292b2f] flex justify-center items-center hover:bg-[#e9a132] duration-300 ease-in-out hover:border-[#e9a132]"><i class="fa-brands fa-facebook-f text-xl text-white"></i></p>
                                    <p class="w-[40px] h-[40px] rounded-[50%] border border-[#292b2f] flex justify-center items-center  hover:bg-[#e9a132] duration-300 ease-in-out hover:border-[#e9a132]"><i class="fa-brands fa-twitter  text-xl text-white"></i></p>
                                    <p class="w-[40px] h-[40px] rounded-[50%] border border-[#292b2f] flex justify-center items-center  hover:bg-[#e9a132] duration-300 ease-in-out hover:border-[#e9a132]"><i class="fa-brands fa-linkedin-in  text-xl text-white"></i></p>
                                    <p class="w-[40px] h-[40px] rounded-[50%] border border-[#292b2f] flex justify-center items-center  hover:bg-[#e9a132] duration-300 ease-in-out hover:border-[#e9a132]"><i class="fa-brands fa-dribbble  text-2xl text-white"></i></p>
                                </div>
                            </div>
                            <div class="II">
                                <div class="II text-white flex flex-col gap-2">
                                    <p class="font-[Rubik]">This Week Only for World Premier</p>
                                    <h2 class="lg:text-6xl md:text-4xl text-5xl lg:w-[67%] font-[700] font-[Rubik] mt-2">${item.title}</h2>
                                    <p class="font-[Rubik] lg:w-[50%] mt-3">${item.description}</p>
                                    <button class="bg-[#e9a132] w-[160px] h-[44px] rounded-[10px] font-[500] mt-8 lg:mt-3">Get A Quote</button>
                                </div>
                            </div>
                            <div class="h-[100vh] relative III">
                                <p class="bg-gradient-to-t  from-[#f59b14]/40 to-[#f5e7d368]/5  h-[100%] w-[400px] translate-x-34 absolute right-0 -skew-x-12 lg:-skew-x-17"></p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
    `
))