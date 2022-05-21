//npm - 사람들이 만들어 놓은 프로그램을 다운로드 할 수 있는 플레이스토어.
// node js - 백엔드 쪽에서 js 다루기 위한 툴
// status code :서버가 성공적 혹은 연결에 실패했을 떄 문제를 보다 자세히 확인 할 수 있는 코드
  



//express 쓰임 참조 

const express = require('express')
const app = express()
const port = 5500

app.use(express.json()); // 계속 추가할거다

const users = [
    {
      id: 1,
      name: "james",
      username: "joker",
      email: "james101@gmail.com",
      phonenumber: "123-456-7979",
    },
    {
      id: 2,
      name: "christine",
      username: "crystal",
      email: "christine101@gmail.com",
      phonenumber: "453-326-1299",
    },
    {
      id: 3,
      name: "jammie",
      username: "jam",
      email: "jammie101@gmail.com",
      phonenumber: "963-332-3719",
    },
  ];

  app.get('/', (req, res) => { // '/' 홈주소로 res=> 응답 값
    res.send('Welcome ! ')
  })

  app.get('/users', (req, res) => { 
    res.json(users) //  '/users' 로 들어가면 users 배열을 respond 하기 위해 
  }) 
  




  //postman 사용 : 빠르게 기능 구현 여부 알아볼 수 있음
  // get
  app.get('/users/:userId', (req, res) => { // 동적주소는 : 를 붙혀준다
    
    
    // res.json(users) //  '/users' 로 들어가면 users 배열을 response 하기 위해 
    // console.log(req.params.userId); // /users/(이곳에 들어간 값을 출력)
    
    
    const user = users.find(user=> user.id === parseInt(req.params.userId));
    // req.params.userId 는 string이라 parseInt 사용

    if (!user){ res.status(404).send("요청한 userId를 찾을 수 없습니다")}
    // user 가 아닐 시 , 즉 아이디 값이 없을 시 404 반환

    res.status(200).json(user); //status code 사용
}) 
  



//post
app.post("/users", (req,res)=>{
    const newUser = req.body;

    // newUser 에 아무 키가 없을 시 404 에러 처리
    if(Object.keys(newUser).length === 0){ 
        res.status(400).send('user에 관한 정보를 입력해주세요')
      // newUser 에 키 값이 4보다 작을 시 
    } else if (Object.keys(newUser).length < 4){
      res.status(400).send("user를 추가하기 위해 필요한 정보를 모두 입력 바랍니다")
    }

    
    users.push({
        id: users[users.length-1].id+1, // users인덱싱으로 접근, 배열길이 -1 (0부터 시작하기때문) 의 아이디 값 +1 
        ...newUser
    })
    res.json(users);
    
})


//put
app.put('/users/:userId', (req, res)=>{
  const id = users.findIndex(user=> user.id === parseInt(req.params.userId));
  // 배열(users)의 찾는 인덱스값을 id 변수에 담는다.

  if(id===-1){
    res.status(404).send("요청하신 id를 찾을 수 없습니다")
  }

  users[id] = { // 원하는 인덱싱에 접근
    ...users[id], // spread 로 기존 값 보존
    ...req.body, 
  }
  res.status(200).json(users); // 출력
})




//delete
app.delete("/users/:userId",(req,res)=>{
   const id = users.findIndex(
     user=>user.id === parseInt(req.params.userId)
     )
   if(id===-1){
    res.status(404).send("요청하신 id를 찾을 수 없습니다")
  }

  users.splice(id,1); //splice 메소드 사용
  res.status(200).json(users);
  })




// =============================================================
  app.listen(port, () => {
    console.log(`서버 실행중 , , , `)
  })
  