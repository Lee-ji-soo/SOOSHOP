import { EMAIL_RULE } from './const/const.js'
import { products } from './../assets/products.js';
import Modal from './components/Modal.js';
import MainPage from './components/MainPage.js';
import MainProduct from './components/MainProduct.js';
import DetailProduct from './components/DetailProduct.js';
import Cart from './components/Cart.js';
import Navigation from './components/Navigtaion.js';

class App {
    constructor() {
        let productId = ''
        this.products = products

        this.setProductId = (id) => {
            productId = id
            this.detailProduct.setState(productId)
        }

        this.window = new MainPage()

        this.modal = new Modal(EMAIL_RULE)

        this.mainProduct = new MainProduct(
            {
                products: this.products,
                setProductId: this.setProductId
            }
        )

        this.detailProduct = new DetailProduct(
            {
                products: this.products
            }
        )

        this.cartProduct = new Cart({});

        this.navigation = new Navigation();
    }

    onChange() {

    }
}

export default App
