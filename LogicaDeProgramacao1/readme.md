# Lógica de programação
## **Resumo**

Utilizarei este readme para resumir, consolidar e futuramente recordar os assuntos abordados no curso.

Neste curso o professor Flávio utiliza a linguagem javaScript para propor problemas e apresentar as funções lógicas da programação, segue alguns dos assuntos abordados e ao final um glossário com alguns termos que surgiram durante o curso.


### **Soma e Concatenação**
___
Utilizando o sinal de soma é possível realizar operações matemáticas e/ou a concatenação de *strings*.

~~~javascript
//soma
document.write(2 + 3);
//concatenação
document.write("texto" + 5 + "texto")
//OBS: Quando somamos string com número o sistema converte o número para string
~~~

### **Variáveis**
___
> Uma variável é um espaço na memória do computador destinado a um dade que é alterado durante a execução de um algoritmo.

Através da criação e a atribuição de um valor à variável é possível otimizar o programa permitindo que façamos alteração em todo o código modificando apenas a variável desejada.

~~~javascript
//variáveis podem armazenar números e/ou strings

var distância = 200
var cidade = "Betim - MG"
~~~

### **Funções**
___
>Uma função é um pedaço de código que faz alguma tarefa específica e pode ser chamado de qualquer parte do programa quantas vezes desejarmos. 

As funções permitem realizarmos uma serie de instruções a qualquer momento no decorrer do código e retornar um valor utilizando a tag *'return'* acompanhada do valor ou variável desejada.

A função pode ou não receber parâmetros.

~~~javascript
//Funções SEM parâmetro apenas realizarão o conteúdo da função.
function pulaLinha(){
    document.write("<br>");
    }
 
//Funções COM parâmetros realizarão o conteúdo da função considerando os parâmetros informados.

function imc(altura, peso){
    var imc = peso/(altura*altura);
    return imc
    }   
//OBS: é possíel passar mais de um parâmetro na mesma função
~~~

### **Condições**
___
>Uma condição realiza uma operação lógica e retorna *true* ou *false*.

Através da tag *'if( )'* é possivel realizar um teste lógico e se o resultado deste teste for verdadeiro ele executa os parâmetros dentro das chaves '{ }', caso seja falso podemos passar outro parâmetro com *'else'* ou ainda realizar mais testes com *'else if'*.

~~~javascript
//condição
if(idade <= 17){
    document.write("Você é menor de idade.");
} else if(idade = 18){
    document.write("Dezoitou !");
}
else{
   document.write("Você é maior de idade."); 
}
~~~
### **Repetições**
___
> Dentro da lógica de programação é uma estrutura que permite executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma condição ou com um contador.

Utilizando as tags *'while( )'* é possível realizar uma rotina repetidas vezes enquanto o valor de seu parâmetro (condição) for verdadeiro.

Já o *'for( )'* permite uma inicialização com atribuição ou declaração de variável, uma condição que será o teste lógico, e um incremento que geralmente é usado para atualizar a variável do contador.
~~~javaScript
//utilizando o while
    var n = 0;
while(n<3){
    alert(n) ;
    n++
}

//utilizando o for
for(var n = 0; n < 3; n++ ){
    alert(n);
}

~~~
### **Array**
___
> Seu principal objetivo é ser um espaço contínuo na memória para organizar e armazenar uma coleção de elementos.

Um array é capaz de armazenar uma série de dados os separando por índices, começando pelo índice 0. Para declarar um array é necessário incluir colchetes após a declaração da variável.

É possível retornar o valor armazenado no array de forma individual ou multiplos valores.

~~~javaScript
//declarando um array com valores pré atribuídos e exibindo o índice 0
var array [10, 5, 6, 3];
alert(array[0]);
//o array acompanhado do parâmetro length retorna a quantidade de ídices
for(n = 0; n < array.length; n++){
    alert("O valor armazenado no Índice " + n + " do array é " + array[n]);
}
//comando exibe todos os índices dos arrays
~~~


## Comandos utilizados
___
- alert: Exibe um pop-up com um conteúdo no navegador.
- break: Quebra uma repetição.
- button.onclick: Retorna uma função ao clicar no botão especificado.
- console.log: Exibe um valor no console.
- document.querySelector : Retorna o valor que corresponde ao grupo especificado de seletores.
- document.write: Exibe um texto em html.
- input.focus: Seleciona o campo de input automáticamente.
- Math.random: Retorna um número decimal aleatório.
- Math.round: Arredonda números decimais.
- parseInt: Converte um algarismo armazenado como *string* para número.
- prompt: Exibe um pop-up com um input para o usuário;
## Glossário
---
- input: Utilizado para instruir o computador a aguardar através do teclado
- NaN: Abreviação de *Not a Number* ou traduzido como,não é um número.
- String: Caracteres, geralmente utilizada para representar palavras, frases ou textos de um programa.
- Undefined: Valor indefinido.