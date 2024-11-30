import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducers/user";
import { useRouter } from "next/router";

function Signin() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.value);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const SignInBtn = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log(data);
          dispatch(
            login({
              username: signInUsername,
              token: data.token,
              name: data.name,
            })
          );
          setSignInUsername("");
          setSignInPassword("");
        }
      });
  };

  console.log(user);
  if (user.token) {
    router.push("/accueil");
  }

  return (
    <>
      <Button type="primary" danger onClick={showModal}>
        Signin
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
          <h1>Connect to Tattoo Studio</h1>
          <input
            type="text"
            onChange={(e) => setSignInUsername(e.target.value)}
            value={signInUsername}
            placeholder="Username"
          ></input>
          <input
            type="password"
            onChange={(e) => setSignInPassword(e.target.value)}
            value={signInPassword}
            placeholder="Password"
          ></input>
          <button onClick={() => SignInBtn()}>Signin</button>
        </div>
      </Modal>
    </>
  );
}

export default Signin;
