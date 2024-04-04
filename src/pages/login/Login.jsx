import { useForm } from "react-hook-form";
import auth from "../../../Firebase.init";
  import {useSignInWithEmailAndPassword,} from "react-firebase-hooks/auth"
import { Link, useNavigate } from "react-router-dom";
import Loding from "../Loding";
import toast from "react-hot-toast";

const Login = () => {
  
  const [
    signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


      
    const onSubmit = async (data)=>{
       await  signInWithEmailAndPassword(data.password , data.email);
       };
       console.log(user);


       if(user) {
        toast.success("User Loged In successfully");
     navigate("/");
    }




    return (
<div className="m-auto w-1/2 mt-10">
  <h1 className="font-semibold text-3xl text-center mb-4">Login here</h1>


    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label className="block">Password</label>
      <input
      className="input input-bordered input-info w-full max-w-xs  mb-4"  
      {...register("password", { required: true })}
      placeholder="password"
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
      
      
    
    { loading ? (<Loding/>):
           ( <input className="btn btn-primary block mt-4 w-1/2 text-xl" type="submit" />)
           }
        

        <Link to = "/sign-up" className="text-red-600 block">Not have an account? Sign Up here.</Link>
        {
          error && (<h1 className="text-red-700 text-center mt-5 text-2xl">something went wrong.....!</h1>)
          
           }
        </form>  </div>


        
    );
};

export default Login;