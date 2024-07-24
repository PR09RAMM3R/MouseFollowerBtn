let a = document.querySelector('a')
let at = document.querySelector('p')

a.addEventListener('mousemove', (e) => {
    let b = a.getBoundingClientRect()
    const magnetoStrenght = 50
    const magnetoTextStrenght = 80
    const newX = ((e.clientX - b.left)/a.offsetWidth) - 0.5
    const newY = ((e.clientY - b.top)/a.offsetHeight) - 0.5
    gsap.to(a, {
        duration: 1,
        x: newX * magnetoStrenght,
        y: newY * magnetoStrenght,
        ease: Power4.easeOut
    })
    gsap.to(at, {
        duration: 1,
        x: newX * magnetoTextStrenght,
        y: newY * magnetoTextStrenght,
        ease: Power4.easeOut
    })
})

a.addEventListener('mouseleave', (e) => {
    gsap.to(a, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    })
    gsap.to(at, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    })
})