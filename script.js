//localStorage.setItem("lp","value")

class Product{
    constructor(name, amount, price){
        this.name = name,
        this.amount= amount,
        this.price = price
    }
}


const tableDiv = document.getElementById("recipeView") // Div z tabelą i nagłówkiem

let recipeViewHeader = document.createElement("h1") 
recipeViewHeader.textContent="Paragorn 30-03-15/004"
recipeViewHeader.id="recipeName"
tableDiv.appendChild(recipeViewHeader)// Dodanie headera - Paragon...

let productTable = document.createElement("table")
productTable.id="mainTable"
productTable.className="table table-striped"
productTable.style="width:100%"
tableDiv.appendChild(productTable) // Dodanie tabeli do diva

let tableHeader=document.createElement("thead")
tableHeader.id="tableHeader"
productTable.appendChild(tableHeader) // Dodanie thead do tabeli


let tableRow = document.createElement("tr") // Pojedynczy table row dla headerów

let recipeViewHeader2 = document.createElement("h1") 
recipeViewHeader2.textContent="TEST"
tableDiv.appendChild(recipeViewHeader2)
var naglowki = ["LP", "Nazwa", "Ilość", "Cena","Suma"];

var thead = document.createElement('thead'); //Stworzenie thead

productTable.appendChild(thead);
thead.appendChild(tableRow)

for (var i=0; i<naglowki.length; i++) {  // Pętla tworząca nagłówki LP, Nazwa, Ilosć ...
    tableRow.appendChild(document.createElement("th")).
          appendChild(document.createTextNode(naglowki[i]));
}

var tbody = document.createElement("tbody")
tbody.id="productsValue"
productTable.appendChild(tbody)

var tt=document.createTextNode("tbody")
for(var i=0;i<5;i++){
    var row = tbody.insertRow(-1)
    for(var j=0;j<5;j++){
        var cell = row.insertCell(-1)
        cell.innerHTML= j.toString()
    }
}


const addDiv = document.getElementById("recipeAdd") // Div labelami
let addHeader = document.createElement("h2") 
addHeader.textContent="Nowa pozycja"
addDiv.appendChild(addDiv) // Dodanie napisu - "Nowa pozycja"

let nameLabel = document.createElement("label")
nameLabel.htmlFor="name"
nameLabel.innerHTML="Nazwa"
addDiv.appendChild(nameLabel)
let nameInput = document.createElement("input")
nameInput.type="text" 
nameInput.id="name"
addDiv.appendChild(nameInput)



