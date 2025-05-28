// ----------------------------burger menu----------------------------------
let openBurger = document.getElementById('open-burger')
let burger = document.getElementById('burger-menu')
let closeBurger = document.getElementById('close-burger')
let mobileBurger = document.getElementById('open-burger-mobile')
let bodyOff = document.getElementById('bodyOff')
// --------open---------
openBurger.addEventListener('click', () => {
    burger.style.right = '0%'
    bodyOff.style.display = 'flex'
})
// --------open mobile---------
mobileBurger.addEventListener('click', () => {
    burger.style.right = '0%'
    bodyOff.style.display = 'flex'
})
// --------close---------
closeBurger.addEventListener('click', () => {
    burger.style.right = '-100%'
    bodyOff.style.display = 'none'
})