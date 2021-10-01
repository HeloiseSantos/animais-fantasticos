// Busca elemento pelo id
const animais = document.getElementById("animais");

// Busca elemento pela classe
// Sempre retorna um HTMLCollection - parece com um array com os elementos
const gridSection = document.getElementsByClassName("grid-section")
const contato = document.getElementsByClassName("contato")

// Busca elemento pelo nome da Tag
// Sempre retorna um HTMLCollection - parece com um array com os elementos
const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento que estiver de acordo com o seletor CSS
const primeiroUl = document.querySelector("ul");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
// Também podemos realizar uma busca novamente dentro de outra seleção
const navItem = primeiroUl.querySelector("li");

// Retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
const listas = document.querySelectorAll("ul");
// Podemos escolher qual item da NodeList retornar
// Exemplo: console.log(gridSection[1]);

// HTMLCollection vs NodeList
// Diferença nos métodos e propriedades de ambas. Além disso, a NodeList retornada com querySelectorAll é estática.

// Array-Like
// HTMLCollection e NodeList são array-like, parecem um array, mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList
const gridSectionItems = document.querySelectorAll(".grid-section");
gridSectionItems.forEach(function(gridItem, index, array) {
    gridItem.classList.add("azul");
    // console.log(index);
    // console.log(array);
});
// É possível transformar array-like em um array real, utilizando o método Array.from(gridSectionItems)

//EXERCÍCIOS
// Retorne no console todas as imagens do site
const imagensSite = document.querySelectorAll("img");
console.log(imagensSite);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const comecamComImagem = document.querySelectorAll("img[src^='./imagens/imagem']");
console.log(comecamComImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("[href^='#']");
console.log(linksInternos);

// Selecione o primeiro h3 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h3");
console.log(primeiroH2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll("p");
console.log(ultimoP[ultimoP.length - 1]);