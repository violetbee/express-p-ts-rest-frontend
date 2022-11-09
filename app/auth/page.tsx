'use client';

import React, { FC, useState } from 'react';
import { signIn } from 'next-auth/react';

const Auth: FC = () => {
  const loginSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn('credentials', { redirect: false });
  };

  return (
    <div className='flex items-center justify-center '>
      <form
        className='flex flex-col items-center gap-2 w-64'
        onSubmit={loginSubmitHandler}
      >
        <div className='flex justify-between items-center w-full'>
          <label htmlFor='email'>Email</label>
          <input
            className='bg-white px-2 py-1 outline-none border-[1px] rounded-md'
            type='email'
            name='email'
            id='email'
          />
        </div>
        <div className='flex justify-between items-center w-full'>
          <label htmlFor='password'>Password</label>
          <input
            className='bg-white px-2 py-1 outline-none border-[1px] rounded-md'
            type='password'
            name='password'
            id='password'
          />
        </div>
        <button
          className='center p-2 border-[1px] hover:bg-green-500 rounded-md'
          type='submit'
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Auth;
