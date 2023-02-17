const toggleTheme = document.querySelector('.themes')
const logo = document.querySelector('.top-nav__logo img')

toggleTheme.addEventListener('click', e => {

  if ( localStorage.getItem('theme') === 'dark' ) {
    localStorage.removeItem('theme')
    logo.src = "img/logo.svg"
  } else {
    localStorage.setItem('theme', 'dark')
    logo.src = "img/logo-white.svg"
  }

  addDarkClassToHTML()

})

function addDarkClassToHTML() {

  try {
  
    if ( localStorage.getItem('theme') === 'dark' ) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }

  } catch (error) {}

}

addDarkClassToHTML()