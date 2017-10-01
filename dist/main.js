//Globals
var letters = document.getElementsByClassName('letter');





document.onreadystatechange = function() {
	if (document.readyState == "interactive"){
		
		console.log('In onreadystatechange');

		startGame();
	
	} 
};

function startGame(){

	console.log('In funtion startGame()');

		// set image to starting image
		imageChange(0);

		//load the secret word and add click event on letters
		loadSecretWord();

		//loadSecretWord();
		
		//create

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

	//set 

	 console.log(wordNum);
	 console.log(words[wordNum]);

	


}


