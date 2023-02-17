const upButton = document.querySelector('.up-button')

window.addEventListener('scroll', () => {
  upButton.classList.toggle('up-button__active', window.scrollY>500)
})
