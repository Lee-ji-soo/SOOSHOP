import { sampleStorage } from '../../assets/localStorage.js'

function Cart() {
    this.products = sampleStorage
    const sumResult = document.getElementById('sum_result')

    this.render = () => {
        const productBox = document.getElementById('product-box')
        let htmlStr = ''
        htmlStr += this.products
            .map(sample =>
                `<div class="cart-box" data-id="${sample.id}">
                    <div class="cart-box__img">
                        <img src="${sample.img}">
                    </div>
                    <div class="cart-box__detail">
                        <div data-id="${sample.id}" class="price">${sample.price}</div>
                        <div class='name'>${sample.name}</div>
                        <div>
                            <select class="form-control size-form-control" class="select-size">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </select>
                            <select data-id="${sample.id}" 
                            class="form-control quantity-form-control select-quantity" size='1'
                            onfocus='this.size=3;' onblur='this.size=1;' onchange='this.size=1; 
                            this.blur();'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>
                        <button class="cart_delte-btn" data-id="${sample.id}">
                            <div class="cart_delete-icon">
                                <i class="fas fa-trash-alt"></i>
                            </div>
                        </button>
                    </div>
                    <div class="changeOrNot" class="changeOrNot">
                        <p class="txt">수량을 변경하시겠습니까?</p>
                        <button class="confirm-go">변경</button>
                        <button class="confirm-no">취소</button>
                    </div>
                </div>`)
            .join('')

        if (productBox) {
            productBox.innerHTML = htmlStr
        }
    }

    this.converToKRW = (nextSum, nextHTML) => {
        let converted = new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW'
        }).format(nextSum)

        if (nextHTML) {
            nextHTML.innerHTML = converted
        }
    }

    this.renderSum = () => {
        const eachPrice = this.products.map(sample => sample.priceset)
        const formQuantity = document.querySelectorAll('.quantity-form-control')
        let sum = 0

        if (formQuantity.length > 0) {
            for (let i = 0; i < eachPrice.length; i++) {
                let eachSum = eachPrice[i] * formQuantity[i].value
                sum += eachSum
            }
        }
        this.converToKRW(sum, sumResult)
    }

    this.evtBinding = () => {
        this.handleQuantity = () => {
            const quantityForm = document.querySelectorAll('.select-quantity')

            const confirmChange = (e) => {

                const showConfirm = (e) => {
                    const confirmAlert = e.target.closest('.cart-box').children[2]
                    confirmAlert.classList.add('displayBlock')
                }

                const hideConfirm = (e) => {
                    e.target.parentNode.classList.remove('displayBlock')
                }

                const confirmGo = document.querySelectorAll('.confirm-go')
                const confirmNo = document.querySelectorAll('.confirm-no')
                showConfirm(e)

                confirmGo.forEach(go => go.addEventListener('click', this.renderSum))
                confirmGo.forEach(go => go.addEventListener('click', hideConfirm))
                confirmNo.forEach(go => go.addEventListener('click', hideConfirm))

            }

            if (quantityForm) {
                quantityForm.forEach(form => form.addEventListener('change', confirmChange))
            }
        }

        this.handleDeletBtn = () => {
            const deleteBtn = document.querySelectorAll('.cart_delete-icon')

            const deleteProduct = (e) => {
                const cartBox = document.querySelectorAll('.cart-box')
                const clicked = e.target.parentNode.parentNode.dataset.id

                cartBox.forEach(box => {
                    if (box.dataset.id === clicked) {
                        box.remove()
                    }
                })
                this.sum()
            }

            if (deleteBtn) {
                deleteBtn.forEach(btn => btn.addEventListener('click', deleteProduct))
            }
        }

        this.handleQuantity()
        this.handleDeletBtn()

    }

    this.render()
    this.evtBinding()
    this.renderSum()
}
export default Cart
