function MainProduct({ products, setProductId }) {
    this.products = products
    this.setProductId = setProductId

    const productUL = document.getElementById('product-ul')

    this.render = () => {
        if (productUL) {
            let htmlStr = ''
            htmlStr += this.products
                .map((product, index) =>
                    `<li class='product' id='${product.id}'>
                        <a href='./detail.html'>
                            <img data-product='${index}' class='product_img' src='${product.img[0]}'>
                            <div data-product='${index}' class='product-info'>
                                <p class='txt product_title'>${product.title}</p>
                                <p class='txt product_price'>${product.price}</p>
                            </div>
                        </a>
                    </li>
                   `)
                .join('')

            productUL.innerHTML = htmlStr
        }
    }

    this.setState = (nextData) => {
        this.products = nextData
        this.render()
        this.handleHoverProduct()
    }

    this.evtBingding = () => {

        this.handleSorting = () => {
            const sortBtnLow = document.getElementById('sort-btn__low');
            const sortBtnHigh = document.getElementById('sort-btn__high');

            const sortLowPrice = () => {
                const sortedProducts = this.products.sort(function (a, b) {
                    return a.priceset - b.priceset
                })
                this.setState(sortedProducts)
            }

            const sortHighPrice = () => {
                const sortedProducts = this.products.sort(function (a, b) {
                    return b.priceset - a.priceset
                })
                this.setState(sortedProducts)
            }

            if (sortBtnHigh, sortBtnLow) {
                sortBtnLow.addEventListener('click', sortLowPrice)
                sortBtnHigh.addEventListener('click', sortHighPrice)
            }
        }

        this.handleMoreBtn = () => {
            const moreBtn = document.getElementById('more-btn')

            if (moreBtn) {
                const addProducts = (calledProducts) => {
                    const addedProducts = this.products.concat(calledProducts)
                    this.setState(addedProducts)
                }

                let more = 0;

                const callProductAjax = () => {
                    if (more == 0) {
                        $.get("../../src/assets/more.json").done(
                            function (product) {
                                addProducts(product)
                            }
                        );
                    }
                    if (more == 1) {
                        $.get("../../src/assets/more2.json").done(
                            function (product) {
                                addProducts(product)
                                moreBtn.classList.add('hidden'); //버튼없애기
                            }
                        )
                    }
                    more++;
                }

                moreBtn.addEventListener('click', callProductAjax)
            }
        }

        this.handleClickProduct = () => {
            const getProductId = (e) => {
                const productId = e.target.dataset.product
                this.setProductId(productId)
            }

            if (productUL) {
                productUL.addEventListener('click', getProductId)
            }
        }

        this.handleHoverProduct = () => {
            const product = document.querySelectorAll('.product')
            const productInfo = document.querySelectorAll('.product-info')

            console.log(product, productInfo)

            const checkSame = (info, e) => {
                if (info.dataset.product === e.target.dataset.product) {
                    return true
                }

            }

            const onMouseover = (e) => {
                productInfo
                    .forEach(info => {
                        if (checkSame(info, e) && e.target.classList.contains('product_img')) {
                            e.target.parentNode.children[1].classList.add('displayBlock')
                        }
                    }
                    )
            }

            const onMouseleave = (e) => {
                productInfo.forEach(info => info.classList.remove('displayBlock'))
            }

            product.forEach(pro => pro.addEventListener('mouseover', onMouseover))

            product.forEach(pro => pro.addEventListener('mouseleave', onMouseleave))

        }

        this.handleSorting()
        this.handleMoreBtn()
        this.handleClickProduct()
        this.handleHoverProduct()
    }

    this.render()
    this.evtBingding()
}

export default MainProduct
