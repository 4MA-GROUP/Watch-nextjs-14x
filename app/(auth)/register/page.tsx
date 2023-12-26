import RegisterForm from "../components/RegisterForm";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Register',
  description: '...',
}

const Login = () => {
    return (
        <div 
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-white
        dark:bg-gray-900
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 
          className="
            mt-6
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
            dark:text-white
          "
          >
            Create Account
        </h2>
      </div>
      <RegisterForm />
  </div>
    );
};

export default Login;