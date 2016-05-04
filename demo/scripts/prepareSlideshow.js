function prepareSlideshow() {
    var slideshow = document.createElement('div');
    slideshow.setAttribute('id', 'slideshow');
    var preview = document.createElement('img');
    preview.setAttribute('id', 'preview');
    preview.setAttribute('src', 'topics.gif');
    slideshow.appendChild(preview);
    var list = document.getElementById('linklist');
    insertAfter(slideshow, list);
    var links = list.getElementsByTagName('a');
    links[0].onmouseover = function () {
        moveElement('preview', -100, 0, 10);
    }
    links[1].onmouseover = function () {
        moveElement('preview', -200, 0, 10);
    }
    links[2].onmouseover = function () {
        moveElement('preview', -300, 0, 10);
    }
}
//window.onload = function () {
//    prepareSlideshow();
//}
addLoadEvent(prepareSlideshow);