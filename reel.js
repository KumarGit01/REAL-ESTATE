     
const boxes = document.querySelectorAll('.call');
window.addEventListener('scroll', checkboxes);
checkboxes();
function checkboxes() {
 const triggerbottom =window.innerHeight/5*4;   //triggerbottom:862

boxes.forEach( box => {
const boxtop = box.getBoundingClientRect().top;
                         // boxtop:1093px
if(boxtop < triggerbottom) {
  box.classList.add('show');
  
}else{
box.classList.remove('show');


}
});

}