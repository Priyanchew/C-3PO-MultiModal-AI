import ChatWindow from '@/components/ChatWindow';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Image from 'next/image'
import logo from './c3pologo.png'
export const metadata: Metadata = {
  title: 'Chat - C-3PO',
  description: 'Chat with the internet, chat with C-3PO.',
};

const Home = () => {
  return (
    <div>
      <Suspense>
        <ChatWindow />
      </Suspense>
    </div>
  );
};

export default Home;
// <Image
//     src={logo}
//     width={100}
//     height={100}
//     alt="Picture of the logo"
// />