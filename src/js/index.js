import {
    products
} from './products.js';

// scrollEvent
$(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 10) {
        $('.navbar-brand').addClass('smallFt');
        $('.navbar').addClass('nav-link-blk');
        $('.navbar').addClass('bg-light');
        $('.navbar').addClass('navbar-light');
    } else if (scrollTop < 10) {
        $('.navbar-brand').removeClass('smallFt')
        $('.navbar').removeClass('bg-light');
        $('.navbar').removeClass('navbar-light');
    }
})

//모달창 open js
const blackBg = document.getElementById('모달창');

function modal열기(구멍) {
    blackBg.style.display = 'block';
    document.getElementById('제목').innerHTML = 구멍;
    return 1000
}

function 모달창열기() {
    document.getElementById('모달창').style.display = 'block';
}

function modal닫기() {
    document.getElementById('모달창').style.display = 'none';
}

//모달창 close js
const modalBox = document.querySelector('.modalBox');
const closeBtn = document.getElementById('close');

function closeModal1(e) {
    if (e.target == blackBg) {
        blackBg.display = 'none';
    }
}
modalBox.addEventListener('click', closeModal1);

// 상품진열 js
//상품 DATA js

const productBoxRow = document.querySelector('.row');

for (let i = 0; i < products.length; i++) {
    var box = document.createElement('div');
    var a = document.createElement('a');
    var img = document.createElement('img');
    var h4 = document.createElement('h4');
    var p = document.createElement('p');

    box.setAttribute('class', 'productBox col-sm-4');
    box.setAttribute('id', products[i].id);
    console.log(box.id)
    a.setAttribute('href', `./SOO-detail-1.html`);
    img.setAttribute('width', '100%');
    img.setAttribute('style', 'cursor:pointer;');
    h4.setAttribute('class', 'mt-4 name');
    p.setAttribute('class', 'price');

    productBoxRow.appendChild(box);
    box.appendChild(a);
    a.appendChild(img);
    box.appendChild(h4);
    box.appendChild(p);

    img.setAttribute('src', products[i].img);
    h4.innerHTML = products[i].title;
    p.innerHTML = products[i].price;
}

// <!--낮은 가격순정렬-->
var sortBtnLow = document.getElementById('sort-btn__low');
var sortBtnHigh = document.getElementById('sort-btn__high');
var boxAll = document.querySelectorAll('.productBox');
var imgAll = document.querySelectorAll('.productBox img');
var h4All = document.querySelectorAll('.productBox h4');
var pAll = document.querySelectorAll('.productBox p');


function sorting() {
    for (let i = 0; i < products.length; i++) {
        imgAll[i].src = products[i].img;
        h4All[i].innerHTML = products[i].title;
        pAll[i].innerHTML = products[i].price;
        boxAll[i].setAttribute('id', products[i].id);
        console.log(boxAll[i].id)
    }
}

function sortPriceLow() {
    products.sort(function(a, b) {
        return a.priceset - b.priceset
    })
    sorting();
    link();
}

function sortPriceHigh(e) {
    products.sort(function(a, b) {
        return b.priceset - a.priceset
    })
    sorting();
    link();

}

sortBtnLow.addEventListener('click', sortPriceLow)
sortBtnHigh.addEventListener('click', sortPriceHigh)

//Ajax로 상품 더보기
let more = 0;

function addProduct() {
    if (more == 0) { //한번도 안눌렀을 때 
        $.get("./more.json").done(
            function(데이터) {
                for (let i = 0; i < 데이터.length; i++) {
                    $('.container .row').append(`<div class="productBox col-sm-4">
        <img src=${데이터[i].img} width="100%">
        <h4 class="mt-4 name">${데이터[i].name}</h4>
        <p class="price">$${데이터[i].price}</p>
        </div>`)
                }
            });
    }
    if (more == 1) { //한번 눌렀을 때  
        $.get("./more2.json").done(
            function(데이터) {
                for (let i = 0; i < 데이터.length; i++) {
                    $('.container .row').append(`<div class="productBox col-sm-4">
        <img src=${데이터[i].img} width="100%">
        <h4 class="mt-4 name">${데이터[i].name}</h4>
        <p class="price">$${데이터[i].price}</p>
        </div>`)
                }
                $('#more-btn').addClass('hidden'); //버튼없애기
            });
    }
    more++;
}
$('#more-btn').on('click', addProduct);

// <!--링크 연결하기-->
var a = document.querySelectorAll('.productBox a');

function link() {
    for (let i = 0; i < products.length; i++) {
        // console.log('boxAll', boxAll[i].id)
        a[i].href = `./detail-${boxAll[i].id}.html`;
    }
}
link();