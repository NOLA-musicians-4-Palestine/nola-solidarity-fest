document.addEventListener("DOMContentLoaded", (event) => {
	//document.querySelector("#today").scrollTop = 0;
	//scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

document.querySelector("#more-info-link").addEventListener("click", function(){
	console.log("simon");
	document.querySelector("#more-info").scrollIntoView({behavior: "smooth", block: "start"});
});

