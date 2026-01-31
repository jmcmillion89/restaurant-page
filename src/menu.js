import { menuItems } from "./menuItems.js"

export const displayMenu = () => {
    const contentDiv = document.querySelector('#content')
    contentDiv.textContent = ''
    const menu = document.createElement('div')
    menu.classList.add('menu')
    contentDiv.appendChild(menu)
    menuItems.forEach((item) => {
        const newDiv = document.createElement('div')
        newDiv.classList.add('card')
        const foodImage = new Image(200, 150)
        foodImage.src = item.image
        newDiv.appendChild(foodImage)
        const title = document.createElement('h3')
        title.textContent = item.name
        newDiv.appendChild(title)
        const description = document.createElement('p')
        description.textContent = item.description
        newDiv.appendChild(description)
        const price = document.createElement('div')
        price.textContent = item.price
        newDiv.appendChild(price)

        menu.appendChild(newDiv)
    })
}