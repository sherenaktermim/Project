import { useCreateUserWithEmailAndPassword, useUpdateProfile, } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../Firebase.init";
import toast from "react-hot-toast";
import { Link,useNavigate,} from "react-router-dom";
import Loding from "../Loding";

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating,] = useUpdateProfile(auth);
      const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName: data.name});
       };
       console.log(user);

        if(user) {
          toast.success("User created successfully");
       navigate("/");
      }
   



    return (
      <div className="m-auto w-1/2 mt-10">
      <h1 className="font-semibold text-3xl text-center mb-4">Sign Up here</h1>
    
    
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block">Name</label>
           <input
           className="input input-bordered input-info w-full max-w-xs mb-4"
           {...register("name", { required: true })}
           placeholder="name"
          />
        </div>

          <div>
          <label className="block">Password</label>
          <input 
          className="input input-bordered input-info w-full max-w-xs mb-4"  
          {...register("password")} 
          placeholder="password"
          /> 
          </div>
          {errors.password && (<span className="text-red-600">Password is required</span>)}


         <div>
          <label className="block">Email</label>
           <input
           className="input input-bordered input-info w-full max-w-xs mb-4"
           {...register("email", { required: true })}
           placeholder="email"
          />
          </div>

          {errors.email && (<span className="text-red-600">Email is required</span>)}

          { loading || updating ? (<Loding/>):
           ( <input className="btn btn-primary block mt-4 w-1/2 text-xl" type="submit" />)
           }
    
        
 <Link to = "/login" className="text-red-600">Already have an account? Login here.</Link>

        {
          error && (<h1 className="text-red-700 text-center mt-5 text-2xl">something went wrong.....!</h1>)
          
           }

        </form>
            </div>
    );
};

export default SignUp;