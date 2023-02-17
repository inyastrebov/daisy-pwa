document.addEventListener('DOMContentLoaded', () => {
  const accordion = document.querySelectorAll('.accordion__item')

  accordion.forEach(el => {
    el.addEventListener('click', e => {
      const self = e.currentTarget
      const control = self.querySelector('.accordion__control')
      const content = self.querySelector('.accordion__content')
      self.classList.toggle('open')

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true)
        content.setAttribute('aria-hidden', false)
        content.style.maxHeight = content.scrollHeight + 'px'
      } else {
        control.setAttribute('aria-expanded', false)
        content.setAttribute('aria-hidden', true)
        content.style.maxHeight = null
      }
    })
  })
})

const accordionBlock = document.querySelectorAll('.faq__accordion-block')

accordionBlock.forEach(el => {
  let accordionWrapper = el.querySelectorAll('.faq__accordion')
  accordionWrapper.forEach(el => {
    let item = el.querySelectorAll('.accordion__item')
    let content = el.querySelectorAll('.accordion__content')
    item[0].classList.add('open')
    content[0].style.maxHeight = content[0].scrollHeight + 'px'
  })
})