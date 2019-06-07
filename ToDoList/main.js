let main = document.getElementById("main"),
    divText = document.getElementById("div-text"),
    inputText = document.querySelector(".input-text"),
    addButton = document.querySelector(".button-add"),
    body = document.getElementsByTagName("body");
let mainClass = document.getElementsByClassName("main-class");
let mainCss = document.querySelector(".main-class");

addButton.addEventListener("click", addToList);

function addToList(){
    if(inputText.value !== ""){
        let addedDiv = document.createElement("DIV");
        let inputedText = document.createElement("P");
        let removeButton  = document.createElement("BUTTON");

        addedDiv.className = "div-class-text";
        addedDiv.style.border = "2px solid black";
        addedDiv.style.marginTop = "5px";

        inputedText.className = "input-text decoration";
        inputedText.style.textAlign = "center";
        inputedText.style.fontSize = "22px";

        removeButton.className = "button-add";
        removeButton.id = "remove";
        removeButton.className = "button-add";
        removeButton.style.color = "red";

        main.appendChild(addedDiv);

        addedDiv.appendChild(inputedText);

        addedDiv.appendChild(removeButton);

        removeButton.innerHTML = "REMOVE";

        inputedText.innerHTML = inputText.value;

        inputText.value = "";

        removeButton.addEventListener("click", removeFromList);

        function removeFromList(){
            removeButton.parentNode.remove();
        }
        inputedText.addEventListener("click",lineInText)

        function lineInText(){
            inputedText.style.textDecoration = "line-through";
            inputedText.style.backgroundColor = "lightseagreen";
        }
    }else{
        alert("Put Some Text Pleas")
    }
    
    
}




