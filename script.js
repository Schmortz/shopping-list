var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ["Notebook","Jello","Spinach","Rice","Birthday Cake","Candles","Torch"];
var itemNum = 0;

function inputLength() {
	return input.value.length;
}

function toggleDone(event) {
// console.log("toggleDone");
// console.log(event);
	var id = event.path[0].id;
// console.log(id);
	var element = document.getElementById(id);
// console.log(element);
	if (element.className != "done")
		element.className = "done";
	else
		element.className = "";
}

function deleteMe(event) {
	var id = event.path[1].id;					// Get the li id from the event path array attribute
	var element = document.getElementById(id);	// Get the element object to remove
	element.remove();
}

function createListElement(value) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(value + "  "));
    li.id = "L"+ ++itemNum;
    li.addEventListener("click",toggleDone);
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click",deleteMe);
    li.appendChild(deleteButton);
	ul.appendChild(li);
    input.value = ""; 
}

function addListAfterClick() {
	if (inputLength() > 0) {
        createListElement(input.value);
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement(input.value);
	}
}

function initialLoad() {
    items.forEach(createListElement);
}

initialLoad();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
