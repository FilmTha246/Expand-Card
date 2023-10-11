// Access to every item
const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        // console.log("ok")
        removeClassActive();
        item.classList.add('active')
    })
})

function removeClassActive() {
    items.forEach((item) => {
        item.classList.remove('active')
    })
}