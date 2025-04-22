import React, { useContext, useEffect, useRef, useState } from 'react';
import './AuthForm.css'
import Input from "@shared/ui/Input"
import Button from "@shared/ui/Button"
import { Mail,LockKeyhole } from 'lucide-react';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const LoginForm=()=>{
  const inputRef=useRef(null);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const {setUser} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  const handleLogin= async(e)=>{
    e.preventDefault();
    setError('');
    try{
      const response = await fetch('http://localhost:8080/api/login',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, pass}),
        credentials: 'include',
      });
      if(response.ok){
        const data = await response.json();
        setUser(data);
        navigate('/');
      } else{
        throw new Error('로그인 실패');
      }
    } catch (error){
      setError("로그인에 실패했습니다. 이메일 또는 비밀번호를 확인해주세요")
    }
  }

  return (<>
    <h1>로그인페이지</h1>
    <form className='auth-form login-form' onSubmit={handleLogin}>
      <dl>
        <dt className='sr-only'><label>아이디</label></dt>
        <dd><Input ref={inputRef}
         icon={<Mail color="#999" size={16} />}
          placeholder="이메일" 
          value = {email} 
          onChange = {(e)=> setEmail(e.target.value)}
          /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>비밀번호</label></dt>
        <dd><Input type="password" 
        icon={<LockKeyhole color="#999" size={16} />} 
        placeholder="비밀번호"  
        value = {pass}
        onChange = {(e)=> setPass(e.target.value)}
        /></dd>
      </dl>
      {error && <p>{error}</p>}
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