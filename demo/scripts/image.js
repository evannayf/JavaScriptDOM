window.onload = function () {
	preparePlaceholder();
	openPic();
}
// addLoadEvent(openPic);
// addLoadEvent(preparePlaceholder);
// addLoadEvent(test);

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		oldonload();
		func();
	}
}

function showPic(whichpic) {
	var source = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',source);
	if (whichpic.getAttribute('title')) {
		var text = whichpic.getAttribute('title');
	} else {
		var text = '';
	}
	var description = document.getElementById('description');
	if (description.firstChild.nodeType == 3) {
		description.firstChild.nodeValue = text;
	}
	return false;
}

function openPic() {
	if (!document.getElementById || !document.getElementsByTagName || !document.getElementById('imageList')) return false;
	var list = document.getElementById('imageList');
	var links = list.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return showPic(this);
		}
	}
}

function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode;
	// console.log(parent)
	if (parent.lastChild === targetElement) {
		parent.appendChild(newElement);
		// console.log('1')
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
		// console.log('2')
	}
}

// function test() {
// 	var txt = document.createElement('p');
// 	var info = document.createTextNode('testtest');
// 	var imageList = document.getElementById('imageList');
// 	imageList.parentNode.insertBefore(txt,imageList);
// 	insertAfter(txt,imageList);
// }

function preparePlaceholder() {
	if (!document.createElement || !document.createTextNode || !document.getElementById || !document.getElementById('imageList')) return false;
	var placeholder = document.createElement('img');
	var description = document.createElement('p');
	var desctext = document.createTextNode('Choose an image');
	var imageList = document.getElementById('imageList');
	placeholder.setAttribute('id','placeholder');
	placeholder.setAttribute('src','images/placeholder.jpg');
	placeholder.setAttribute('alt','placeholder image');
	description.setAttribute('id','description');
	description.appendChild(desctext);
	console.log(placeholder);
	console.log(description);
	insertAfter(placeholder, imageList);
	insertAfter(description, placeholder);	
	// document.body.appendChild(placeholder);
	// document.body.appendChild(description);
}
