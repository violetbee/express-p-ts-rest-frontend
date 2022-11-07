import Link from 'next/link';
import { FC } from 'react';

const LeftSideBar: FC = () => {
  return (
    <div className='flex flex-col gap-6 w-60'>
      <Link href='/'>
        <div className='w-full shadow-sm h-28 bg-gradient-to-tr from-blue-700 via-purple-500 to-orange-700 rounded-lg p-4'>
          <div className='flex justify-end flex-col h-full '>
            <h1 className='text-2xl font-semibold '>Sosyal Üniversite</h1>
            <h3 className='text-sm font-thin text-slate-200'>
              Yaz, Öğren, Paylaş
            </h3>
          </div>
        </div>
      </Link>
      <div className='w-full p-4 text-slate-900 bg-white shadow-sm rounded-lg space-y-2'>
        <h1 className='text-xl text-slate-900/70'>Kategoriler</h1>
        <ul className='inline-flex flex-wrap gap-2'>
          <button className='px-2 py-1 bg-[#F0D4C5]  rounded-lg'>
            Üni. Yorumları
          </button>
          <button className='px-2 py-1 bg-[#F5C5D6] rounded-lg'>
            Dökümanlar
          </button>
          <button className='px-2 py-1  bg-[#DBD8F1] rounded-lg'>Notlar</button>
          <button className='px-2 py-1 bg-[#D1E2EA] rounded-lg'>
            Bölüm Paylaşımları
          </button>
        </ul>
      </div>
      <div className='w-full bg-white shadow-sm rounded-lg p-4'>
        <ul className='text-stone-700 font-thin  space-y-3'>
          <li className='flex items-center gap-2'>
            <div className=' h-2 w-2 rounded-full animate-pulse bg-blue-500' />
            Roboto
          </li>
          <li className='flex items-center gap-2'>
            <div className=' h-2 w-2 rounded-full animate-pulse bg-red-500' />
            Roboto
          </li>
          <li className='flex items-center gap-2'>
            <div className=' h-2 w-2 rounded-full animate-pulse bg-slate-500' />
            Roboto
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
