import Swiper from 'swiper';

function swiperScene() {

    const showSlider = new Swiper('.showcase-carousel', {
        loop: true,
        slidesPerView: 5,
        // slidesPerView: 'auto',
        speed: 1800,
        centeredSlides: true,

        navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl: '.showcase-navigation__prev'
        }
    })

}

export default swiperScene;