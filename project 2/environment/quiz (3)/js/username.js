

function getPreviouslyEnteredName(username){
	var usernamecookie = Cookies.get("quizPastUsernames");
	var name = false;
	if(usernamecookie){
		usernames = usernamecookie.split("\r\n");
		usernames.forEach(el => {
			console.log("past username:" + el);
			var elSplit = el.split("\t"); // 2 elements separated by tab: the first is the username, the second is the name associated
			if(elSplit[0]==username) name=elSplit[1];
		});
	}
	return name;
}




function addNameToUsername(username,name){
	var usernamecookie = Cookies.get("quizPastUsernames");
	if(!usernamecookie) usernamecookie = ""; 
	else usernamecookie += "\r\n";
	Cookies.set("quizPastUsernames",usernamecookie + username + "\t" + name);
}