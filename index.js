const cars = [
      { name: "Tesla Model 3", color: "White", category: "Electric", price: "$45,000", image: "https://picsum.photos/id/1018/400/200", isLocal: true },
      { name: "BMW X5", color: "Black", category: "SUV", price: "$60,000", image: "https://picsum.photos/id/1020/400/200", isLocal: false },
      { name: "Audi A6", color: "Blue", category: "Sedan", price: "$50,000", image: "https://picsum.photos/id/1025/400/200", isLocal: true },
      { name: "Ford F-150", color: "Red", category: "Truck", price: "$35,000", image: "https://picsum.photos/id/1035/400/200", isLocal: false },
      { name: "Kia EV6", color: "Silver", category: "Electric", price: "$40,000", image: "https://picsum.photos/id/1045/400/200", isLocal: true },
      { name: "Hyundai Tucson", color: "Gray", category: "SUV", price: "$30,000", image: "https://picsum.photos/id/1050/400/200", isLocal: true },
      { name: "Lexus RX", color: "Green", category: "Luxury", price: "$55,000", image: "https://picsum.photos/id/1062/400/200", isLocal: false },
      { name: "Chevy Bolt", color: "Yellow", category: "Electric", price: "$25,000", image: "https://picsum.photos/id/1070/400/200", isLocal: true },
      { name: "Mazda CX-5", color: "Dark Blue", category: "Crossover", price: "$32,000", image: "https://picsum.photos/id/1080/400/200", isLocal: true },
      { name: "Porsche Taycan", color: "Purple", category: "Sport", price: "$120,000", image: "https://picsum.photos/id/1084/400/200", isLocal: false }
    ];

    const carList = document.getElementById("carList");
    const cartSidebar = document.getElementById("cartSidebar");
    const cartItemsContainer = document.getElementById("cartItems");
    const cartCount = document.getElementById("cart-count");
    let cart = [];

    function renderCars() {
      carList.innerHTML = "";
      cars.forEach((car, index) => {
        const carCard = document.createElement("div");
        carCard.className = "car-card";
        carCard.innerHTML = `
          <img src="${car.image}" alt="${car.name}">
          <div class="car-info">
            <h3>${car.name}</h3>
            <p>Color: ${car.color}</p>
            <p>Category: ${car.category}</p>
            <p class="price">${car.price}</p>
            ${car.isLocal ? `<p style="color: #0d6efd; font-size: 0.8rem;">Local Dealer</p>` : ''}
            <button onclick="addToCart(${index})">Add to Cart</button>
          </div>
        `;
        carList.appendChild(carCard);
      });
    }

    function addToCart(index) {
      const car = cars[index];
      cart.push(car);
      updateCart();
    }

    function updateCart() {
      cartItemsContainer.innerHTML = "";
      cart.forEach((item) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <strong>${item.name}</strong><br>
          <span>${item.price}</span>
        `;
        cartItemsContainer.appendChild(div);
      });
      cartCount.textContent = cart.length;
    }

    function toggleCart() {
      cartSidebar.classList.toggle("open");
    }

    renderCars();