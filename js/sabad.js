const decreaseButton = document.getElementById('decrease');
        const increaseButton = document.getElementById('increase');
        const quantityElement = document.getElementById('quantity');
        const addToCartButton = document.getElementById('addToCart');
        const cartTable = document.getElementById('cartTable');
        const totalPriceElement = document.getElementById('totalPrice');

        let quantity = 1;
        const cart = [];

        decreaseButton.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
            }
        });

        increaseButton.addEventListener('click', () => {
            quantity++;
            quantityElement.textContent = quantity;
        });

        addToCartButton.addEventListener('click', () => {
            const productName = ' جوجه کباب'; // نام محصول به جای ثابت می‌توانید از مقادیر ورودی استفاده کنید
            const productPrice = 90000; // قیمت واحد محصول به تومان

            const existingProductIndex = cart.findIndex((product) => product.name === productName);

    if (existingProductIndex !== -1) {
                cart[existingProductIndex].quantity += quantity;
 } else {
                const product = {
                    name: productName,
                    price: productPrice,
                    quantity: quantity,
                };
                cart.push(product);
            }

            quantity = 1;
            quantityElement.textContent = quantity;

            updateCart();
        });
 const product2DecreaseButton = document.getElementById('product2Decrease');
const product2IncreaseButton = document.getElementById('product2Increase');
const product2QuantityElement = document.getElementById('product2Quantity');
const addToCartProduct2Button = document.getElementById('addToCartProduct2');

let product2Quantity = 1;

product2DecreaseButton.addEventListener('click', () => {
    if (product2Quantity > 1) {
        product2Quantity--;
        product2QuantityElement.textContent = product2Quantity;
    }
});

product2IncreaseButton.addEventListener('click', () => {
    product2Quantity++;
    product2QuantityElement.textContent = product2Quantity;
});

const product2Name = ' کباب کوبیده';
const product2Price = 160000; // قیمت واحد محصول 2 به تومان


addToCartProduct2Button.addEventListener('click', () => {
    const existingProduct2Index = cart.findIndex((product) => product.name === product2Name);

    if (existingProduct2Index !== -1) {
        cart[existingProduct2Index].quantity += product2Quantity;
    } else {
        const product2 = {
            name: product2Name,
            price: product2Price,
            quantity: product2Quantity,
        };
        cart.push(product2);
    }

    // تنظیم تعداد به مقدار اولیه یعنی 1
    product2Quantity = 1;
    product2QuantityElement.textContent = product2Quantity;

    updateCart();
});
const product3DecreaseButton = document.getElementById('product3Decrease');
const product3IncreaseButton = document.getElementById('product3Increase');
const product3QuantityElement = document.getElementById('product3Quantity');
const addToCartProduct3Button = document.getElementById('addToCartProduct3');

let product3Quantity = 1;

product3DecreaseButton.addEventListener('click', () => {
    if (product3Quantity > 1) {
        product3Quantity--;
        product3QuantityElement.textContent = product3Quantity;
    }
});

product3IncreaseButton.addEventListener('click', () => {
    product3Quantity++;
    product3QuantityElement.textContent = product3Quantity;
});

const product3Name = ' کباب برگ';
const product3Price = 180000; // قیمت واحد محصول 3 به تومان

addToCartProduct3Button.addEventListener('click', () => {
    const existingProduct3Index = cart.findIndex((product) => product.name === product3Name);

    if (existingProduct3Index !== -1) {
        cart[existingProduct3Index].quantity += product3Quantity;
    } else {
        const product3 = {
            name: product3Name,
            price: product3Price,
            quantity: product3Quantity,
        };
        cart.push(product3);
    }

    // تنظیم تعداد به مقدار اولیه یعنی 1
    product3Quantity = 1;
    product3QuantityElement.textContent = product3Quantity;

    updateCart();
});

const product4DecreaseButton = document.getElementById('product4Decrease');
const product4IncreaseButton = document.getElementById('product4Increase');
const product4QuantityElement = document.getElementById('product4Quantity');
const addToCartProduct4Button = document.getElementById('addToCartProduct4');

let product4Quantity = 1;

product3DecreaseButton.addEventListener('click', () => {
    if (product4Quantity > 1) {
        product4Quantity--;
        product4QuantityElement.textContent = product4Quantity;
    }
});

product4IncreaseButton.addEventListener('click', () => {
    product4Quantity++;
    product4QuantityElement.textContent = product4Quantity;
});

