
window.addEventListener("keydown",checkkeyPress)
var j = Math.random();
  
  function checkkeyPress(key){
  	if (key.keyCode == "65"){
	console.log("A")
// this is A
  			var m = 0
		  	var LetterAnimation = function(){
			  	if(j >= 0.3){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred"><img class="hpng"src="Asset/h1.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue"><img class="hpng"src="Asset/h0.png"></div> `);
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

