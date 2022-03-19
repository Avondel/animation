var curEl;
var runs = true;

// common function to apply one transition rule
function transition(elem, styleProps) {
  return new Promise((resolve, reject) => {
    function handleTransitionEnd() {
      console.log("Transition Ended...");
      resolve(elem);
    }
    elem.addEventListener("transitionend", handleTransitionEnd, { once: true });
    Object.entries(styleProps).forEach(([prop, value]) => {
      elem.style.setProperty(prop, value);
    });
  });
}

// common function to apply animations to an element.
function animate(elem, animation) {
  return new Promise((resolve, reject) => {
	 curEl = elem; 
    function handleAnimationEnd() {
      console.log("animation ended...");
      resolve(elem);
    }
    elem.addEventListener("animationend", handleAnimationEnd, { once: true });
    elem.classList.add(animation);
  });
}

function pause(e){
	curBut = document.getElementById("pause");
	if(runs == true){
		curEl.style.animationPlayState = 'paused';		
		curBut.innerHTML = "Continue";
		runs = false;
	} else {
		curEl.style.animationPlayState = 'running';
		curBut.innerHTML = "Pause";
		runs = true;
	}
	
}

function restart(){
	var curDiv = document.getElementById("anim");
	curDiv.innerHTML = "";
	var box1 = document.createElement("div");
	var box2 = document.createElement("div");
	var box3 = document.createElement("div");
	var box4 = document.createElement("div");
	box1.setAttribute("class", "box");
	box1.setAttribute("id", "box1");
	curDiv.appendChild(box1);
	box2.setAttribute("class","box");
	box2.setAttribute("id","box2");
	curDiv.appendChild(box2);
	box3.setAttribute("class","box");
	box3.setAttribute("id","box3");
	curDiv.appendChild(box3);
	box4.setAttribute("class","box");
	box4.setAttribute("id","box4");
	curDiv.appendChild(box4);	
}

async function play() {

  //document.querySelector("#minimize").innerText = "maximize";
  await animate(box1, "moveLeft");
  await animate(box2, "moveDown");
  await animate(box3, "moveDiag");
  await animate(box4, "moveSpiral");
}

