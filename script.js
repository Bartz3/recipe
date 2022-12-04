//localStorage.setItem("lp","value")
const table = document.querySelector('table')
const totalSum = document.querySelector('#total')
const inputName = document.querySelector('#name')
const inputAmount = document.querySelector('#amount')
const inputPrice = document.querySelector('#price')
const addBtn = document.querySelector('#submit')

const editBtn = document.querySelector('#editBtn')
const editName = document.querySelector('#editName')
const editAmount = document.querySelector('#editAmount')
const editPrice = document.querySelector('#editPrice')

let productsArray = []
let sum = 0

class Product {
	constructor(name, amount, price) {
		;(this.name = name), (this.amount = amount), (this.price = price)
	}
}

function printProducts() {
	const oldTableBody = document.querySelector('tbody')
	const newTableBody = document.createElement('tbody')
	newTableBody.setAttribute('class', 'table-group-divider')
	oldTableBody.replaceWith(newTableBody)

	for (let i = 0; i < productsArray.length; i++) {
		const newRow = document.createElement('tr')
		const newHeadingCell = document.createElement('th')
		const newNameCell = document.createElement('td')
		const newAmountCell = document.createElement('td')
		const newPriceCell = document.createElement('td')
		const newSumCell = document.createElement('td')
		const newDeleteButton = document.createElement('button')
		const newEditButton = document.createElement('button')
		const newUppButton = document.createElement('button')
		const newDownButton = document.createElement('button')

		newHeadingCell.textContent = i + 1
		newNameCell.textContent = productsArray[i].name
		newAmountCell.textContent = productsArray[i].amount + ' szt'
		newPriceCell.textContent = parseFloat(productsArray[i].price).toFixed(2) + ' zł'
		newSumCell.textContent = parseFloat(productsArray[i].amount * productsArray[i].price).toFixed(2) + ' zł'

		newDeleteButton.textContent = 'Usuń'
		newDeleteButton.onclick = function () {
			deleteProduct(productsArray, i)
		}
		newEditButton.textContent = 'Edytuj'
		newEditButton.onclick = function () {
			displaySelectedRow(productsArray[i])
			editedElement = i
		}

		newUppButton.textContent = 'Góra'
		newUppButton.onclick = function () {
			moveElemet(productsArray, i, 1)
		}
		newDownButton.textContent = 'Dół'
		newDownButton.onclick = function () {
			moveElemet(productsArray, i, 0)
		}

		newRow.setAttribute('scope', 'col')
		newRow.append(newHeadingCell)
		newRow.append(newNameCell)
		newRow.append(newAmountCell)
		newRow.append(newPriceCell)
		newRow.appendChild(newSumCell)
		newRow.append(newDeleteButton)
		newRow.append(newEditButton)
		if (i === 0) {
			newRow.append(newDownButton)
		} else if (i === productsArray.length - 1) {
			newRow.append(newUppButton)
		} else {
			newRow.append(newUppButton)
			newRow.append(newDownButton)
		}

		newTableBody.appendChild(newRow)
	}

	sumTotal()
}

function sumTotal() {
	sum = 0
	for (let i = 0; i < productsArray.length; i++) {
		sum += productsArray[i].amount * productsArray[i].price
	}

	totalSum.textContent = sum.toFixed(2) + ' zł'
}

function loadData() {
	if (localStorage.getItem('data') !== null) {
		productsArray = JSON.parse(localStorage.getItem('data'))
		printProducts()
		sumTotal()
	}
}

function addProduct() {
	if (inputName.value != '' && inputAmount.value != '' && inputPrice.value != '') {
		const product = new Product(inputName.value, inputAmount.value, inputPrice.value)
		productsArray.push(product)
		localStorage.setItem('data', JSON.stringify(productsArray))
		printProducts()
		inputName.value = ''
		inputAmount.value = ''
		inputPrice.value = ''
	} else {
		alert('Wprowadź potrzebne dane!')
	}
}

function deleteProduct(productsArray, delElementIndex) {
	let confirmAction = confirm('Tej operacji nie można cofnąć!')
	if (confirmAction) {
		productsArray.splice(delElementIndex, 1)
		localStorage.setItem('data', JSON.stringify(productsArray))
		printProducts()
		alert('Produkt został usunięty.')
	} else {
		//alert("Produkt nie został usunięty.")
	}
}

function displaySelectedRow(editElement) {
	editName.value = editElement.name
	editAmount.value = editElement.amount
	editPrice.value = editElement.price
}

function editElement() {
	if (editName.value != '' && editAmount.value != '' && editPrice.value != '' && editedElement !== -1) {
		const editedProduct = new Product(editName.value, editAmount.value, editPrice.value)
		productsArray.splice(editedElement, 1, editedProduct)
		localStorage.setItem('data', JSON.stringify(productsArray))
		printProducts()
		editName.value = ''
		editAmount.value = ''
		editPrice.value = ''
		editedElement = -1
	} else {
		alert('Wprowadź potrzebne dane! 1 ')
	}
}

function moveElemet(productsArray, editElementIndex, buttonVar) {
	if (buttonVar === 1) {
		const pomValue = productsArray[editElementIndex]
		productsArray.splice(editElementIndex, 1)
		console.log(productsArray)
		productsArray.splice(editElementIndex - 1, 0, pomValue)
	} else if (buttonVar === 0) {
		const pomValue = productsArray[editElementIndex]
		productsArray.splice(editElementIndex, 1)
		console.log(productsArray)
		productsArray.splice(editElementIndex + 1, 0, pomValue)
	}
	localStorage.setItem('data', JSON.stringify(productsArray))
	printProducts()
}

loadData()
addBtn.addEventListener('click', addProduct)
editBtn.addEventListener('click', editElement)
