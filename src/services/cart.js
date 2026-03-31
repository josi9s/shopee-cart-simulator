// case of uses
// add cart
async function addItem(userCart, item) {
  userCart.push(item);
}

// delete item
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name)

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// remove item
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name)

  if (indexFound == -1) {
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1)
    return;
  }

}

// calc total
async function calcTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
  return result
}

async function displayCart(userCart) {
  console.log("\nShopee cart list:\n")
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | ${item.subtotal()}`)
  })
  const totalCart = await calcTotal(userCart)
  console.log(`\nCart total: ${totalCart}`)
}

export { addItem, deleteItem, removeItem, calcTotal, displayCart }
