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
    this._crate.push({  name : itemName, 
                        quantity : quantity, 
                        pricePerUnit : price})
  }

}



module.exports = ShoppingCart


 