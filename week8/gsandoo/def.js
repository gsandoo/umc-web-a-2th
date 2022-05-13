//데이터 통신


//HTTP = HyperText Transfer Protocol : 프론트와 서버를 이어주는 데이터 통신 방법 중 하나
//HTTPS = HyperText Transfer Protocol Secure : HTTP에 보안을 더한 것


// FRONT > Request > SERVER
// FRONT < Response < SERVER


// 프론트의 Request


// 프론트가 Request 할 때 보통 url 주소와 HTTP Request Method 가 포함된다.


// Request 를 할 때 구성:

//<header> : 데이터 형식 , 최종 목적지 
//<body> : 추가 혹은 수정 데이터 (post 나 put 만 해당) 
//<startline> : url 주소와 method


// HTTP Request Method:
// GET : 접근해서 사용 . 읽기
// POST : 기존 데이터에 새로운 정보 추가
// PUT : 기존 데이터 수정
// DELETE  : 데이터 삭제 


// 백앤드 서버의 Response


// Response 값으로는 XML , JSON 형태가 있다.

// XML : HTML 과 유사한 형태
// JSON : 배열 안의 객체 형태 (대부분 JSON 형태로 넘겨받는다.)

