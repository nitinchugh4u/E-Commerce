import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase/FirebaseConfiguration";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    signInWithEmailAndPassword(auth, details.email, details.password)
      .then((data) => {
        console.log(data, "authdata");
        console.log("yoooooooooo");
        console.log("Login successful");
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert(error.code);
      });

    setDetails({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex h-screen w-full justify-center gap-2   bg-slate-400 ">
      <div className="  w-4/5   rounded-md flex flex-col  justify-center items-center px-6  bg-slate-200 ">
        <h1 className="  font-bold  p-4 text-2xl">
          Welcome to the world of Style Collection !
        </h1>
        <img
          className="rounded-full  "
          src="https://wallpapercave.com/wp/wp1877585.jpg"
          alt=""
        />
      </div>

      {loading && (
        <div role="status" className="absolute top-[427px]">
          <svg
            aria-hidden="true"
            className="inline w-10 h-10text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}

      <div className=" bg-slate-300 rounded-md      flex flex-col justify-center items-center  ">
        <h1 className=" p-2  text-xl font-bold flex justify-center     ">
          Sign in
        </h1>
        <h3 className="font-serif p-2 mt-2   text-gray-700">
          for Latest trends, exciting offers and everything Style Collection®!
        </h3>

        {/* <form onSubmit={(e)=>handleSubmit(e,isLogin ? "signIn" : "signUp")} >
             <input className="border-black border-2 rounded-md mt-2 gap-2 " name ="email" type="email " placeholder="Enter Email" />
             <input className="border-black border-2 rounded-md mt-2 " name="password" type="password" placeholder="Enter Password" />
              <button>{isLogin ? "signIn" : "signUp"}</button>
               </form> */}

        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) =>
              setDetails((prev) => ({ ...prev, email: e.target.value }))
            }
            className="border-black border-2 rounded-md mt-2 gap-2 "
            value={details.email}
            name="email"
            type="email "
            placeholder="Enter Email"
          />

          <input
            onChange={(e) =>
              setDetails((prev) => ({ ...prev, password: e.target.value }))
            }
            className="border-black border-2 rounded-md mt-2 "
            value={details.password}
            name="password"
            type="password"
            placeholder="Enter Password"
          />
          {/* <div> */}
          <button className="flex justify-center ">Sign in </button>
          {/* </div> */}
        </form>

        <p className="text-sm font-sans text-black  dark:text-gray-400">
          Don’t have an account yet?{" "}
          <a
            href="#"
            className="font-medium text-red-600   hover:underline dark:text-primary-500"
          >
            Sign up
          </a>
        </p>

        {/* <input className="border-black border-2 rounded-md mt-2 " type="text " placeholder="Enter Mobile Number" /> */}

        {/* <input onChange={(e)=>handleSubmit(e)} className="border-black border-2 rounded-md mt-2 " type="number" placeholder="Enter Mobile Number" /> */}

        <div className=" flex flex-col justify-center items-center gap-2 p-2 mt-2 ">
          <Link to="/SignUp">
            {" "}
            <button className="bg-white   text-gray-700 rounded-md p-2">
              CONTINUE
            </button>
          </Link>
          {/* <button className="bg-white rounded-md p-2" >CONTINUE</button>/ */}

          <span className="text-gray-500">OR</span>

          <button className=" bg-white text-gray-700 rounded-md p-2 mt-2.5  ">
            CONTINUE WITH EMAIL
          </button>
          <button className="bg-white text-gray-700 rounded-md p-2 w-52 mt-2.5 ">
            GOOGLE{" "}
          </button>

          <button className="bg-white text-gray-700 hover:1877F2 rounded-md p-2 w-52 mt-2.5">
            FACEBOOK
          </button>
        </div>
      </div>
    </div>
  );
};
