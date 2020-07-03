'use strict';

//LOCALSTORAGE에 저장할때 새로운 class를 만들어서 저장하기
var dataArr = [];
var newDataArr = [];

function SampleData(id, name, price, quantity, size, img) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.size = size;
    this.img = img;
}

var data1 = new SampleData(1, '스쿱 넥 탱크 탑', 305000, 1, 'Small', '../../images/pic1.jpg');
var data2 = new SampleData(2, '인트레치아토 우븐 클러치', 4304000, 1, 'Large', '../../images/pic2.jpg');
var data3 = new SampleData(3, '플리세 플리츠 재킷', 3625000, 1, 'Medium', '../../images/pic3.jpg');
var data4 = new SampleData(4, 'GG 플로라 숄더 백', 1380000, 1, 'Medium', '../../images/pic4.jpg');
var data5 = new SampleData(5, '바로크 패턴 목욕 가운', 719000, 1, 'Medium', '../../images/pic5.jpg');

dataArr.push(data1, data2, data3, data4, data5);

//상품꺼내서 출력
for (var _i = 0; _i < dataArr.length; _i++) {
    $('.table').append('<div class="cart-boxs" data-id="' + dataArr[_i].id + '">\n          <div scope="row" class="cartBox"              id="dataId" data-id="' + dataArr[_i].id + '"></div>\n          <div class="cart-boxs__img">\n            <img src="' + dataArr[_i].img + '">\n          </div>\n          <div class="cart-boxs__detail">\n          <div data-id="' + dataArr[_i].id + '" class="price">' + dataArr[_i].price + '</div>\n          <div class=\'name\'>' + dataArr[_i].name + '</div>\n          <div class="col">\n          <select class="form-control size-form-control" id="size">\n            <option>S</option>\n            <option>M</option>\n            <option>L</option>\n          </select>\n          <select data-id="' + dataArr[_i].id + '" class="form-control quantity-form-control" id="quantity"\n           size=\'1\'onfocus=\'this.size=3;\' \n           onblur=\'this.size=1;\' \n           onchange=\'this.size=1; this.blur();\'>\n          \n            <option>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n            <option>6</option>\n         \n          </select>\n          </div>\n          <div id="changeOrNot" class="changeOrNot">\n            <p class="txt">\uC218\uB7C9\uC744 \uBCC0\uACBD\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?</p>\n            <button class="go">\uBCC0\uACBD</button>\n            <button class="no">\uCDE8\uC18C</button>\n          </div>\n        <div>\n          <i class="fas fa-trash-alt  delete"></i>\n        </div>\n      </div>');

    localStorage.setItem('product' + dataArr[_i].id, JSON.stringify(dataArr[_i]));
}
//KRW으로 프린트
var cartBox = $('.cart-boxs');
var eachPrice = $('.price');

//each을 위한 가격 내용 KRW으로 변경
function KRWeach() {
    for (var _i2 = 0; _i2 < eachPrice.length; _i2++) {

        var beforeKRW = eachPrice[_i2].innerHTML;
        var converted = new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW'
        }).format(beforeKRW);
        console.log(_i2, converted);
        eachPrice[_i2].innerHTML = converted;
    }
}
KRWeach();

//Sum을 가격 KRW으로 변경
function KRW(구멍) {
    var converted = new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW'
    }).format(구멍);
    $('#sum').html(converted);
}

//합계구하기
var quantity = $(".quantity-form-control");

function sum() {
    var sum = 0;
    for (i = 0; i < eachPrice.length; i++) {
        for (i = 0; i < eachPrice.length; i++) {
            var eachSum = ('price', dataArr[i].price) * ('quantity', quantity[i].value);
            sum += Number(eachSum);
        }
    }
    $("#sum").html(sum);
    KRW(sum);
}
sum();

//수량 변경 확인창 띄우기
quantity.change(function () {
    $(this).parent().siblings(".changeOrNot").addClass('displayBlock');
});

function displayNone(e) {
    $(e.target).parent().removeClass('displayBlock');
    console.log(e);
}
//변경버튼클릭
$('.go').click(sum);
$('.go').click(displayNone);
$('.no').click(displayNone);

//삭제하기
function deleteEle(e) {
    var clicked = $(e.target).parent().parent();
    var clickedId = clicked.data('id');

    for (i = 0; i < localStorage.length; i++) {
        clicked.remove();
        localStorage.removeItem('product' + clickedId);
    }
}
$('.delete').on('click', deleteEle);