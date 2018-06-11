

function getRandomInt(){
	const randomTo6 = () => Math.floor(Math.random() * 7);
	if(randomTo6() === 1){
		return 1;
	}else if (randomTo6() === 2){
		return 2;
	} else if (randomTo6() === 3){
		return 3;
	}else if (randomTo6() === 4){
		return 4;
	}else if (randomTo6() === 5){
		return 5;
	}else {
		return 6;
	}

}

// console.log(getRandomInt());

const currentDiv = document.querySelectorAll('.dice');
currentDiv.innerText = getRandomInt();

getRandomInt();
