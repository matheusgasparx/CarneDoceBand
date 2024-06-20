window.sr = ScrollReveal({ reset: true })

sr.reveal('.reveal', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
})

ScrollReveal().reveal('.logo', {
    duration: 800,
    easing: 'ease-in-out',
    origin: 'center',
    reset: false,
    opacity: 0,
    scale: 0.85
});