

function submit(){
	
	var error = false;
	var destinationLink = "";
	
	$(".error").remove();
	$("#output").removeClass("with-results");
	$("#output").html("");
	
	var color = $("#question-fields > div:first-child input").val().trim();
	var number = $("#question-fields > div:nth-child(2) input").val().trim();
	var foodsArray = ['Pizza', 'Hamburger', 'Hotdog'];
		
	if(color.length == 0){ 
		$("#question-fields > div:first-child").append("<div class='error'>Please type a color name</div>");
		error = true;
	}
	if(number.length == 0){
		$("#question-fields > div:nth-child(2)").append("<div class='error'>Please type a number between 1-3</div>");
		error = true;
	}
	else {	
		switch(number){
			case '1':
			case '2':
			case '3':
				destinationLink = foodsArray[number] + ".html?color=" + encodeURI(color);
				break;
			default:
				error = true;
				$("#question-fields > div:nth-child(2)").append("<div class='error'>Please type a number between 1-3</div>");
				break;			
		}
	}
	
	if(error) return;
	
	setTimeout( () => {	
		$("#output").addClass("with-results");
		$("#output").html("See results on the <a href='" + destinationLink + "'>Next page</a>");
	}, 300);

}



function printMessageOnResultPage(food){
	var color = null;
	var paramIndex = location.href.indexOf("?color");
	if(paramIndex > 0){
		var valueIndex = location.href.indexOf("=",paramIndex) + 1;
		color = location.href.substring(valueIndex);
		if(color) $("#result-message").html("I see your fav color is <span>" + color + "</span>, mine is blue, here is a pic of <span>" + food + "</span>");
	}
	if(!color) $("#result-message").html("Here is a pic of <span>" + food + "</span>");
} 





