var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

function PageLoad(){
	console.log ("Page Load");
	video = document.querySelector(".video");
	if (video.autoplay===true) {
		video.autoplay = false;
	}
	if (video.loop===true) {
		video.loop = false;
	}
}

function playVid() {
	console.log ("Play Video");
	video = document.querySelector(".video");
	video.play();
	video.volume();
}

function pauseVid() {
	console.log("Pause Video");
	video = document.querySelector(".video");
	video.pause();
}

function slowVid() {
	console.log("Slow Down Video");
	video = document.querySelector(".video");
	video.playbackRate = video.playbackRate * .90
	console.log(video.playbackRate);
}

function speedVid() {
	console.log("Speed Up Video");
	video = document.querySelector(".video");
	video.playbackRate = video.playbackRate *1.10;
	console.log(video.playbackRate);
}

function muteVid() {
	console.log ("mute/unmute video");
	video = document.querySelector(".video");
	if (video.muted === false) {
		video.muted = true;
	}
	else {
		video.muted = false;
	}
	}

	function skipVid() {
	console.log ("skip ahead 10 seconds")
	video = document.querySelector(".video");
	video.currentTime(video.currentTime() + 10);
	}

	function VintageVid() {
		video = document.querySelector(".video");
		video.classList.add("oldSchool");
	}

	function OrigVid() {
		video = document.querySelector(".video");
		video.classList.remove("oldSchool");
	}