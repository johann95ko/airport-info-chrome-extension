function displayData(data){
	var message = "Airport: " + data.name + "<br />";
	message += "<h3>STATUS:</h3>";
	for (i in data.status){
		if(data.status[i] != "" ) message += i + ": " +data.status[i] + "<br />";
	}
	message += "<h3>WEATHER:</h3>";
	for (i in data.weather){
		if(i != "meta") message += i + ": " + data.weather[i] + "<br />";
	}
	$("#info").html(message);
}

$(document).ready(function(){
	$("#btn").click(function(){
		$("#info").html("Getting information...");
		var code = $("#airportCode").val();
		$.get("http://services.faa.gov/airport/status/" + code + "?format=application/json",
		'',
		function(data){
			displayData(data);
		}
	);
	});
});
	