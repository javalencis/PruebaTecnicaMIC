export const findItem = (item, cart) => {
    let itemAux = item
    let index = -1
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (item.reference === cart[i].reference) {
                itemAux.amount = item.amount + cart[i].amount
                index = i
                break;
            }
        }
    } else {
        itemAux = item
    }


    return { itemAux, index }
}

export const addItemCart = (cart, newItem) => {
    let newCart = []
    const { itemAux, index } = findItem(newItem, cart)
    if (index >= 0) {
        cart[index] = itemAux
        newCart = [...cart]

    } else {
        newCart = [...cart, itemAux]
    }
    return newCart

}

export const priceWithDiscount = (price,discount)=>{
    return price*(100-discount)/100
}

