import placeholder from './assets/menuItems/foodimage.png'

class Food {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = `$${price}`
        this.image = placeholder
    }
}

export const menuItems = []

menuItems.push(new Food('Hearth-Roasted Chicken', 'Juicy half chicken roasted with garlic, thyme, and lemon. Served with herb pan jus.', 18))
menuItems.push(new Food('Stonefire Ribeye', '12oz ribeye grilled over open flame, finished with house herb butter and cracked pepper.', 34))
menuItems.push(new Food('Ember Salmon', 'Pan-seared Atlantic salmon with a citrus glaze, served over seasonal grains and greens.', 26))
menuItems.push(new Food('Cast Iron Meatloaf', 'Classic beef meatloaf baked in cast iron, topped with hearth glaze and mashed potatoes.', 19))
menuItems.push(new Food('Hearthside Mac & Cheese', 'Cavatappi pasta in a rich three-cheese sauce, finished with toasted breadcrumbs.', 16))
menuItems.push(new Food('Stone Oven Flatbread', 'Charred flatbread with roasted tomatoes, mozzarella, basil, and olive oil.', 15))
menuItems.push(new Food('Root Vegetable Bowl', 'Roasted carrots, squash, and potatoes over farro with tahini drizzle and herbs.', 17))
menuItems.push(new Food('Braised Short Ribs', 'Slow-braised beef short ribs with red wine reduction and creamy polenta.', 29))
menuItems.push(new Food('Heath Garden Salad', 'Mixed greens, cherry tomatoes, shaved parmesan, and house vinaigrette.', 12))
menuItems.push(new Food('Skillet Apple Crisp', 'Warm cinnamon apples baked in cast iron, topped with oat crumble and vanilla ice cream.', 10))