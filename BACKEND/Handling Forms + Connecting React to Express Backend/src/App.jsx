//React hook form --> React Hook Form is a library that makes handling forms in React much easier and more efficient. Without it, you often end up writing a lot of repetitive code to manage form state, validation, and errors.



import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,

    formState: { errors, isSubmitting },
  } = useForm()


  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d = 1000)
    })
  }


  const onSubmit = async (data) => {
    // await delay(2) //simulating network delay
    let r = await fetch("http://localhost:3000/", {method: "POST",
      headers: {"Content-Type": "application/json", },body: JSON.stringify(data),
    });
    let res = await r.text()
    console.log(data, res)
    // if(data.username !== "shubham"){
    //   setError("myform",{message:"your form is not in good order because credentials are invalid"})
    // }
    // if(data.username === "Rohan"){
    //   setError("Blocked",{message:"This User is Blocked"})
    // }
  }

  return (
    <>
      {isSubmitting && <div>Loading....</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", {
            required: { value: true, message: "This field is required" }, minLength: {
              value: 3, message: "Username must be at least 3 characters",
            }, maxLength: {
              value: 8, message: "Username cannot exceed 8 characters",
            }
          })} type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password", {
            required: { value: true, message: "This field is required" }, minLength: {
              value: 3, message: "Password must be at least 3 characters",
            }, maxLength: {
              value: 8, message: "Password cannot exceed 8 characters",
            }
          })} type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.Blocked && <div className='red'>{errors.Blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
