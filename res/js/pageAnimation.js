
const bio = document.getElementById('bio');
const carH2 = document.querySelector('.car_h2');





const projImgList = document.querySelectorAll('.proj_img');
const projLineList = document.querySelectorAll('.proj_line');
const projectsList = document.querySelectorAll('.project');

for (let i = 0;i<projectsList.length;i++) {
    projectsList[i].onmouseover = ()=>{

        projImgList[i].classList.add('proj_img_anim');
    }
    projectsList[i].onmouseleave = ()=>{
        projImgList[i].classList.remove('proj_img_anim');
    }
}

//============================================================================\\
//============================Project=========================================\\
//============================================================================\\

//============================================================================\\
//============================Biography=======================================\\
//============================================================================\\
const img = document.getElementById('me');
img.classList.add('img__anim');

const start = pageYOffset;
const wrapBio = document.querySelector('.wrap');

window.addEventListener('scroll',function (){
    if(pageYOffset>start){
        wrapBio.classList.add('hide_scroll');
    }else {
        wrapBio.classList.remove('hide_scroll');
    }

    if(pageYOffset>300){
        wrapBio.classList.add('no_bio');
    }else if(pageYOffset<300){
        wrapBio.classList.remove('no_bio');
    }


})

const bioH2 = document.getElementById('bio_h2')
const bioH2Line = document.getElementById('bio_title_line')


//============================================================================\\
//============================Bio_Wrap_Visible================================\\
//============================================================================\\


let carousel = document.getElementById('carrousel');
carousel.classList.add('carrousel_anim');




function bioShow() {
    bio.classList.add('bio__anim');
}

setTimeout(bioShow, 1000);
//
// function carH2Show() {
//     carH2.classList.add('car_h2_anim');
// }
//
// carH2Show();



let carItemFromList = document.querySelectorAll('.list_el');
let carItemFromListH3 = document.querySelectorAll('._h3_item_from_list');

for (let i = 0; i<carItemFromList.length; i++) {

    carItemFromList[i].onmouseover = ()=>{
        carItemFromListH3[i].classList.add('_h3_active');
        carItemFromList[i].onmouseleave = ()=>{
            carItemFromListH3[i].classList.remove('_h3_active');
        }
    }
}

