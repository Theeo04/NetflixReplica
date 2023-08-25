import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

export default function RegisterPage({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  //Random account avatar
  const avatars = [
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117",
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvrTO0ibRjtv-gT2p3GJX8C7R5qoJCBtE2oz2gUU3N9e1djUlcpnPVyTG8yFFMaIUUnM&usqp=CAU",
    "https://ih0.redbubble.net/image.618427277.3222/raf,360x360,075,t,fafafa:ca443f4786.jpg",
    "https://i.pinimg.com/474x/1b/71/b8/1b71b85dd741ad27bffa5c834a7ed797.jpg",
  ];

  function generateRandomNumber() {
    const randomNumber = Math.random();
    const scaledNumber = Math.floor(randomNumber * 6);
    return scaledNumber;
  }

  const randomNum = generateRandomNumber();

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoggedIn(true);

        // Update the user profile firebase --version 12.4.8
        return updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: avatars[randomNum],
        });
      })
      .then(() => {
        console.log("Profile updated successfully");
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
