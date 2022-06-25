import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/fbconfig";
type props = {
  setLoggedIn: Function;
  setTutor: Function;
};

const TutorRegister = ({ setLoggedIn, setTutor }: props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const tutorsCol = "tutors";
  async function login() {
    await getDocs(
      query(
        collection(db, tutorsCol),
        where("phone", "==", phoneNumber),
        where("password", "==", password)
      )
    )
      .then((docs) => {
        if (!docs.empty) {
          docs.forEach((doc) => {
            setTutor(doc.data());
            alert(`welcome  ${doc.data().name}`);
            setLoggedIn(true);
          });
        } else {
          alert("invalid login , try again");
          setPhoneNumber("");
          setPassword("");
        }
      })
      .catch((e) => {
        alert(e);
      });
  }

  return (
    <div className=" w-full grid grid-col-12 gap-2 p-2">
      <input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        type="tel"
        placeholder="PHONE NUMBER"
        className=" input input-primary"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="PASSWORD"
        className=" input input-primary"
      />
      <button onClick={login} className="btn ">
        LOGIN
      </button>
    </div>
  );
};

export default TutorRegister;
