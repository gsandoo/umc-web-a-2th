# DOM 개념


- <strong>document = HTML</strong>

- <strong>HTML 접근 방법 메소드</strong>



1. 태그를 통해 접근하는 방법

<strong>getElementsByTagName</strong>

- <pre>
    const $bodys= document.getElementsByTagName("body");
    console.log($bodys[0].innerText);
</pre>

# 클래스를 통해 접근하는 방법

<strong>getElementsByClassName</strong>
    
- <pre>const $cityDiv = document.getElementsByClassName("city");</pre>


- <pre>
    const $container = document.getElementsByClassName("container");
    console.log($container[0].innerText);
</pre>


- 클래스와 태그는 하나 이상의 값이 존재할수있기 때문에 elements 의 s 를 반드시 붙혀줄 것

- 인덱스 0 을 통해 article 안에 있는 정보를 알 수 있다.


- <pre>innerText: 태그를 제외 하고 지정된 변수 안에있는 모든 텍스트를 보여줌.</pre>

- <pre>innerHTML : 태그를 포함한 HTML 전체를 보여준다.</pre>


- 보통 DOM 을 선택한 변수는 $ 사인을 붙혀준다. (다른 변수랑 구분위해)

- DOM 변수는 일반적인 배열이 아니다.

- 해당하는 태그 모두를 배열에 넣어준다.

- <pre>유사배열</pre>이라 한다.

- 인덱스넘버를 통해 접근할 수 있다.


# id 로 접근하는 방법

<strong>getElementById</strong>

- <pre>
    const $title = document.getElementById("title");
    console.log($title);
</pre>

<pre>
    const $cityList= document.getElementById("cityList");
    console.log($cityList);
</pre>

<pre>
    const $cities = $cityList.getElementsByTagName("li");
    console.log($cities); <strong>$cityList 처럼 영역제한도 가능하다.</strong>
</pre>

- <strong>Id 값은 element 단수 입력</strong>
- 결과값이 하나일땐 바로 결과값 리턴


# querySelector = 조건을 만족하는 첫번째 값만 반환한다.

- <pre>
    const $firstSelect =  $cityList.querySelector('li');
    console.log($firstSelect);  <strong>cityList 의 첫번째 요소 선택 bangkok</strong>
</pre>

- <pre>
    const $all =  $cityList.querySelectorAll('li');
    console.log($all);  <strong>nodelist 형태로 출력</strong>
</pre>

- <pre>
    const $cityDiv = document.querySelector(".city");
    console.log($cityDiv);
</pre>


# innerHTML(유사배열) 과 nodelist 의 차이:

- nodelist는 forEach 가능 , ineerHTML 은 forEach 불가

- <pre>
    const $body= document.getElementsByTagName("body");
    console.log($body);  <strong>HTML Collection</strong>
</pre>

- <pre>$cities.forEach(city=>console.log(city.innerText));   <strong>배열 아니라 작동 안됌</strong>
 $all.forEach(city=>console.log(city.innerText));  <strong>배열이라 작동 됌</strong>
</pre>





# HTML Collection(유사배열)을 배열 형태로 변환하는방법:
-  map 이나 forEach 사용 가능.


 - <strong>spread operator, Array.from</strong>



1. spread operator: 유사배열에 있는 요소를 하나하나 배열에 담아준다.

- <pre>
    const newCities = [...$cities];
    console.log(newCities);

    newCities.map(city=>console.log(city.innerText));</pre>



2. Array.from

- <pre>
    const newCities=Array.from($cities);
    console.log(newCities);
    
    newCities.map(city=>console.log(city.innerText));
</pre>





# JS에서 스타일 변경하기

- <strong>HTML Collection 은 유사배열이니 [0] 선택</strong>

- <pre>
    $body[0].style.backgroundColor = 'teal'; //HTML Collection
    $container[0].style.backgroundColor = 'yellow';   //HTML Collection
    $cityDiv.style.fontSize='30px'; //nodeList
</pre>




# JS 에서 요소 추가하기 (appendChild)

- <strong>appendChild 는 요소를 부모의 자식요소 중 맨 뒤로 보낸다.</strong>

1. ul 생성
2. li에 들어갈 요소(배열) 생성
3. li 생성
4. mapping으로 배열 안 요소 각각 선택
5. li innerText로 맵핑 값 넣어줌
6. appendChild 로 ul 안에 넣어줌.
7. 부모요소에 넣어줌.

- <pre>
    const worstCity = document.createElement('ul')
    const worstCityArray = ['Cairo','Seoul','Boston','Madrid'];
    
    worstCityArray.map(city=>
     {const WorstCityItem=document.createElement("li");
    WorstCityItem.innerText=city;
    console.log(WorstCityItem);
     worstCity.appendChild(WorstCityItem)
     console.log(worstCity)})
    
    $cityDiv.appendChild(worstCity);
</pre>




# insertAdjacentHTML


- insertAdjacentHTML 는 부모를 기준으로 위치를 지정하여 자식요소를 위치 시킬 수 있다.

- <strong>position :  'beforebegin','afterbegin','beforeend','afterend' 가 있다.</strong>

1. 문자열을 변수에 저장
2. insertAdjacentHTML(위치 , 값 ) 을 통해 삽입.


- <pre>
    const worstcitylist ='<ul><li>Cairo<li><li>Beijing<li><li>LA<li><li>Minneapolis<li><ul>'
    $cityDiv.insertAdjacentHTML("afterbegin",worstcitylist);
</pre>

# 클래스 와 속성 생성해서 값 할당해주기

- <pre>
    const $worstcityDiv = document.createElement("div");
    const $worstcitysubTitle = document.createElement("h2");
    $worstcitysubTitle.innerText= "Worst 5";
    $worstcityDiv.appendChild($worstcitysubTitle);
</pre>


- <pre>
    $worstcityDiv.appendChild(worstCity);
    $container[0].appendChild($worstcityDiv);
</pre>


# classList 클래스 생성

- $worstcityDiv.classList.add('city');


# setAttribute 속성 생성

- worstCity.setAttribute('name','worstCity');
console.log(worstCity);





