const slides = document.querySelectorAll('.slide');

for (const slide of slides){
    slide.addEventListener('click', () => {
        clearActiveClassses();
        slide.classList.add('active');
    })

function clearActiveClassses(){
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}    
}