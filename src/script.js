window.sr = ScrollReveal({ reset: true })

sr.reveal('.reveal', {
    distance: '50px',
    duration: 1500,
    easing: 'ease-in-out',
    origin: 'bottom',
})

function showOverlay(id) {
    document.getElementById(id).classList.add('active')
}

function hideOverlay(id) {
    document.getElementById(id).classList.remove('active')
}

ScrollReveal().reveal('.logo', {
    origin: 'top',
    distance: '50px',
    duration: 1500,
    reset: false,
    opacity: 0,
    easing: 'ease-in-out'
})