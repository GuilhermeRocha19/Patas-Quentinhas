const menuitens = document.querySelectorAll('.menu a[href^="#"]')

console.log(menuitens)

menuitens.forEach(item => {
    item.addEventListener('click',scrollclick)
})


function scrollclick(event){
    event.preventDefault();
    const elemento = event.target
    const id = elemento.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    console.log(section.offsetTop);

    window.scroll({
        top: section,
        behavior:"smooth"

    })
}


function imgdog2(){
    document.getElementById("trocarimg").src="dog2.png";
}
function imgdog3(){
    document.getElementById("trocarimg").src="dog3.png"
}
function imgcat(){
    document.getElementById("trocarimg").src="cat.png"
}
function imgcat2(){
    document.getElementById("trocarimg").src="cat2.jpg"
}