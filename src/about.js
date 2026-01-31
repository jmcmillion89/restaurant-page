export const displayAbout = () => {
    const contentDiv = document.querySelector('#content')
    contentDiv.textContent = ''
    const newDiv = document.createElement('div')
    newDiv.classList.add('about')
    const newHeader = document.createElement('h1')
    newHeader.textContent = 'About Hearth & Stone'
    newDiv.appendChild(newHeader)
    const paraOne = document.createElement('p')
    paraOne.textContent = 'Hearth & Stone was created with a simple idea in mind: good food begins with care. Inspired by the warmth of the hearth and the strength of stone, our kitchen focuses on honest ingredients, time-tested techniques, and thoughtful preparation.'
    newDiv.appendChild(paraOne)
    const paraTwo = document.createElement('p')
    paraTwo.textContent = 'Our menu is shaped by seasonality and balance. We favor slow roasting, open flame cooking, and dishes that feel familiar without being predictable. Every plate is meant to feel comforting, intentional, and quietly refined.'
    newDiv.appendChild(paraTwo)
    const paraThree = document.createElement('p')
    paraThree.textContent = 'More than a place to eat, Hearth & Stone is a place to gather. We believe meals should be unhurried, tables should be shared, and food should bring people together. Whether you’re joining us for a casual evening or a special occasion, our goal is to offer a welcoming space and a meal worth remembering.'
    newDiv.appendChild(paraThree)

    contentDiv.appendChild(newDiv)
}