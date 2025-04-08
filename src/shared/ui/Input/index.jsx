import React, { useState } from 'react';
import './Input.css'

const Input = ({
  ref,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  onClick,
  onBlur,
  guide,
  guideClassName='input-guide-message',
  error,
  showErrorMessage = true, // 에러 메시지 표시 여부
  errorClassName = 'input-error', // 커스터마이징 가능
  icon,
}) => {
  const errorClass = error ? errorClassName : '';
  const [showGuide,setShowGuide]=useState(false);
  const handleBlur=(e)=>{
    setShowGuide(false);
    if(onBlur)onBlur(e);
  }
  return (
    <div className="input-container">
      <div className={`input-wrap ${errorClass}`}>
        {icon && <span className="input-icon">{icon}</span>} {/* 아이콘 추가 */}
        <input
          ref={ref}
          type={type}
          name={name}
          className={`input`}
          placeholder={placeholder}
          value={value}
          onChange={(e)=>{if(onChange)onChange(e)}}
          onClick={onClick}
          onFocus={()=>setShowGuide(true)}
          onBlur={handleBlur}
        />
      </div>
      {showGuide && guide && (<div className={`${guideClassName}`}>{guide}</div>)}
      {error && showErrorMessage && (
        <div className={`${errorClass}-message`}>{error}</div>
      )}
    </div>
  );
};

export default Input;