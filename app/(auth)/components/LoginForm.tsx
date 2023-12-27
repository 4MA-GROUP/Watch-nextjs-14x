"use client";
import axios from "axios";
import { signIn, useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { BsGithub, BsGoogle  } from 'react-icons/bs';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import Link from "next/link";

import { toast } from "react-hot-toast";
import Button from '@/components/Button';
import Input from '@/components/inputs/Input';
import AuthSocialButton from "./AuthSocialButton";


const LoginForm = () => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

      signIn('credentials', {
        ...data,
        redirect: false
      })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Password or Email is incorrect!');
        }

        if (callback?.ok) {
          router.push('/')
        }
      })
      .finally(() => setIsLoading(false))
  }

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Password or Email is incorrect');
        }

        if (callback?.ok) {
          router.push('/')
        }
      })
      .finally();
  } 

  
  return (
    <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      
      <div
  className="
    bg-white
    px-4
    py-8
    sm:rounded-lg
    sm:px-10
    drop-shadow-md
    shadow-2xl
    shadow-blue-500/70
    hover:shadow-cyan-600/100"
    
>
          <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6" 
          >
            <Input 
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                id="email" 
                label="Email address" 
                type="email"
              />
             <Input 
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                id="password" 
                label="Password" 
                type="password"
              />
            <div>
              <Button
               disabled={isLoading} fullWidth type="submit"
                >
                  Sign in
                </Button>
            </div>
          </form>
          <div className=" mt-6">
              <div className="relative">
                <div 
                  className="
                    absolute 
                    inset-0 
                    flex 
                    items-center
                  "
                >
                  <div className="w-full border-t border-gray-500" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white rounded-md px-2 text-gray-700">
                    Or continue with
                  </span>
                </div>
              </div>
            
              <div className="mt-6 flex gap-2">
                <AuthSocialButton 
                  icon={BsGoogle} 
                  onClick={() => socialAction('google')} 
                />
              </div>
            </div>
            <div
            className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
          >
            <div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account? <Link href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</Link>
          </p>
            </div>
            </div>
      </div>
    </div>
  );
};

export default LoginForm;