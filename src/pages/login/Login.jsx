import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import auth from "../../../Firebase.init";
  import {useSignInWithGoogle} from "react-firebase-hooks/auth"
import { Link } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()


      const handleGoogleSignIn=()=>{
        signInWithGoogle()
      }
    console.log(user)
      const onSubmit = (data) => console.log(data)
     





    return (
<div className="m-auto w-1/2 mt-10">
  <h1 className="font-semibold text-3xl text-center mb-4">Login here</h1>


    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label className="block">Name</label>
      <input
      className="input input-bordered input-info w-full max-w-xs  mb-4"  
      {...register("name", { required: true })}
      placeholder="name"
      />
      </div>

     <div>
     <label className="block">Email</label>
       <input
       className="input input-bordered input-info w-full max-w-xs mb-4"
       {...register("email", { required: true })}
       placeholder="email"
      />
      </div>
      {errors.Email && <span>This field is required</span>}
      
      <input className="btn btn-primary block mt-4 w-1/2 text-2xl mb-4" type="submit" />
    </form>

        <button onClick={handleGoogleSignIn} className="bg-blue-500 text-white w-1/2 mt-4 rounded p-3">
          <FaGoogle style={{fontSize:"24px", margin:"auto",}}/>
        </button>

        <Link to = "/sign-up" className="text-red-600 block">Not have an account? Sign Up here.</Link>
        </div>


        
    );
};

export default Login;