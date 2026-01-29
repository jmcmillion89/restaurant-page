import './styles.css'
import { displayHome } from './home.js'
import { displayMenu } from './menu.js'
import { displayAbout } from './about.js'

const header = (() => {
    const headerDiv = document.querySelector('header')
    const newH1 = document.createElement('h1')
    newH1.textContent = 'Hearth & Stone'
    newH1.classList.add('logo')
    headerDiv.appendChild(newH1)
    
})()

const nav = (() => {
    const navDiv = document.querySelector('nav')
    const navBar = [['Home', displayHome], ['Menu', displayMenu], ['About', displayAbout]]
    navBar.forEach((item) => {
        const newBtn = document.createElement('button')
        newBtn.textContent = item[0]
        newBtn.addEventListener('click', () => item[1]())
        navDiv.appendChild(newBtn)
    })
})()

displayMenu()