export const displayHome = () => {
    const contentDiv = document.querySelector('#content')
    contentDiv.textContent = ''
    const newDiv = document.createElement('div')
    newDiv.classList.add('home')
    const newHeader = document.createElement('h1')
    newHeader.textContent = 'Hearth & Stone'
    newDiv.appendChild(newHeader)
    const subHeader = document.createElement('h3')
    subHeader.textContent = 'Comfort, crafted over fire.'
    newDiv.appendChild(subHeader)
    const paraOne = document.createElement('p')
    paraOne.textContent = 'Hearth & Stone is a neighborhood kitchen built around simple ingredients, open flames, and time-honored techniques. Our food is rooted in tradition and shaped by care—meals meant to be shared, enjoyed slowly, and remembered.'
    newDiv.appendChild(paraOne)
    const paraTwo = document.createElement('p')
    paraTwo.textContent = 'We believe the table is more than a place to eat. It’s where stories are told, conversations linger, and good food brings people together.'
    newDiv.appendChild(paraTwo)
    const paraThree = document.createElement('p')
    paraThree.textContent = 'From stone-fired favorites to hearth-roasted classics, our kitchen focuses on warmth, balance, and flavor. Whether you’re joining us for a quiet evening or gathering with friends, Hearth & Stone welcomes you in.'
    newDiv.appendChild(paraThree)



    contentDiv.appendChild(newDiv)
}