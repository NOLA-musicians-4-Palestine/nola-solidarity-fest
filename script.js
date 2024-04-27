document.addEventListener("DOMContentLoaded", (event) => {
	//document.querySelector("#today").scrollTop = 0;
	//scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

	const req = new XMLHttpRequest();
	req.addEventListener("load", reqListener);
	req.open("GET", "https://docs.google.com/spreadsheets/d/1pW2hj9qozqU1_ySxkmj9juo7350a-ADYyQIUW2G2nL0/export?format=tsv&gid=0");
	req.send();

	document.querySelector("#more-info-link").addEventListener("click", function(){
		document.querySelector("#more-info").scrollIntoView({behavior: "smooth", block: "start"});
	});
});

function reqListener() {
	// get the spreadsheet
	let row_length = this.response.split("\t").findIndex((s) => s.includes("\r\n")) + 1;
	let flat_data = this.responseText.split(/\t|\r\n/gm); // trim all the newlines and tabs

	let data = [];

	// make the data a 2d array
	while(flat_data.length > 0){ data.push(flat_data.splice(0, row_length)); }

	let headings = data.splice(0,1)[0]; // also removes the headings from the data
	let structured_data = [];

	data.forEach(function(row, i, d) {
		// row is an array of cells

		// pair a cell with it's heading as the object key
		let row_as_obj = {};
		row.forEach(function(cell, j, r) {
			row_as_obj[headings[j].toLowerCase()] = cell;
		});

		structured_data.push(row_as_obj);
	});

	console.log(structured_data);

	// now that i've got the data in a structured array
	// duplicate the template event and and fill it in for each element in the array
	structured_data.forEach(function(event){
		let new_event = document.querySelector("#event-template").cloneNode(true);

		new_event.querySelector(".event-name").innerText = event.name;
		new_event.querySelector(".event-location").innerText = event.location;
		new_event.querySelector(".event-date").innerText = event.date;
		new_event.querySelector(".event-time").innerText = event.time;
		new_event.querySelector(".event-flyer-link").href = event.flyer;
		new_event.removeAttribute('id');

		document.querySelector("#schedule").appendChild(new_event);
	});


	//console.log(data);
  
}
