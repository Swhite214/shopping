import { signupRequst } from "../api/useSignupApi";

const useSignupSubmit = ({
  formData,
  errors,
  handlers: {setIsResponseData,setResposeData,setIsError}

}) => {
  const handleSubmit = async () => {
    console.log(">>>", errors);
    const isSuccess = Object.values(errors).every(error => error.length === 0);
    if (!isSuccess) return;

    try {
      const data = await signupRequst(formData);
      console.log("회원가입 처리완료!")
      setResposeData(data);
      setIsResponseData(true);
    } catch (error) {
      console.log("회원가입 실패!", error)
      setIsError(true);
    }
  }//handleSubmit
  return handleSubmit;
}

export default useSignupSubmit;