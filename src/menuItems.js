import pizza from './assets/menuItems/pizza.jpg'

class Food {
    constructor(name, description, cost, image) {
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.image = image
    }
}

const pizzaItem = new Food('pizza', 'a slice of pizza', '$12', pizza)

export const menuItems = []

menuItems.push(pizzaItem)