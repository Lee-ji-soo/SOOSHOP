function MainProduct(products) {

    this.products = products

    this.render = () => {
        const productUL = document.getElementById('product-ul');

        if (productUL) {

            let htmlStr = ''
            htmlStr += this.products
                .map(product =>
                    `<li id= ${product.id}>
                    <a href='./detail-${product.id}.html'>
                        <img class='product_img'
                        src='${product.img[0]}'>
                    </a>
                    <p class='product_title'>${product.title}</p>
                    <p class='product_price'>${product.price}</p>
                 </li>`)
                .join('')

            productUL.innerHTML = htmlStr
        }
    }

    this.setState = (nextData) => {
        this.products = nextData
        this.render()
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
                        $.get("../assets/more.json").done(
                            function (product) {
                                addProducts(product)
                            }
                        );
                    }
                    if (more == 1) {
                        $.get("../assets/more2.json").done(
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

        this.handleSorting()
        this.handleMoreBtn()
    }

    this.render()
    this.evtBingding()
}

export default MainProduct
