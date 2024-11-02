/**
 * Retrieves the details of a product.
 *
 * @param {Object} product - The product object.
 * @param {string} product.name - The name of the product.
 * @param {number} product.price - The price of the product.
 * @param {Array<string>} product.tags - An array of tags associated with the product.
 * @returns {string} A string containing the product details.
 */
function getProductDetails(product) {
    const { name, price, tags } = product;
    return `Product: ${name}, Price: $${price.toFixed(2)}, Tags: ${tags.join(', ')}`;
}

const product = {
    name: "PS5",
    price: 999.99,
    tags: ["electronics", "sony", "console"]
};

console.log(getProductDetails(product));
