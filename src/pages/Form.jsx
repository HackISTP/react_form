import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import defaultImg from "../assets/image/default_image.png";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    image: "",
    nickName: "",
  });
  const [imagePreview, setImagePreview] = useState(defaultImg);
  const [signUpClassName, setsignUpClassName] = useState("active-form-slide");
  const [profilIsClassName, setprofilIsClassName] = useState("form-slide");

  const changeNextBtnClassName = () => {
    setsignUpClassName("left-form-slide");
    setprofilIsClassName("active-form-slide");
  };
  const changeBeforeBtnClassName = () => {
    setsignUpClassName("active-form-slide");
    setprofilIsClassName("form-slide");
  };
  return (
    <>
      <div
        style={{
          width: "400px",
          height: "700px",
          border: "1px solid #acacac",
          margin: "0 auto",
          padding: "50px",
          overflow: "hidden",
        }}
      >
        <StSginupForm
          style={{
            display: "flex",
            position: "relative",
            transition: "0.2s",
            left: 0,
          }}
        >
          <div>
            <div className={signUpClassName}>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="이메일을 입력해주세요"
                  value={form.email}
                  onChange={(event) =>
                    setForm(...form, { email: event.target.value })
                  }
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="비번을 입력해주세요"
                  value={form.password}
                  onChange={(event) =>
                    setForm(...form, { password: event.target.value })
                  }
                />
                <input
                  type="password"
                  id="passwordCheck"
                  name="passwordCheck"
                  placeholder="중복확인"
                  value={form.passwordCheck}
                  onChange={(event) =>
                    setForm(...form, { passwordCheck: event.target.value })
                  }
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    changeNextBtnClassName();
                  }}
                >
                  다음
                </button>
              </div>
            </div>
            <div className={profilIsClassName}>
              <div>
                <img
                  style={{
                    width: "10rem",
                    height: "10rem",
                    borderRadius: "100%",
                    position: "absolute",
                    left: "13rem",
                    top: "20.7rem",
                  }}
                  src={imagePreview}
                />
                <input
                  id="profileImg"
                  type="file"
                  value={form.image}
                  style={{
                    position: "absolute",
                    width: "3.7rem",
                    height: "3.7rem",
                    left: "19.3rem",
                    top: "27rem",
                    borderRadius: "100%",
                    background: "#888888",
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="nickName"
                  name="nickName"
                  placeholder="닉네임"
                  value={form.nickName}
                  onChange={(event) => setForm((event) => event.target.value)}
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => changeBeforeBtnClassName()}
                >
                  이전
                </button>
                <button type="submit">회원가입</button>
              </div>
            </div>
          </div>
        </StSginupForm>
      </div>
    </>
  );
};

export default Form;

const StSginupForm = styled.form`
  .active-form-slide {
    display: flex;
    flex-direction: column;
    height: 500px;
    min-width: 100%;
    transition: 0.5s;
    position: absolute;
    transform: translateX(0%);
  }
  .form-slide {
    display: flex;
    flex-direction: column;
    height: 500px;
    min-width: 100%;
    transition: 0.5s;
    position: absolute;
    transform: translateX(150%);
  }
  .left-form-slide {
    display: flex;
    flex-direction: column;
    height: 500px;
    min-width: 100%;
    transition: 0.5s;
    position: absolute;
    transform: translateX(-150%);
  }
`;
