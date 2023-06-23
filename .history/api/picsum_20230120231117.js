const endpoint = "https://picsum.photos/v2/list";
const imageList = document.querySelector(".images");
function imageTemplates(url){
    const template = `<div class="image-item"
            <img src="${url}" alt=""/>
        </div>`;
    imageList.insertAdjacentHTML("beforeend", template);
}
async function fetchImages(){
    const response = await fetch(endpoint);
    const images = await response.json();
    if(images.lenght>0 && Array.isArray(images)){
        images.forEach((item) =>{
            imageTemplates(item.download_url)
        }
            )
        
            
    }
}
fetchImages();