//slider fetch start
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
//slider fetch end

//Services fetch start
let ServicesData = document.getElementById('ServicesData')
fetch('https://api142.nurlandev.click/api/services')
.then(res => res.json())
.then(response => response.data.map(item =>
    ServicesData.innerHTML +=  `
        <div class="bg-white rounded-lg overflow-hidden border-t-2 border-yellow-500 md:h-[420px]">
        <div class="p-5">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-gray-900 rounded p-2 w-15 h-15 flex items-center justify-center ">
              <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.44607 10.4345C7.69334 10.65 8.06841 10.62 8.27881 10.3706L9.70521 8.6801C9.91388 8.43275 9.88255 8.06315 9.63521 7.8544C9.38779 7.64572 9.01818 7.67713 8.80951 7.9244L7.76701 9.15994L7.40154 8.84158C7.15755 8.62893 6.78748 8.65432 6.57482 8.89846C6.36224 9.14244 6.38771 9.51252 6.63177 9.7251L7.44607 10.4345Z" fill="white"></path>
                    <path d="M9.63521 18.7069C9.38779 18.4983 9.01818 18.5297 8.80951 18.7769L7.76701 20.0125L7.40154 19.6941C7.15755 19.4815 6.78748 19.5069 6.57482 19.751C6.36224 19.995 6.38771 20.3651 6.63177 20.5776L7.44607 21.2871C7.69334 21.5026 8.06841 21.4726 8.27881 21.2233L9.70521 19.5327C9.91388 19.2854 9.88248 18.9157 9.63521 18.7069Z" fill="white"></path>
                    <path d="M9.63521 29.5595C9.38779 29.3508 9.01818 29.3822 8.80951 29.6295L7.76701 30.865L7.40154 30.5467C7.15755 30.334 6.78748 30.3594 6.57482 30.6035C6.36224 30.8475 6.38771 31.2176 6.63177 31.4302L7.44607 32.1396C7.69334 32.3552 8.06841 32.3252 8.27881 32.0758L9.70521 30.3853C9.91388 30.1379 9.88248 29.7682 9.63521 29.5595Z" fill="white"></path>
                    <path d="M15.2129 8.30664H27.5983C27.922 8.30664 28.1842 8.04438 28.1842 7.7207C28.1842 7.39703 27.922 7.13477 27.5983 7.13477H15.2129C14.8892 7.13477 14.627 7.39703 14.627 7.7207C14.627 8.04438 14.8892 8.30664 15.2129 8.30664Z" fill="white"></path>
                    <path d="M15.2129 11.1606H27.5983C27.922 11.1606 28.1842 10.8984 28.1842 10.5747C28.1842 10.251 27.922 9.98877 27.5983 9.98877H15.2129C14.8892 9.98877 14.627 10.251 14.627 10.5747C14.627 10.8984 14.8892 11.1606 15.2129 11.1606Z" fill="white"></path>
                    <path d="M10.7185 4.84326H5.5559C4.6059 4.84326 3.83301 5.61615 3.83301 6.56615V7.72045C3.83301 8.04412 4.09527 8.30639 4.41895 8.30639C4.74262 8.30639 5.00488 8.04412 5.00488 7.72045V6.56615C5.00488 6.26232 5.25207 6.01514 5.5559 6.01514H10.7185C11.0223 6.01514 11.2694 6.26232 11.2694 6.56615V11.7287C11.2694 12.0326 11.0223 12.2797 10.7185 12.2797H5.5559C5.25207 12.2797 5.00488 12.0326 5.00488 11.7287V10.5169C5.00488 10.1933 4.74262 9.931 4.41895 9.931C4.09527 9.931 3.83301 10.1933 3.83301 10.5169V11.7287C3.83301 12.6787 4.6059 13.4515 5.5559 13.4515H10.7185C11.6684 13.4515 12.4413 12.6787 12.4413 11.7287V6.56615C12.4412 5.61615 11.6684 4.84326 10.7185 4.84326Z" fill="white"></path>
                    <path d="M10.7185 15.6958H5.5559C4.6059 15.6958 3.83301 16.4687 3.83301 17.4187V22.5813C3.83301 23.5312 4.6059 24.3041 5.5559 24.3041H10.7185C11.6684 24.3041 12.4413 23.5312 12.4413 22.5813V17.4187C12.4412 16.4687 11.6684 15.6958 10.7185 15.6958ZM11.2693 22.5813C11.2693 22.8851 11.0222 23.1322 10.7184 23.1322H5.5559C5.25207 23.1322 5.00488 22.8851 5.00488 22.5813V17.4187C5.00488 17.1149 5.25207 16.8677 5.5559 16.8677H10.7185C11.0223 16.8677 11.2694 17.1149 11.2694 17.4187L11.2693 22.5813Z" fill="white"></path>
                    <path d="M10.7185 26.5483H5.5559C4.6059 26.5483 3.83301 27.3212 3.83301 28.2712V33.4338C3.83301 34.3837 4.6059 35.1566 5.5559 35.1566H10.7185C11.6684 35.1566 12.4413 34.3837 12.4413 33.4338V28.2712C12.4412 27.3212 11.6684 26.5483 10.7185 26.5483ZM11.2693 33.4338C11.2693 33.7376 11.0222 33.9847 10.7184 33.9847H5.5559C5.25207 33.9847 5.00488 33.7376 5.00488 33.4338V28.2712C5.00488 27.9674 5.25207 27.7202 5.5559 27.7202H10.7185C11.0223 27.7202 11.2694 27.9674 11.2694 28.2712L11.2693 33.4338Z" fill="white"></path>
                    <path d="M36.0414 5.19195C34.5098 4.52484 32.721 5.22773 32.0537 6.7593L31.8784 7.16164V4.14C31.8784 1.85719 30.0212 0 27.7384 0H4.27867C1.99586 0 0.138672 1.85719 0.138672 4.14V35.86C0.138672 38.1428 1.99586 40 4.27867 40H27.7384C30.0212 40 31.8784 38.1428 31.8784 35.86V22.3316C32.1787 21.6423 37.2757 9.94398 37.6087 9.17969C38.2777 7.64445 37.5766 5.86086 36.0414 5.19195ZM21.1896 31.6934H15.213C14.8894 31.6934 14.6271 31.9557 14.6271 32.2794C14.6271 32.603 14.8894 32.8653 15.213 32.8653H20.6816C20.4048 33.5308 20.2655 34.2334 20.2702 34.9561V34.9562L20.2962 38.8281H4.27867C2.64203 38.8281 1.31055 37.4966 1.31055 35.86V4.14C1.31055 2.50336 2.64203 1.17188 4.27867 1.17188H27.7384C29.375 1.17188 30.7065 2.50336 30.7065 4.14V9.85125C29.9661 11.5505 27.8855 16.3256 27.1616 17.9872H15.2131C14.8895 17.9872 14.6272 18.2495 14.6272 18.5731C14.6272 18.8968 14.8895 19.1591 15.2131 19.1591H26.651L25.9182 20.841H15.2131C14.8895 20.841 14.6272 21.1033 14.6272 21.427C14.6272 21.7506 14.8895 22.0129 15.2131 22.0129H25.4076L22.4331 28.8396H15.2131C14.8895 28.8396 14.6272 29.1019 14.6272 29.4255C14.6272 29.7492 14.8895 30.0115 15.2131 30.0115H21.9225L21.1896 31.6934ZM21.4421 34.9483C21.4409 34.7615 21.4532 34.5766 21.4762 34.3937C21.9887 34.617 21.2743 34.3057 24.572 35.7425C24.4537 35.8839 24.3267 36.0188 24.1891 36.1451L21.4669 38.642L21.4421 34.9483ZM30.7065 35.86C30.7065 37.4966 29.375 38.8281 27.7384 38.8281H22.9977L24.9812 37.0088C25.5362 36.4996 25.9702 35.8914 26.2712 35.2008L30.7065 25.0211V35.86ZM25.1968 34.7327C25.1963 34.7337 25.1958 34.7347 25.1953 34.7358L24.0294 34.2278L26.7874 27.8978C26.9166 27.6011 26.7809 27.2559 26.4843 27.1266C26.1875 26.9974 25.8423 27.1331 25.713 27.4297L22.955 33.7597L21.7891 33.2517C21.7896 33.2507 21.7899 33.2496 21.7904 33.2486L30.7481 12.6898L31.9141 13.1977L26.8071 24.9187C26.6779 25.2155 26.8136 25.5607 27.1102 25.69C27.4086 25.8199 27.7529 25.682 27.8815 25.3869L32.9884 13.6658L34.1544 14.1737C34.0119 14.5009 25.3323 34.4216 25.1968 34.7327ZM34.6226 13.0994L31.2162 11.6153L31.7977 10.2808L35.2041 11.7649L34.6226 13.0994ZM36.5344 8.71156L35.6721 10.6905L32.2658 9.20641L33.128 7.22742C33.5371 6.28828 34.6341 5.85711 35.5733 6.26633C36.5145 6.67633 36.9448 7.77 36.5344 8.71156Z" fill="white"></path>
                  </svg>
            </div>
            <h3 class="font-bold text-gray-900 text-lg leading-tight">
           ${item.title}
            </h3>
          </div>
          <p class="text-gray-500 text-lg leading-relaxed mb-4">
            ${item.description}
          </p>
        </div>
        <div class="relative">
          <img
            src="https://api142.nurlandev.click/public/${item.image}"
            alt="Accounting"
            class="w-full h-48 sm:h-40 md:h-36 object-cover"
          />
          <button class="absolute bottom-3 right-3 bg-yellow-500 hover:bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center transition-colors">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2.5">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </button>
        </div>
      </div>

    `  
))
//Services fetch End 



