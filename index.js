
const carrusel_buttons = document.querySelectorAll("[data-carrusel-btn]")

carrusel_buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const offset = btn.dataset.carruselBtn === "next" ? 1 : -1
        const slides = btn
            .closest("[data-carrusel]")
            .querySelector("[data-slides]")
        
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset

        if (newIndex<0) newIndex = slides.children.length -1 
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})


let skills = {"Java":85, "HTML":30, "C++":15, "Python":90, "JavaScript":30}
let graph_tags = Object.keys(skills)
let graph_values = Object.values(skills)
let fills = document.querySelectorAll(".fill")
let graph_tags_fields = document.querySelectorAll("[skill-bar-name]")

for(let i = 0; i < graph_tags_fields.length; i++){ 
    graph_tags_fields[i].innerHTML=`${graph_tags[i]}: ${graph_values[i]}%`
    fills[i].style.width=`${graph_values[i]}%`
}