const product4Name = ' ماهی کباب';
const product4Price = 280000; // قیمت واحد محصول 3 به تومان

addToCartProduct4Button.addEventListener('click', () => {
    const existingProduct4Index = cart.findIndex((product) => product.name === product4Name);

    if (existingProduct4Index !== -1) {
        cart[existingProduct4Index].quantity += product4Quantity;
    } else {
        const product4 = {
            name: product4Name,
            price: product4Price,
            quantity: product3Quantity,
        };
        cart.push(product4);
    }

    // تنظیم تعداد به مقدار اولیه یعنی 1
    product4Quantity = 1;
    product4QuantityElement.textContent = product4Quantity;

    updateCart();
});
const product6DecreaseButton = document.getElementById('product6Decrease');
const product6IncreaseButton = document.getElementById('product6Increase');
const product6QuantityElement = document.getElementById('product6Quantity');
const addToCartProduct6Button = document.getElementById('addToCartProduct6');

let product6Quantity = 1;

product6DecreaseButton.addEventListener('click', () => {
    if (product6Quantity > 1) {
        product6Quantity--;
        product6QuantityElement.textContent = product6Quantity;
    }
});

product6IncreaseButton.addEventListener('click', () => {
    product6Quantity++;
    product6QuantityElement.textContent = product6Quantity;
});

const product6Name = ' سوژوک';
const product6Price = 360000; // قیمت واحد محصول 3 به تومان

addToCartProduct6Button.addEventListener('click', () => {
    const existingProduct6Index = cart.findIndex((product) => product.name === product6Name);

    if (existingProduct6Index !== -1) {
        cart[existingProduct6Index].quantity += product6Quantity;
    } else {
        const product6 = {
            name: product6Name,
            price: product6Price,
            quantity: product6Quantity,
        };
        cart.push(product6);
    }

    // تنظیم تعداد به مقدار اولیه یعنی 1
    product6Quantity = 1;
    product6QuantityElement.textContent = product6Quantity;

    updateCart();
});
const product7DecreaseButton = document.getElementById('product7Decrease');
const product7IncreaseButton = document.getElementById('product7Increase');
const product7QuantityElement = document.getElementById('product7Quantity');
const addToCartProduct7Button = document.getElementById('addToCartProduct7');

let product7Quantity = 1

product7DecreaseButton.addEventListener('click', () => {
    if (product7Quantity > 1) {
        product7Quantity--;
        product7QuantityElement.textContent = product7Quantity;
    }
});

product7IncreaseButton.addEventListener('click', () => {
    product7Quantity++;
    product7QuantityElement.textContent = product7Quantity;
});

const product7Name = 'کباب لبنانی ';
const product7Price = 290000; // قیمت واحد محصول 3 به تومان

addToCartProduct7Button.addEventListener('click', () => {
    const existingProduct7Index = cart.findIndex((product) => product.name === product7Name);

    if (existingProduct7Index !== -1) {
        cart[existingProduct7Index].quantity += product7Quantity;
    } else {
        const product7 = {
            name: product7Name,
            price: product7Price,
            quantity: product7Quantity,
        };
        cart.push(product7);
    }

    // تنظیم تعداد به مقدار اولیه یعنی 1
    product7Quantity = 1;
    product7QuantityElement.textContent = product7Quantity;

    updateCart();
});




const product5DecreaseButton = document.getElementById('product5Decrease');
const product5IncreaseButton = document.getElementById('product5Increase');
const product5QuantityElement = document.getElementById('product5Quantity');
const addToCartProduct5Button = document.getElementById('addToCartProduct5');

let product5Quantity = 1

product5DecreaseButton.addEventListener('click', () => {
    if (product5Quantity > 1) {
        product5Quantity--;
        product5QuantityElement.textContent = product5Quantity;
    }
});

product5IncreaseButton.addEventListener('click', () => {
    product5Quantity++;
    product5QuantityElement.textContent = product5Quantity;
});

const product5Name = ' کباب چنجه';
const product5Price = 320000; // قیمت واحد محصول 3 به تومان
addToCartProduct5Button.addEventListener('click', () => {
    const existingProduct5Index = cart.findIndex((product) => product.name === product5Name);

    if (existingProduct5Index !== -1) {
        cart[existingProduct5Index].quantity += product5Quantity;
    } else {
        const product5 = {
            name: product5Name,
            price: product5Price,
            quantity: product5Quantity,
        };
        cart.push(product5);
    }

    // تنظیم تعداد به مقدار اولیه یعنی 1
    product5Quantity = 1;
    product5QuantityElement.textContent = product5Quantity;

    updateCart();
});






