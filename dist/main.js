//Globals
var letters = document.getElementsByClassName('letter');
var guesses = 0;




document.onreadystatechange = function() {
	if (document.readyState == "interactive"){
		
		console.log('In onreadystatechange');

		startGame();
	
	} 
};

function startGame(){

	console.log('In funtion startGame()');

		// set image to starting image
		imageChange(guesses);

		//load the secret word and add click event on letters
		loadSecretWord();
		
		// evaluate letter selection
		for(var i=0; i<letters.length;i++){  					  	// It stopped working when I added the event listener and evaluate guess function. 
											 						// I receive this notice when I inspect the console.log on chrome.
			letters[i].addEventListener("click", evaluateGuess);  	// main.js:30 Uncaught ReferenceError: evaluateGuess is not defined
    																//at startGame (main.js:30)
    																//at HTMLDocument.document.onreadystatechange (main.js:13)
		} 


}

function imageChange(num){
	console.log('In function imageChange()');
	switch (num){
		case 0:
		stateImage.src = "/images/Start.jpg";
		//console.log('helo')
		break;

		case 1:
		stateImage.src = "/images/Head.jpg";
		break;

		case 2:
		stateImage.src = "/images/Body.jpg";
		break;

		case 3:
		stateImage.src = "/images/Arms.jpg";
		break;

		case 4:
		stateImage.src = "/images/Legs.jpg";
		break;

		case 5:
		stateImage.src = "/images/Dead.jpg";
		break;
	} 
}

function loadSecretWord(){
	

	//generate
	var wordNum=Math.floor((Math.random() * 25)+1);
	console.log(wordNum);
	var secretWord=words[wordNum].toUpperCase();
	console.log(secretWord);

	// set the elements to equal number of letters in
	// secret word and add appropriate number of space
	// on the board 

	 console.log(wordNum);
	 console.log(words[wordNum]);

	 for (var i =0; i < secretWord.length; i++) {
	 	var div = document.createElement("div");
	 	div.id = "space" + i;
	 	div.className=" col-xs-2 space img-rounded";
	 	console.log(div);
	 	//var x = document.createTextNode(secretWord[i]);
	 	var x = document.createTextNode(" _ ");
	 	console.log(x);
	 	div.appendChild(x);
	 	// var y=div.appendChild(x);
	 	// y.className += "col-xs-2 space img-rounded" ;
	 	console.log(div.appendChild(x));
	 	document.getElementById("guess").appendChild(div);
	 	document.getElementById("space" + i).style.display='block'; 


	 	// document.getElementById("space"+i)=secretWord[i];

	 }

	function evaluateGuess(){  // It stopped working when I added the event listener and evaluate guess function

		console.log('hello');
		// var selection = this.innerHTML;
		// this.removeEventListener("click",evaluateGuess);



	}

	


}