//Komanda fetch start

let KomandaData = document.getElementById('KomandaData')
fetch('https://api142.nurlandev.click/api/leaders')
.then(res => res.json())
.then(response => response.data.map(item =>
  KomandaData.innerHTML += `
       <div class="border-0 relative group bg-[#18191d] hover:bg-[#e9a132] ease-in-out duration-500 text-white rounded-[50px] overflow-hidden">
          <img class="rounded-[50px]" src="https://api142.nurlandev.click/public/img/leaders/${item.image}" alt="team">
          <div class="text-center py-5">
            <h5 class="text-2xl font-bold">${item.name}</h5>
            <p class="font-medium">${item.position}</p>
          </div>
          <div class="absolute hidden group-hover:flex duration-500 transition gap-3 left-1/2 -translate-x-1/2 bottom-33">
            <span class="w-12 h-12 rounded-[50%] bg-[#615a5a] hover:bg-[#e9a132] duration-300 ease-in-out flex justify-center items-center"><i class="fa-brands fa-facebook-f"></i></span>
            <span class="w-12 h-12 rounded-[50%] bg-[#615a5a] hover:bg-[#e9a132] duration-300 ease-in-out flex justify-center items-center"><i class="fa-brands fa-twitter"></i></span>
            <span class="w-12 h-12 rounded-[50%] bg-[#615a5a] hover:bg-[#e9a132] duration-300 ease-in-out flex justify-center items-center"><i class="fa-brands fa-dribbble"></i></span>
          </div>
        </div>
  `
))

