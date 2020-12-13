// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContanier = document.querySelector('div.header-container')

headerContanier.appendChild(Header())

function Header() {
const divHeader = document.createElement('div')
const dateSpan = document.createElement('span')
const titleHeader = document.createElement('h1')
const  tempSpan  = document.createElement('span')

divHeader.classList.add('header')
dateSpan.classList.add('date')
tempSpan.classList.add('temp')

dateSpan.textContent = "MARCH 28, 2020"
titleHeader.textContent = "Lambda Times"
tempSpan.textContent = "98°"

divHeader.appendChild(dateSpan)
divHeader.appendChild(titleHeader)
divHeader.appendChild(tempSpan)

return divHeader
}
