const audrey = document.getElementById("audrey")

document.addEventListener("scroll", () => {
  
    audrey.style.minWidth = "50px"
    audrey.style.width = window.screenY/3 + "px"
    audrey.style.minHeight = "100px"
    audrey.style.height = window.screenY/4 +"px"
 
})
