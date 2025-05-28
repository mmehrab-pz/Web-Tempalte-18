// ----------------------burger menu-------------------------
let openBurger = document.getElementById('open-burger')
let burger = document.getElementById('burger-menu')
let closeBurger = document.getElementById('close-burger')
let mobileBurger = document.getElementById('open-burger-mobile')
// --------open---------
openBurger.addEventListener('click' , ()=>{
    burger.style.right = '0%'
})
// --------open mobile---------
mobileBurger.addEventListener('click' , ()=>{
    burger.style.right = '0%'
})
// --------close---------
closeBurger.addEventListener('click' , ()=>{
    burger.style.right = '-100%'
})
