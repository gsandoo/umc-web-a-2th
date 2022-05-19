# 데이터 통신


- HTTP = HyperText Transfer Protocol : 프론트와 서버를 이어주는 데이터 통신 방법 중 하나
- HTTPS = HyperText Transfer Protocol Secure : HTTP에 보안을 더한 것


FRONT > <strong>Request</strong> > SERVER
FRONT < <strong>Response</strong> < SERVER


# 프론트의 Request


- 프론트가 Request 할 때 보통 url 주소와 HTTP Request Method 가 포함된다.


# HTTP Request Methods
- <strong>GET : 접근해서 사용 . 읽기</strong>
- <strong>POST : 기존 데이터에 새로운 정보 추가</strong>
- PUT : 기존 데이터 수정
- DELETE  : 데이터 삭제 


# CRUD 

- C = Create (post)

- R = Read (get)

- U = Update (put)

- D = Delete (Delete)


# Request 를 할 때 구성:

- < header >  : 데이터 형식 , 최종 목적지 
- < body > : 추가 혹은 수정 데이터 (post 나 put 만 해당) 
- < startline > : url 주소와 method


# 백앤드 서버의 Response


- Response 값으로는 XML , JSON 형태가 있다.

- XML : HTML 과 유사한 형태
- JSON : 배열 안의 객체 형태 (대부분 JSON 형태로 넘겨받는다.)


# status code 

- 서버가 성공적 혹은 연결에 실패했을 떄 문제를 보다 자세히 확인 할 수 있는 코드


