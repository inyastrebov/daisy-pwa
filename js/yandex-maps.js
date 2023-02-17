let center = [59.94, 30.32]

function init() {
  let map = new ymaps.Map('map', {
      center: center,
      zoom: 12,
  })

  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/location.png',
    iconImageSize: [24, 28],
    iconImageOffset: [0, 0],
  })
  
  map.controls.remove('geolocationControl')
  map.controls.remove('searchControl')
  map.controls.remove('trafficControl')
  map.controls.remove('typeSelector')
  map.controls.remove('fullscreenControl')
  map.controls.remove('zoomControl')
  map.controls.remove('rulerControl')
  map.behaviors.disable('scrollZoom')

  map.geoObjects.add(placemark)

  const mapMove = document.querySelector('.contacts__map-button')
  const contacts = document.querySelector('[data-contact="name-contact"]')

  mapMove.addEventListener('click', (e) => {
    contacts.classList.toggle('contacts-none')
    setTimeout(fitMapToViewport, 400)
  })

  function fitMapToViewport () {
    map.container.fitToViewport()
  }

}

ymaps.ready(init);



function footerInit() {
  let map = new ymaps.Map('footer-map', {
      center: center,
      zoom: 12,
  })

  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/location.png',
    iconImageSize: [24, 28],
    iconImageOffset: [0, 0]
  })
  
  map.controls.remove('geolocationControl')
  map.controls.remove('searchControl')
  map.controls.remove('trafficControl')
  map.controls.remove('typeSelector')
  map.controls.remove('fullscreenControl')
  map.controls.remove('zoomControl')
  map.controls.remove('rulerControl')
  map.behaviors.disable('scrollZoom')
  
  map.geoObjects.add(placemark)

}

ymaps.ready(footerInit)