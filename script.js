
navLinks = document.getElementById("navLinks")
navExtra = document.querySelectorAll(".navExtra")


navExtra.forEach((object) => {
    object.addEventListener("click", (event) => {
        console.log(event.target)
    })
})




function resize(event) {
    event = event || false

    if (event) {

    }


}

resize()


window.addEventListener('resize', (event) => {
    resize(event)
});