const search = () => {
    const searchbox = document.getElementById("SearchBar").value.toUpperCase();
    const products = document.querySelectorAll(".product");
    const productvarieties = document.getElementById("productvariety");
    const cartcontainer = document.getElementById("cartcontainer");

    let productFound = false;

    for (let i = 0; i < products.length; i++) {
        let productDetails = products[i].querySelector(".productdetails h5");

        if (productDetails) {
            let textValue = productDetails.textContent || productDetails.innerHTML;

            if (textValue.toUpperCase().indexOf(searchbox) > -1) {
                products[i].style.display = "";
                productFound = true;
            } else {
                products[i].style.display = "none";
            }
        }
    }

    // Ensure these elements are always visible
    productvarieties.style.display = "block";
    cartcontainer.style.display = "block";

    // Adjust visibility if no products are found
    if (!productFound) {
        productvarieties.style.visibility = "visible";
        cartcontainer.style.visibility = "visible";
    }
};

document.getElementById("SearchBar").addEventListener("keyup", search);

const sidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
};
document.querySelectorAll('.producttype').forEach(radio => {
    radio.addEventListener('change', function () {
        const selectedType = this.nextElementSibling.textContent.trim();
        document.querySelectorAll('.product').forEach(product => {
            const productName = product.querySelector('h3').textContent.trim();
            if (productName !== selectedType) {
                product.style.display = 'none';
            } else {
                product.style.display = 'block';
            }
        });
    });
});

