let bt1 = document.querySelector("#btn1");
bt1.onclick = () => {
    console.log("clicked");
};
// bt1 = addEventListener("onclick", () => {
//     console.log("Get clicked");
// })
let bt2 = document.querySelector(".btn2");
bt2.ondblclick = () => {
    console.log("Double click");
};
let bt3 = document.querySelector("#btn3");
bt3.onmouseover = () => {
    console.log("hovered");
};
// let bt3 = document.querySelector("#btn3");
// bt3.onmouseover = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);
// };
