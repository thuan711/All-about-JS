const button = document.querySelector('button');
// const span = document.querySelector('span');
// function handleClick() {
//     console.log('click button');
// }

button.addEventListener("click", handleClick);
const colors = ["#ffa400", "#00aefd", "#black", "#yellow", "#pink"];
function handleClick() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
}
// span.addEventListener("click", function(e) {
//     e.stopPropagation();
//     console.log("click span");
// });
// document.span.addEventListener(
//     "click", function() {
//         console.log("click span 2");
//     },
//     {
//         capture : true,
//     }
// )
// button.addEventListener("click", function(e) {
//     console.log('event.target: ${e.target}');
//     console.log('event.currentTarget: ${e.currentTarget}');
// });
