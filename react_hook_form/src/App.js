import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const password = useRef();
  password.current = watch("password");
  const onSubmit = (data) => {
    console.log(data);
    // axios.post(`/api/`,data)
  };
  // watch는 input에 들어오는 입력값을 onchange처럼 실시간으로 볼 수 있다.
  console.log(watch("email"));

  return (
    <>
      <h2 style={{color: 'white'}}>회원가입</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/******************* 이메일 *******************/}
        <label>이메일</label>
        <input
          name="email"
          placeholder="이메일을 입력해주세요."
          ref={register({ 
            required: true, 
            pattern: /^\S+@\S+$/i
          })} 
        />
        {errors.email && <p>이메일을 입력해주세요.</p>}

        {/******************* 이름 *******************/}
        <label>이름</label>
        <input
          name="name"
          placeholder="이름을 입력해주세요."
          ref={register({ 
            required: true, 
            maxLength: 10 
          })}
        />
        {errors.name && errors.name.type === 'required' 
          && <p>이름을 입력해주세요.</p>}
        {errors.name && errors.name.type === 'maxLength' 
          && <p>이름을 10글자 이내로 입력해주세요.</p>}

        {/******************* 비밀번호 *******************/}
        <label>비밀번호</label>
        <input
          name="password"
          placeholder="비밀번호를 입력해주세요."
          ref={register({ 
            required: true, 
            minLength: 10 
          })}
        />
        {errors.password && errors.password.type === 'required' 
          && <p>비밀번호를 확인해주세요.</p>}
        {errors.password && errors.password.type === 'minLength' 
          && <p>비밀번호를 10글자 이상 입력해주세요.</p>}
        <label>비밀번호 확인</label>
        <input
          name="confirmPassword"
          placeholder="비밀번호를 다시 입력해주세요."
          ref={register({ 
            required: true, 
            validate: (value) =>
              value === password.current 
          })}
        />
        {errors.confirmPassword && errors.confirmPassword.type === 'required' 
          && <p>비밀번호를 확인해주세요.</p>}
        {errors.confirmPassword && errors.confirmPassword.type === 'validate' 
          && <p>비밀번호가 일치하지 않습니다.</p>}
        <input type="submit" value="로그인"/>
      </form>
    </>
  );
}

export default App;
