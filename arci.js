
var input = document.getElementById("myFile");
var output = document.getElementById("output");
var txt = document.getElementById("txt");
var t;

input.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    var myFile = this.files[0];
    var reader = new FileReader();
    
    reader.addEventListener('load', function (e) {
      // output.textContent = e.target.result;
	  t = e.target.result;	 
    });
    
  reader.readAsBinaryString(myFile);
   
  }   
});

function extractSubstr(str, regexp) {
    // return str.replace(/[^\w\s]|_/g, '')
        // .replace(/\s+/g, ' ')
        // .toLowerCase().match(regexp) || [];

    // return str.replace(/[^\W\S]|_/g, '')
        // .replace(/\s+/g, ' ')
        // .toLowerCase().match(regexp) || [];
		return str.replace(/[^\W\S]|_/g, '')
        .replace(/\s+/g, ' ').match(regexp) || [];
}

function getWordsByNonWhiteSpace(str) {
    return extractSubstr(str, /\S+/g);

}
var speed = 400;

// function counter() {
	// var x = getWordsByNonWhiteSpace(t);
    // var i = 0;
    // var funcNameHere = function(){
        // if (i == x.length) clearInterval(this);
        // else{
			// if(x[i].length < 4){
				// txt.style.color = "#adadad";
				// txt.innerHTML = x[i];
			// }
			// else{
				// txt.style.color = "#adadad";
				// txt.innerHTML = x[i];
			// }
		// } 
		// (i++);
    // };
    // setInterval(funcNameHere, speed);
    // funcNameHere();
// }

function counter() {
	var x = getWordsByNonWhiteSpace(t);
    var i = 0;
    var funcNameHere = function(){
        if (i == x.length) clearInterval(inter);
        else{			
			if(x[i] != undefined)
				txt.innerHTML = x[i];		
		} 
		(i++);
    };
    var inter = setInterval(funcNameHere, speed);
    funcNameHere();
}


output.addEventListener("click", function () {
	document.getElementById("myFile").style.display = "none";
	document.getElementById("output").style.display = "none";	
  counter();
// kkk();  
});

