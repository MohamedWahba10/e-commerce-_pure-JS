let feature_products = document.querySelector(".feature-products");
let Hoodies = document.querySelector("#Hoodies");
let my_hoodies = document.querySelector("#my_hoodies");
let T_Shirts = document.querySelector("#T_Shirts")
let my_tshirts = document.querySelector("#my_tshirts")
let Shoes = document.querySelector("#Shoes")
let my_shoes = document.querySelector("#my_shoes")
let button = document.querySelector(".button")
let products = [];
let productContainer = document.querySelector("#productContainer")
let carticon = document.querySelector("#carticon")
let Abouticon = document.querySelector("#Abouticon")
let about = document.querySelector("#about")
let home = document.querySelector("#home")
let homeicon = document.querySelector("#homeicon")
let contact = document.querySelector("#contact")
let contacticon = document.querySelector("#contacticon")




window.onload = function () {
  carticon.addEventListener("click", function (event) {
    event.preventDefault();  // Prevent the page from refreshing

    if (products.length === 0) {

      showEmptyCartMessage();
    } else {
      hideAllSections();
      productContainer.style.display = "block";
      productContainer.classList.remove('hide');
      about.style.display = "none"
      home.style.display = "none"
    }
  });
};

function showEmptyCartMessage() {
  console.log("Showing empty cart message");
  alert("Your cart is empty!");
}

function hideAllSections() {
  let sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('hide');
  });
}
Hoodies.addEventListener("click", function () {

  my_hoodies.style.display = "block";
  feature_products.style.display = "none";
  my_tshirts.style.display = "none"
  my_shoes.style.display = "none"
});


T_Shirts.addEventListener("click", function () {
  my_tshirts.style.display = "block"
  my_hoodies.style.display = "none";
  feature_products.style.display = "none";
  my_shoes.style.display = "none"

});

Shoes.addEventListener("click", function () {

  my_shoes.style.display = "block"
  my_tshirts.style.display = "none"
  my_hoodies.style.display = "none";
  feature_products.style.display = "none";
})








function addProduct(event) {
  let description = event.target.parentElement.querySelector('h3:first-of-type').innerText;
  let price = event.target.parentElement.querySelector('h3:last-of-type').innerText;
  let imageSrc = event.target.parentElement.parentElement.querySelector('img').src;

  // Check if the product is already in the cart
  let existingProduct = products.find(product => product.description === description && product.price === price);

  if (existingProduct) {
    // If the product is already in the cart, increase its quantity
    existingProduct.quantity += 1;
  } else {
    // If the product is not in the cart, add it as a new product
    let product = {
      description: description,
      price: price,
      imageSrc: imageSrc,
      quantity: 1  // Initialize quantity to 1 for new products
    };
    products.push(product);
  }

  displayProducts();
  alert("Product added successfully!");
}


function displayProducts() {
  let productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = `
    <div class="cartBox" style="background-color: (187, 212, 232); margin-left: 80px; width: 200px; margin-top: 20px;  margin-top:40px">
      <h1>Cart Shop</h1>
      <p>total cart items: ${products.length}</p>
  `;

  products.forEach((product, index) => {
    productContainer.innerHTML += `
      <div class="cartconatiner" style="background-color: (187, 212, 232); margin-left:80px;width: 1000px; display: flex; justify-content: space-between; margin-top:20px">
        <div class="left-side">
          <div class="innnerleftside" style="display: flex;">
            <div class="left1" style="width: 100px;">
              <img src="${product.imageSrc}" alt="" style="width: 100%;">
            </div>
            <div class="left2" style="margin-left: 10px;">
              <h3>${product.description}</h3>
              <p>loreamLorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>${product.price}</p>
            </div>
          </div>
        </div>
        <div class="right-side" style="display:flex">
          <button class="remove-btn" onclick="updateQuantity(${index}, -1)">-</button>
          <p id="counter">${product.quantity}</p>
          <button class="add-btn" onclick="updateQuantity(${index}, 1)">+</button>
        </div>
      </div>
    `;
  });

  productContainer.innerHTML += `
    <div class="actions";>
      <button class="go-to-checkout-btn">Go to checkout</button>
      <button class="clear-cart-btn" onclick="clearCart()">Clear</button>
    </div>
  </div>
  `;
}

function updateQuantity(index, change) {
  // Update the quantity of the product at the specified index
  products[index].quantity += change;

  // Ensure the quantity is not less than 1
  if (products[index].quantity < 1) {

    products.splice(index, 1);
  }

  displayProducts();
}

function clearCart() {

  products = []
  displayProducts()
}


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function startSlideshow() {
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

showSlide(currentSlide);
startSlideshow();


//______________________________ABOUT___________________________________


contacticon.addEventListener("click", function () {
  about.style.display = "none";
  home.style.display = "none";
  productContainer.style.display = "none";
  contact.style.display = "block"

})



Abouticon.addEventListener("click", function () {
  about.style.display = "block"
  home.style.display = "none"
  productContainer.style.display = "none";
  contact.style.display = "none"

})

homeicon.addEventListener("click", function () {
  about.style.display = "none"
  home.style.display = "block"
  productContainer.style.display = "none";
  contact.style.display = "none"

})


//______________________________contact___________________________________





function validateAndSubmit() {
  var name = document.getElementById('contact-name').value.trim();
  var email = document.getElementById('contact-email').value.trim();
  var phone = document.getElementById('contact-phone').value.trim();
  var subject = document.getElementById('contact-subject').value.trim();
  var message = document.getElementById('contact-message').value.trim();

  // Reset previous errors
  document.getElementById('name-error').innerText = '';
  document.getElementById('email-error').innerText = '';
  document.getElementById('phone-error').innerText = '';
  document.getElementById('subject-error').innerText = '';
  document.getElementById('message-error').innerText = '';

  if (!name) {
    document.getElementById('name-error').innerText = 'Name is required';
    return;
  }

  if (!email) {
    document.getElementById('email-error').innerText = 'Email is required';
    return;
  } else if (!isValidEmail(email)) {
    document.getElementById('email-error').innerText = 'Enter a valid email address';
    return;
  }

  if (!phone) {
    document.getElementById('phone-error').innerText = 'Phone is required';
    return;
  } else if (!isValidPhone(phone)) {
    document.getElementById('phone-error').innerText = 'Enter a valid phone number';
    return;
  }

  if (!subject) {
    document.getElementById('subject-error').innerText = 'Subject is required';
    return;
  }

  if (!message) {
    document.getElementById('message-error').innerText = 'Message is required';
    return;
  }

  // All validations passed, you can submit the form or perform further actions
  alert('Form submitted successfully!');
  // Perform further actions like sending the form data to the server.
}

function isValidEmail(email) {
  // Simple email validation, you can customize based on your requirements
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  // Phone number validation: 11 digits, starts with 011, 010, 012, or 015
  var phoneRegex = /^(011|010|012|015)\d{8}$/;
  return phoneRegex.test(phone);
}