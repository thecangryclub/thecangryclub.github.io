document.addEventListener("DOMContentLoaded", () => {

const brandFilter = document.getElementById("brandFilter")
const sizeFilter = document.getElementById("sizeFilter")
const collection = document.getElementById("collectionSection");
const sneakers = document.querySelectorAll(".sneaker")

function filterSneakers(){

const brand = brandFilter.value
const size = sizeFilter.value

sneakers.forEach(sneaker => {

const sneakerBrand = sneaker.dataset.brand
const sneakerSizes = sneaker.dataset.size.split(",")

let brandMatch = brand === "all" || sneakerBrand === brand
let sizeMatch = size === "all" || sneakerSizes.includes(size)

if(brandMatch && sizeMatch){
sneaker.style.display = "block"
}else{
sneaker.style.display = "none"
}

})

}

brandFilter.addEventListener("change", filterSneakers)
sizeFilter.addEventListener("change", filterSneakers)

})
