const menu = document.querySelector(".menu")
const wrapper = document.querySelector(".wrapper")
const closeBtn = document.querySelector(".close-btn")
const listItems = document.querySelectorAll(".list")

menu.addEventListener("click", () => {
    wrapper.classList.add("active")
   
})

closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("active")
   
})

listItems.forEach(item => {
    item.addEventListener("click", () => {
        wrapper.classList.remove("active")
    })
})




