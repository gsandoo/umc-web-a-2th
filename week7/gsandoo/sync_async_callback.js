// 동기 = synchronous : 순서대로 일을 처리 하는 방식
// 비동기 = asynchronous: 순서대로 일을 처리하지 않고 빨리 처리할 수 있는 대로 일을 처리 하는 방식


// console.log(1)
// setTimeout(()=>{
//   console.log(2)
// },10)
// console.log(3)
// setTimeout(()=>{
//   console.log(4)
// },20)
// console.log(5)
// setTimeout(()=>{
//   console.log(6)
// },30)
// console.log(7)
// setTimeout(()=>{
//   console.log(8)
// },10)
// console.log(9)
// setTimeout(()=>{
//   console.log(10)
// },20)


// setTimeout 의 경우 동기적 코드가 다 끝나고 나서 실행되기때문에 정확히 몇 초 뒤에 실행되는지는 알 수 없다 


// 콜백함수 : 함수 안에 인자로 들어가 있는 함수 , 특정 시간뒤에 호출되어 실행되는 함수




// function syncFunc(syncCallback){
//   syncCallback();
// }
// function asyncFunc(asyncCallback){
//   setTimeout(asyncCallback,5000);
// };

// syncFunc(()=> console.log("sync"))
// asyncFunc(()=> console.log("async"))




// 콜백함수를 쓰는이유 첫번째 : 동기와 비동기 코드를 같이 작성할 때 , 

// function syncFunc(syncCallback){
//   syncCallback();
// }
// function asyncFunc(asyncCallback){
//   asyncCallback();
//   setTimeout(()=>{
//     syncFunc(()=> console.log("sync"))
//   },5000);
// };

// // syncFunc(()=> console.log("sync"))
// asyncFunc(()=> console.log("async"))



//===================================================================


// 콜백함수 : 함수 안에 인자로 들어가 있는 함수 , 특정 시간뒤에 호출되어 실행되는 함수

//callback 


const posts = [
    {post_id:1 , post_title : "첫번째 글"},
    {post_id:2 , post_title : "두번째 글"},
    {post_id:3 , post_title : "세번째 글"},
  ];
  
  const comments = [
    {post_id : 1 , comment_id:1 , comment : "첫번째글 코멘트"},
    {post_id : 2 , comment_id:1 , comment : "두번째글 코멘트"},
    {post_id : 2 , comment_id:2 , comment : "두번째글 코멘트"},
    {post_id : 2 , comment_id:3 , comment : "두번째글 코멘트"},
    {post_id : 3 , comment_id:1 , comment : "세번째글 코멘트"},
    {post_id : 3 , comment_id:2 , comment : "세번째글 코멘트"},
  ]
  
  const postNum = 5  ;
  
  const getPost = (id , onSuccess, onError)=>{
    setTimeout(()=>{
      const post = posts.find(post=> post.post_id=== id );
      if (post){
        onSuccess(post.post_id); // 여기서 post_id 값을 넘겨받음
      }else{
        onError("찾는 포스트가 없습니다.")
      } 
    }, 3000);
  }
  
  const getComments=(post_id , onSuccess, onError)=>{
    setTimeout(()=>{
      const result = comments.filter(comment=> comment.post_id=== post_id );
      if (result.length > 0){
        onSuccess(result);
      }else{
        onError("찾는 포스트의 코멘트가 없습니다.")
      } 
    }, 4000);
  } 
  
  getPost(
    postNum,
    (postId)=> {
      console.log('post' , postId)
      getComments(
      postId,
        (result)=>{
          console.log("comments:", result);
        },
        (message)=>{
          console.log(message);
        }
      )
    },
    (message)=>{
      console.log(message);
    }
  )
  // callback 지옥 : 가독성이 떨어지고 유지보수가 어려움.
  
  
  