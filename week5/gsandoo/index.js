const $div = document.querySelector('.container');
const $form= document.querySelector("form");
const $input= document.querySelector("input");
const $button= document.querySelector("button");

//1. 이벤트 핸들러
// target.이벤트이름 = 콜백함수

// $div.onclick = ()=>console.log("clicked");
// $div.onclick = ()=>alert("clicked");

//동일한 이벤트가 두 개 이상일 시, 뒤 이벤트가 앞 이벤트를 덮어쓴다. 

// function handleClick(){
//     console.log("clicked")
// }

//===============================================================


//2. addEventListener
// target.addEventListener(이벤트이름, 콜백함수)

// $div.addEventListener('click', ()=>console.log(handleClick))
// $div.addEventListener('click', ()=>alert("클릭 되셨습니다."))

// function handleClick(){
//     console.log("clicked")
// }

//덮어 쓰이지 않는다.

//===============================================================

//3. removeEventListener (이벤트 삭제)

// $div.removeEventListener("click",handleClick)

//===============================================================

$div.addEventListener("click",handleClick);

function handleClick(event){
    console.log(event.target) // 이벤트가 일어나는 타겟. 즉 div
}

$input.addEventListener("change",handleChange);

function handleChange(e) {
    // console.dir(event.target)  dir 은 객체에 대한 정보를 알려준다.
    console.log(e.target.value)    //input 의 값을 알 수 있다.
}

$form.addEventListener("submit",handleSubmit);

function handleSubmit (e){
    e.preventDefault();   
    //form 의 특성 상 submit 이나 enter키를 누르면 제출되기 때문에
    //preventDefault로 새로고침(제출)을 막아준다.

    const inputValue = $input.value; //인풋 값 접근
    console.log(`이 곳이 인풋값: ${inputValue}`)
    $input.value = " "; // 공백을 넣어 초기화 시켜줌. 
    console.log($input.value)
}