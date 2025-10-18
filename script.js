let stopWatch = document.querySelectorAll(".stop-watch");

let arr = Array.from(stopWatch);

arr.map((counter) => {
    let count = 0;
    let target = parseInt(counter.getAttribute("data-number"));

    function timer() {
        count++;
        counter.innerHTML = count;

        if (count === target) {
            clearInterval(increase);
        }
    }

    let increase = setInterval(timer, 50);
});
 