import { sampleStorage } from '../../assets/localStorage.js'

class Cart {
    constructor({ onChange }) {
        this.products = sampleStorage
        this.deleteBtn = null;
        this.formQuantity = null;
        this.sumResult = document.getElementById('sum_result')
        this.productBox = document.getElementById('product-box');
        this.cartBox = document.querySelectorAll('.cart-box');
        this.onChange = onChange;

        this.data = this.products;
        this.sum = 0;
        this.render();
        this.setState(this.data);
    }

    render() {
        let htmlStr = '';
        htmlStr += this.data
            .map(sample =>
                `<div class="cart-box" data-id="${sample.id}">
                    <div class="cart-box__img">
                        <img src="${sample.img}">
                    </div>
                    <div class="cart-box__detail">
                        <div class='name'>${sample.name}</div>
                        <div data-id="${sample.id}" class="price">${sample.price}</div>
                        <form class='cart-form'>
                            <div class='form'>
                                <label for='size'>사이즈:</label>
                                <select name='size' class="form-control size-form-control select-size">
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                </select>
                            </div>
                            <div class='form'>
                                <label for='quantity'>수량:</label>
                                <select data-id="${sample.id}" data-price='${sample.priceset}'                                class="form-control quantity-form-control select-quantity"
                                name='quantity'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <button class="cart_delte-btn" data-id="${sample.id}">
                        <div>
                            <i class="cart_delete-icon fas fa-trash-alt"></i>
                        </div>
                    </button>
                    <div id="changeOrNot" class="changeOrNot">
                        <p class="txt">수량을 변경하시겠습니까?</p>
                        <div class='confirm_btn'>
                            <button class="confirm-go">변경</button>
                            <button class="confirm-no">취소</button>
                        </div>
                    </div>
                </div>`)
            .join('')

        if (this.productBox) {
            this.productBox.innerHTML = htmlStr
        };
        this.deleteBtn = document.querySelectorAll('.cart_delete-icon');
        this.deleteBtn.forEach(btn => btn.addEventListener('click', this.handleDeletBtn.bind(this)));

        this.quantityForm = document.querySelectorAll('.select-quantity');
        this.quantityForm.forEach(form => form.addEventListener('change', this.handleQuantity.bind(this)));
    }

    converToKRW(nextSum, nextHTML) {
        let converted = new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW'
        }).format(nextSum)

        if (nextHTML) {
            nextHTML.innerHTML = converted
        }
    }

    renderSum(nextSum) {
        this.sum = nextSum
        this.converToKRW(this.sum, this.sumResult)
    }

    setPrice() {
        let newPrices = [];

        this.quantityForm.forEach(form => {
            newPrices.push(form.dataset.price * form.value);
        })

        const setSum = () => {
            const nextSum = newPrices.reduce((acc, cur) => {
                return acc + cur
            }, 0);

            this.renderSum(nextSum);
        }

        setSum();
    }

    setState(nextData) {
        this.data = nextData;

        this.setPrice();
        this.render();
    }

    handleQuantity(e) {
        const value = e.target.value;
        const target = e.target;

        const handleGo = (e) => {
            hideConfirm(e);
            target.selectedIndex = value - 1;
            this.setPrice();
        }

        const handleNo = (e) => {
            hideConfirm(e);
            target.selectedIndex = 0;
        }

        const showConfirm = (e) => {
            const confirmAlert = e.target.closest('.cart-box').children[3]
            confirmAlert.classList.add('displayBlock')
        }

        const hideConfirm = (e) => {
            e.target.parentNode.parentNode.classList.remove('displayBlock');
        }

        const confirmGo = document.querySelectorAll('.confirm-go');
        const confirmNo = document.querySelectorAll('.confirm-no');

        confirmGo.forEach(go => go.addEventListener('click', handleGo));
        confirmNo.forEach(go => go.addEventListener('click', handleNo));

        showConfirm(e);
    }

    handleDeletBtn(e) {
        const clicked = e.target.parentNode.parentNode.dataset.id * 1

        const newList = this.data.filter(item => {
            console.log(item.id, clicked)
            return item.id !== clicked
        });

        this.setState(newList);
    }
}
export default Cart
