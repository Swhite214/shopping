import { Link } from "react-router-dom";
import Button from "@shared/ui/Button";
import "./AuthPage.css"
import { useState } from "react";
import LoginForm from "@features/auth/ui/LoginForm";
import SignupForm from "@features/auth/ui/SignupForm";

const AuthPage = () => {
  const [isLogin, setIsLogin]=useState(true);
  
  return (<>
    <h1>인증페이지</h1>
    <div className="auth-page">
      <div className="auth-wrap">
        <header id="auth-logo">
          <Link to={"/"}>ORANGE</Link>
        </header>
        <section id="auth-container">
          {isLogin?
          //처음에 보이는 영역
          (<LoginForm />)
          :
          (<SignupForm setIsLogin={setIsLogin} />)
          }
          {isLogin?(
          //처음보이는 영역
          <div className="auth-switch">
            <span>계정이 없으신가요?</span>
            <Button onClick={()=>setIsLogin(!isLogin)}  text={"가입하기"} border={true} fullWidth={true}/>
          </div>):
          (<div className="auth-switch">
            <span>계정이 있으신가요?</span>
            <Button onClick={()=>setIsLogin(!isLogin)} text={"로그인"} border={true} fullWidth={true}/>
          </div>)
          }
                
        </section>
        <footer id="auth-footer">
          <div>
            <span className='com'>
              <Link to={"/"}>ORANGE</Link>
            </span>
            <span className="text">All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>

  </>)
}
export default AuthPage;