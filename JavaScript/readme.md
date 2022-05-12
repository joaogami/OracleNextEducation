## JavaScript

~~~javascript
var paciente = document.querySelector("#primeiro-paciente");
var tdpeso = paciente.querySelector(".info-peso")
var peso = tdpeso.textContent;
~~~
O comando <code>document.querySelector("")</code> busca dados na classe,id ou objeto especificado dentro das aspas.

O comando tdpeso busca dentro das tags já buscadas em paciente.

Por fim o variável.textcontent remove as tags do texto exibindo apenas o conteúdo.