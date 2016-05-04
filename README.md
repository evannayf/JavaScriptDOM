JavaScript DOM 编程艺术
======================
DOM相关
------
* 一份文档就是一棵节点树
* 节点分为不同的类型：元素节点、属性节点和文本节点
* getElementById 将返回一个对象，该对象对应着文档里的一个特定的元素节点
* getElementsByTagName 和 getElementsByclassName 将返回一个对象数组，它们分别对应着文档里的一组特定的元素节点
* 每个节点都是一个对象
* getAttribute 方法不属于 document 对象，只能通过元素节点对象调用
* setAttribute 同上
* childNodes 属性可以用来获取任何一个元素的所有子元素，它是一个包含这个元素全部子元素的数组
* nodeType 属性，元素节点1，属性节点2，文本节点3
* nodeValue 属性用来得到或设置一个节点的值,但是元素里的文本是另一种节点，元素的第一个子节点
* firstChild 等价于 childNodes[0]
* lastChild 代表 childNodes 数组的最后一个元素


createElement
-------------
`document.createElement(*nodeName*)`

appendChild
-----------
`parent.appendChild(*child*)`

>test.html

	<div id='testdiv'></div>

>添加一个p元素节点，并把这个节点作为div元素节点的一个子节点。

>1. 创建一个新的元素；
>2. 把这个元素插入节点树。

	var para = document.createElement('p');
	var testdiv = document.getElementById('testdiv');
	testdiv.appendChild(para);

createTextNode
--------------
`document.createTextNode(text)`

>下面的这条语句将会创建出一个内容为 “Hello World” 文本节点。

	var txt = document.createTextNode('Hello World');
	para.appendChild(txt);

>也可以用来连接尚未成为文档树一部分的节点。

insertBefore
------------
`parentElement.insertBefore(newElement,targetElement)`

1. 新元素：需要插入的元素 (*newElement*)。
2. 目标元素：想将新元素插入到哪个元素 (*targetElement*) 之前。
3. 父元素：目标元素的父元素 (*parentElement*)。

*虽然DOM本身没有提供insertAfter方法，但它确实提供了把一个节点插入到另一个节点之后所需的所有工具。我们完全可以利用已有的DOM方法和属性编写一个insertAfter函数。*

	function insertAfter(newElement,targetElement) {
		var parent = targetElement.parentNode;
		if (parent.lastChild == targetElement) {
			parent.appendChild(newElement);
		} else {
			parent.insertBefore(newElement,targetElement.nextSibling);
		}
	}


检索和添加信息
------------
>在需要对文档里的现有信息进行检索时，以下DOM方法最有用

* getElementById
* getElementsByTagName
* getAttribute

>在需要把信息添加到文档里去时，以下DOM方法最有用

* createElement
* createTextNode
* appendChild
* insertBefore
* setAttribute	 

CSS-DOM
-------
>如何得到和设置style对象的各种属性，style对象本身是文档中的每个元素节点都具备的属性。
>
>style属性的最大限制是它不支持获取外部CSS设置的样式。