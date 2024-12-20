document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const themeToggleButton = document.getElementById('theme-toggle');

    const API_URL = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
    const LOCAL_DB_URL = 'http://localhost:3000';

    // Function to fetch products from external API
    async function fetchFromAPI() {
        try {
            const response = await fetch(API_URL);
            return await response.json();
        } catch (error) {
            console.error('Error fetching from API:', error);
            return [];
        }
    }

    // Function to fetch products from local db.json
    async function fetchFromLocalDB() {
        try {
            const response = await fetch(LOCAL_DB_URL);
            return await response.json();
        } catch (error) {
            console.error('Error fetching from Local DB:', error);
            return [];
        }
    }

    // Fetch and combine data
    async function fetchCombinedProducts() {
        const apiData = await fetchFromAPI();
        const localData = await fetchFromLocalDB();
        const combinedData = [...localData, ...apiData];
        displayProducts(combinedData);
    }

    // Function to display products
    function displayProducts(products) {
        productGrid.innerHTML = '';

        if (products.length === 0) {
            productGrid.innerHTML = '<p>No products found.</p>';
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image_link || 'https://via.placeholder.com/300x180'}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description ? product.description.slice(0, 100) + '...' : 'No description available'}</p>
                <p class="price">$${product.price || 'N/A'}</p>
                <button class="buy-button" data-link="${product.product_link}" data-name="${product.name}">Buy Now</button>
                <button class="details-button" data-desc="${product.description || 'No instructions available'}">View Details</button>
            `;

            productGrid.appendChild(productCard);
        });

        addButtonListeners();
    }

    // Add event listeners to buttons
    function addButtonListeners() {
        // Buy button functionality
        document.querySelectorAll('.buy-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const productLink = event.target.dataset.link;
                const productName = event.target.dataset.name;
                if (productLink) {
                    window.open(productLink, '_blank');
                } else {
                    alert(`Sorry, the purchase link for "${productName}" is unavailable.`);
                }
            });
        });

        // View details functionality
        document.querySelectorAll('.details-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const description = event.target.dataset.desc;
                alert(`Product Instructions:\n${description}`);
            });
        });
    }

    // Apply saved theme on load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Toggle theme functionality
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    
        // Save theme preference
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Fetch and display combined products
    fetchCombinedProducts();
});
