import './globals.css';
import { Dosis } from '@next/font/google';
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';
import Header from '../components/Header';

const raleway = Dosis({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className={`bg-[#F6F8FC]  ${raleway.className}`}>
        <div className='min-h-screen flex max-w-7xl mx-auto p-4 pt-10 gap-4'>
          {/* Left Bar */}
          <div className='w-60'>
            <LeftSideBar />
          </div>
          <div className='flex flex-col space-y-4 w-full'>
            <Header />
            <div className='flex w-full space-x-4'>
              <div className='w-full'>{children}</div>
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
