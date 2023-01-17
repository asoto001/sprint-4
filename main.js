const btnTheMost = document.querySelector('.theMost-section__button');
const btnDeals = document.querySelector('.deals-section__button');
const btnUbication = document.querySelector('.ubication-modal-container__btn-search');
const modalUbiaction = document.querySelector('.ubication-modal-container');
const ubicationClose = document.getElementById('btnClose');
const productClose = document.querySelector('.product-modal__btn-close')
const btnUbicationSearch = document.querySelector('.navbar-container__btn-ubication')
const productModal = document.querySelector('.product-modal');
const cartModal = document.querySelector('.modal-cart');
const btnCart =document.querySelector('.navbar-container__btn-cart');
const emptyCartClose = document.querySelector('.modal-cart__btn-close')
const fullCartBtnClose = document.querySelector('.full-modal-cart__btn-close')
const fullCartModal = document.querySelector('.full-modal-cart')
const navbar = document.querySelector('.navbar-container');
const header = document.querySelector('.header-container');
const dealSection = document.querySelector('.deals-section');
const mostSection = document.querySelector('.theMost-section');
const payBtn = document.querySelector('.full-modal-cart__pay-div')
const paySection = document.querySelector('.pay-section');
const goBackBtn = document.querySelector('.pay-section__btn-back')
const dealSectionContainer = document.querySelector('.deals-section__cards-container');
const mostSectionContainer = document.querySelector('.theMost-section__cards-conteiner');

cartModal.classList.add('hidden');
productModal.classList.add('hidden');
modalUbiaction.classList.add('hidden');
fullCartModal.classList.add('hidden');
paySection.classList.add('hidden')


 btnCart.addEventListener('click', () => {
  //cartModal.classList.remove('hidden')
  fullCartModal.classList.remove('hidden')
})

emptyCartClose.addEventListener('click', () => {
    cartModal.classList.add('hidden')
})

btnUbicationSearch.addEventListener('click', (e) => {
    modalUbiaction.classList.remove('hidden');
})

ubicationClose.addEventListener('click', () => {
    modalUbiaction.classList.add('hidden');
})

btnDeals.addEventListener('click', () => {
    productModal.classList.remove('hidden')
})

productClose.addEventListener('click', () => {
    productModal.classList.add('hidden');
})

fullCartBtnClose.addEventListener('click',() => {
    fullCartModal.classList.add('hidden')
})

payBtn.addEventListener('click', () => {
    fullCartModal.classList.add('hidden')
    mostSection.classList.add('hidden')
    dealSection.classList.add('hidden')
    navbar.classList.add('hidden')
    header.classList.add('hidden')
    paySection.classList.remove('hidden')
})

goBackBtn.addEventListener('click', () => {
    
    mostSection.classList.remove('hidden')
    dealSection.classList.remove('hidden')
    navbar.classList.remove('hidden')
    header.classList.remove('hidden')
    paySection.classList.add('hidden')
})

// fullCartModal.classList.add('hidden')
//     mostSection.classList.add('hidden')
//     dealSection.classList.add('hidden')
//     navbar.classList.add('hidden')
//     header.classList.add('hidden')
//     paySection.classList.remove('hidden')

// llamamientoApis

const urlDiscount =  'http://localhost:3000/discountProducts'
const urlPorduct =  'http://localhost:3000/nonDiscountProducts'
const urlLocation = 'http://localhost:3000/locations'

let discountProducts = []
let nonDiscountProducts = []
let location = []

const renderDiscountProducts = (disData) => {
    discountProducts = disData;
    dealSectionContainer.innerHTML = '';
    disData.forEach((discountProducts) => {
        dealSectionContainer.innerHTML+= `
        <article class="deals-section__cards-article">
                    <h3>${discountProducts.descuento} dto.</h3>
                    <figure><img src=${discountProducts.img} alt=""></figure>
                    <div>
                        <p >$${discountProducts.discounted}/kg</p>
                        <p class="deals-section__price-discuented">$${discountProducts.original}/kg</p>
                    </div>
                    <p>${discountProducts.name}</p>
                    <button class="deals-section__button">Agregar</button>
                </article>
        `
        
    });

}

const renderNonDiscountProducts = (nonData) => {
    nonDiscountProducts = nonData;
    mostSectionContainer.innerHTML = '';
    nonData.forEach((nonDiscountProducts) => {
      mostSectionContainer.innerHTML += `
        <article class="theMost-section__cards-article">
            <figure><img src=${nonDiscountProducts.img} alt=""></figure>
            <div>
                <h3>$${nonDiscountProducts.original}</h3>
                <p class="theMost-section__name">${nonDiscountProducts.name}</p>
                <p class="theMost-section__weight">${nonDiscountProducts.peso}g ($0.6/gr)</p>
            </div>
      
            <button class="theMost-section__button">Agregar</button>
        </article>
      ` 
    })
}

const renderLocations = (locationData) => {
    location = locationData;
    
}

const discountedProducts = async () => {
    const disResponse = await fetch(urlDiscount)
    const disData = await disResponse.json()
    renderDiscountProducts(disData);
}

const nonDiscountedProducts = async () => {
    const nonResponse = await fetch(urlPorduct)
    const nonData  = await nonResponse.json()
    renderNonDiscountProducts(nonData);
}

const locations = async () => {
    const locationResponse = await fetch(urlLocation)
    const locationData = await locationResponse.json()
    renderLocations(locationData);
}

document.addEventListener('DOMContentLoaded', () => {
  discountedProducts();
  nonDiscountedProducts();
  locations();
})


  
  