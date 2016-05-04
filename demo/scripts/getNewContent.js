function getNewContent() {
	var request = getHTTPObject();
	if (request) {
		request.open('GET','example.txt',true);
		request.onreadystatechange = function() {
			if (request.readystate == 4) {
				var para = document.createElement('p');
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};
		request.send('');
	} else {
		alert('Sorry, your browser doesn\'t support XMLHttpRequest');
	}
}

window.onload = getNewContent();