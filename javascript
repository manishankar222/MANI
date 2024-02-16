const products = [{
    "id": "1",
    "image": "https://res.cloudinary.com/difbmfdoo/image/upload/v1708066869/My_project_11_1_dz1lph.png",
    "title": "Latest Edition"
}, {
    "id": "2",
    "image": "https://res.cloudinary.com/difbmfdoo/image/upload/v1708067152/1_rcjox1.png",
    "title": "Shirts"
}, {
    "id": "3",
    "image": "https://res.cloudinary.com/difbmfdoo/image/upload/v1708067398/2_xtvdrd.png",
    "title": "Hoodies"
}];

const productsContainer = document.getElementById('productsContainer');

function renderProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <p>${product.title}</p>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function filterProducts(searchTerm) {
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderProducts(filteredProducts);
}

renderProducts(products);

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    filterProducts(this.value);
});
