import React from 'react';
import './Button.css'

//jsx 함수로 태그를 만드는것
//Props : React 컴포넌트에 속성
//부모컴포넌트->자식컴포넌트에 전달할 때 사용
//읽기전용이므로 자식에서는 수정불가
//함수의 매개변수처럼 사용된다.
//props 구조 분해 할당 하면 객체명 생략가능
//props.text ,props.variant
//{text,variant='default'}
const Button=({
  type='button', //
  text,
  variant='default',
  size='medium',
  disabled=false,
  fullWidth=false,
  border=false,
  onClick,
})=>{
  // `백틱(tab키 위에있는 키) 문자열 내부에 변수적용가능 ${변수}`
  const widthClass=fullWidth?'btn-full-with':'';
  const borderClass=border?'btn-border':'';

  return (
    <button 
      type={type}
      className={`btn btn-${variant} ${widthClass} btn-${size} ${borderClass}`} 
      disabled={disabled} 
      onClick={onClick}
      
      >{text}</button>
  )
}

export default Button;