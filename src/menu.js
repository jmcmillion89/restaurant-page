import { menuItems } from "./menuItems.js"

export const displayMenu = () => {
    const contentDiv = document.querySelector('#content')
    contentDiv.textContent = ''
    menuItems.forEach((item) => {
        const newDiv = document.createElement('div')
        newDiv.classList.add('card')
        const foodImage = new Image(200, 150)
        foodImage.src = item.image
        newDiv.appendChild(foodImage)
        const title = document.createElement('div')
        title.textContent = item.name
        newDiv.appendChild(title)
        const description = document.createElement('div')
        description.textContent = item.description
        newDiv.appendChild(description)
        const cost = document.createElement('div')
        cost.textContent = item.cost
        newDiv.appendChild(cost)

        contentDiv.appendChild(newDiv)
    })
}