import { EMAIL_RULE } from './const.js'
import { products } from '../assets/products.js';

import Modal from './components/Modal.js'
import Window from './components/Window.js'
import MainProduct from './components/MainProduct.js'
import DetailProduct from './components/DetailProduct.js'


function App() {

    this.render = () => {
        new Window()
        new Modal(EMAIL_RULE)
        new MainProduct(products)
        new DetailProduct(products)
    }

    this.render()

}

export default App
