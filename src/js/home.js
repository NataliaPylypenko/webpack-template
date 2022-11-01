// SCSS
import '../scss/home.scss'
import gsap from "../js/libs/gsap/gsap.min";
import ScrollTrigger from "../js/libs/gsap/ScrollTrigger.min";
import ScrollSmoother from "../js/libs/gsap/ScrollSmoother.min";

window.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('scroll', e => {
    // document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
    document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})
