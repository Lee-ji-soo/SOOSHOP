function DetailProduct({ products }) {
    let product = products[0]

    this.render = () => {
        const productBox = document.getElementById('detail-product-box')
        let htmlStr = ''

        htmlStr +=
            `
        <img id="product_img" src=${product.img[0]}>
        <div id="produc_img-btn">
            <button class="img_btn prev">
                <i class="fas fa-caret-left fa-3x"></i>
            </button>
            <button class="img_btn next">
                <i class="fas fa-caret-right fa-3x"></i>
            </button>
        </div>
        <h4 id="detail-product_title">${product.title}</h4>
        <p id="detail-product_text">${product.text}</p>
        <p id="detail-product_price">${product.price}</p>
        `

        if (productBox) {
            productBox.innerHTML = htmlStr
        }
    }

    this.setState = (productId) => {
        product = products[productId - 1]
        this.render()
    }

    this.evtBinding = () => {

        this.handleImgBtn = () => {
            const productImgBtn = document.getElementById('produc_img-btn')
            const productImg = document.getElementById('product_img')

            let cur = 0;

            const changeImg = () => {
                if (cur < 1) {
                    cur++
                } else {
                    cur = 0
                }
                productImg.src = `${product.img[cur]}`
            }

            if (productImgBtn) {
                productImgBtn.addEventListener('click', changeImg)
            }
        }

        this.handleShoppingBag = () => {
            const shoppingBag = document.getElementById('shoppingbag')

            const handleSelected = () => {
                const name = document.getElementById("detail-product_title").innerHTML;
                const quantity = document.getElementById("detail-form_quantity").value;
                const price = document.getElementById("detail-product_price").innerHTML;
                const color = document.getElementById("detail-form_color").value;
                const size = document.getElementById("detail-form_size").value;
                const quantityValue = quantity

                const saveSelectedItem = (e) => {

                    e.preventDefault();

                    let selectedObj = {
                        name: 'name',
                        quantity: 'quantity',
                        price: 'price',
                        color: 'color',
                        size: 'size'
                    }

                    selectedObj.name = name
                    selectedObj.quantity = quantity
                    selectedObj.price = price
                    selectedObj.color = color
                    selectedObj.size = size
                    localStorage.setItem("selectedProduct", JSON.stringify(selectedObj))
                }

                const moveToCartPage = () => {

                    if (quantityValue < 1) {
                        window.alert('수량은 최소1개입니다')
                    } else {
                        const answer =
                            window.confirm('장바구니에 추가되었습니다.장바구니로 이동하시겠습니까?')
                        if (answer) {
                            window.location = './cart.html';
                        } else {
                            return
                        }
                    }
                }
            }

            if (shoppingBag) {
                shoppingBag.addEventListener('click', handleSelected)
            }
        }

        this.handleTab = () => {
            const tabBox = document.getElementById('detail-tab')
            const tabBtn = document.querySelectorAll('.tab_btn')
            const tabCon = document.querySelectorAll('.tab_content')

            const changeTab = (e) => {
                const currentTarget = event.target.dataset.tab;
                const eTargetCon = document.getElementById(`tab_${currentTarget}`)

                tabBtn.forEach(tab => tab.classList.remove('orange'))
                e.target.classList.add('orange')

                tabCon.forEach(con => con.classList.remove('show'))
                eTargetCon.classList.add('show');
            }

            if (tabBox) {
                tabBox.addEventListener('click', changeTab)
            }
        }

        this.handleShoppingBag()
        this.handleImgBtn()
        this.handleTab()
    }

    this.render()
    this.evtBinding()
}
export default DetailProduct
