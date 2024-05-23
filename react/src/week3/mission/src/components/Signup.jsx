import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

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
  }
  // button:enabled {
  //   background-color: yellow;
  // }
  .check {
    display: flex;
    margin-top: 50px;
    margin-bottom: 100px;
  }
  .check p {
    font-size: 24px;
    margin: 10px;
  }
  .Link {
    text-decoration: none;
    color: white;
    font-size: 24px;
    margin: 10px;
  }
`;

function Signup() {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    // alert("회원가입 성공");
    try {
      const res = await axios.post('http://127.0.0.1:5173/auth/signup', {
        name: data.name,
        email: data.email,
        age: data.age,
        username: data.id,
        password: data.pw,
        passwordCheck: data.pwcheck
      });
      if (res.status === 201) {
        alert("가입되었습니다!");
        localStorage.setItem('token', res.data.token);
        navigate('/login');
      }
    } catch (error) {
      if (error.res) {
        if (error.res.status === 409) {
          setError('id', {
            type: 'manual',
            message: "username already exists"
          });
        } else if (error.res.status === 400) {
          setError('pwcheck', {
            type: 'manual',
            message: "Passwords do not match"
          });
        }
      }
    }
  };

  const {
    register, 
    handleSubmit,
    watch,
    setError,
    formState: { isSubmitting, errors, isValid, isSubmitSuccessful }
  } = useForm({ mode: "onChange" });

  const pw = useRef();
  pw.current = watch("pw");

  return (
    <Container>
      <div className="login">
        <h1>회원가입 페이지</h1>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name"></label>
            <input id="name" 
            type="text" 
            placeholder="이름을 입력해주세요"
            {...register("name", {
              required: "이름을 입력해주세요!",
            })}/>
            {errors.name && <small>{errors.name.message}</small>}
            <label htmlFor="id"></label>
            <input id="id"
            type="text"
            placeholder="아이디를 입력해주세요" 
            {...register("id", {
              required: "아이디를 입력해주세요!",
            })}/>
            {errors.id && <small>{errors.id.message}</small>}
            <label htmlFor="email"></label>
            <input id="email" 
            type="email" 
            placeholder="이메일을 입력해주세요" 
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/,
                message: "이메일 형식에 맞게 다시 입력해주세요!"
              }
            })}/>
            {errors.email && <small>{errors.email.message}</small>}
            <label htmlFor="age"></label>
            <input id="age" 
            type="text" 
            placeholder="나이를 입력해주세요" 
            {...register("age", {
              required: "나이는 숫자로 입력해 주세요!",
              validate: {
                // integer: 정수, positive: 양수, numeric: 숫자
                numeric: (value) => !isNaN(value) || "나이를 입력해주세요",
                integer: (value) => Number.isInteger(parseFloat(value)) || "나이를 실수로 입력할 수 없습니다.",
                positive: (value) => parseFloat(value) > 0 || "나이는 양수여야 합니다.",
                adult: (value) => parseFloat(value) > 19 || "19세 이상만 사용 가능합니다!",
              }
            })}/>
            {errors.age && <small>{errors.age.message}</small>}
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
            <label htmlFor="pwcheck"></label>
            <input id="pwcheck" 
            type="password" 
            placeholder="비밀번호 확인" 
            {...register("pwcheck", {
              required: "비밀번호를 다시 입력해주세요!",
              validate: {
                wrong: (value) => value === pw.current || "비밀번호가 일치하지 않습니다."
              }
            })}/>
            {errors.pwcheck && <small>{errors.pwcheck.message}</small>}
            <button type="submit">제출하기</button>
            {/* <button type="submit" disabled={!isValid || isSubmitting}>제출하기</button> */}
          </form>
          {/* {serverError && <p>{serverError}</p>} */}
        </div>
        <div className="check">
          <Link to="/login" className="Link">이미 아이디가 있으신가요?</Link>
          <Link to="/" className="Link">로그인 페이지로 이동하기</Link>
        </div>
      </div>
    </Container>
  );
}

export default Signup;