
// =============================type out hearts==================
function myFunction(event) {
  
  var x = event.keyCode;         // Get the Unicode value

  if (x === 97){
  			var j = Math.random();
  			var m = 0
		  	var animationA = function(){
			  	if(j >= 0.6){
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartred"><img class="hpng"src="Asset/hpng@300x.png"></div>`);
				}else{
				document.getElementById("patternspace").insertAdjacentHTML("beforeend", ` 
					<div class="heartblue"><img class="hpng"src="Asset/hpng_2@300x.png"></div> `);
				}	

				if(m >= 5){ 
					clearInterval(myAnimating);
				}

				m++;

			}

			var myAnimating = setInterval(animationA, 400);

  }

}



// =================== mouse move 
var trail = document.getElementById("trail");

$(document).mousemove(function(e){ $('.pointer ').css({left:e.pageX, top:e.pageY});
 })

for (var i = 0; i < 30; i++){
  var morePointer = ` <div class="pointer" style="transition:${(i*0.05)+0.1}s;"><img src="Asset/heartc.svg"></div>`
   trail.insertAdjacentHTML('beforeend' , morePointer);
}

