const booking = document.querySelector('.top-nav__booking')
const body = document.querySelector('body')
const popup = document.querySelector('.popup')
const close = document.querySelector('.popup__close')
const popupBody = document.querySelector('.popup__body')

booking.addEventListener('click', () => {
  popup.classList.add('open-popup')
  disableScroll()
})

close.addEventListener('click', () => {
  popup.classList.remove('open-popup')
  setTimeout(enableScroll, 800)
})

document.addEventListener('click', (e) => {
  if (e.target == popupBody) {
    popup.classList.remove('open-popup')
    enableScroll()
  }
})






const popupCoocie = document.querySelector('.popup-coocie')
const openCoocie = document.querySelector('.top-news__link')
const closeCoocie = document.querySelector('.popup-coocie__close')
const closeSideCoocie = document.querySelector('.popup-coocie__close-side')

openCoocie.addEventListener('click', () => {
  popupCoocie.classList.add('open-popup')
  disableScroll()
})

closeCoocie.addEventListener('click', () => {
  popupCoocie.classList.remove('open-popup')
  enableScroll()
})

// closeSideCoocie.addEventListener('click', () => {
//   popupCoocie.classList.remove('open-popup')
//   enableScroll()
// })






const bannerButton = document.querySelector('.banner__button')
const popupForm = document.querySelector('.popup-form')
const popupFormClose = document.querySelector('.popup-form__close')

bannerButton.addEventListener('click', () => {
  popupForm.classList.add('open-popup-form')
  disableScroll()
})

popupForm.addEventListener('click', (e) => {
  let target = e.target;
  if (target.classList.contains('fa-xmark') || target.classList.contains('popup-form__close') || target.classList.contains('popup-form__body')) {
    popupForm.classList.remove('open-popup-form')
    enableScroll()
  }
})





function disableScroll() {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
  body.classList.add('disable-scroll')
  document.body.style.paddingRight = paddingOffset
}

function enableScroll() {
  body.classList.remove('disable-scroll')
  document.body.style.paddingRight = 0
}

// popup-form -- start


const popupFormBtns = popupForm.querySelectorAll('.popup-form__tabs-btn');
const popupFormTabsArrow = document.querySelector('.popup-form__tabs');
popupFormBtns.forEach((btn, index) => {

  btn.classList.add('hidden');
  if (index == 0) {
    btn.classList.remove('hidden');
  }
  btn.addEventListener('click', (e) => {
    let target = e.target;
    popupFormBtns.forEach(el => {
      el.classList.remove('hidden');
      popupFormTabsArrow.classList.add('open');
    })

    if (!target.classList.contains('form-tabs__btn--active')) {
      popupFormBtns.forEach((elem, i) => {
        elem.classList.add('hidden');
      })

      popupFormTabsArrow.classList.remove('open');
    }
    btn.classList.remove('hidden');

  })

})

// popup-form -- end