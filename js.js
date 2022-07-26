document.addEventListener("keypress", (event) => {
    console.dir(event)
    
    const keyCode = document.querySelector("#keyCode")
    const whichKey = document.querySelector("#whichKey")

    keyCode.textContent = event.keyCode;
    whichKey.textContent = "Key: " + event.key + " Which: " + event.which;
})