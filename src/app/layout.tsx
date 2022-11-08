'use client';

import './globals.css';
import { Dosis } from '@next/font/google';
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { GET_USER } from '../utils/db';

const dosis = Dosis({ weight: '400', preload: true, subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      await GET_USER()
        .then((res) => res.json())
        .then((data) => setUser(data));
    })();
  });

  return (
    <html lang='en'>
      <head />
      <body className={`bg-[#F6F8FC]  ${dosis.className}`}>
        <div className='min-h-screen flex max-w-7xl mx-auto p-4 pt-10 gap-4'>
          {/* Left Bar */}
          <div className='w-60'>
            <LeftSideBar />
          </div>
          <div className='flex flex-col space-y-4 w-full'>
            <Header />
            <div className='flex w-full space-x-4'>
              <div className='w-full bg-white rounded-md p-6 text-stone-700'>
                {children}
              </div>
              <div className='w-60'>
                <RightSideBar />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
