function positionMessage(){
    var elem=document.getElementById('message');
    elem.style.position='absolute';
    elem.style.left='50px';
    elem.style.top='100px';
    moveElement('message',125,25,50);
    var elem=document.getElementById('message2');
    elem.style.position='absolute';
    elem.style.left='50px';
    elem.style.top='50px';
    moveElement('message2',125,125,50);
}
window.onload=function(){
    positionMessage();
    moveElement();
}