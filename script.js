var btnClicked = document.querySelectorAll(".tab-section")
btnClicked.forEach(element => {

    element.addEventListener('click', () => {

        console.log("HI")
        element.classList.toggle("active")
    })
});