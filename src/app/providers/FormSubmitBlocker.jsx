import { useEffect } from "react";


const FormSubmitBlocker=({ children })=>{

  //전역적 상태관리->Redux or Zustand로 전역상태관리 할수 있음
  //테마상태 처리->전역적관리
  //인증관련 처리->전역적으로 관리가 필요
  useEffect(()=>{
    const preventSubmit=(event)=>{
      if(event.target.tagName==="FORM"){
        event.preventDefault();
        console.log("전역으로 관리하는 폼블럭커")
      }
    }

    window.addEventListener("submit", preventSubmit);
    return ()=>{
      window.removeEventListener("submit", preventSubmit);
    }
    
  },[]);

  return children;
}

export default FormSubmitBlocker;