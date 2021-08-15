const product = {
    label: 'iphone',
    price: 30,
    stock: 60,
    salePrice: undefined
}

let {label, stock} = product

console.log(label)
console.log(stock)

label = 'samsung'
console.log(product)