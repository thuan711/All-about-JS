// const endpoint = `https://picsum.photos/v2/list`;
// const imageList = document.querySelector(".images");

// function imageTemplate(url) {
//     const template = `<div class="image-item">
//           <img src="${url}" alt="" />
//         </div>`;
//     imageList.insertAdjacentHTML("beforeend", template);
// }
// async function fetchImages(){
//     const response = await fetch(endpoint);
//     const images = await response.json();
//     if(images.lenght>0 && Array.isArray(images)){
//         console.log("images.forEach ~ images",images);
//         images.forEach((item) =>{
//             imageTemplate(item.download_url)
//         });    
//     }
// }
// fetchImages();

// console.log("a")
// ?page=2&limit=100
const imageList = document.querySelector(".images");
const loadmore = document.querySelector(".load-more");
const loading = document.querySelector(".image-loader");
loadmore.style.display = "none";
let page = 1;
const limit = 10;
const endpoint = `https://picsum.photos/v2/list?limit=${limit}`;
{
  /* <div class="image-item">
        <img src="https://source.unsplash.com/random" alt="" />
      </div> */
}
function imageTemplate(url) {
  const template = `<div class="image-item">
        <img src="${url}" alt="" />
      </div>`;
  imageList.insertAdjacentHTML("beforeend", template);
}
async function fetchImages(page = 1) {
  loading.style.display = "block";
  loadmore.style.display = "none";
  const response = await fetch(`${endpoint}&page=${page}`);
  const images = await response.json();
  if (images.length > 0 && Array.isArray(images)) {
    loading.style.display = "none";
    loadmore.style.display = "block";
    images.forEach((item) => {
      imageTemplate(item.download_url);
    });
  }
}
async function handleLoadMore() {
  page++;
  await fetchImages(page);
}
loadmore.addEventListener("click", handleLoadMore);
fetchImages();