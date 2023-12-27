'use client';

import { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  register,
  required,
  errors,
  type = 'text',
  disabled,
}, ) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2 relative">
        <input 
          id={id}
          type={showPassword ? 'text' : type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(`
          form-input
          block 
          w-full 
          rounded-md 
          border-0 
          py-1.5 
          text-gray-900 
          shadow-sm 
          ring-1 
          ring-inset 
          ring-gray-300 
          placeholder:text-gray-400 
          focus:ring-2 
          focus:ring-inset 
          focus:ring-sky-600 
          hover:shadow-inner
          sm:text-sm 
          sm:leading-6`,
          errors[id] && 'focus:ring-rose-500',
          disabled && 'opacity-50 cursor-default'
          )}
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;