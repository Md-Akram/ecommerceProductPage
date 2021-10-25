// mobile menu

const ham = document.getElementById('hamburger')
const mobileNav = document.querySelector('.mobile-nav')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close')

ham.addEventListener('click', () => {
  mobileNav.classList.add('expand')
  overlay.classList.add('expand')
})

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('expand')
  overlay.classList.remove('expand')
})

window.addEventListener('scroll', () => {
  if (mobileNav.classList.contains('expand')) {
    mobileNav.classList.remove('expand')
    overlay.classList.remove('expand')
  }
})

// cart

const cart = document.querySelector('#cart')
const basket = document.querySelector('.basket')

cart.addEventListener('click', () => {
  basket.classList.toggle('basket-expand')
})

// Image

const product = document.getElementById('product')
const previousBtn = document.querySelector('.previous-btn')
const nextBtn = document.querySelector('.next-btn')

let i = 1

previousBtn.addEventListener('click', () => {
  i--
  updateImg()
})
nextBtn.addEventListener('click', () => {
  i++
  updateImg()
})

function updateImg() {
  if (i < 1) {
    i = 4
  } else if (i > 4) {
    i = 1
  }

  product.setAttribute('src', `images/image-product-${i}.jpg`)
}

// Quantity
const plus = document.querySelector('.plus-btn')
const minus = document.querySelector('.minus-btn')
const num = document.querySelector('.num')
let q = 0

plus.addEventListener('click', () => {
  q++
  updateQuantity()
})
minus.addEventListener('click', () => {
  q--
  updateQuantity()
})

function updateQuantity() {
  if (q < 0) {
    q = 0
  }
  num.textContent = q
}

// Add to Cart

const addToCart = document.querySelector('.add-btn')
const cartDetails = document.querySelector('.basket-middle')
const productName = document.getElementById('product-name').textContent
const productPrice = document.getElementById('product-price').textContent

let uniqueIds = []

addToCart.addEventListener('click', () => {
  const uniqueId = Math.floor(Math.random() * 100)

  cartDetails.innerHTML += `
  <div class="basket-middle-top" id='${uniqueId}'>
                <img
                  src="images/image-product-${i}-thumbnail.jpg"
                  alt="product-img"
                />
                <div class="details">
                 <p>${productName}</p>
                  <p>$${productPrice}*${q} <span>$${productPrice * q}</span></p>
                </div>
                <div class="bin">
                  <img src="images/icon-delete.svg" alt="delete" />
                </div>
                </div>
                `

  // Removing from cart
  let bins = document.querySelectorAll('.bin')
  bins.forEach((bin) => {
    bin.addEventListener('click', () => {
      bin.parentNode.remove()
    })
  })
})
