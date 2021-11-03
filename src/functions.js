function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi: " + productName+ " adet: "+ quantity)
}

//addToCart()

//cagrıdaki parametreler sırasıyla eslesir
addToCart(10)
//addToCart(15) 

let sayHello=()=>{
console.log("Hello World")
}

sayHello()

let sayHello2=function () {
    console.log("Hello World 2")
}
sayHello2()

function addToCart2(productName,quantity,unitPrice) {

}

//encapsulations
let product1={productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün: "+product.productName)
    console.log("Adet: "+product.quantity)
    console.log("Fiyat: "+product.unitPrice)
}

addToCart3(product1)
//değer tipi 
//objeler referans tipidir.
let product2={productName:"Elma", unitPrice:10, quantity:5}
let product3={productName:"Elma", unitPrice:10, quantity:5}
product2=product3
product2.productName="KARPUZ"
console.log(product3.productName)
//çıktı: KARPUZ

function addToCart4(x) {
    console.log(products)
}

let products=[
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(bisey,...numbers) {
    //... rest operatörü: array yapıp dönduruyor
    let total=0
  for(let i=0;i<numbers.length;i++){
      total=total+numbers[i]
  }
  console.log(total)
  console.log(bisey)
}
//add(20,30)
add(20,30,40)
//add(20,30,40,50)

let numbers=[30,10,500,600,120]
//spread ...
 
console.log(Math.max(...numbers)) //Math.max() gönderilen sayinin en buyugunu verir.

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
   {name:"İç anadolu", population:"20M"},
   {name:"Marmara", population:"30M"},
   {name:"Karadeniz", population:"10M"},
   [
       ["Ankara","Konya"],
       ["İstanbul","Bursa"],
       ["Sinop","Trabzon"],
   ]

]
 

console.log(icAnadolu.population)

console.log(icAnadolu.name)
console.log(icAnadoluSehirleri)

//obje versiyonu 
let newproductName,newUnitPrice,newQuantity
 ({productName:newproductName, unitPrice:newUnitPrice, quantity:newQuantity}
 ={productName:"Elma", unitPrice:10, quantity:5})

console.log(newproductName)
console.log(newUnitPrice)
console.log(newQuantity)