let burgerMenu = document.querySelector('.burger-menu')
let burgerWrapper = document.querySelector('.burger-menu__wrapper')
let burgerBtn = document.querySelector('.burger')
let burgerClose = document.querySelector('.burger-menu__close')
let body = document.querySelector('body')

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.add('burger-active')
  burgerWrapper.classList.add('burger-content-move')
  body.classList.add('disable-scroll')
})

burgerMenu.addEventListener('click', (e) => {
  let target = e.target;
  if (target.classList.contains('fa-xmark') || target.classList.contains('icon-wrapper-24') || target.classList.contains('burger-menu')) {
    burgerMenu.classList.remove('burger-active')
    burgerWrapper.classList.remove('burger-content-move')
    body.classList.remove('disable-scroll')
  }
})





const productBtn = document.querySelectorAll('.products__button')
const productBarClose = document.querySelectorAll('.product-bar__close')
const productBar = document.querySelectorAll('.product-bar')

productBtn.forEach(btn => {

  btn.addEventListener('click', e => {
    let target = e.target
    let path = target.dataset.btnproduct
    document.querySelector(`[data-product="${path}"]`).classList.add('product-bar-active')
    body.classList.add('disable-scroll')
  })
})

// productBarClose.forEach(el => {

//   el.addEventListener('click', () => {
//     let product = el.closest('.product-bar')
//     product.classList.remove('product-bar-active')
//     body.classList.remove('disable-scroll')
//   })
// })

productBar.forEach(el => {
  el.addEventListener('click', (e) => {
    let target = e.target
    if (target.classList.contains('product-bar-active') || target.classList.contains('product-bar__close')) {
      el.classList.remove('product-bar-active')
      body.classList.remove('disable-scroll')
    }
  })
})