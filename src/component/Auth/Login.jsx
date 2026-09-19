import React from 'react'
import { useState } from 'react'

const Login = ({HandleLogin}) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

const submitHandler = (elem)=>{
    //  console.log(email)
    //  console.log(password)
     elem.preventDefault();
     HandleLogin(email , password)
     setemail('')
     setpassword('')
}

  return (
    <div className='bg-black flex h-screen w-full  items-center justify-center'>
      <div className='border-2 p-8 border-emerald-600 rounded-2xl'>

        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center' input = "text" >

                <input  
                value={email}
                onChange={(elem)=>{setemail(elem.target.value)}}
                 required
                 className='border-2 text-white border-emerald-600 outline-none bg-transparent rounded-full py-3 text-xl  px-5 mt-5 placeholder:text-white' 
                 type="email"
                 placeholder='Enter Your Email'
                 
                 />

                <input 
                value={password}
                onChange={(elem)=>{setpassword(elem.target.value)}}
                 required
                 className='border-2 text-white border-emerald-600 outline-none bg-transparent py-3 text-xl rounded-full px-5 placeholder:text-white mt-4'
                 type="password"
                 placeholder='Enter Your Password ' />


                <button  className='border-2 active:scale-90  text-white outline-none  rounded-full py-3 text-xl font-bold px-5 mt-8 bg-emerald-600 w-full'>Login</button>
        </form>

      </div>
     
    </div>
    
  )
}

export default Login
