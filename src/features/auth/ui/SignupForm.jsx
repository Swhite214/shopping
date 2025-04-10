
import React, { use, useState } from 'react';
import Input from "@shared/ui/Input"
import Button from "@shared/ui/Button"
import './AuthForm.css'
import { Mail, Lock, LockKeyhole, Tag } from 'lucide-react';
import useSinupForm from '../model/useSignupForm';
import Modal from '../../../shared/ui/Modal';
import SignupContent from './SignupContent';
import useSignupSubmit from '../model/useSignupSubmit';


const SignupForm = ({setIsLogin}) => {
  
  const {formData, errors, handleBlur, handleChange} = useSinupForm();

  const [isResposeData, setIsResponseData]=useState(false);
  const [resposeData, setResposeData]=useState(null);
  const [isError, setIsError]=useState(false);

 const handleSubmit=useSignupSubmit({
    formData,
    errors,
    handlers:{setIsResponseData,setResposeData,setIsError}
  });
  
  const hanldeCloseModal=()=>{
    setIsResponseData(false);
    setIsLogin(true)//로그인페이지로 이동
  }
  const hanldeErrorModal=()=>{
    setIsError(false);
  }
  //회원가입 버튼 활성화 여부
  const isSubmitDisabled=()=>{
    //모든 필수 항목이 입력되었는지
    const requiredFields=["email","pass","passConfirm"];
    //java-stream()
    const isAllFieldsFilled=requiredFields.every(field=>formData[field]?.length>0);
    //모든 에러가 없는지 확인
    const hasNoErrors=Object.values(errors).every(error=>error.length===0);

    return !isAllFieldsFilled || !hasNoErrors;
  }

  return (<>
    <h1>회원가입</h1>
    {/* 회원가입후 회원정보를 보여주는 모달 */}
    <Modal isOpen={isResposeData} onClose={hanldeCloseModal} title="회원가입 완료">
      <SignupContent data={resposeData} onClose={hanldeCloseModal} />
    </Modal>
    {/* 회원가입이 실패한경우 */}
    <Modal isOpen={isError} onClose={hanldeErrorModal} title="회원가입 실패">
      <div>
        <p>네트워크 통신이 정상적이지 않아 회원가입이 실패하였습니다.</p>
        <Button onClose={hanldeErrorModal} text="확인" variant="primary" />
      </div>
    </Modal>
  
    <form  onSubmit={handleSubmit} className='signup-form auth-form'>
      <dl>
        <dt className='sr-only'><label>이메일</label></dt>
        <dd>
          <Input
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            onBlur={handleBlur}
            guide={'이메일을 입력하세요'}
            icon={<Mail stroke='#999' size={16} />} name="email" placeholder="이메일" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>비밀번호</label></dt>
        <dd>
          <Input
            value={formData.pass}
            onChange={handleChange}
            error={errors.pass}
            onBlur={handleBlur}
            guide={'대문자,소문자,특수문자(!@#$%/),숫자 필수조합 12자 이상'}
            icon={<Lock stroke='#999' size={16} />} type="password" name="pass" placeholder="비밀번호" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>비밀번호 확인</label></dt>
        <dd>
          <Input
            value={formData.passConfirm}
            onChange={handleChange}
            error={errors.passConfirm}
            onBlur={handleBlur}
            guide={'비밀번호를 다시 한번 더 입력하세요'}
            icon={<LockKeyhole stroke='#999' size={16} />} type="password" name="passConfirm" placeholder="비밀번호 확인" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>[선택]닉네임</label></dt>
        <dd>
          <Input
            value={formData.nick}
            onChange={handleChange}
            error={errors.nick}
            onBlur={handleBlur}
            guide={'[선택]닉네임은 2글자 이상 입력하세요'}
            icon={<Tag stroke='#999' size={16} />} name="nick" placeholder="닉네임" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>회원가입버튼</label></dt>
        <dd>
          <Button type="submit" disabled={isSubmitDisabled()}  text="회원가입" fullWidth={true} />
        </dd>
      </dl>
    </form>
  </>)
}

export default SignupForm;