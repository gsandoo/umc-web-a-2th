// Request 할 때 :


//fetch , axios 사용



//1.fetch : (fetchurl , options(바디가 있는 경우)) >> GET의 경우에 이렇게 사용

// const result = [];


//promise 이용

// fetch('https://jsonplaceholder.typicode.com/users')//response
// .then(response => response.json()) // data 가 되고
// // .then(data => result.push(data)) // 이 형태는 [[{user1},{user2},{user3}...]]
//                                     // json 형태의 data가 result 배열 안에 담길 것

// .then(data => data.map(item=>result.push(item.name))) //변환

// .catch(error => console.log(error))

// console.log(result)





//async await 이용 (데이터를 변수에 저장하기 , 함수를 이용한다)

// const dataFetch = async()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')//response
//     // fetch 가 될 동안 await 을 안해주면 그대로 promise 값이 나옴 .(fetch 의 기본값이 promise)
//     const data = await response.json();
//     // fetch 가 될 동안 await 을 안해주면 그대로 promise 값이 나옴 .(fetch 의 기본값이 promise)
    
//     return data;
// }
// const dataResult = dataFetch(); //data 를 변수에 저장하는 식으로 많이 쓰임.





// 2. axios 
// 사용법 : axios.(method(url))


axios.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data)) // data 객체 즉 axios 는 여러 정보가 보여진다 . 이중에 data 값을 읽어와야 된다.
.then(response=> console.log(response.data , "Hello")) // 해결책



// 2. axios 를 활용한 변수에 데이터 저장하기

const dataFetch = async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')//response
    // fetch 가 될 동안 await 을 안해주면 그대로 promise 값이 나옴 .(fetch 의 기본값이 promise)
   const result = await response.data
    return result;

}
const dataResult = dataFetch(); //data 를 변수에 저장하는 식으로 많이 쓰임.
console.log(dataResult)