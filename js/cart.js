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

var data1 = new SampleData(1, '스쿱 넥 탱크 탑', 305000, 1, 'Small', 'images/pic1.jpg');
var data2 = new SampleData(2, '인트레치아토 우븐 클러치', 4304000, 1, 'Large', 'images/pic2.jpg');
var data3 = new SampleData(3, '플리세 플리츠 재킷', 3625000, 1, 'Medium', 'images/pic3.jpg');
var data4 = new SampleData(4, 'GG 플로라 숄더 백', 1380000, 1, 'Medium', 'images/pic4.jpg');
var data5 = new SampleData(5, '바로크 패턴 목욕 가운', 719000, 1, 'Medium', 'images/pic5.jpg');

dataArr.push(data1, data2, data3, data4, data5);


//상품꺼내서 출력
for (i = 0; i < dataArr.length; i++) {
    $('.table').append(
        `<div class="cart-boxs" data-id="${dataArr[i].id}">
        <div scope="row" class="cartBox" id="dataId"data-id="${dataArr[i].id}"></div>
        <div class="cart-boxs__img">
          <img src="${dataArr[i].img}">
        </div>
        
        <div class="cart-boxs__detail">
          <div class="price">${dataArr[i].price}</div>
          <div class='name'>${dataArr[i].name}</div>
          <div><i class="fas fa-minus minus"></i><span class="amount">${dataArr[i].quantity}</span><i class="fas fa-plus plus"></i></div>
          <div>사이즈 ${dataArr[i].size}</div>
        </div>
        <div>
          <i class="fas fa-trash-alt  delete"></i>
        </div>
      </div>`)
    localStorage.setItem(`product${dataArr[i].id}`, JSON.stringify(dataArr[i]))
}

//한국돈으로 표시하기
let cartBox = $('.cart-boxs')
let eachPrice = $('.price')
for (i = 0; i < cartBox.length; i++) {
    let eachPriceHTML = eachPrice[i].innerHTML
    let eachPriceInKor = Number(eachPriceHTML).toLocaleString()
    // let eachPriceInKor = eachPriceHTML[i].toLocaleString();
    eachPrice[i].innerHTML = `₩${eachPriceInKor}`
}

//합계구하기
function sum() {
    price = $('.price');
    let sum = 0;
    for (i = 0; i < price.length; i++) {
        sum += Number(price[i].innerHTML);
    }
    var sumKor = sum.toLocaleString();
    $('#sum').html(`₩${sumKor}`);
}


//마이너스키
function minus(e) {
    var jprice = dataArr[`${$(e.target).parent().siblings('#dataId').html()}` - 1].price;
    var amount = $(e.target).siblings('span').html();
    if (amount > 0) {
        //1씩줄어듬
        $(e.target).siblings('span').html(Number(amount) - 1)
        //갯수는 변경된 내용
        amount = $(e.target).siblings('span').html();
        //가격의 내용 수정
        $(e.target).parent().siblings('.price').html(jprice * amount);

    } else {
        amount = 0
    }
    sum();
}

//플러스키
function plus(e) {
    var jprice = dataArr[`${$(e.target).parent().siblings('#dataId').html()
        }` - 1].price;
    var amount = $(e.target).siblings('span').html();
    if (amount < 10) {
        //1씩줄어듬
        $(e.target).siblings('span').html(Number(amount) + 1)
        amount = $(e.target).siblings('span').html();
        $(e.target).parent().siblings('.price').html(jprice * amount);

    } else {
        amount = 10
    }
    sum();
}
$('.minus').on('click', minus);
$('.plus').on('click', plus);
sum();

function deleteEle(e) {
    var clicked = $(e.target).parent().parent();
    var clickedId = clicked.data('id');

    for (i = 0; i < localStorage.length; i++) {
        clicked.remove();
        localStorage.removeItem(`product${clickedId}`);
    }
}
$('.delete').on('click', deleteEle);