//Komanda fetch end


//News start
  let NewsData = document.getElementById('NewsData')
  fetch('https://api142.nurlandev.click/api/news')
  .then(res => res.json())
  .then(response => response.data.map(item =>
    NewsData.innerHTML += `
       <div class="border-0 shadow-xl">
          <div class="relative group overflow-hidden">
            <img class="duration-500 group-hover:scale-110 object-cover" src="https://api142.nurlandev.click/public/img/news/${item.main_image}" alt="post" />
            <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50"></div>
          </div>
          <div class="flex flex-col gap-3 p-5">
            <div class="flex flex-row items-center gap-10">
              <div class="flex flex-row items-center gap-2 text-[12px]">
                <i class="fa-solid fa-user text-[#e9a132]"></i>
                <p class="text-[#666] hover:text-[#e9a132] duration-300 ease-in-out font-medium cursor-pointer">By admin</p>
              </div>
              <div class="flex flex-row items-center gap-2 text-[12px]">
                <i class="fa-solid fa-comment-dots text-[#e9a132]"></i>
                <p class="text-[#666] hover:text-[#e9a132] duration-300 ease-in-out font-medium cursor-pointer">3 comments
                </p>
              </div>
            </div>
            <h6 class="text-xl text-[#18191d] font-bold">${item.title}</h6>
            <p class="text-[#666]">${item.content}</p>
          </div>
          <button
            class="group border-0 bg-[#7070701a] hover:bg-[#e9a132] duration-300 ease-in-out cursor-pointer flex flex-row justify-between items-center w-full px-5 py-3">
            <h6 class="text-[#18191d] font-medium group-hover:text-white duration-300">Read More</h6>
            <span
              class="border-0 w-8 h-8 rounded-[50%] flex justify-center items-center bg-[#e9a132] group-hover:bg-white duration-300">
              <i class="fa-solid fa-arrow-right text-[12px] text-white group-hover:text-[#e9a132] duration-300"></i>
            </span>
          </button>
        </div>
    `
  ))
//News End