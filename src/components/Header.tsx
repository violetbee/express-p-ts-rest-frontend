import Link from 'next/link';
import { FC } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const Header: FC = () => {
  return (
    <header className='w-full flex items-center justify-between'>
      <label htmlFor='searchBar' className='relative w-96'>
        <input
          type='text'
          className='p-2 pl-4 pr-10 outline-none rounded-2xl w-full bg-white shadow-sm text-stone-700'
          id='searchBar'
        />

        <BiSearchAlt className='text-2xl absolute top-1/2 transform -translate-y-1/2 right-2 h-full text-slate-900/70' />
      </label>
      <button className='p-2 bg-[#B21EED] rounded-lg w-52'>
        Gönderi Paylaş
      </button>
      <div className='flex justify-evenly  bg-[#383F68] rounded-lg w-40'>
        <Link href='/auth' className='p-2 w-full text-center'>
          Üye Ol
        </Link>
        <div className='w-[1px] h-10 bg-white' />
        <button className='p-2 w-full'>Giriş Yap</button>
      </div>
    </header>
  );
};

export default Header;
