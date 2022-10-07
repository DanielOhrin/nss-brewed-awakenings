import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    e => {
        const targetClicked = e.target
        if (targetClicked.id.startsWith("product")) {
            const [,productId] = targetClicked.id.split("--")
            //Now we have the id of a product stored. We must find the matching product first.
        const matchingProduct = products.find(product => product.id === parseInt(productId))
        window.alert(`${matchingProduct.name} costs \n$${matchingProduct.price.toFixed(2)}`)
        }
    }
)