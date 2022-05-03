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
  
  const postNum = 1  ;
  





//promise : pending(진행중) , fullfilled(성공적으로 끝낸 상태) , rejected (실패로 끝난 상태)

// new Promise(resolve , reject)


const getPost = (id)=>{
    return new Promise((resolve, reject)=>{
     setTimeout(()=>{
      const post = posts.find(post=> post.post_id=== id );
      if (post){
        resolve(post.post_id); // 여기서 post_id 값을 넘겨받음
      }else{
        reject("찾는 포스트가 없습니다.")
      } 
    }, 3000);
  }) 
    }
    
  
  const getComments=(post_id )=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
      const result = comments.filter(comment=> comment.post_id=== post_id );
      if (result.length > 0){
        resolve(result);
      }else{
        reject("찾는 포스트의 코멘트가 없습니다.")
      } 
    }, 4000);
  })        
    }
   
  
  // .then: 성공했을 떄
  
  // .catch: 실패했을 떄
  
  
  // getPost(postNum)
  // .then(postId =>{
  //   console.log("posts:", postId)
  //       return getComments(postId) 
  // })
  // .then(result=>{
  //   console.log("comments:", result)
  // })  
  // .catch(message=> {
  //   console.log(message)
  // })
  
  
  //=============================================================================
  
  // async await 
  
  async function getResult(){
    const postIdResult = await getPost(postNum);
    console.log(postIdResult)
  }
  getResult();