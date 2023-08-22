import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function RegisterPage({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoggedIn(true); // Setează starea pentru autentificare ca "true"
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center text-[50px] text-white font-extrabold ">
        Unlimited movies, TV shows, and more
      </h2>
      <p className="text-white pb-[55px] text-[21px] ">
        Watch anywhere. Cancel anytime.
      </p>
      <div className="flex flex-col w-[500px] space-y-3 bg-black rounded-2xl items-center justify-center">
        <div className="flex space-x-4 mt-8 ml-3">
          <p className="text-white pr-[21.5px] font-[620]">Username: </p>
          <input
            className="custom-input"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex">
          <p className="text-white pr-5 font-[620]">Email Address: </p>
          <input
            className="custom-input"
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex">
          <p className="text-white mr-8 pr-[18px] font-[620] ">Password: </p>
          <input
            className="custom-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="text-white pb-4 pt-5 font-[700] text-[20px]"
          onClick={signUp}
        >
          Create Your Account !
        </button>
      </div>
    </div>
  );
}
