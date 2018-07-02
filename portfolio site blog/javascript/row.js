const items = document.querySelectorAll(".item");
const itemArray = [...items];

function cngImageOpacity(){
   let image = this.querySelector('img');
   let caption = this.querySelector('.caption');
   image.style.opacity = '0';
   caption.style.opacity = '1';
   
}

function backImageOpacity(){
    let image = this.querySelector('img');
    let caption = this.querySelector('.caption');
    image.style.opacity = '1';
    caption.style.opacity = '0';
}

itemArray.forEach( item => item.addEventListener('mouseenter',cngImageOpacity ));
itemArray.forEach( item => item.addEventListener('mouseout', backImageOpacity));

const menu = document.querySelector('.togbutton');
const nav = document.querySelector('.header nav');

function menuToggle(){
    if(nav.offsetHeight === 0){
        nav.style.height = '285px';
    }else{
        nav.style.height = '0';
    }
    
}

menu.addEventListener('click', menuToggle);