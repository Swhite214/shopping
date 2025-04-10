import React from 'react';
import Button from '@shared/ui/Button'
import './SignupContent.css'

const SignupContent=({
  data, 
  onClose
})=>{
  return (
    <div>
      <p>회원가입이 성공적으로 완료되었습니다.</p>
      <div className="user-info">
        <dl>
          <dt>이메일 :</dt><dd>{data&&data.email}</dd>
        </dl>
        <dl>
          <dt>닉네임 :</dt><dd>{data&&data.nick}</dd>
        </dl>
      </div>
      <Button onClick={onClose} variant="primary" text="확인" fullWidth={true} />
    </div>
  )
}

export default SignupContent;