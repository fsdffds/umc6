import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  .login {
    display: flex;
    flex-direction: column;
    padding: 50px;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  input {
    width: 600px;
    height: 50px;
    border-radius: 20px;
    border: none;
    margin-top: 30px;
  }
  small {
    margin-top: 10px;
    color: red;
  }
  button {
    width: 600px;
    height: 55px;
    border-radius: 20px;
    border: none;
    margin-top: 30px;
    :disabled {
      background-color: white;
    }
    :enabled {
      background-color: yellow;
    }
}
`;

function Login() {

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/');
    alert("회원가입 성공");
  };

  const {
    register,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm({mode: "onSubmit"});

  return (
    <Container>
      <div className="login">
        <h1>로그인 페이지</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="id"></label>
          <input id="id"
          type="text"
          placeholder="아이디를 입력해주세요" 
          {...register("id", {
            required: "아이디를 입력해주세요!",
          })}/>
          {errors.id && <small>{errors.id.message}</small>}
          <label htmlFor="pw"></label>
          <input id="pw" 
          type="password" 
          placeholder="비밀번호를 입력해주세요" 
          {...register("pw", {
            required: "비밀번호는 영어, 숫자, 특수문자를 포함해주세요.",
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/,
              message: "비밀번호는 영어, 숫자, 특수문자를 포함해주세요."
            },
            minLength: {
              value: 4,
              message: "최소 4자리 이상 입력해주세요."
            },
            maxLength: {
              value: 12,
              message: "최대 12자리까지 입력 가능합니다."
            }
          })}/>
          {errors.pw && <small>{errors.pw.message}</small>}
          <button type="submit">로그인</button>
        </form>
      </div>
    </Container>
  );
}

export default Login;