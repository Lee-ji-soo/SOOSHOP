import {
    products
} from '../assets/products.js';
import Modal from './components/Modal.js'
import Window from './components/Window.js'
import MainProduct from './components/MainProduct.js'

import { EMAIL_RULE } from './const.js'

function App() {

    new Window()
    new Modal(EMAIL_RULE)
    new MainProduct(products)
}

export default App
