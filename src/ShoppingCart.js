class ShoppingCart {
  constructor(){
  this._crate = []
}

getItems() {
  return this._crate
}

clear() {
  this._crate = []
}

addItem(itemName, quantity, price){
  this._crate.push({ name : itemName, 
                    quantity : quantity, 
                    pricePerUnit : price})
}

  // I had a similar question from Kelley, which I was a able to solve. 
  // This totalcost sadly wont work.
total() {
  let totalcost = items.reduce(function (sum, item) {
    return sum + (item.pricePerUnit * item.quantity)
  }, 0)
}
}

module.exports = ShoppingCart


 