import displayMenu from './menu.js'
import displayAbout from './about.js'
import displayHome from './home.js'

const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')
const aboutButton = document.querySelector('#about')

homeButton.addEventListener('click', () => {
    displayHome()
})

menuButton.addEventListener('click', () => {
    displayMenu()
})

aboutButton.addEventListener('click', () => {
    displayAbout()
})