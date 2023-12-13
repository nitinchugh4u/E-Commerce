
import React from "react";
// import { Link } from "react-router-dom";
import { database } from "./Firebase/FirebaseConfiguration";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";




// import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { database } from "./Firebase/FirebaseConfiguration";
// import {createUserWithEmailAndPassword} from 'firebase/auth'
import { LogInContext } from "../../Context/LoginORLogout";
import { useContext } from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";





export const SignUp = ()=>{

  const { isLogin, setIsLogin } = useContext(LogInContext);



  const history = useNavigate()

  
const[details,setDetails] = useState({

  name: "",  
  email: "",
  password: ""

})



// console.log("hello")


  const onHandelSignUp=(e)=>{
      e.preventDefault()
      


    

// const auth = getAuth();
// createUserWithEmailAndPassword(database, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//     console.log("user",user)
//   })
  
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("error",errorcode,errorMessage)
//     // ..
//   });

console.log("hello")


createUserWithEmailAndPassword(database,details.email,details.password).then(data=>{
      console.log(data,"authdata")
      setIsLogin(!isLogin)
      // setCheck(!check)
      // setIsLogin(true)
      
      history('/')

    }
    ).catch((error)=>{
      alert(error.code)
      console.log("error")
      setIsLogin(true)
  //     // setIsLogin(false)
  //     setIsLogin(!isLogin)

      
    })
}
    

    return(
        <div className=" bg-slate-200 h-screen w-screen flex justify-center gap-8 items-center ">

            <div className="bg-slate-300 w-1/2">
                <img className="" src=
                // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhMSALL4tJGBPK_gZ0Cni-JSb7DTl34E-9A&usqp=CAU"
                 "https://t3.ftcdn.net/jpg/02/06/04/60/360_F_206046054_B8YrFuOlIv93L1znF8bM8kmkEksNdpDf.jpg"
                 alt="" />

            </div>

            <div className="bg-slate-400 p-4 w-1/3  rounded-md ">

            <h1  className="p-2  text-xl  font-extrabold" >Sign Up </h1>
            <h3 className="p-2  font-serif">Hi new buddy, let's get you started with the Style Collection !</h3>
            <form>
              <div className="">
                {/* <label className="w-[30%] inline-block" htmlFor="">Username: </label>
                <input className=" w-3/5 rounded-md m-2 border-black border-2 " type="text" placeholder="Enter userName" />
                <br />
                
                <label className="w-[30%] inline-block" htmlFor="">Phone: </label>
                <input className=" w-3/5 rounded-md m-2 border-black border-2 " type="text" placeholder=" Enter Email" />
                <br /> */}

                <label className="w-[30%] inline-block" htmlFor="">Name: </label>
                <input  onChange={(e)=>setDetails((prev)=>({...prev,name:e.target.value}))}  className=" w-3/5 rounded-md m-2 border-black border-2 " value={details.name} type="text" placeholder=" Enter Phone " />
                <br />

                <label className="w-[30%] inline-block" htmlFor="">Email: </label>
                <input  onChange={(e)=>setDetails((prev)=>({...prev,email:e.target.value}))} className=" w-3/5 rounded-md m-2 border-black border-2 "  value={details.email} type="text" placeholder=" Enter Phone " />
                <br />

                <label className="w-[30%] inline-block" htmlFor="">Password: </label>
                <input  onChange={(e)=>setDetails((prev)=>({...prev,password:e.target.value}))} className="w-3/5 rounded-md m-2 border-black border-2 "  value={details.password} type="text" placeholder="Enter Password " />

                
                <div className="  mt-3 flex w-full p-2 rounded-md justify-center items-center">
                  
                  {/* <Link to= "/"> */}
                     <button onClick={onHandelSignUp} className=" bg-[#fff]  p-2 rounded-md"> SignUp  </button>

 {/* </Link> */}
                  {/* <button className=" bg-red-500 w-1/3 p-2 rounded-md">  PROCEED </button> */}
                
                </div>


              </div>

            </form>
            </div>



            <div>


            </div>





        
        </div>


    )


}
