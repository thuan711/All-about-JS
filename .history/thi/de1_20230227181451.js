const product = [
    {ID:1,productName:'Kem',productImg:'./img/burger.jpg',price:'90.000VNĐ',catalogy:'thức ăn'},
    {ID:2,productName:'Trà sữa',productImg:'./img/burger.jpg',price:'50.000VNĐ',catalogy:'đồ uống'},
    {ID:3,productName:'Kẹo',productImg:'../img/youtube.jpg',price:'120.000VNĐ',catalogy:'thức ăn'},
    {ID:4,productName:'Cafe',productImg:'./img/burger.jpg',price:'100.000VNĐ',catalogy:'đồ uống'}         
]
// const drink = product.filter(item=>item.catalogy=== "đồ uống")
const drink = [];
// Lặp qua mảng drink và hiển thị sản phẩm
drink.forEach(function(product) {
    // Tạo một phần tử sản phẩm mới
    var productElement = document.createElement("div");
    productElement.classList.add("product");
  
    // Thêm hình ảnh sản phẩm vào phần tử sản phẩm
    var imgElement = document.createElement("img");
    imgElement.src = product.productImg;
    productElement.appendChild(imgElement);
  
    // Thêm tên sản phẩm vào phần tử sản phẩm
    var nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.textContent = product.productName;
    productElement.appendChild(nameElement);
  
    // Thêm giá sản phẩm vào phần tử sản phẩm
    var priceElement = document.createElement("div");
    priceElement.classList.add("price");
    priceElement.textContent = product.price + " đ";
    productElement.appendChild(priceElement);
  
    // Thêm phần tử sản phẩm vào danh sách sản phẩm trên giao diện
    var productListElement = document.querySelector(".product-list");
    productListElement.appendChild(productElement);
  });
  