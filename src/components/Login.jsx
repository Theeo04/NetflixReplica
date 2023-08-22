import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

export default function LoginPage({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    //Signed in
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoggedIn(true);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <h2 className="text-center pb-7 font-[600] text-[20px]">Sign In</h2>
      <div className="flex flex-col space-y-4 items-center">
        <div className="flex">
          <p className="pr-[25px] ">Email Address</p>
          <input
            className="border border-gray-150 px-2 py-1 rounded-xl"
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex">
          <p className="pr-[58px] pb-4 ">Password</p>
          <input
            className="border border-gray-150 px-2 py-1 rounded-xl"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="rounded bg-black h-8 w-[155px] text-white font-[500]"
          onClick={signIn}
        >
          Start Watching!
        </button>
      </div>
    </div>
  );
}
