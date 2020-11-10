const on_class = "on";
const firstslide = document.querySelector(".slide:first-child");
const lastslide = document.querySelector(".slide:last-child");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function sliderFunction(typeBtn){
    console.log(typeBtn)
    const currentslide = document.querySelector('.on');
    // console.log(currentslide)
    let slide = 'prev';
    typeBtn === 'next' ? slide = currentslide.nextElementSibling :  slide = currentslide.previousElementSibling;
    currentslide.classList.remove('on');
    typeBtn === 'next' ? slide ? slide.classList.add('on') : firstslide.classList.add('on') : slide ? slide.classList.add('on') : lastslide.classList.add('on');
}


// prevBtn.addEventListener('click', () => {
//     const currentslide = document.querySelector(on_class);
//     const prevslide = currentslide.previousElementSibling;
//     currentslide.classList.remove(on_class);
//     prevslide ? prevslide.classList.add(on_class) : lastslide.classList.add(on_class);
// });

// nextBtn.addEventListener('click', () => {
//     const currentslide = document.querySelector(on_class);
//     const nextslide = currentslide.nextElementSibling;
//     currentslide.classList.remove(on_class);
//     nextslide ? nextslide.classList.add(on_class) : firstslide.classList.add(on_class);
// })

nextBtn.addEventListener('click', function(){sliderFunction("next")})
prevBtn.addEventListener('click', function(){sliderFunction("prev")})


