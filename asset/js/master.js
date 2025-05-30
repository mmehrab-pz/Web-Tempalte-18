// ----------------------------burger menu----------------------------------
let openBurger = document.getElementById('open-burger')
let burger = document.getElementById('burger-menu')
let closeBurger = document.getElementById('close-burger')
let mobileBurger = document.getElementById('open-burger-mobile')
let bodyOff = document.getElementById('bodyOff')
let openSearch = document.getElementById('open-search')
let closeSearch = document.getElementById('close-search')
let searchBox = document.getElementById('search-box')
// ------------------all nav bar btns (open)----------------------
const buttons = document.querySelectorAll('button')
buttons.forEach((item) => {
    item.addEventListener('click', () => {
        let btnName = item.getAttribute('data-btn')
        if (btnName === 'search') {
            searchBox.style.transform = 'scaleY(1)'
            bodyOff.style.display = 'flex'
        } else if (btnName === 'burger') {
            burger.style.right = '0%'
            bodyOff.style.display = 'flex'
        }
    })
})
// -----------------all nav bar btns (close)---------------------
closeBurger.addEventListener('click', () => {
    burger.style.right = '-100%'
    bodyOff.style.display = 'none'
})

closeSearch.addEventListener('click', () => {
    searchBox.style.transform = 'scaleY(0)'
    bodyOff.style.display = 'none'
})

// ----------------------------nav bar 2 movement----------------------------------
let navBar = document.getElementById('headerNav')
let navBar2 = document.getElementById('headerNav2')

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY

    if (scrollTop == 0) {
        navBar.style.opacity = '1';
        navBar2.style.top = '-85px';
    } else {
        navBar.style.opacity = '0';
        navBar2.style.top = '0px';
    }
})

// ----------------------------intersectionObserver----------------------------------

const boxes = document.querySelectorAll('.box')

const observer = new IntersectionObserver((intries) => {
    intries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)


        }
    })
}, {
    threshold: 0.4
})

boxes.forEach(box => {
    observer.observe(box)
})

// ----------------------------progress bar----------------------------------
let progress = document.getElementById('progress')
let scrollTop = 0

window.addEventListener('scroll', () => {
    scrollTop = window.scrollY; // مقدار اسکرول فعلی
    const docHeight = document.documentElement.scrollHeight; // ارتفاع کل صفحه
    const windowHeight = window.innerHeight; // ارتفاع پنجره مرورگر
    const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;

    progress.style.width = `${scrollPercent}%`;
})

// ----------------------------cursor----------------------------------
let cursor = document.getElementById('cursor')
let X
let Y
window.addEventListener('mousemove', (e) => {
    X = e.clientX
    Y = e.clientY
    cursor.style.left = `${X}px`
    cursor.style.top = `${Y}px`
})

window.addEventListener('mousedown', () => {
    cursor.style.width = '30px'
    cursor.style.height = '30px'
    cursor.children[0].style.width = '12px'
    cursor.children[0].style.height = '12px'

})
window.addEventListener('mouseup', () => {
    cursor.style.width = '40px'
    cursor.style.height = '40px'
    cursor.children[0].style.width = '10px'
    cursor.children[0].style.height = '10px'

})

// ----------------------------contextmenu----------------------------------
window.addEventListener('contextmenu' , (e)=>{
    e.preventDefault()
})