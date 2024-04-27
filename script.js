document.addEventListener("DOMContentLoaded", (event) => {
	//document.querySelector("#today").scrollTop = 0;
	//scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

	const req = new XMLHttpRequest();
	req.addEventListener("load", reqListener);
	req.open("GET", "https://docs.google.com/spreadsheets/d/1pW2hj9qozqU1_ySxkmj9juo7350a-ADYyQIUW2G2nL0/edit?usp=sharing");
	req.send();

	document.querySelector("#more-info-link").addEventListener("click", function(){
		document.querySelector("#more-info").scrollIntoView({behavior: "smooth", block: "start"});
	});
});

function reqListener() {
  document.querySelector("#response").innerHTML = this.responseText;
}
