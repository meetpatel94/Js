let modebtn = document.querySelector("#btn");
let mode = "light";

modebtn.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";

    } else {
        mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(mode);
});