
window.addEventListener("keydown",checkkeyPress)
var j = Math.random();
  
  function checkkeyPress(key){
  	if (key.keyCode == "65"){
	console.log("A")
		var j = Math.random();
// this is A
  			var m = 0
		  	var LetterAnimation = function(){
			  	if(j >= 0.3){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: rotating 2s ease-in 0s infinite;"><img class="hpng"src="Asset/h1.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: rotating 3s ease-in 0s infinite;" ><img class="hpng"src="Asset/h0.png"></div> `);
				}	

				if(m >= 6){ 
					clearInterval(myAnimating);
				}

				m++;

			}

			var myAnimating = setInterval(LetterAnimation, 400);  
  	}else if (key.keyCode == "66"){
	console.log("B")
// this is B
  			var b = 0
		  	var LetterAnimation = function(){
			  	if(b%3 == 2){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: pop ${b/10}s ease-in 0s infinite;"><img class="hpng"src="Asset/h4.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue"><img class="hpng"src="Asset/h0.png"></div> `);
				}	

				if(b >= 6){ 
					clearInterval(myAnimating);
				}

				b++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
  	}else if (key.keyCode == "67"){ 
  		console.log("C")
// this is C
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%9 == 4){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: pop ${c/10}s ease-in 0s infinite;"><img class="hpng"src="Asset/h1.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue"><img class="hpng"src="Asset/h0.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
  	}else if (key.keyCode == "68"){ 
     	 console.log("D")
// this is D
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%3 == 1){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: pop ${c/10}s ease-in 0s infinite;"><img class="hpng"src="Asset/h1.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue"><img class="hpng"src="Asset/h3.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
  	}else if (key.keyCode == "69"){ 
     	 console.log("E")
// this is E
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c==90){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred"><img class="hpng"src="Asset/h1.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop ${c/10}s ease-in ${c}s ${10+c};"><img class="hpng"src="Asset/h${c}.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
  	}else if (key.keyCode == "70"){ 
     	 console.log("F")
// this is F
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%5 == 2){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred"><img class="hpng"src="Asset/h1.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop ${c/10}s ease-in 0s infinite";><img class="hpng"src="Asset/h0.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
  	}else if (key.keyCode == "71"){ 
     	 console.log("G")
// this is G
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(j == 0.8){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred"><img class="hpng"src="Asset/h1.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop ${j/10}s ease-in 0s infinite";><img class="hpng"src="Asset/h0.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
  	}else if (key.keyCode == "72"){ 
     	 console.log("H")
// this is H
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%6 == 3){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred"><img class="hpng"src="Asset/h1.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop ${c}s ease-in ${j*10}s infinite";><img class="hpng"src="Asset/h5.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
  	}else if (key.keyCode == "73"){ 
     	 console.log("I")
// this is I
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c==2){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="backgroundcolor:#64B7FF;" ><img class="hpng"src="Asset/h2.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop ${c/10}s ease-in 0s infinite;"><img class="hpng"src="Asset/h5.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 700);
  	}else if (key.keyCode == "74"){ 
     	 console.log("J")
// this is J
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c==4){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: bob ${c/10}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h1.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop ${c/10}s ease-in 0s infinite;"><img class="hpng"src="Asset/h0.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "75"){ 
     	 console.log("K")
// this is K
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c==2){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: bob ${c/10}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h${c}.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop ${c/20}s ease-in 0s infinite;"><img class="hpng"src="Asset/h6.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "76"){ 
     	 console.log("L")
// this is L
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%2==1){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: bob ${c/10}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h${c}.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop ${c/20}s ease-in ${c/5}s infinite;"><img class="hpng"src="Asset/h6.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "77"){ 
     	 console.log("M")
// this is M
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c==9){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: pop ${c/10}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h0.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop 2s ease-in ${c/5}s infinite;"><img class="hpng"src="Asset/h${c}.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 500);
	}else if (key.keyCode == "78"){ 
     	 console.log("N")
// this is N
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%4 == 2){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: pop ${c/5}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h0.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: rotating 2s ease-in ${c/5}s infinite;"><img class="hpng"src="Asset/h${c}.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "79"){ 
     	 console.log("O")
// this is O
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	var x = Math.floor (Math.random()*10);
			  	var y = Math.floor (Math.random()*10);
			  
			  	document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="transform:translate(${x}em,${y}em);"><img class="hpng"src="Asset/h${c}.png"></div> `);

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "80"){ 
     	 console.log("P")
// this is P
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%0.2 == 1){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: pop ${c/5}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h0.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: rotating ${(c/5)/10}s ease-in ${c/5}s infinite;"><img class="hpng"src="Asset/h5.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "81"){ 
     	 console.log("Q")
// this is Q
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%2 == 1){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: bob ${c/5}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h0.png"></div>`);
				}else if (c%2 == 0.8){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop ${(c/5)/10}s ease-in ${c/5}s infinite;"><img class="hpng"src="Asset/h5.png"></div> `);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
				<div class="heartblue" style ="animation: bob ${(c/5)+1}s ease-in ${c/5}s infinite;"><img class="hpng"src="Asset/h3.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "82"){ 
     	 console.log("R")
// this is R
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%2 == 1){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: bob ${c/13}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h0.png"></div>`);
				}else if (c%2 == 0.8){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop ${(c/5)/10}s ease-in ${c/1}s infinite;"><img class="hpng"src="Asset/h5.png"></div> `);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
				<div class="heartred" style ="animation: bob ${(c/6)+1}s ease-in ${c/2}s infinite;"><img class="hpng"src="Asset/h3.png"></div> `);
				}	

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "83"){ 
     	 console.log("S")
// this is S
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%2 == 1){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: pop ${c/13}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h0.png"></div>`);
				}else {
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop ${(c/5)/10}s ease-in ${c/1}s infinite;"><img class="hpng"src="Asset/h2.png"></div> `);
				}

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "84"){ 
     	 console.log("T")
// this is T
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%2 == 1){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: pop ${c/13}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h0.png"></div>`);
				}else {
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop ${(c/2)/4}s ease-in ${c/1}s infinite;"><img class="hpng"src="Asset/h${c}.png"></div> `);
				}

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "85"){ 
     	 console.log("U")
// this is U
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%2 == 1){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: pop ${c/13}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h0.png"></div>`);
				}else {
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: rotating ${(c/3)/4}s ease-in 0s infinite;"><img class="hpng"src="Asset/h${c}.png"></div> `);
				}

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "86"){ 
     	 console.log("V")
// this is V
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%2 == 1){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: rotating ${c/13}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h0.png"></div>`);
				}else {
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop 2s ease-in ${c}s infinite;"><img class="hpng"src="Asset/h${c}.png"></div> `);
				}

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "87"){ 
     	 console.log("W")
// this is W
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%2 == 1){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: rotating ${c/8}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h2.png"></div>`);
				}else {
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop 3s ease-in ${c+1}s infinite;"><img class="hpng"src="Asset/h3.png"></div> `);
				}

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "88"){ 
     	 console.log("X")
// this is X
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%2 == 1){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: rotating ${c/8}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h3.png"></div>`);
				}else {
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: bob 5s ease-in ${(c+0.5)/2}s infinite;"><img class="hpng"src="Asset/h${c}.png"></div> `);
				}

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "89"){ 
     	 console.log("Y")
// this is Y
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%2 == 1){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: rotating ${c/8}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h1.png"></div>`);
				}else {
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop 5s ease-in ${(c+0.5)/2}s infinite;"><img class="hpng"src="Asset/h1.png"></div> `);
				}

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}else if (key.keyCode == "90"){ 
     	 console.log("Z")
// this is Z
  		var j = Math.random();
  			var c = 0
		  	var LetterAnimation = function(){
			  	if(c%2 == 1){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred" style ="animation: rotating ${c/8}s ease-in 0s infinite; z-index:1000;" ><img class="hpng"src="Asset/h${c}.png"></div>`);
				}else {
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue" style ="animation: pop 5s ease-in ${c^2}s infinite;"><img class="hpng"src="Asset/h3.png"></div> `);
				}

				if(c >= 6){ 
					clearInterval(myAnimating);
				}

				c++;

			}

			var myAnimating = setInterval(LetterAnimation, 100);
	}
}
  	

// =================== mouse move 
var trail = document.getElementById("trail");

$(document).mousemove(function(e){ $('.pointer ').css({left:e.pageX, top:e.pageY});
 })

for (var i = 0; i < 5; i++){
  var morePointer = ` <div class="pointer" style="transition:${(i*0.05)+0.1}s;"><img src="Asset/heartc${i}.svg"></div>`
   trail.insertAdjacentHTML('beforeend' , morePointer);
}

// ============change background color

window.addEventListener("mousedown",setRandomColor)

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

function setRandomColor() {  document.querySelector("body").style.backgroundColor = getRandomColor();
  
}

