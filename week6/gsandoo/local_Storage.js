// local storage

// 자신의 로컬환경의 storage 에 데이터를 저장한다.

// F12 > Application > Local Storage 에서 현재 페이지 내 Local STORAGE 값 확인 가능

// Key - Value  형태로 저장되어있음




//setItem: local storage 에 정보를 저장하는 메소드

localStorage.setItem("Name","gsandoo");
localStorage.setItem("Age",100);

// getItem : localStorage 에서 정보를 가져올 때 사용하는 메소드

const result = localStorage.getItem("Age");
console.log(typeof result);

// local storage 에 저장 되어있는 값은 문자열 형태이다.




// 일반적으로 객체는 문자열 형태로 ls에 저장되지 않는다. 이럴 때 사용하는 것이 


//JSON.stringify = 문자열 형태로 저장


const travel = {
  destination:['paris','sydney','taipei'],
  days: 100,
  note: undefined,
  isAvailable: true 
};

localStorage.setItem("travel",JSON.stringify(travel));



// const data = localStorage.getItem("travel");

// console.log(data.destination);

// undefined
// 문자열은 키에 접근이 불가능하기에 

//이럴 떄 JSON.parse 사용

// JSON.parse = 문자열을 객체 형식으로 다시 풀어준다. 
// const data = JSON.parse(localStorage.getItem("travel"));

// console.log(data.destination);

//접근 가능



//removeItem : 삭제


localStorage.removeItem("Name");
localStorage.clear();//모두삭제