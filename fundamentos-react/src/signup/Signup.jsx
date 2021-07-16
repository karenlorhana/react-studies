// import { render } from '@testing-library/react';
import React from 'react';
import { useHistory } from "react-router-dom";
import profile from '../images/profile-picture.png'
import { useForm } from "react-hook-form";


const Signup = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const history = useHistory()
  const onSubmit = data => {
    history.push('/Newuser')
  }

  
    
    return (

      <div className="container">
        <title>Criar conta</title>
        <img
          className="profile-picture"
          
          src={profile}
          alt=""
        ></img>
        <main className="container-signup">

          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Criar conta</h2>
            <div className="input-field">
              
              <input name="name" id="name" placeholder="Insira seu nome" type="text" {...register("name", { required: true })}/>
                       {errors.name && errors.name.type === "required" && <span>O campo acima é necessário!</span>}
              <div className="underline"></div>
     
              </div>
            <div className="input-field">
              <input name="email" id="email" placeholder="Insira seu email" type="email" {...register("email", { required: true })}/>
              {errors.email && errors.email.type === "required" && <span>O campo acima é necessário!</span>}
              <div className="underline"></div>
              
          </div>
         
            <div className="input-field">

              <input type="password" name="password" id="password" placeholder="Insira sua senha" {...register("password", { required: true })} />
              <div className="underline"></div>
              {errors.password && errors.password.type === "required" && <span>O campo acima é necessário!</span>}

            </div>
            <div className="submit-login">

              <button type="submit" className="submit-signup" >Criar conta </button>
              <div className="underline"></div>
            </div>
          </form>

        </main></div>

    )
  }




export default Signup;
