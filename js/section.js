const sections = document.querySelectorAll("section");
const list = document.querySelectorAll(".items");


window.addEventListener("load", onLoad);

function onLoad() {
    const show = document.querySelector("#show").classList.add("show");
}


window.addEventListener("scroll", ()=> {
    let id_current = "";


    //==============ADD CLASS ACTIVE IN MEUN-LIST============= 
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // console.log(sectionTop);
        if(pageYOffset >= sectionTop - sectionHeight /3 ){
            id_current = section.getAttribute("id");
        }

      
    });
    list.forEach((li) => {
        li.classList.remove("active");
        if(li.classList.contains(id_current)){
            li.classList.add("active");
        }
        
    });
    // ===============================================
    
    const nav = document.querySelector("#head_menu");
    if (window.scrollY > 0) {   
      nav.classList.add("active");
      
    } else {
        nav.classList.remove("active");
       
    }
    


    
});
