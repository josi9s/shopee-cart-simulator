import createItem from "./services/itens.js"
import * as cartService from "./services/cart.js"

const myCart = []
const myWishlist = []

let item1 = await createItem("hotwheels ferrari", 20.99, 1)
let item2 = await createItem("hotwheels lamborghini", 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.displayCart(myCart)

await cartService.removeItem(myCart, 1)

await cartService.displayCart(myCart)
