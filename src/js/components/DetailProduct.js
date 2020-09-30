let selectedObj = [];

function DetailProduct({ products }) {
    let product = products[0]

    this.render = () => {
        const productImg = document.getElementById('detail_img-wrap');
        const productInfo = document.getElementById('detail_info-wrap');

        let imgStr = '';
        let detailStr = '';

        imgStr = `
        <section id='product_img-wrap'>
            <img id='product_img' src=${product.img[0]}>
            <div id="product_img-btn">
                <button class="img_btn prev">
                    <i class="fas fa-caret-left fa-3x"></i>
                </button>
                <button class="img_btn next">
                    <i class="fas fa-caret-right fa-3x"></i>
                </button>
            </div>
        </section>
       `

        detailStr = `
        <section id='product_info-wrap'>
            <h4 class='line' id="detail-product_title">${product.title}</h4>
            <p class='line detail' id="detail-product_text">${product.text}</p>
            <p class='line detail' id="detail-product_price">${product.price}</p>
        </section>
`

        if (productImg && productInfo) {
            productImg.insertAdjacentHTML('afterBegin', imgStr);
            productInfo.insertAdjacentHTML('afterBegin', detailStr)
        }
    }

    this.setState = (productId) => {
        product = products[productId - 1]
        this.render()
    }

    this.evtBinding = () => {

        this.handleImgBtn = () => {
            const productImgBtn = document.getElementById('product_img-btn')
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

            const handleSelected = (e) => {
                const name = document.getElementById("detail-product_title").innerHTML;
                const quantity = document.getElementById("detail-form_quantity").value;
                const price = document.getElementById("detail-product_price").innerHTML;
                const color = document.getElementById("detail-form_color").value;
                const size = document.getElementById("detail-form_size").value;

                const saveSelectedItem = (e) => {
                    e.preventDefault();

                    selectedObj.push({
                        name,
                        quantity,
                        price,
                        color,
                        size
                    })

                    localStorage.setItem("selectedProduct", JSON.stringify(selectedObj))
                }

                const moveToCartPage = (e) => {
                    e.preventDefault();

                    if (quantity < 1) {
                        window.alert('수량은 최소1개입니다')
                    } else {
                        const answer =
                            window.confirm('장바구니에 추가되었습니다.장바구니로 이동하시겠습니까?');
                        if (answer) {
                            window.location = './cart.html';
                            saveSelectedItem(e);
                        } else {
                            return
                        }
                    }
                }

                moveToCartPage(e);
            }

            if (shoppingBag) {
                shoppingBag.addEventListener('click', handleSelected)
            }
        }

        this.handleTab = () => {
            const tabBox = document.getElementById('tab-ul')
            const tabBtn = document.querySelectorAll('.tab_btn')
            const tabCon = document.querySelectorAll('.tab_content')

            const changeTab = (e) => {
                const isTabBtn = e.target.classList.contains('tab_btn');

                if (isTabBtn) {
                    const currentTarget = e.target.dataset.tab;
                    const eTargetCon = document.getElementById(`tab_${currentTarget}`)

                    tabBtn.forEach(tab => tab.classList.remove('orange'))
                    e.target.classList.add('orange')

                    tabCon.forEach(con => con.classList.remove('show'))
                    eTargetCon.classList.add('show');
                }
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
