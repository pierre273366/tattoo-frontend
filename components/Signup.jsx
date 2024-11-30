import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducers/user";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signUpName, setSignUpName] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const SignUpBtn = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: signUpName,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          dispatch(
            login({
              username: signUpUsername,
              token: data.token,
              name: signUpName,
            })
          );
          setSignUpName("");
          setSignUpUsername("");
          setSignUpPassword("");
          router.push("/accueil");
          console.log(data);
        }
      });
  };

  return (
    <>
      <Button type="primary" danger onClick={showModal}>
        Signup
      </Button>
      <Modal
        open={isModalOpen}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        width={350}
        styles={{
          body: { backgroundColor: "#FE5C38" },
          content: { backgroundColor: "#FD533A" },
        }}
      >
        <div>
          <h1>Create your account</h1>
          <input
            type="text"
            onChange={(e) => setSignUpName(e.target.value)}
            value={signUpName}
            placeholder="Name"
          ></input>
          <input
            type="text"
            onChange={(e) => setSignUpUsername(e.target.value)}
            value={signUpUsername}
            placeholder="Username"
          ></input>
          <input
            type="password"
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}
            placeholder="Password"
          ></input>
          <button onClick={() => SignUpBtn()}>Signup</button>
        </div>
      </Modal>
    </>
  );
}

export default Signup;
