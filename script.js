var menu = document.getElementById("menu-btn");
var side = document.getElementById("side-nav");

side.style.right = "-250px"

menu.addEventListener('click', () => {
    if(side.style.right == "-250px"){
        side.style.right = "0px"
    }
    else{
        side.style.right = "-250px"
    }
})


	var scroll = new SmoothScroll('a[href*="#"]');
