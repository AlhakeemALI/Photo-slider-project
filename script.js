
 // Select all the class need 
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")

// creat 
let sliderNumber = 1
const length = images.length

// add function to move the slide to  right

const nextSlide = () => {
    slider.style.transform = `translateX(-${sliderNumber * 800}px)`
    sliderNumber++;
}

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`
  sliderNumber = 1
}

right.addEventListener("click", () => {
sliderNumber < length ? nextSlide() :getFirstSlide()

})


// add a function to move the slide to the left






