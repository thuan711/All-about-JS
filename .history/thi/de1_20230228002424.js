const product = [
    {ID:1,productName:'Kem',productImg:'./img/burger.jpg',price:'90.000VNĐ',catalogy:'thức ăn'},
    {ID:2,productName:'Trà sữa',productImg:'/img/burger.png',price:'50.000VNĐ',catalogy:'đồ uống'},
    {ID:3,productName:'Kẹo',productImg:'../img/youtube.jpg',price:'120.000VNĐ',catalogy:'thức ăn'},
    {ID:4,productName:'Cafe',productImg:'/img/youtube.png',price:'100.000VNĐ',catalogy:'đồ uống'}         
]
// const drink = product.filter(item=>item.catalogy=== "đồ uống")
// const drink = [];
// for (let i = 0; i < product.length; i++) {
//   if (product[i].catalogy === "đồ uống") {
//     drink.push(product[i]);
//     const item = document.createElement("div");
//     item.classList.add("product-item");
//     item.innerHTML = `
//       <div class="product-img">
//         <img src="${product[i].productImg}" alt="${product[i].productName}">
//       </div>
//       <div class="product-info">
//         <h2 class="product-name">${product[i].productName}</h2>
//         <p class="product-price">${product[i].price} </p>
//         <button class="btn-order">Đặt hàng</button>
//       </div>
//     `;
//     document.getElementById("drink-list").appendChild(item);
//   }
// }
const drink = [];
const productList = document.getElementById("drink-list");

const cartList = [];

// Hàm xử lý sự kiện nhấn nút Đặt hàng
function handleOrderClick(event) {
  // Lấy ra chỉ số của sản phẩm đã đặt
  const productIndex = parseInt(event.target.dataset.index);
  // Lấy ra đối tượng sản phẩm đã đặt
  const orderedProduct = drink[productIndex];
  // Thêm sản phẩm đã đặt vào mảng cartList
  cartList.push(orderedProduct);
}

for (let i = 0; i < product.length; i++) {
  if (product[i].catalogy === "đồ uống") {
    drink.push(product[i]);
    const item = document.createElement("div");
    item.classList.add("product-item");
    item.innerHTML = `
      <div class="product-img">
        <img src="${product[i].productImg}" alt="${product[i].productName}">
      </div>
      <div class="product-info">
        <h2 class="product-name">${product[i].productName}</h2>
        <p class="product-price">${product[i].price} </p>
        <button class="btn-order" data-index="${drink.length - 1}">Đặt hàng</button>
      </div>
    `;
    productList.appendChild(item);
  }
}

productList.addEventListener("click", function(event) {
  if (event.target.classList.contains("btn-order")) {
    handleOrderClick(event);
  }
});
