var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	var button = document.createElement("button");
	button.innerHTML = "Delete";
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//////////////////



var all_list=document.getElementsByTagName('li');
var numList=all_list.length;

function toggleDone(){
	this.classList.toggle('done');
	
}

for (var i=0;i<numList;i++){
	all_list[i].addEventListener("click", toggleDone);
}

var all_button=document.getElementsByTagName('button');
var numbutton=all_button.length;

function delteitem(){
	this.parentNode.parentNode.removeChild(this.parentNode)
	
}

for (var i=0;i<numbutton;i++){
	all_button[i].addEventListener("click", delteitem);
}

