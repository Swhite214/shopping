import React, { useEffect, useRef } from 'react';
import './AuthForm.css'
import Input from "@shared/ui/Input"
import Button from "@shared/ui/Button"
import { Mail,LockKeyhole } from 'lucide-react';


const LoginForm=()=>{
  const inputRef=useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (<>
    <h1>로그인페이지</h1>
    <form className='auth-form login-form'>
      <dl>
        <dt className='sr-only'><label>아이디</label></dt>
        <dd><Input ref={inputRef} icon={<Mail color="#999" size={16} />} placeholder="이메일" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>비밀번호</label></dt>
        <dd><Input icon={<LockKeyhole color="#999" size={16} />} placeholder="비밀번호" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>로그인버튼</label></dt>
        <dd>
          <Button type="submit" text="로그인" fullWidth={true}/>
        </dd>
      </dl>
    </form>
  </>)
}
export default LoginForm;