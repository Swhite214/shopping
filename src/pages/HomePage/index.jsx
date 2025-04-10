import React, { useCallback, useState } from "react";
import './HomePage.css'
import PostCard from "@entities/post/PostCard";
import Button from "@shared/ui/Button"

const HomePage=()=>{
  const [count,setCount]=useState(0);
  const [posts, setPosts]=useState([
    {
      id: 1,
      liked: false,//현재사용자가 좋아요를 눌렀는지 여부
      imageUrl:'	https://cdn.pixabay.com/photo/2025/03/18/06/17/snowy-cabin-9477457_640.jpg',
      caption: '숲속의 오두막에서 조용히 참선하기 좋네요...',
      likes: 99,
      user:{
        username:'부타',
        profileImage: 'https://cdn.pixabay.com/photo/2016/11/02/11/08/monk-1791113_640.jpg'
      }
    },
    {
      id: 2,
      liked: false,//현재사용자가 좋아요를 눌렀는지 여부
      imageUrl:'	https://cdn.pixabay.com/photo/2025/03/18/06/17/snowy-cabin-9477457_640.jpg',
      caption: '사진은 똑같지만 다른데이터임',
      likes: 100,
      user:{
        username:'다른사람',
        profileImage: 'https://cdn.pixabay.com/photo/2016/11/02/11/08/monk-1791113_640.jpg'
      }
    }
  ])
  console.log("HomePage가 로딩되었습니다.");
  //Reat Memoization: 함수 컴포넌트의 렌더링 성능을 최적화하는 데 사용
  //기억을 하고있다가 변경된부분만 처리
  //React.memo:부모-자식(props(매개변수의 열할->변경이되면 렌더링됨)), useMemo(), useCallback()
  const handleLike=useCallback((postId)=>{
    console.log(postId);
    //서버에 전달은 생략
    //프론트 수정
    setPosts(prevPosts=>
      prevPosts.map(post=>{
        //클릭한 post를 찾음
        if(postId == post.id){
          const toggleLiked=!post.liked;
          return {
            ...post,//수정전 객체정체
            liked: toggleLiked,
            likes: toggleLiked? post.likes+1 : post.likes-1,
          }
        }//if
        //id가일치하지 않은것은 수정없이 리턴
        return post;
      })//map    
      )
    },[])//의존성 배열이 비어있어 컴포넌트가 리렌더링되어도 함수가 재생성되지 않음
  const handleIncrement=()=>{
    setCount(count+1);
  }
  return (
  <>
    <h1>메인페이지</h1>
    <div className="home-page">
      <div className="feed-container">
        {posts.map(post=>
          <PostCard key={post.id}  post={post} onLike={handleLike}/>
        )}
        
      </div>
      <div className="sidebar-container">
        {/*<SuggestionPanel />*/}
      </div>
    </div>
  </>)
}
export default HomePage;