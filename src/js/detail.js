import {
    products
} from '../assets/products.js';


const filterProduct = products.filter(function (find) {
    return find.id === 1;
})
const product = filterProduct[0];

const img = document.getElementById('picture');
const name = document.getElementById('name');
const title = document.getElementById('info');

img.src = product.img;
title.innerHTML = product.text;
name.innerHTML = product.title;

// <!--상품 local Storage에 저장 & alert-->
function saveItem(event) {
    event.preventDefault();

    var selectedObj = {
        상품명: 'name',
        정보: 'info',
        수량: 'quantity',
        가격: 'price',
        색상: 'color',
        사이즈: 'size'
    }

    var product = document.querySelector(".product");
    selectedObj.상품명 = document.getElementById("name").innerHTML;
    selectedObj.수량 = document.getElementById("quantity").value;
    selectedObj.가격 = document.getElementById("price").innerHTML;
    selectedObj.색상 = document.getElementById("color").value;
    selectedObj.사이즈 = document.getElementById("size").value;
    var quantityValue = quantity.value;

    if (quantityValue < 1) {
        window.alert('수량은 최소1개입니다')
    } else {
        var answer = window.confirm('장바구니에 추가되었습니다.장바구니로 이동하시겠습니까?')
        if (answer) {
            window.location = './cart.html';
        } else {
            return
        }
    }
    localStorage.setItem("selectedProduct",
        JSON.stringify(selectedObj))
}
$("#장바구니").click(saveItem);


// <!--상품이미지 prev, next-->

let i = 0;

function imgBtnControll() {
    if (i < 1) {
        i++
        console.log('if', i)
    } else {
        i = 0
        console.log('else', i)
    }
    console.log('pic', i)
    $('#picture').attr('src', `../../images/pic1-${i}.jpg`);
}
$('.imgBtn').click(imgBtnControll);


// <!--Tab js-->
function changeTab(e) {
    $('.tab-button').removeClass('orange');
    $(e.target).addClass('orange');
    const currentTarget = event.target.dataset.id;
    $('.show').removeClass('show');
    document.getElementById(`${currentTarget}`).classList.add('show');
}

$('.tab-button').on("click", changeTab)