const product8DecreaseButton = document.getElementById('product8Decrease');
const product8IncreaseButton = document.getElementById('product8Increase');
const product8QuantityElement = document.getElementById('product8Quantity');
const addToCartProduct8Button = document.getElementById('addToCartProduct8');

let product8Quantity = 1

product8DecreaseButton.addEventListener('click', () => {
    if (product8Quantity > 1) {
        product8Quantity--;
        product8QuantityElement.textContent = product8Quantity;
    }
});

product8IncreaseButton.addEventListener('click', () => {
    product8Quantity++;
    product8QuantityElement.textContent = product8Quantity;
});

const product8Name = ' ساته';
const product8Price = 185000; // قیمت واحد محصول 3 به تومان

addToCartProduct8Button.addEventListener('click', () => {
    const existingProduct8Index = cart.findIndex((product) => product.name === product8Name);

    if (existingProduct8Index !== -1) {
        cart[existingProduct8Index].quantity += product8Quantity;
    } else {
        const product8 = {
            name: product8Name,
            price: product8Price,
            quantity: product8Quantity,
        };
        cart.push(product8);
    }

    // تنظیم تعداد به مقدار اولیه یعنی 1
    product8Quantity = 1;
    product8QuantityElement.textContent = product8Quantity;

    updateCart();
});

const product9DecreaseButton = document.getElementById('product9Decrease');
const product9IncreaseButton = document.getElementById('product9Increase');
const product9QuantityElement = document.getElementById('product9Quantity');
const addToCartProduct9Button = document.getElementById('addToCartProduct9');

let product9Quantity = 1

product8DecreaseButton.addEventListener('click', () => {
    if (product9Quantity > 1) {
        product9Quantity--;
        product9QuantityElement.textContent = product9Quantity;
    }
});

product9IncreaseButton.addEventListener('click', () => {
    product9Quantity++;
    product9QuantityElement.textContent = product9Quantity;
});

const product9Name = 'محصول 4';
const product9Price = 420000; // قیمت واحد محصول 3 به تومان

addToCartProduct9Button.addEventListener('click', () => {
    const existingProduct9Index = cart.findIndex((product) => product.name === product9Name);

    if (existingProduct9Index !== -1) {
        cart[existingProduct9Index].quantity += product9Quantity;
    } else {
        const product9 = {
            name: product9Name,
            price: product9Price,
            quantity: product9Quantity,
        };
        cart.push(product9);
    }

    // تنظیم تعداد به مقدار اولیه یعنی 1
    product8Quantity = 1;
    product8QuantityElement.textContent = product8Quantity;

    updateCart();
})

        function removeFromCart(productName) {
            const productIndex = cart.findIndex((product) => product.name === productName);
 if (productIndex !== -1) {
                cart.splice(productIndex, 1);
                updateCart();
            }
        }

        function decreaseQuantity(index) {
     if (index >= 0 && index < cart.length) {
     if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                    updateCart();
                }
            }
        }

        function increaseQuantity(index) {
      if (index >= 0 && index < cart.length) {
                cart[index].quantity++;
                updateCart();
            }
        }

        function updateCart() {
            cartTable.innerHTML = '';
            let total = 0;

            cart.forEach((product, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td id=nameinfacture>${product.name}</td>
                    <td>
                        <button class=decre onclick="decreaseQuantity(${index})"><span class="material-symbols-outlined">
                        do_not_disturb_on
                        </span></button>
                        <span class=cunstoff id="quantity${index}">${product.quantity}</span>
                        <button class=pluss onclick="increaseQuantity(${index})"><span class="material-symbols-outlined">
                        add_circle
                        </span></button>
                    </td>
                    <td id=priceoff1>${product.price}</td>
                    <td id=priceoff>${product.quantity * product.price}</td>
                    <td><button id=himi  onclick="removeFromCart('${product.name}')">حذف</button></td>
                `;

                cartTable.appendChild(row);
                total += product.quantity * product.price;
            });

            totalPriceElement.textContent = `قیمت نهایی: ${total} تومان`;
        }
        