let buttonText = document.getElementById("description-button");

function displayText() {

    let descriptionBox = document.querySelector(".description-box");
    buttonText.style.display = "none"
    descriptionBox.style.display = "block";

    
}

function showLess(){
    
    buttonText.innerText = "Show less";
    descriptionBox.style.display = "none";
}

element.addEventListener("click", displayText);

