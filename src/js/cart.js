//LOCALSTORAGE에 저장할때 새로운 class를 만들어서 저장하기
let dataArr = [];
let newDataArr = [];

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
for (let i = 0; i < dataArr.length; i++) {
    $('.table').append(
        `<div class="cart-boxs" data-id="${dataArr[i].id}">
          <div scope="row" class="cartBox"              id="dataId" data-id="${dataArr[i].id}"></div>
          <div class="cart-boxs__img">
            <img src="${dataArr[i].img}">
          </div>
          <div class="cart-boxs__detail">
          <div data-id="${dataArr[i].id}" class="price">${dataArr[i].price}</div>
          <div class='name'>${dataArr[i].name}</div>
          <div class="col">
          <select class="form-control size-form-control" id="size">
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
          <select data-id="${dataArr[i].id}" class="form-control quantity-form-control" id="quantity"
           size='1'onfocus='this.size=3;' 
           onblur='this.size=1;' 
           onchange='this.size=1; this.blur();'>
          
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
         
          </select>
          </div>
          <div id="changeOrNot" class="changeOrNot">
            <p class="txt">수량을 변경하시겠습니까?</p>
            <button class="go">변경</button>
            <button class="no">취소</button>
          </div>
        <div>
          <i class="fas fa-trash-alt delete"></i>
        </div>
      </div>`)

    localStorage.setItem(`product${dataArr[i].id}`, JSON.stringify(dataArr[i]))
}
//KRW으로 프린트
const cartBox = $('.cart-boxs');

//each을 위한 가격 내용 KRW으로 변경
function KRWeach() {
    let eachPrice = $('.price');
    for (let i = 0; i < eachPrice.length; i++) {

        let beforeKRW = eachPrice[i].innerHTML
        let converted = new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW'
        }).format(beforeKRW);
        eachPrice[i].innerHTML = converted;
    }
}
KRWeach();

//Sum을 가격 KRW으로 변경
function KRW(구멍) {
    let converted = new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW'
    }).format(구멍);
    $('#sum').html(converted);
}

//합계구하기
const quantity = $(".quantity-form-control")

function sum() {
    let sum = 0;
    let eachPrice = $('.price');

    for (i = 0; i < eachPrice.length; i++) {
        for (i = 0; i < eachPrice.length; i++) {
            let pricehtml = eachPrice[i].innerHTML;
            let priceNUM = pricehtml.replace(/[₩,]/g, '');
            let eachSum = ('price', priceNUM) * ('quantity', quantity[i].value)

            sum += Number(eachSum);
        }
    }
    $("#sum").html(sum);
    KRW(sum);
}
sum();

//수량 변경 확인창 띄우기
quantity.change(function() {
    $(this).parent().siblings(".changeOrNot").addClass('displayBlock');
});

function displayNone(e) {
    $(e.target).parent().removeClass('displayBlock');
}
//변경버튼클릭
$('.go').click(sum)
$('.go').click(displayNone);
$('.no').click(displayNone);

//삭제하기
function deleteEle(e) {
    var clicked = $(e.target).parent().parent().parent();
    var clickedId = clicked.data('id');
    for (i = 0; i < localStorage.length; i++) {
        clicked.remove();
        localStorage.removeItem(`product${clickedId}`);
    };
    sum()
}
$('.delete').click(deleteEle);