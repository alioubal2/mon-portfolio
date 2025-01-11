const buttonContact = document.getElementById("btn-contact");
const contact = document.getElementById("contact");

const navLinks = document.querySelectorAll(".nav-item")

const mode = document.getElementById("mode")

const root = document.documentElement

const sections = document.querySelectorAll('.container')

const menuIcon = document.querySelector('.menu-icon')

const menu = document.querySelector('nav ul')

const mediaQuery = window.matchMedia("(max-width:590px)")


buttonContact.addEventListener("click", () => {
    window.location.href = "#contact"
})

mode.addEventListener("click", () => {
    mode.innerText = mode.innerText === "light_mode" ? "dark_mode": "light_mode" 
    root.classList.toggle("light")
    root.style.transition = ".3s"  
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log(entry.target)
            navLinks.forEach(link => {
                link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)
            })
        }
    })
}, { rootMargin: "-50% 0px -50% 0px"})

sections.forEach(section => {
    observer.observe(section)
})

menuIcon.addEventListener("click", () => {
    if (menuIcon.innerText === "menu") {
        menuIcon.innerText = "close"
        menu.style.display = "flex" 
    } else {
        menuIcon.innerText = "menu"
        menu.style.display = "none"
    }
})




mediaQuery.addEventListener("change", e => {
    if (e.matches) {
        menuIcon.innerText = "menu"
        menuIcon.style.display = "inline-block"
        menu.style.display = "none"
    }else {
        menuIcon.style.display = "none"
        menu.style.display = "flex"
    }
})