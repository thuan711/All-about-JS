const product = [
    {ID:1,productname:'Kem',productImg:'./img/burger.jpg',price:'90.000VNĐ',catalogy:'thức ăn'},
    {ID:2,productname:'Trà sữa',productImg:'./img/burger.jpg',price:'50.000VNĐ',catalogy:'đồ uống'},
    {ID:3,productname:'Kẹo',productImg:'../img/youtube.jpg',price:'120.000VNĐ',catalogy:'thức ăn'},
    {ID:4,productname:'Cafe',productImg:'./img/burger.jpg',price:'100.000VNĐ',catalogy:'đồ uống'}         
]
const drink = product.filter(item=>item.catalogy=== "đồ uống")
console.log(drink)
const item = document.createElement("div");
    item.classList.add("product-item");
    item.innerHTML = `
      <div class="product-img">
        <img src="${product[i].productImg}" alt="${product[i].productName}">
      </div>
      <div class="product-info">
        <h2 class="product-name">${product[i].productName}</h2>
        <p class="product-price">${product[i].price} VNĐ</p>
      </div>
    `;
    document.getElementById("drink-list").appendChild(item);