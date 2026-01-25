function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id
  this.name = name
  this.price = price
  this.quantity = quantity
  this.category = category
  this.isAvailable = isAvailable
}

const products = [
  new Product(1, "iPhone 15", 32000000, 5, "Phones", true),
  new Product(2, "Samsung", 25000000, 0, "Phones", true),
  new Product(3, "AirPods", 6500000, 12, "Accessories", true),
  new Product(4, "Apple Watch", 11000000, 3, "Accessories", false),
  new Product(5, "MacBook", 28000000, 4, "Laptops", true),
  new Product(6, "iPad", 12000000, 2, "Tablets", true),
]

const namePriceList = products.map(p => ({ name: p.name, price: p.price }))

const inStockProducts = products.filter(p => p.quantity > 0)

const hasOver30M = products.some(p => p.price > 30000000)

const accessoriesAllAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true)

const totalInventoryValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0)

for (const p of products) {
  const status = p.isAvailable ? "Đang bán" : "Ngừng bán"
  console.log(`${p.name} - ${p.category} - ${status}`)
}

for (const p of products) {
  console.log("Thuộc tính:")
  for (const key in p) {
    console.log(key)
  }
  console.log("Giá trị:")
  for (const key in p) {
    console.log(p[key])
  }
}

const sellingAndInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name)

console.log("Câu 3:", namePriceList)
console.log("Câu 4:", inStockProducts)
console.log("Câu 5:", hasOver30M)
console.log("Câu 6:", accessoriesAllAvailable)
console.log("Câu 7:", totalInventoryValue)
console.log("Câu 10:", sellingAndInStockNames)
