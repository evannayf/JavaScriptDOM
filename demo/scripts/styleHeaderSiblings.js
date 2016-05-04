function styleHeaderSiblings() {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName('h1');
    var elem;
    for (var i = 0; i < headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling);
        console.log(elem.className);
        /*elem.style.fontWeight='bold';
         elem.style.fontSize='1.2em';*/
        addClass(elem,'intro');
        console.log(elem.className);
        addClass(elem,'test');
        console.log(elem.className);
    }
}

function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}

function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += ' ';
        newClassName += value;
        element.className = newClassName;
    }
}

window.onload = styleHeaderSiblings;