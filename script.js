var tmp = document.createElement("DIV");
tmp.innerHTML = '<h1>Hello World</h1>'; // text length = 11 - Hello World
var text = (tmp.textContent || tmp.innerText || "").length;

console.log(text);
