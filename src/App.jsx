import React, { useState } from "react"
import Button from "./shared/ui/Button"
import Input from "./shared/ui/Input";


function App() {
  const handleBtn=()=>{
    alert("안녕하세요");
  }

  const [formData, setFormData] = useState({ username: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // 정규식: username은 영문자와 숫자로 3자 이상, password는 영문, 숫자 포함 6자 이상
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;  

    // 유효성 검사: username은 최소 3자, password는 최소 6자
    setErrors((prev) => {
      if (name === 'username' && !usernameRegex.test(value)) {
        return { ...prev, username: '이름은 영문자 또는 숫자 포함 3자 이상이어야 합니다.' };
      } else if (name === 'password' && !passwordRegex.test(value)) {
        return { ...prev, password: '비밀번호는 영문과 숫자를 포함한 6자 이상이어야 합니다.' };
      }
      return { ...prev, [name]: '' }; // 조건을 만족하면 오류 메시지 제거
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    console.log("제출된 데이터:", formData);
  };

  return (
    <>
    {/* 사용자가 태그를 만들어 논것을 사용 */}
      <Button variant={'primary'} text={'눌러보세요'} onClick={handleBtn}  />
      <Button text={'취소'} size={'large'} border={true} />

      <Button text={'비활성화버튼'} disabled={true} fullWidth={true}/>

      <Button type={'submit'} text={'전송'} variant={'primary'} fullWidth={true}/>
      <button>기존버튼</button>
      <form onSubmit={handleSubmit}>
      <Input        
        name="username"
        placeholder="이름을 입력하세요"
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
      />
      <Input        
        type="password"
        name="password"
        placeholder="비밀번호을 입력하세요"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
        <Button type="submit" text={'전송'}/>
      </form>
    </>
  )
}

export default App;
