import React, { useContext, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../firebase/fbconfig";
import { GlobalContext } from "../pages/_app";
import { useRouter } from "next/router";

const StudentRegisterForm = () => {
  const router = useRouter();
  const { setCurrentUser } = useContext(GlobalContext);
  const studentsCol = "students";
  const [activeAccount, setActiveAccount] = useState(true);
  const [loginNumber, setLoginNumber] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regNo, setRegNo] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  async function login() {
    await getDocs(
      query(
        collection(db, studentsCol),
        where("registration", "==", loginNumber.toUpperCase()),
        where("password", "==", loginPassword)
      )
    ).then((docs) => {
      if (!docs.empty) {
        alert("ok");
        docs.forEach((doc) => {
          console.log(doc.data());
          setCurrentUser(doc.data());
          router.push("/classes");
        });
      } else {
        alert("invalid credentials , try again");
        setLoginNumber("");
        setLoginPassword("");
      }
    });
  }
  async function register() {
    if (passMatch() != "passwords do not match") {
      await addDoc(collection(db, studentsCol), {
        registration: regNo.toUpperCase(),
        name: name.toUpperCase(),
        email: email.toLowerCase(),
        phone: phoneNo.toString(),
        password: password,
        created: serverTimestamp(),
        verified: false,
      })
        .then(() => {
          alert("Registration Sucessful");
          setActiveAccount(true);
        })
        .catch((e) => {
          alert(e);
        });
    } else {
      alert("ERROR:Kuna ufala umefanya , try again !");
    }
  }

  function passMatch() {
    if (!(password === passConfirm)) {
      return "passwords do not match";
    }
  }
  return (
    <div className=" flex flex-col items-center gap-2">
      {activeAccount && (
        <section className="login flex flex-col  items-center gap-2">
          <input
            value={loginNumber}
            onChange={(e) => setLoginNumber(e.target.value)}
            type="text"
            placeholder="REGISTRATION NUMBER "
            className="input  input-primary "
          />
          <input
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            type="password"
            placeholder="PASSWORD "
            className="input  input-primary"
          />
          <button onClick={login} className="btn btn-primary w-full ">
            LOGIN
          </button>
          <button
            onClick={() => setActiveAccount(false)}
            className=" hover:scale-[1.2] p-1"
          >
            <p className="text-primary border-b-4 border-primary">
              No account ? Click to create one
            </p>
          </button>
        </section>
      )}
      {!activeAccount && (
        <section className="login flex flex-col  items-center gap-2">
          <p className="text-primary"> FILL THE FORM BELOW TO REGISTER </p>

          <input
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            type="text"
            placeholder="REGISTRATION NUMBER "
            className="input  input-primary"
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="FULL NAME "
            className="input  input-primary"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="EMAIL ADDRESS"
            className="input input-primary"
          />
          <input
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            type="tel"
            placeholder="PHONE NUMBER"
            className="input input-primary"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="PASSWORD "
            className="input  input-primary"
          />
          <input
            value={passConfirm}
            onChange={(e) => {
              setPassConfirm(e.target.value);
              passMatch();
            }}
            type="password"
            placeholder="CONFIRM PASSWORD "
            className="input  input-primary"
          />
          <p className=" text-error">{passMatch()}</p>
          <button onClick={register} className="btn btn-primary w-full ">
            REGISTER
          </button>
        </section>
      )}
    </div>
  );
};

export default StudentRegisterForm;
