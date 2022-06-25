import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import AddClass from "../../components/AddClass";
import TutorRegister from "../../components/TutorRegister";
import { GlobalContext } from "../_app";

const AdminHome = () => {
  const router = useRouter();
  const { currentUser } = useContext(GlobalContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [tutor, setTutor] = useState<any>();
  return (
    <main>
      {currentUser.name && (
        <p className="text-error  w-full text-center">
          STUDENTS CANNOT BE ADMINS !!!
          <br />
          THIS FUNCTIONALITY IS LIMITED TO TUTORS ONLY
        </p>
      )}
      {!currentUser.name && !loggedIn && (
        <TutorRegister setLoggedIn={setLoggedIn} setTutor={setTutor} />
      )}

      {loggedIn && (
        <>
          {tutor.name}
          <section className="functions  grid grid-cols-12 gap-2 p-2">
            <section
              onClick={() => router.push("/add")}
              className=" btn bg-primary col-span-6 p-2  h-[20vh]"
            >
              ADD CLASS
            </section>
            <section
              onClick={() => {
                router.push("/attendance");
              }}
              className=" btn bg-primary col-span-6 p-2  h-[20vh]"
            >
              CHECK ATTENDANCE
            </section>
          </section>
        </>
      )}
    </main>
  );
};

export default AdminHome;
