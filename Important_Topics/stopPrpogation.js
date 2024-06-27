document.querySelector("#container").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("clicked container");
})
document.querySelector(".box").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("clicked box");
})
document.querySelector(".textbox").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("clicked textbox");

});