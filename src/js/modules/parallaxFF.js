import gsap from "../../js/libs/gsap/gsap.min";
import ScrollTrigger from "../../js/libs/gsap/ScrollTrigger.min";
import ScrollSmoother from "../../js/libs/gsap/ScrollSmoother.min";

function parallaxFF() {

    window.addEventListener('scroll', () => {
        document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
    })

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content'
    })

}

export default parallaxFF;