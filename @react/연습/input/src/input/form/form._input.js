import react from 'react';

const FormInput = () => {

  return(
    <form>
      <input type='id' placeholder='아이디를 입력하세요'/>
      <input type='password'placeholder='비밀번호를 입력하세요 '/>
      <button type='submit'>로그인</button>
    </form>
  )
}

export default FormInput; 