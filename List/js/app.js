var newItemCounter = 1;
var ourList = document.getElementById("our-list");
var ourButton = document.getElementById("button");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");

for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem)
}

function activateItem() {
    ourHeadline.innerHTML = this.innerHTML;
    //Left off at 24:00 https://www.youtube.com/watch?v=zPHerhks2Vg
    this.classList.add("active");
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li>Something new " + newItemCounter+ "</li>"
    newItemCounter++;
} 