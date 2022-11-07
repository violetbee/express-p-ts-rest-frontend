import { cookies } from 'next/headers';

import { FC } from 'react';

const RightSideBar: FC = () => {
  return (
    <div className='w-60 flex flex-col gap-6'>
      <div className='p-4 w-full bg-white shadow-sm space-y-2 rounded-md'>
        <h1 className='text-xl text-slate-900/70'>Popüler Yazılar</h1>
        <ul className='divide-y text-stone-700 border-[1px] rounded-lg'>
          <li className='py-1 px-2 space-y-2'>
            <h1 className='text-lg font-semibold'>Merhaba Dünya</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              ipsum delectus labore voluptatum quis unde sint voluptate nisi,
              reprehenderit impedit!
            </p>
            <p className='text-end'>- Çağlar Karahüseyin</p>
          </li>
          <li className='py-1 px-2 space-y-2'>
            <h1 className='text-lg font-semibold'>Merhaba Dünya</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              ipsum delectus labore voluptatum quis unde sint voluptate nisi,
              reprehenderit impedit!
            </p>
            <p className='text-end'>- Çağlar Karahüseyin</p>
          </li>
          <li className='py-1 px-2 space-y-2'>
            <h1 className='text-lg font-semibold'>Merhaba Dünya</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              ipsum delectus labore voluptatum quis unde sint voluptate nisi,
              reprehenderit impedit!
            </p>
            <p className='text-end'>- Çağlar Karahüseyin</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
