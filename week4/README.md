# Web 4주차 워크북

# 핵심 키워드 🎯

- DOM과 JavaScript
- querySelector
- appendChild
- insertAdjacentHTML

# 4주차 수업 후기 📢

- 4주차 **수업을 듣고 서로 느낀 점을 이야기해주세요!**
- **핵심 키워드에 대해 완벽하게 이해했는지? 혹시 이해가 안 되는 부분은 뭐였는지?
서로 이야기해주세요!**

# 실습 체크리스트✅

- document
    - [ ]  getElementsByTagName, getElementsByClassName, getElementById 를 사용하여 코드를 아래에 작성해주세요
    
    ```
        const $body = document.getElementsByTagName("body");
        const $container = document.getElementsByClassName("container");
        const $title = document.getElementById("title");
        const $cityList = document.getElementById("cityList");
        const $cities = $cityList.getElementsByTagName("li");
        const $cityDiv = document.querySelector(".city");
    ```
    
    - [ ]  innerText : tag 안에 텍스트를 넣는 속성
- [ ]  spread operator : 전개 연산자, 배열 등 나열된 자료형에 각각 접근하여 분배 할당하는 연산자
- [ ]  Array.from : 유사배열을 배열로 만들어주는 함수
- element
    - [ ]  classList : 
    - [ ]  setAttribute :
    - [ ]  appendChild : 자식 요소를 만드는 함수
    - [ ]  insertAdjacentHTML : HTML

# !주의사항

1. **과제 피드백 기반 진행입니다** - 한명씩 본인의 **과제를 발표**하는 시간 그리고 해온 **과제에 대한 피드백**을 하는 시간 (ex:전 이렇게 생각해서 이런 부분 다르게 해왔는데 저것도 괜찮은 것 같아요!)이 **무조건 기반**이 되어야 합니다!
2. 부가적으로 **워크북에서 제공되는 키워드 혹은 강의에서 들은 디테일 적인 부분**에서 더 토의해봐도 좋을 것 같습니다

# 논의해보면 좋은 것들 🔥

- JavaScript가 브라우저에서 동작하는 원리에 대해서 알아보기
- JavaScript가 HTML을 제어하는 과정에 대해서 알아보기
- appendChild와 insertAdjecentHTML의 차이 알아보기
