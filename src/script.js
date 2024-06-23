// Em desenvolvimento
/*

const pageContainer = document.querySelector(".container")

const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true
})
    
*/
// 


window.sr = ScrollReveal({ reset: true })

ScrollReveal().reveal('.logo', {
    origin: 'top',
    distance: '50px',
    duration: 1500,
    reset: false,
    opacity: 0,
    easing: 'ease-in-out'
})

sr.reveal('.reveal', {
    distance: '50px',
    duration: 1500,
    easing: 'ease-in-out',
    origin: 'bottom',
})

sr.reveal('.right', {
    distance: '100px',
    duration: 1500,
    easing: 'ease-in-out',
    origin: 'right',
})

sr.reveal('.left', {
    distance: '100px',
    duration: 1500,
    easing: 'ease-in-out',
    origin: 'left',
})

sr.reveal('.kraken', {
    distance: '50px',
    duration: 1500,
    origin: 'left',
})

