import { unstable_getServerSession } from 'next-auth/next';

export default async function Home() {
  const session = await unstable_getServerSession();
  return <div className=' h-[1500px]'>{session?.user ? 'var' : 'yok'}</div>;
}
