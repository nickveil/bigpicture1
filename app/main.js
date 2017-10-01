//Globals
var letters = document.getElementsByClassName('letter');





document.onreadystatechange = function() {
	if (document.readyState == "interactive"){
		startGame();
	
	}
};

function startGame(){

		// set image to starting image
		imageChange(0);

		//load the secret word and add click event on letters
		loadSecretWord();
		
		//create

}

function imageChange(num){
	switch (num){
		case 0:
		stateImage.src = "../img/Start.jpg";
		//console.log('helo')
		break;

		case 1:
		stateImage.src = "../img/Head.jpg";
		break;

		case 2:
		stateImage.src = "../img/Body.jpg";
		break;

		case 3:
		stateImage.src = "../img/Arms.jpg";
		break;

		case 4:
		stateImage.src = "../img/Legs.jpg";
		break;

		case 5:
		stateImage.src = "../img/Dead.jpg";
		break;



	}
}

function loadSecretWord(){
	

	//generate
	var wordNum=Math.floor((Math.random() * 25)+1);

	//set 

	// console.log(wordNum);
	// console.log(words[wordNum]);

	


}


