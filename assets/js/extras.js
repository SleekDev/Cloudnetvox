//Payment Scroller
const scroller1 = document.getElementById("scroller1");

animate(scroller1);

function animate(element) {
	let elementWidth = element.offsetWidth;
	let parentWidth = element.parentElement.offsetWidth;
	let flag = 0;

	setInterval(() => {
		element.style.marginLeft = --flag + "px";

		if (elementWidth == -flag) {
			flag = parentWidth;
		}
	}, 10);
}


//Preheader
function saveUk(){
    var element = document.getElementById("ukraine-banner");
    element.remove("preheader");
}

//Pricing Area
function check() {
	var checkBox = document.getElementById("checbox");
	var text1 = document.getElementsByClassName("text1");
	var text2 = document.getElementsByClassName("text2");
  
	for (var i = 0; i < text1.length; i++) {
	  if (checkBox.checked == true) {
		text1[i].style.display = "block";
		text2[i].style.display = "none";
	  } else if (checkBox.checked == false) {
		text1[i].style.display = "none";
		text2[i].style.display = "block";
	  }
	}
  }
  check();