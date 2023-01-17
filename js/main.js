const menuBtn = document.querySelector(".menu_burger");
const menu = document.querySelector(".menu__list");
const imgObj = ["game2.png", "anime3.png", "music2.png"];
const imgObj_2 = ["game1.png",  "anime4.png","music1.png"];

const bgOj = ["bg_game.jpg", "bg_anime.jpg", "bg_music.jpg"];

// console.log(imgObj);

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menu.classList.toggle("active");
});




function onLoad() {
    const media_list = document.querySelectorAll(".media-list > ul > li"); 
    media_list.forEach((li,index)=> {
        li.addEventListener("click",()=> addActive(media_list,index));
    });
}

window.addEventListener("load", onLoad);

function addActive(lists, index) {
    lists.forEach(li => li.classList.remove("active"));
    lists[index].classList.add("active");
    document.querySelector(".icon-media-2").src = `icon/${imgObj[index]}`;
    document.querySelector(".icon-media-1").src = `icon/${imgObj_2[index]}`;
    document.querySelector("#bg img").src = `img_bg/${bgOj[index]}`;
    
}












