
export default class CartPage {

    constructor(page) {
        this.page = page;
        this.noOfProducts = "//tbody[@id='tbodyid']//tr//td[2]";
    }

    async checkProductInCart(productName) {

        const productsInCart = await this.page.$$(this.noOfProducts)
        for (const product of productsInCart) {
            console.log(product.textContent())

            if (productName === await product.textContent()) {
                return true;
                break;
            }
            
        }
    }
}