

export const validateEmail=(email)=>
  /\S+@\S+\.\S+/.test(email) ? '' : '유효한 이메일 주소를 입력하세요.'
  /*
  /\S+@\S+\.\S+/.test(email) ?
    {isValid: true, message:'성공'} : 
    {isValid:false, message:'유효한 이메일 주소를 입력하세요.'};
  //*/

export const validatePassword=(password)=>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%/])[A-Za-z\d!@#$%/]{12,}$/.test(password)
    ? ''
    : '대문자, 소문자, 특수문자, 숫자 필수 포함, 12자 이상'
export const validateNickname=(nickname)=>
  nickname
    ?(nickname.length >= 2 ? '' : '닉네임은 2자 이상이어야 합니다.')
    :'';
export const validatePasswordConfirm=(confirmPass, originPass)=>
  originPass
    ?(confirmPass===originPass
      ?''
      :'비밀번호가 일치하지 않습니다.')
    :'비밀번호를 먼저 입력하셔야 합니다.'

