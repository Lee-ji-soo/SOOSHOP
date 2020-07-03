'use strict';

var _products = require('./products.js');

// scrollEvent
$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 10) {
        $('.navbar-brand').addClass('smallFt');
        $('.navbar').addClass('nav-link-blk');
        $('.navbar').addClass('bg-light');
        $('.navbar').addClass('navbar-light');
    } else if (scrollTop < 10) {
        $('.navbar-brand').removeClass('smallFt');
        $('.navbar').removeClass('bg-light');
        $('.navbar').removeClass('navbar-light');
    }
});

//모달창 open js
var blackBg = document.getElementById('모달창');

function modal열기(구멍) {
    blackBg.style.display = 'block';
    document.getElementById('제목').innerHTML = 구멍;
    return 1000;
}

function 모달창열기() {
    document.getElementById('모달창').style.display = 'block';
}

function modal닫기() {
    document.getElementById('모달창').style.display = 'none';
}

//모달창 close js
var modalBox = document.querySelector('.modalBox');
var closeBtn = document.getElementById('close');

function closeModal1(e) {
    if (e.target == blackBg) {
        blackBg.display = 'none';
    }
}
modalBox.addEventListener('click', closeModal1);

// 상품진열 js
//상품 DATA js

var productBoxRow = document.querySelector('.row');

for (var i = 0; i < _products.products.length; i++) {
    var box = document.createElement('div');
    var a = document.createElement('a');
    var img = document.createElement('img');
    var h4 = document.createElement('h4');
    var p = document.createElement('p');

    box.setAttribute('class', 'productBox col-sm-4');
    box.setAttribute('id', _products.products[i].id);
    console.log(box.id);
    a.setAttribute('href', './SOO-detail-1.html');
    img.setAttribute('width', '100%');
    img.setAttribute('style', 'cursor:pointer;');
    h4.setAttribute('class', 'mt-4 name');
    p.setAttribute('class', 'price');

    productBoxRow.appendChild(box);
    box.appendChild(a);
    a.appendChild(img);
    box.appendChild(h4);
    box.appendChild(p);

    img.setAttribute('src', _products.products[i].img);
    h4.innerHTML = _products.products[i].title;
    p.innerHTML = _products.products[i].price;
}

// <!--낮은 가격순정렬-->
var sortBtnLow = document.getElementById('sort-btn__low');
var sortBtnHigh = document.getElementById('sort-btn__high');
var boxAll = document.querySelectorAll('.productBox');
var imgAll = document.querySelectorAll('.productBox img');
var h4All = document.querySelectorAll('.productBox h4');
var pAll = document.querySelectorAll('.productBox p');

function sorting() {
    for (var _i = 0; _i < _products.products.length; _i++) {
        imgAll[_i].src = _products.products[_i].img;
        h4All[_i].innerHTML = _products.products[_i].title;
        pAll[_i].innerHTML = _products.products[_i].price;
        boxAll[_i].setAttribute('id', _products.products[_i].id);
        console.log(boxAll[_i].id);
    }
}

function sortPriceLow() {
    _products.products.sort(function (a, b) {
        return a.priceset - b.priceset;
    });
    sorting();
    link();
}

function sortPriceHigh(e) {
    _products.products.sort(function (a, b) {
        return b.priceset - a.priceset;
    });
    sorting();
    link();
}

sortBtnLow.addEventListener('click', sortPriceLow);
sortBtnHigh.addEventListener('click', sortPriceHigh);

//Ajax로 상품 더보기
var more = 0;

function addProduct() {
    if (more == 0) {
        //한번도 안눌렀을 때 
        $.get("./more.json").done(function (데이터) {
            for (var _i2 = 0; _i2 < 데이터.length; _i2++) {
                $('.container .row').append('<div class="productBox col-sm-4">\n        <img src=' + 데이터[_i2].img + ' width="100%">\n        <h4 class="mt-4 name">' + 데이터[_i2].name + '</h4>\n        <p class="price">$' + 데이터[_i2].price + '</p>\n        </div>');
            }
        });
    }
    if (more == 1) {
        //한번 눌렀을 때  
        $.get("./more2.json").done(function (데이터) {
            for (var _i3 = 0; _i3 < 데이터.length; _i3++) {
                $('.container .row').append('<div class="productBox col-sm-4">\n        <img src=' + 데이터[_i3].img + ' width="100%">\n        <h4 class="mt-4 name">' + 데이터[_i3].name + '</h4>\n        <p class="price">$' + 데이터[_i3].price + '</p>\n        </div>');
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
    for (var _i4 = 0; _i4 < _products.products.length; _i4++) {
        // console.log('boxAll', boxAll[i].id)
        a[_i4].href = './detail-' + boxAll[_i4].id + '.html';
    }
}
link();