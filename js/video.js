// banner start
try {

    const bannerSwiper = document.querySelector('.bannerSwiper');
    const bannerVideo = document.querySelectorAll('.banner__video');
    const bannerIconImg = document.querySelectorAll('.banner__icon__img');

    bannerVideo.forEach(a => {
        if (a.hasAttribute('autoplay')) {
            a.classList.add('video__play');
        }
        if (a.hasAttribute('autoplay') && a.classList.contains('video__play')) {
            const btnPlay = a.closest('.swiper-slide');
            btnPlay.querySelector('.banner__icon__img').style.display = 'none';
            btnPlay.querySelector('.banner__content').classList.add('banner__content_before');
        }
    });

    bannerSwiper.addEventListener('click', function (event) {
        let target = event.target;

        if (target.classList.contains('banner__icon__img')) {
            const parent = target.closest('.swiper-slide');
            const video = parent.querySelector('.banner__video');
            video.play();
            video.volume = 0;
            video.classList.add('video__play');
            target.style.display = 'none';
            target.style.transition = 'all 0.3s ease-in-out';
            parent.querySelector('.banner__content').classList.add('banner__content_before');
        } else {
            bannerVideo.forEach(e => {
                const parent = e.closest('.swiper-slide');
                parent.querySelector('.banner__content').classList.remove('banner__content_before');
                e.pause();
                e.classList.remove('video__play');
            });

            bannerIconImg.forEach(y => {
                y.style.display = 'block';
                y.style.transition = 'all 0.3s ease-in-out';
            });
        }
        // else if (target.classList.contains('кнопка отключения')){
        //   const parent = target.closest('.swiper-slide');
        //   const video = parent.querySelector('.banner__video');
        //   video.pause();
        // } 
    });

} catch {

}
// banner end

// about us start
try {

    const aboutUsOtherSwiper = document.querySelector('.about-us-other-Swiper');
    const aboutUsVideo = document.querySelectorAll('.about-us__video');
    const aboutUsIconImg = document.querySelectorAll('.about-us__icon__img');
    const aboutUsSwiper = document.querySelector('.about-us-Swiper');
    const aboutUsBody = document.querySelector('.about-us_body');

    aboutUsVideo.forEach(a => {
        if (a.hasAttribute('autoplay')) {
            const btnPlayRemove = a.closest('.swiper-slide');
            btnPlayRemove.querySelector('.about-us__icon__img').style.display = 'none';
        } else {
            a.addEventListener('play', () => {
                const btnPlayRemove = a.closest('.swiper-slide');
                btnPlayRemove.querySelector('.about-us__icon__img').style.display = 'none';
            });
            a.addEventListener('pause', () => {
                const btnPlayAdd = a.closest('.swiper-slide');
                btnPlayAdd.querySelector('.about-us__icon__img').style.display = 'block';
            });
        }
    });

    aboutUsBody.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('about-us__icon__img')) {
            const parent = target.closest('.swiper-slide');
            const video = parent.querySelector('.about-us__video');
            video.play();
            target.style.display = 'none';
            target.style.transition = 'all 0.3s ease-in-out';
        }
    });

    // const aboutUsBlockContent = document.querySelectorAll('.about-us__block__content');
    // const aboutUsBlockOther = document.querySelectorAll('.about-us__block__other');

    // aboutUsBlockContent.forEach((e) => {
    //   let heightBlock = e.offsetHeight;
    //   aboutUsBlockOther.forEach((a) => {
    //     a.style.height = `${heightBlock + "px"}`;
    //   })
    // })

} catch {

}
// about us end