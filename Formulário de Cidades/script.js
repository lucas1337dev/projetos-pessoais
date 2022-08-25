let user = document.querySelector('.nameInput')
let city = document.querySelector('.cityInput')
const addBtn = document.querySelector('.addBtn')
const showBtn = document.querySelector('.showBtn')
const submitBtn = document.querySelector('.submitBtn')
const deleteBtn = document.querySelector('.deleteBtn')
const result = document.querySelector('.result')
let cities = []

submitBtn.addEventListener('click', submit)

addBtn.addEventListener('click', add)

showBtn.addEventListener('click', show)

deleteBtn.addEventListener('click', remove)

function submit() {
    let userValue = user.value
    const layout = `<p>Seu nome é: ${userValue}</p>`
    result.innerHTML = layout
    result.classList.add('resultStyle')
}

function add() {
    let cityValue = city.value
    cities.push(cityValue)
    city.value = ''
}

function show() {
    const layout = `<p>As cidades são: ${cities.join(', ')}</p>`
    result.innerHTML += layout
}

function remove() {
    result.innerHTML = ''
}
