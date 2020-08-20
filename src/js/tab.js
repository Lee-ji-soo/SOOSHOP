var 버튼들 = document.querySelectorAll('.tab-button');
var 탭내용들 = document.querySelectorAll('.tab-content');


document.querySelector('.list').addEventListener('click', function(e){
//  탭보여주는거( 내가실제누른요소에숨겨진data-id값 );
  탭보여주는거( e.target.dataset.id );
})


function 탭보여주는거(i){
  document.querySelector('.orange').classList.remove('orange');
  버튼들[i].classList.add('orange');  
  document.querySelector('.show').classList.remove('show');
  탭내용들[i].classList.add('show');
}





//for (let i = 0; i < 3; i++){
//  버튼들[i].addEventListener('click', function(){
//    탭보여주는거(i);
//  });
//}


//
//for (var i = 0; i < 3; i++){
//  console.log(i)
//}





//버튼1을 누르면...
//
//  버튼0,1,2에있던 orange 클래스명 다 제거 
//  버튼1에 orange라는 class명추가
//  
//  내용0,1,2에있던 show 클래스명 다 제거
//  내용1에 show라는 class명추가









