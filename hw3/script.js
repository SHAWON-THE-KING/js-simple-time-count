let Display = document.getElementById("number");
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");

let count = 0;

plusBtn.addEventListener("click", () => {
    count++;
    Display.innerText = count;
});

minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        Display.innerText = count;
    }
});
