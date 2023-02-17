window.addEventListener('load', async () => {

  if (navigator.serviceWorker) {
    try {
      const reg = await navigator.serviceWorker.register('../services-worker.js')
      console.log('Service worker register succcess', reg)
    } catch (e) {
      console.log('Service worker register fail')
    }
  }

})



// controll sliderSwiper start
try {
  const tabsList = document.querySelectorAll('.tabs__list');

  tabsList.forEach((el) => {

    el.addEventListener('click', (event) => {
      let target = event.target;
      const parent = target.closest('.tabs__list');
      let tabsBtnCkick = parent.querySelector('.tabs__btn--active');

      if (target == tabsBtnCkick) {
        controlSliderBullets();
      }

    });
  });

  const controlSliderBullets = () => {
    const swiperPaginationBulletsContainer = document.querySelectorAll('.swiper-pagination-bullets');

    swiperPaginationBulletsContainer.forEach((e) => {
      let widthElem = 55;
      let listElem = e.childNodes.length;
      let sum = widthElem * listElem;
      if (e.closest('.slider-navigation__body__horizontal')) {
        e.closest('.slider-navigation__body__horizontal').style.width = `${sum + 'px'}`;
      }
    });
    setTimeout(controlSliderBullets, 5);
  }

  controlSliderBullets();
} catch {

}

// controll sliderSwiper end 