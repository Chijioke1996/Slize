const menu = document.querySelector(".menu")
const wrapper = document.querySelector(".wrapper")
const closeBtn = document.querySelector(".close-btn")
const closeBtn2 = document.querySelector(".close-btn2")
const listItems = document.querySelectorAll(".list")
const menuControl = document.querySelector(".menu")


menu.addEventListener("click", () => {
    wrapper.classList.add("active")
    menuControl.classList.add("active")
   
})

closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("active")
    menuControl.classList.remove("active")
   
})

listItems.forEach(item => {
    item.addEventListener("click", () => {
        wrapper.classList.remove("active")
        menuControl.classList.remove("active")
    })
})

closeBtn2.addEventListener("click", () => {
    wrapper.classList.remove("active")
    menuControl.classList.remove("active")

   
})



