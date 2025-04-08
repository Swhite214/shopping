

const BASE_URL = "http://localhost:8080";
//signup에 관련된 api요청코드만 분리해서 모아놓은파일
export const signupRequst = async (formData) => {
  const url = `${BASE_URL}/api/auth`
  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  }
  const response = await fetch(url, init);
  return response.json();
}

export const checkEmailExist = async (email) => {
  const response = await fetch(`${BASE_URL}/api/check-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email})
  });

  return response.json()
}

export const checkNickExist = async (nick) => {
  const response = await fetch(`${BASE_URL}/api/check-nick`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({nick})
  });

  return response.json()
}
