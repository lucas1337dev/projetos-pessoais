const element = (e) => {
    return document.querySelector(e)
}

const mobileNavMenu = element('.hamburger').addEventListener('click', () => {
    element('.mobileNav').classList.toggle('flex')
})
