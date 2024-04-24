document.addEventListener("DOMContentLoaded", (event) => {
	console.log("dom content loaded");
});
document.querySelector("#more-info-link").addEventListener("click", function(){
	console.log("simon");
	document.querySelector("#more-info").scrollIntoView({behavior: "smooth", block: "center"});
});
