const indexElem = document.querySelectorAll(".track-list__item");

const audioList = {
	HowYouLoveMe: new Audio("./audio/How you love me.mp3"),
	WarForLove: new Audio("./audio/War for love.mp3"),
	Ghost: new Audio("./audio/Ghost.mp3"),
	NeverSayGoodbye: new Audio("./audio/Never say goodbye.mp3"),
	WhereAreYouNow: new Audio("./audio/Where are you now.mp3"),
	FollowYouDown: new Audio("./audio/Follow you down.mp3")
}

window.onclick = function getIndex(el) {
	const index = el.target.getAttribute("index");
	switch(index) {
		case "1": 
			createAudio(audioList.HowYouLoveMe);
			break;
		case "2": 
			createAudio(audioList.WarForLove);
			break;
		case "3": 
			createAudio(audioList.Ghost);
			break;
		case "4": 
			createAudio(audioList.NeverSayGoodbye);
			break;
		case '5': 
			createAudio(audioList.WhereAreYouNow);
			break;
		case "6": 
			createAudio(audioList.FollowYouDown);
			break;
		default:
			break;
	}
}


function createAudio(audio) {
	const audioDiv = document.querySelector(".track-list__audio");
	audioDiv.innerHTML = "";
	audio.controls = true;
	audioDiv.appendChild(audio)
}

createAudio(audioList.HowYouLoveMe)



