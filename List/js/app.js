var newItemCounter = 1;
var ourList = document.querySelector("#our-list");
var ourButton = document.querySelector("#button");
var ourHeadline = document.querySelector("#our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");

ourList.addEventListener("click", activateItem)

function activateItem(e) {
    if (e.target.nodeName == "LI") {
        ourHeadline.innerHTML = e.target.innerHTML;
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li>Something new " + newItemCounter+ "</li>"
    newItemCounter++;
} 

//https://www.youtube.com/watch?v=zPHerhks2Vg