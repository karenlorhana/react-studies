// import { render } from '@testing-library/react';
// import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import profile from '../images/profile-picture.png'
import { useForm } from "react-hook-form";


const Login = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const history = useHistory()
  const onSubmit = data => {
    history.push('/User')
  }
  


    // const [title, setTitle] = useState('');
    return (

      <div className="container">
          <title>Entrar</title>
        <img
          className="profile-picture"  
          src={profile}
          alt=""
        ></img>
        <main className="container-login">

          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Entrar</h2>
            <div className="input-field">

              <input type="email"  
              name="email" 
              id="email" 
              placeholder="Insira seu e-mail"
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
              {...register("name", { required: true })} />
              {errors.name && errors.name.type === "required" && <span>O campo acima é necessário!</span>}
      
              <div className="underline"></div>
              

            </div>
            <div className="input-field">

              <input 
              type="password" 
              name="password" 
              id="password" placeholder="Insira sua senha"  
              
              {...register("password", { required: true })}/>
              <br />
              {errors.password && errors.password.type === "required" && <span >O campo acima é necessário!</span>}
      
              <div className="underline"></div>

            </div>
            <div className="submit-login">

              <button type="submit" className="submit-login" >Entrar</button>
              <div className="underline"></div>
            </div>
            
          </form>

        </main></div>

    )
  }




export default Login;
