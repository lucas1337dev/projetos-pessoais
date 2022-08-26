const titleText = document.querySelector('[titleText]')
const watchImg = document.querySelector('[watchImg]')
const redWatch = document.querySelector('[redWatch]')
const roseGoldWatch = document.querySelector('[roseGoldWatch]')
const blueWatch = document.querySelector('[blueWatch]')

redWatch.addEventListener('click', () => {
    watchImg.classList.remove('fade-in')
    setInterval(() => {
        watchImg.classList.add('fade-in')
    }, 0);
    watchImg.src = 'imgs/red-ap.png'
    titleText.textContent = 'Royal Oak Audemars Piguet'
    watchImg.classList.remove('fade-in')
})

roseGoldWatch.addEventListener('click', () => {
    watchImg.classList.remove('fade-in')
    setInterval(() => {
        watchImg.classList.add('fade-in')
    }, 0);
    watchImg.src = 'imgs/rose-gold-ap.png'
    titleText.textContent = 'Rose Gold Audemars Piguet'
    watchImg.classList.remove('fade-in')
})

blueWatch.addEventListener('click', () => {
    watchImg.classList.remove('fade-in')
    setInterval(() => {
        watchImg.classList.add('fade-in')
    }, 0);
    watchImg.src = 'imgs/skeleton-ap.png'
    titleText.textContent = 'Skeleton Audemars Piguet'
    watchImg.classList.remove('fade-in')
})