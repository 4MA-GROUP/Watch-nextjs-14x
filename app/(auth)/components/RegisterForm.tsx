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


const RegisterForm = () => {

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
    if (data.password.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      setIsLoading(false);
      return;
    }
    if (data.name.length < 4) {
      toast.error('Name must be at least 4 characters long.');
      setIsLoading(false);
      return;
    }
    axios.post('/api/register', data).then(() => {
      toast.success('Registration successful!');
      router.push('/login');
    })
    .catch((error) => {
      if (error.response?.data?.error.includes('Email or name is already registered.')) {
        toast.error('Email or name is already registered.');
      } else {
        toast.error('Something went wrong!');
      }
    })
      .finally(() => setIsLoading(false));
  }
  
  return (
    <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
      className="
      bg-white
        px-4
        py-8
        shadow
        sm:rounded-lg
        sm:px-10"
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
                  id="name" 
                  label="Name"
                />
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
                  {isLoading ? "Loading..." : "Sign up"}
                </Button>
            </div>
          </form>
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
            Already have an account?{' '}<Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
          </p>
            </div>
            </div>
      </div>
    </div>
  );
};

export default RegisterForm;