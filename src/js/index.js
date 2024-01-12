
// navbar function

const toggle = document.getElementById('three-dought');
const menu = document.getElementById('nav-list');

toggle.addEventListener('click', function () {
  if (menu.style.display == 'block') {
    menu.style.display = 'none'
  }
  else {
    menu.style.display = 'block'
  }
})

// whtasapp btn function 

const whtasapp = document.getElementById('whbtn');
const whtasappImg = document.getElementById('whimg');

whtasapp.addEventListener('click', function () {
  if (whtasappImg.style.display == 'block') {
    whtasappImg.style.display = 'none'
    
  }
  else {
    whtasappImg.style.display = 'block'
  }
})




// Api test


async function moveweb() {


  try {
    const response = await fetch("http://universities.hipolabs.com/search?country=United+States")  
    const result = await response.json();
    // const realdata = result.data
 
    console.log(result)
    // for(let i = 0 ; i <= result.length ; i++ ){
document.getElementById('test').innerHTML = `${result.map((universities) => {
     
      return`
      
    <div class=" hover:bg-yellow-600 overflow-hidden flex-wrap  p-3 mx-auto align-middle mt-5 rounded-lg shadow-xl justify-center h-auto w-10/12   md:w-3/6 border-r-teal-500 bg-blue-400 ">
    <h1 class="font-serif text-2xl text-zinc-50 font-bold">${universities.name} </h1>
     <h4 class="font-medium text-white">${universities.country}</h4>
     <a class=" text-wrap underline cursor-pointer text-lg text-sky-800" href="">${universities.web_pages.map((web) =>{ 
       return`${web} `
       })}  </a>
     <h5 class=" text-white">  ${universities.domains.map((dom)=>{
      return ` ${dom}`})} </h5>
 <p class=" text-white" > ${universities.alpha_two_code} </p>
  </div>`    
       
    }).join(' ')}`
  // }
    }
    
   catch (error) {
    console.error(error);
  }
};  


moveweb()


// ****************************************

