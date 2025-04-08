import { useState } from "react";
import { validateEmail, validateNickname, validatePassword, validatePasswordConfirm } from "./validate";
import { checkEmailExist, checkNickExist } from "../api/useSignupApi";


//커스텀 훅(회원가입 폼 로직)
const useSinupForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    pass: '',
    passConfirm: '',
    nick: '',
  });
  const [errors, setErrors] = useState({email: '',
    pass: '',
    passConfirm: '',
    nick: '',});

  const validate=(name, value)=>{
    switch (name) {
      case 'email': return validateEmail(value);
      case 'pass': return validatePassword(value);
      case 'passConfirm': return validatePasswordConfirm(value, formData.pass);
      case 'nick': return validateNickname(value);
      default: return '유효한 값이 아니네요'
    }
  }
  
  const handleEmailCheck=async(email)=>{
    try {
      const result=await checkEmailExist(email);
      return result;
    } catch (error) {
      console.error("이메일 체크 실패", error);
      setErrors({...errors, email: '서버와 통신 실패'});
    }
    return false;
  }

  const handleNickCheck=async(nick)=>{
    try {
      const result=await checkNickExist(nick);
      return result;
    } catch (error) {
      console.error("닉네임 체크 실패", error);
      setErrors({...errors, nick: '서버와 통신 실패'});
    }
    return false;
  }

  //입력을 완료하면 유효성검사를 실시하고 실패시 에러메세지를 저장
  const handleBlur =async (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    //const error=validate(name, value);
    setErrors({ ...errors, [name]: validate(name, value) });
    //이메일은 중복체크
    if(name==='email'){
      const isEmailExist=await handleEmailCheck(value);
      console.log("서버가 응답>>>>",isEmailExist);
      if(isEmailExist){
        setErrors({...errors, email: '이미 존재하는 이메일'});
      }
    }
    //닉네임도 중복체크
    if(name==='nick'){
      const isNickExist=await handleNickCheck(value);
      if(isNickExist){
        setErrors({...errors, nick: '이미 존재하는 닉네임'});
      }
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  //useSinupForm사용시 외부파일에서 접근하도록
  return { formData, errors, handleBlur, handleChange }
}
export default useSinupForm;

