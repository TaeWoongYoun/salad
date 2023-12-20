// document.getElementById('alertBox').innerHTML = '안녕';
// document 웹문서
// 마침표는 대충 ~~의
// getElementById('어쩌구') 는 아이디가 '어쩌구'인 html 요소를 찾아라
// innerHTML 대충 html이라는 뜻 / style.display는 display 값 정의 
// =등호는 오른쪽에 있는 애를 왼쪽에 대입하세요 같은 뜻

// document.getElementById('hello').innerHTML = '안녕'; 
// 웹문서의 id="hello"인거 찾아서 그것의 내부 HTML에 '안녕' 집어넣으세요. 라는 의미

// function은 함수인데 클래스처럼 사용 가능함.
// document.getElementById('alertBox').style.display = 'none' ;
// document.getElementById('alertBox').style.display = 'block' ;
// 이런 두 코드를
// 아래 코드처럼 사용하면 됨 none라는 글자는 본인 맘대로 설정이 가능하고
// none처럼 비워진 부분에 원하는 코드 넣어서 재활용 가능함
function 버튼(none){
    document.getElementById('alertBox').style.display = none ;
}

function 텍스트(none){
    document.getElementById('alertBox').innerHTML = none ;
}