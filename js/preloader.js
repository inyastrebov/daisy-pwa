const body = document.querySelector('body')
const preloader = document.querySelector('#preloader')

preloader.style.opacity = '1'

window.onload = function () {
  preloader.style.visibility = 'hidden'
  body.classList.remove('disable-scroll')
  preloader.style.opacity = '0'
}